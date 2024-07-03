const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports = {
  config: {
    name: "fetchvideo",
    description: "Fetches a video from a specific API endpoint and sends it",
    usage: "!fetchvideo",
    cooldown: 5,
    accessableby: 0, // Everyone can use this command
    category: "Utility", // Add your desired category if applicable
    prefix: true, // Command needs a prefix
  },

  start: async function ({ api, event, reply }) {
    try {
      const apiUrl = "https://shoti-srv1.onrender.com/api/v1/get";
      const apiKey = "$shoti-1i1sdrl3k4ieuq0np2"; // Replace with your actual API key

      // Make a POST request to fetch video data
      const { data } = await axios.post(apiUrl, {
        apikey: apiKey,
      });

      // Log the video data received from the API (optional)
      console.log("API Response:", data);

      // Ensure the response contains a valid video URL
      if (!data || !data.data || !data.data.url) {
        return reply("No valid video URL found in the API response.");
      }

      // Extract the video URL
      const videoUrl = data.data.url;

      // Download the video
      const videoFileName = `video_${Date.now()}.mp4`; // Unique file name for each video
      const filePath = path.join(__dirname, "cache", videoFileName); // Save in 'scr/cmd/cache' folder

      const videoResponse = await axios({
        method: "get",
        url: videoUrl,
        responseType: "stream",
      });

      // Save the video to file
      const videoStream = fs.createWriteStream(filePath);
      videoResponse.data.pipe(videoStream);

      // Wait for the video to finish downloading
      await new Promise((resolve, reject) => {
        videoStream.on("finish", resolve);
        videoStream.on("error", reject);
      });

      // Send the video as an attachment
      const message = {
        body: "Here is the video you requested:",
        attachment: fs.createReadStream(filePath),
      };

      await api.sendMessage(message, event.threadID);

      // Delete the downloaded video file after it's successfully sent
      fs.unlinkSync(filePath);

      // Reply to the user indicating success
      reply("Jajabol Ka nanaman ha!");
    } catch (error) {
      console.error("Error fetching video:", error);
      reply("An error occurred while fetching or sending the video.");
    }
  },
};
