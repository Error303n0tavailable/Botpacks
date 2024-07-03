const axios = require("axios");
const fs = require("fs");
const ytdl = require("ytdl-core");
const yts = require("yt-search");

module.exports = {
    config: {
        name: "audio",
        description: "Play an audio track",
        usage: "audio <title>",
        cooldown: 5,
        accessableby: 0, // Everyone can use this command
        category: "Music", // Add your desired category if applicable
        prefix: true, // Command needs a prefix
    },

    start: async function ({ api, event, text, reply }) {
        const audioName = text.join(" ");

        if (!audioName) {
            api.sendMessage(
                `To get started, type "${api.prefix}audio <title>" to play an audio track.`,
                event.threadID,
                event.messageID,
            );
            return;
        }

        try {
            api.sendMessage(
                `Searching for "${audioName}"...`,
                event.threadID,
                event.messageID,
            );

            const searchResults = await yts(audioName);

            if (!searchResults.videos.length) {
                return api.sendMessage(
                    "Can't find the audio track you searched for.",
                    event.threadID,
                    event.messageID,
                );
            }

            const audio = searchResults.videos[0];
            const audioUrl = audio.url;

            const stream = ytdl(audioUrl, {
                filter: "audioonly",
                quality: "highestaudio",
            });

            const time = new Date();
            const timestamp = time.toISOString().replace(/[:.]/g, "-");
            const filePath = `scr/cmd/cache/music.mp3`;

            stream.pipe(fs.createWriteStream(filePath));
            stream.on("response", () => {});
            stream.on("info", (info, format) => {});
            stream.on("end", async () => {
                if (fs.statSync(filePath).size > 26214400) {
                    fs.unlinkSync(filePath);
                    return api.sendMessage(
                        "The audio could not be sent because it is larger than 25MB.",
                        event.threadID,
                    );
                }

                const message = {
                    body: `${audio.title}`,
                    attachment: fs.createReadStream(filePath),
                    mentions: [
                        {
                            tag: audio.author.name,
                            id: audio.author.ref,
                            from: 1,
                        },
                    ],
                };

                try {
                    await api.sendMessage(message, event.threadID);
                    fs.unlinkSync(filePath);
                } catch (error) {
                    console.error("Error sending message:", error);
                    api.sendMessage(
                        "An error occurred while sending the audio track.",
                        event.threadID,
                    );
                }
            });
        } catch (error) {
            console.error("Error searching audio:", error);
            api.sendMessage(
                "An error occurred while processing your request.",
                event.threadID,
            );
        }
    },
};
