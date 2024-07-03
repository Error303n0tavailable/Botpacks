const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "pinterest",
    description: "Searches Pinterest for images and sends them as attachments",
    usage: "!pinterest <query> [count]",
    cooldown: 5,
    accessableby: 0, // Everyone can use this command
    category: "Image", // Add your desired category if applicable
    prefix: true, // Command needs a prefix
  },

  start: async function ({ api, event, text, reply }) {
    let query = text[0];
    let count = parseInt(text[1]) || 1; // Default to 1 if count is not specified or invalid

    if (!query) {
      return reply(
        `Please provide a query. Usage: ${api.prefix}pinterest <query> [count]`,
      );
    }

    if (count < 1 || count > 10) {
      // Limit count to a reasonable number, e.g., up to 10 images
      return reply("Please provide a count between 1 and 10.");
    }

    try {
      const apiUrl = `https://hiroshi-rest-api.replit.app/search/pinterest?search=${encodeURIComponent(query)}`;
      const response = await axios.get(apiUrl);

      if (
        !response.data ||
        !Array.isArray(response.data.data) ||
        response.data.data.length === 0
      ) {
        console.log("Pinterest API response:", response.data);
        return reply("No results found for your query.");
      }

      const images = response.data.data.slice(0, count); // Slice the array to get only the first 'count' images

      if (!images || images.length === 0) {
        return reply("No images found for your query.");
      }

      // Create directory if not exists
      const cacheDir = path.join(__dirname, "cache", "pinterest");
      if (!fs.existsSync(cacheDir)) {
        fs.mkdirSync(cacheDir, { recursive: true });
      }

      const imagePaths = [];

      // Process each image
      for (let i = 0; i < images.length; i++) {
        const imageUrl = images[i];
        const imageFileName = `image_${Date.now()}_${i}.jpg`; // Unique file name for each image
        const filePath = path.join(cacheDir, imageFileName); // Save in 'scr/cmd/cache/pinterest' folder

        // Download the image
        const imageResponse = await axios({
          method: "get",
          url: imageUrl,
          responseType: "stream",
        });

        // Save the image to file
        imageResponse.data.pipe(fs.createWriteStream(filePath));

        // Push the file path to the array
        imagePaths.push(filePath);
      }

      // Wait for all images to finish downloading
      await Promise.all(
        imagePaths.map(
          (path) =>
            new Promise((resolve, reject) => {
              const checkInterval = setInterval(() => {
                if (fs.existsSync(path)) {
                  clearInterval(checkInterval);
                  resolve();
                }
              }, 1000); // Check every second
            }),
        ),
      );

      // Send all images as attachments
      const message = {
        body: `Pinterest Images for "${query}"`,
        attachment: imagePaths.map((file) => fs.createReadStream(file)),
      };

      await api.sendMessage(message, event.threadID);

      // Delete all downloaded files after they have been sent
      imagePaths.forEach((filePath) => {
        try {
          fs.unlinkSync(filePath);
        } catch (error) {
          console.error("Error deleting file:", error);
        }
      });
    } catch (error) {
      console.error("Error searching Pinterest:", error);
      reply("An error occurred while processing your request.");
    }
  },
};
