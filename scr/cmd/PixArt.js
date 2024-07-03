const axios = require("axios");
const fs = require("fs");

module.exports = {
    config: {
        name: "pixart",
        description: "Send an animated image based on your prompt",
        usage: "[prompt]",
        cooldown: 5,
        accessableby: 0, // Everyone can use this command
        category: "", // Add your desired category if applicable
        prefix: false, // Command doesn't need a prefix
    },

    start: async function ({ api, event, text, reply }) {
        let prompt = text.join(" ");
        if (!prompt) return reply("Missing prompt!");

        reply("Processing request...");

        try {
            // Construct the API URL with the prompt
            const apiUrl = `https://samirxpikachu.onrender.com/pixart/sigma?prompt=${encodeURIComponent(prompt)}`;

            // Fetch animated image from the API
            const response = await axios.get(apiUrl, {
                responseType: "arraybuffer",
            });

            // Save the animated image to a file
            const pathh = __dirname + "/cache/PixArt.png"; // Assuming it's a PNG based on the API endpoint
            fs.writeFileSync(pathh, Buffer.from(response.data, "binary"));

            // Prepare the animated image to send back
            const animation = fs.createReadStream(pathh);

            console.log("Downloaded");

            // Send message with the generated animated image
            return api.sendMessage(
                { body: "Here's the animated results", attachment: animation },
                event.threadID,
                event.messageID,
            );
        } catch (error) {
            console.error("Error generating animated image:", error.message);
            return reply("An error occurred while processing your request.");
        }
    },
};
