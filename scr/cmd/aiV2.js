const axios = require("axios");

module.exports = {
    config: {
        name: "palm",
        description: "Generate a palm reading based on your text",
        usage: "[text]",
        cooldown: 5,
        accessableby: 0, // Everyone can use this command
        category: "Fun", // Example category
        prefix: true, // Command needs a prefix
    },

    start: async function ({ api, event, text, reply }) {
        let inputText = text.join(" ");

        if (!inputText) {
            return reply("Please provide some text for the palm reading.");
        }

        reply("Generating palm reading...");

        try {
            const apiUrl = `https://samirxpikachu.onrender.com/api/palm?text=${encodeURIComponent(inputText)}`;
            const response = await axios.get(apiUrl);

            const palmReading = response.data.output;

            return reply(`Palm reading: ${palmReading}`);
        } catch (error) {
            console.error("Error generating palm reading:", error.message);
            return reply("An error occurred while processing your request.");
        }
    },
};
