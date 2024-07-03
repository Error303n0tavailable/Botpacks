module.exports.config = {
  name: "st",
  accessableby: 0,
  author: "Deku",
  description: "get sticker id",
  usage: "[reply]",
  prefix: true
}

module.exports.start = async function ({ api, event, text }) {
  if (event.type == "message_reply") {
    if (event.messageReply.attachments[0].type == "sticker") {
      return api.sendMessage({
        body: `ID: ${event.messageReply.attachments[0].ID}\nCaption: ${event.messageReply.attachments[0].description}`
      }, event.threadID)
    }
    else return api.sendMessage("Just reply to the sticker.", event.threadID);
  }
  else if (text[0]) {
    return api.sendMessage({ sticker: text[0] }, event.threadID);
  }
  else return api.sendMessage("Just reply to the sticker.", event.threadID);
}