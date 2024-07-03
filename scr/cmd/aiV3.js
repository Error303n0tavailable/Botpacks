const axios = require("axios");

module.exports = {
  config: {
    name: "gemini",
    description: "Generate content based on a prompt",
    usage: "[prompt]",
    cooldown: 5,
    accessableby: 0, // Everyone can use this command
    category: "Fun", // Example category
    prefix: true, // Command needs a prefix
  },

  start: async function ({ api, event, text, reply }) {
    let prompt = text.join(" ");

    if (!prompt) {
      return reply("Please provide a prompt.");
    }

    reply("Generating content...");

    try {
      const apiUrl = `https://samirxpikachu.onrender.com/gemini?text=${encodeURIComponent(prompt)}&uid=${event.senderID}`;
      const response = await axios.get(apiUrl);

      const content = response.data.candidates[0].content.parts[0].text;

      return reply(content);
    } catch (error) {
      console.error("Error generating content:", error.message);
      return reply("An error occurred while processing your request.");
    }
  },
};
