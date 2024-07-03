const axios = require("axios");
const fs = require("fs");
const ytdl = require("ytdl-core");
const yts = require("yt-search");

module.exports = {
  config: {
    name: "video",
    description: "Play a music video",
    usage: "video <title>",
    cooldown: 5,
    accessableby: 0, // Everyone can use this command
    category: "Music", // Add your desired category if applicable
    prefix: true, // Command needs a prefix
  },

  start: async function ({ api, event, text, reply }) {
    const videoName = text.join(" ");

    if (!videoName) {
      api.sendMessage(
        `To get started, type "${api.prefix}video <title>" to play a music video.`,
        event.threadID,
        event.messageID,
      );
      return;a
    }

    try {
      api.sendMessage(
        `Searching for "${videoName}"...`,
        event.threadID,
        event.messageID,
      );

      const searchResults = await yts(videoName);

      if (!searchResults.videos.length) {
        return api.sendMessage(
          "Can't find the video you searched for.",
          event.threadID,
          event.messageID,
        );
      }

      const video = searchResults.videos[0];
      const videoUrl = video.url;

      const stream = ytdl(videoUrl, {
        filter: "audioandvideo",
      });

      const time = new Date();
      const timestamp = time.toISOString().replace(/[:.]/g, "-");
      const filePath = `scr/cmd/cache/video.mp4`;

      stream.pipe(fs.createWriteStream(filePath));
      stream.on("response", () => {});
      stream.on("info", (info) => {});
      stream.on("end", async () => {
        if (fs.statSync(filePath).size > 26214400) {
          fs.unlinkSync(filePath);
          return api.sendMessage(
            "The video could not be sent because it is larger than 25MB.",
            event.threadID,
          );
        }

        const message = {
          body: `${video.title}`,
          attachment: fs.createReadStream(filePath),
        };

        try {
          await api.sendMessage(message, event.threadID);
          fs.unlinkSync(filePath);
        } catch (error) {
          console.error("Error sending message:", error);
          api.sendMessage(
            "An error occurred while sending the video.",
            event.threadID,
          );
        }
      });
    } catch (error) {
      console.error("Error searching video:", error);
      api.sendMessage(
        "An error occurred while processing your request.",
        event.threadID,
      );
    }
  },
};
