const axios = require("axios");

module.exports = {
  config: {
    name: "ai",
    description: "Ask a question to the AI",
    usage: "ai [question]",
    cooldown: 8,
    accessableby: 0, // Everyone can use this command
    category: "AI", // Add your desired category if applicable
    prefix: true, // Command needs a prefix
  },
  start: async function ({ api, text, react, event, reply }) {
    const question = text.join(" ");

    if (!question) {
      return reply("Please provide a question.");
    }

    react("🔍"); // React to indicate searching

    try {
      const apiUrl = `https://samirxpikachu.onrender.com/gpt?content=${encodeURIComponent(question)}`;

      const response = await axios.get(apiUrl);
      const data = response.data;
      const message =
        data.message.content || "Sorry, I couldn't understand the question.";

      return reply(message);
    } catch (error) {
      console.error("Error fetching AI response:", error.message);
      return reply("Sorry, an error occurred while processing your request.");
    }
  },
};
