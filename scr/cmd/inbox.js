const axios = require("axios");

module.exports = {
  config: {
    name: "inbox",
    description: "Check inbox for a specific email address.",
    usage: "!inbox (email)",
    cooldown: 5,
    accessableby: 0, // 0 is for everyone
    category: "Utility",
    prefix: true,
  },

  start: async function ({ api, text, react, event, reply }) {
    try {
      const email = text[0];
      if (!email) {
        react("❌");
        return reply("Please provide a valid email address to check inbox.");
      }

      const inboxData = await checkInbox(email);
      react("📥");

      if (inboxData.length === 0) {
        return reply(`Inbox for ${email} is empty.`);
      } else {
        let formattedMessages = inboxData
          .map((message) => {
            return `From: ${message.from}\nSubject: ${message.subject}\nBody: ${message.body}\nDate: ${message.date}`;
          })
          .join("\n\n");
        return reply(`Inbox for ${email}:\n\n${formattedMessages}`);
      }
    } catch (error) {
      console.error(`Error checking inbox: ${error.message}`);
      react("❌");
      return reply(`Failed to check inbox. Please try again later.`);
    }
  },

  auto: async function ({ api, event, text, reply }) {
    // Auto reply function (not used in this specific command)
  },
};

async function checkInbox(email) {
  try {
    const response = await axios.get(
      `https://samirxpikachu.onrender.com/tempmail/inbox/${email}`,
    );
    if (response.status === 200) {
      return response.data;
    } else {
      throw new Error(`Failed to fetch inbox. Status code: ${response.status}`);
    }
  } catch (error) {
    throw new Error(`Failed to fetch inbox: ${error.message}`);
  }
}
