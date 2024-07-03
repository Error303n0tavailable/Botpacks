module.exports.start = async function ({ api, event, text, reply }) {
  let t = text.join(" ");
  if (!t) return reply("Missing prompt!");
  reply("Processing request...");

  const axios = require("axios");
  const fs = require("fs");

  try {
    // Construct the API URL with the prompt
    const apiUrl = `https://samirxpikachu.onrender.com/imagine?prompt=${encodeURIComponent(t)}`;

    // Fetch image from the API
    const response = await axios.get(apiUrl, {
      responseType: "arraybuffer",
    });

    // Save the image to a file
    const pathh = __dirname + "/cache/generated-image.png";
    fs.writeFileSync(pathh, Buffer.from(response.data, "binary"));

    // Prepare the image to send back
    const image = fs.createReadStream(pathh);

    console.log("Downloaded");

    // Send message with the generated image
    return api.sendMessage(
      { body: "Here's the results", attachment: image },
      event.threadID,
      event.messageID,
    );
  } catch (e) {
    return reply(e.message);
  }
};

module.exports.config = {
  name: "gen",
  prefix: false,
  accessableby: 0,
  description: "Generate image",
  usage: "[text]",
};
