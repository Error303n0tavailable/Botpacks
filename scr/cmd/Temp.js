const axios = require("axios");

module.exports = {
  config: {
    name: "tempemail",
    description: "Generate a random temporary email.",
    usage: "!tempemail",
    cooldown: 5,
    accessableby: 0, // 0 is for everyone
    category: "Utility",
    prefix: true,
  },

  start: async function ({ api, text, react, event, reply }) {
    try {
      const email = await getTempEmail();
      react("📧");
      return reply(`Generated Temporary Email: ${email}`);
    } catch (error) {
      console.error(`Error generating temporary email: ${error.message}`);
      react("❌");
      return reply(
        `Failed to generate temporary email. Please try again later.`,
      );
    }
  },

  auto: async function ({ api, event, text, reply }) {
    // Auto reply function (not used in this specific command)
  },
};

async function getTempEmail() {
  try {
    const response = await axios.get(
      "https://samirxpikachu.onrender.com/tempmail/get",
    );
    if (response.status === 200) {
      return response.data.email;
    } else {
      throw new Error(
        `Failed to fetch temporary email. Status code: ${response.status}`,
      );
    }
  } catch (error) {
    throw new Error(`Failed to fetch temporary email: ${error.message}`);
  }
}
