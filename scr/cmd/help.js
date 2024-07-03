module.exports = {
  config: {
    name: "help",
    accessableby: 0,
    usage: "[page]",
    prefix: true,
  },
  start: async function ({ text, reply }) {
    const fs = require("fs");
    const path = process.cwd() + "/scr/cmd";
    const files = fs.readdirSync(path);
    const commands = [];

    let page = text[0] || 1;

    if (text[0]) {
      if (page < 1) return reply("Invalid page number.");
    }

    for (let file of files) {
      if (file.endsWith(".js")) {
        let script = require(path + "/" + file).config;
        commands.push(script);
      }
    }

    const totalPages = Math.ceil(commands.length / 10);

    if (page > totalPages) return reply("Invalid page number.");

    const startIndex = (page - 1) * 10;
    const endIndex = page * 10;

    let output = "·★━━━[COMMAND LIST]━━━★·\n\n";

    const commandList = commands.slice(startIndex, endIndex);

    commandList.forEach((command, index) => {
      output += `☆━━━━━━━━━━━━━━━☆\n${startIndex + index + 1}. ${command.name}\nPrefix: ${command.prefix ? "Yes" : "No"}\nDescription: ${command.description || "No description"}\nUsage: ${command.usage || command.name}\n\n`;
    });

    output += `Page ${page} of ${totalPages}\n`;
    output += `\nOwner👑:https://www.facebook.com/profile.php?id=100082320968347`;
    output += `\n—————-ｷﾘﾄﾘｾﾝ—————-`;

    return reply({ body: output });
  },
};
