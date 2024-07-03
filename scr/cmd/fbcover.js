const axios = require("axios");
const fs = require("fs");

module.exports = {
    config: {
        name: "fbcover",
        description:
            "Generate a Facebook cover image with user-provided details",
        usage: "[name] [subname] [color]",
        cooldown: 5,
        accessableby: 0, // Everyone can use this command
        category: "", // Add your desired category if applicable
        prefix: true, // Command needs a prefix
    },

    start: async function ({ api, event, text, reply }) {
        // Split the input text into name, subname, and color
        const [name, subname, color] = text.join(" ").split(" ");

        if (!name || !subname || !color) {
            return reply(
                "Please provide all required inputs: !fbcover [name] [subname] [color]",
            );
        }

        // Generate a random number between 1 and 882 for the ID
        const id = Math.floor(Math.random() * 882) + 1;

        reply("Processing request...");

        try {
            // Construct the API URL with the user-provided details and generated ID
            const apiUrl = `https://hiroshi-rest-api.replit.app/canvas/fbcoverv1?name=${encodeURIComponent(name)}&id=${id}&subname=${encodeURIComponent(subname)}&color=${encodeURIComponent(color)}`;

            // Fetch the generated image from the API
            const response = await axios.get(apiUrl, {
                responseType: "arraybuffer",
            });

            // Save the generated image to a file
            const pathh = __dirname + "/cache/fbcover.png";
            fs.writeFileSync(pathh, Buffer.from(response.data, "binary"));

            // Prepare the image to send back
            const image = fs.createReadStream(pathh);

            console.log("Downloaded");

            // Send message with the generated image
            return api.sendMessage(
                { body: "Here's your Facebook cover image", attachment: image },
                event.threadID,
                event.messageID,
            );
        } catch (error) {
            console.error(
                "Error generating Facebook cover image:",
                error.message,
            );
            return reply("An error occurred while processing your request.");
        }
    },
};
