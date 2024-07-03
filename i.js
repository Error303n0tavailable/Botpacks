const _0x44464b = _0xc758;
(function (_0x39c426, _0x29b54d) {
  const _0x177f7e = _0xc758,
    _0x442443 = _0x39c426();
  while (!![]) {
    try {
      const _0x2c405d =
        -parseInt(_0x177f7e(0x15a)) / 0x1 +
        (parseInt(_0x177f7e(0x145)) / 0x2) *
          (parseInt(_0x177f7e(0x13a)) / 0x3) +
        (parseInt(_0x177f7e(0x140)) / 0x4) *
          (parseInt(_0x177f7e(0x188)) / 0x5) +
        -parseInt(_0x177f7e(0x13b)) / 0x6 +
        (-parseInt(_0x177f7e(0x16f)) / 0x7) *
          (-parseInt(_0x177f7e(0x170)) / 0x8) +
        (parseInt(_0x177f7e(0x16e)) / 0x9) *
          (parseInt(_0x177f7e(0x141)) / 0xa) +
        parseInt(_0x177f7e(0x17f)) / 0xb;
      if (_0x2c405d === _0x29b54d) break;
      else _0x442443["push"](_0x442443["shift"]());
    } catch (_0x3dd261) {
      _0x442443["push"](_0x442443["shift"]());
    }
  }
})(_0x1217, 0xae28b);
const X = require(_0x44464b(0x17e)),
  { warn, logger } = require(_0x44464b(0x154)),
  { get, post } = require(_0x44464b(0x14b)),
  fs = require("fs"),
  { join } = require("path");
function _0x1217() {
  const _0x12568a = [
    "——[BOT\x20LOGS]——\x0a\x0aBot\x20has\x20been\x20kick\x20to\x20a\x20group.\x0a\x0aName:\x20",
    "sendMessage",
    "3197037NwBqTi",
    "5319468TNTsiW",
    "split",
    "utf8",
    "EventEmitter",
    "Prefix:\x20",
    "112DRdwje",
    "914490NvfUmc",
    "\x20members\x20left.",
    "name",
    "message",
    "2rQRwmX",
    "endsWith",
    "👋\x20Hello\x20",
    "auto",
    "getThreadInfo",
    "deku",
    "axios",
    "getUserInfo",
    "setOptions",
    "\x0a\x0a——[BOT\x20LOGS]——",
    "\x0a\x0aAdded\x20by:\x20",
    "logMessageType",
    "\x20connected\x20successfully!\x0aType\x20\x22",
    "th\x20member\x20on\x20this\x20group.\x20Enjoy!🤗",
    "length",
    "./utils/logger",
    "\x20•\x20[\x20",
    "Command\x20",
    "\x0a\x0aKicked\x20by:\x20",
    "logMessageData",
    "readFileSync",
    "1413608DNFhKE",
    "\x20🤗,\x20you\x27re\x20the\x20",
    "senderID",
    "accessableby",
    "unhandledRejection",
    "\x20has\x20been\x20",
    "messageID",
    ".js",
    "scr",
    "includes",
    "start",
    "log:subscribe",
    "Command\x20Error:\x20File\x20Extension\x20Error",
    "Can\x27t\x20install\x20command:\x20",
    "cmd",
    "shareContact",
    "botCookie.json",
    "threadID",
    "\x0aReason:\x20",
    "You\x20don\x27t\x20have\x20permission\x20to\x20use\x20command\x20",
    "9JpKpmQ",
    "903vJvPRe",
    "12976mRtmMU",
    "shift",
    "setMaxListeners",
    "error",
    "left\x20the\x20group.",
    "help\x20to\x20view\x20available\x20commands.",
    "aADMINBOT",
    "help\x22\x20to\x20view\x20all\x20command",
    "getCurrentUserID",
    "This\x20bot\x20was\x20made\x20by\x20Deku",
    "\x20doesn\x27t\x20need\x20a\x20prefix.",
    "BOTNAME",
    "some",
    "\x0a\x0aID:\x20",
    "./fca/index",
    "10292953xlhAks",
    "config",
    "config.json",
    "userFbId",
    "parse",
    "\x20need\x20a\x20prefix.",
    "\x20\x0aWelcome\x20to\x20",
    "readdirSync",
    "toLowerCase",
    "127045DPEedz",
    "changeNickname",
    "prefix",
    "package.json",
    "PREFIX",
    "kicked\x20by\x20the\x20Admin\x20of\x20group.",
    "leftParticipantFbId",
    "Type\x20",
    "author",
    "./utils/index",
    "child_process",
    "body",
    "\x0a\x0a[\x20f\x20]:\x20https://facebook.com/",
    "addedParticipants",
    "defaultMaxListeners",
  ];
  _0x1217 = function () {
    return _0x12568a;
  };
  return _0x1217();
}
require(_0x44464b(0x132));
const appState = JSON["parse"](
    fs["readFileSync"](_0x44464b(0x16a), _0x44464b(0x13d)),
  ),
  { exec } = require(_0x44464b(0x133));
let packagePath = join(__dirname, _0x44464b(0x12c)),
  package = JSON[_0x44464b(0x183)](fs[_0x44464b(0x159)](packagePath, "utf8"));
const config = JSON[_0x44464b(0x183)](
    fs[_0x44464b(0x159)](_0x44464b(0x181), _0x44464b(0x13d)),
  ),
  { PREFIX, ADMINBOT, BOTNAME } = config;
let p = PREFIX;
global[_0x44464b(0x14a)] = new Object({
  PREFIX: PREFIX,
  BOTNAME: BOTNAME,
  ADMINBOT: ADMINBOT,
});
let commandPath = join(__dirname, _0x44464b(0x162), _0x44464b(0x168));
function _0xc758(_0x26375a, _0x74d6de) {
  const _0x12178e = _0x1217();
  return (
    (_0xc758 = function (_0xc758b7, _0x4a143d) {
      _0xc758b7 = _0xc758b7 - 0x12c;
      let _0x359453 = _0x12178e[_0xc758b7];
      return _0x359453;
    }),
    _0xc758(_0x26375a, _0x74d6de)
  );
}
for (let files of fs[_0x44464b(0x186)](commandPath)) {
  if (files["endsWith"](".js")) {
    let script;
    try {
      if (!files[_0x44464b(0x146)](".js")) return warn(_0x44464b(0x166));
      (script = require(join(commandPath, files))),
        logger(
          "Successfully\x20installed\x20command:\x20" +
            script[_0x44464b(0x180)]?.[_0x44464b(0x143)],
        );
    } catch (_0x4b0cd9) {
      warn(_0x44464b(0x167) + files + _0x44464b(0x16c) + _0x4b0cd9);
    }
  }
}
process["on"](_0x44464b(0x15e), (_0x5f3ca7) =>
  console[_0x44464b(0x173)](_0x5f3ca7),
),
  process[_0x44464b(0x172)](0x0),
  (require("events")[_0x44464b(0x13e)][_0x44464b(0x137)] = 0x0),
  X({ appState: appState }, async function (_0xd2adfc, _0x4b23a5) {
    const _0x1e6849 = _0x44464b;
    logger(_0x1e6849(0x179)),
      logger("Contact:\x20https://facebook.com/joshg101");
    if (_0xd2adfc) return warn(_0xd2adfc);
    _0x4b23a5[_0x1e6849(0x14d)](config["option"]),
      _0x4b23a5["listenMqtt"](async function (_0x20649e, _0x5bc87d) {
        const _0x432fe8 = _0x1e6849;
        if (_0x20649e) warn(_0x20649e);
        if (_0x5bc87d["body"] != null)
          for (let _0x17a2d4 of fs["readdirSync"](commandPath)) {
            if (_0x17a2d4[_0x432fe8(0x146)](_0x432fe8(0x161))) {
              const _0x137b72 = join(commandPath, _0x17a2d4),
                _0x1147b6 = require(_0x137b72);
              let _0x4e653b = _0x1147b6["config"];
              function _0x1d6659(_0x3f39aa) {
                const _0xb0536c = _0x432fe8;
                _0x4b23a5[_0xb0536c(0x139)](
                  _0x3f39aa,
                  _0x5bc87d[_0xb0536c(0x16b)],
                  _0x5bc87d[_0xb0536c(0x160)],
                );
              }
              function _0x1f15e8(_0x3b7677) {
                const _0x5210e7 = _0x432fe8;
                _0x4b23a5["setMessageReaction"](
                  _0x3b7677,
                  _0x5bc87d[_0x5210e7(0x160)],
                  (_0x2956c6) => {},
                  !![],
                );
              }
              function _0x22ff5d(_0x5bdcc8) {
                const _0x541d8c = _0x432fe8;
                return _0x1d6659(_0x541d8c(0x16d) + _0x5bdcc8 + "!");
              }
              function _0x4cda55(_0x5a6da6) {
                const _0x28ed60 = _0x432fe8;
                _0x1d6659(_0x28ed60(0x156) + _0x5a6da6 + _0x28ed60(0x17a));
              }
              function _0x2b1239(_0x18f2c5) {
                const _0xf310fe = _0x432fe8;
                _0x1d6659(_0xf310fe(0x156) + _0x18f2c5 + _0xf310fe(0x184));
              }
              let _0x4b68ff = _0x5bc87d[_0x432fe8(0x134)],
                _0x5a764e = _0x4b68ff["split"]("\x20");
              _0x5a764e[_0x432fe8(0x171)]();
              let _0x469278 =
                  _0x5bc87d[_0x432fe8(0x134)][_0x432fe8(0x13c)]("\x20"),
                _0x5a8aa8 = _0x469278["shift"]()[_0x432fe8(0x187)](),
                _0x2db84d = {
                  api: _0x4b23a5,
                  event: _0x5bc87d,
                  react: _0x1f15e8,
                  reply: _0x1d6659,
                  text: _0x5a764e,
                };
              _0x1147b6[_0x432fe8(0x148)] &&
                _0x1147b6[_0x432fe8(0x148)](_0x2db84d);
              if (_0x5a8aa8 == "prefix") return _0x1d6659(_0x432fe8(0x13f) + p);
              if (_0x5a8aa8 == p)
                return _0x1d6659(_0x432fe8(0x130) + p + _0x432fe8(0x175));
              if (
                _0x5a8aa8 == p + _0x4e653b?.[_0x432fe8(0x143)] &&
                _0x4e653b?.[_0x432fe8(0x18a)] == ![]
              )
                return _0x4cda55(_0x4e653b[_0x432fe8(0x143)]);
              if (
                _0x5a8aa8 == _0x4e653b?.[_0x432fe8(0x143)] &&
                _0x4e653b?.["prefix"] == !![]
              )
                return _0x2b1239(_0x4e653b?.[_0x432fe8(0x143)]);
              if (
                _0x5a8aa8 == p + _0x4e653b?.[_0x432fe8(0x143)] ||
                _0x5a8aa8 == _0x4e653b?.[_0x432fe8(0x143)]
              ) {
                if (
                  _0x4e653b?.[_0x432fe8(0x15d)] == 0x1 &&
                  !ADMINBOT[_0x432fe8(0x163)](_0x5bc87d[_0x432fe8(0x15c)])
                )
                  return _0x22ff5d(_0x4e653b?.[_0x432fe8(0x143)]);
              }
              (_0x5a8aa8 == p + _0x4e653b?.[_0x432fe8(0x143)] ||
                _0x5a8aa8 == _0x4e653b?.[_0x432fe8(0x143)]) &&
                _0x1147b6[_0x432fe8(0x164)](_0x2db84d);
            }
          }
        if (_0x5bc87d[_0x432fe8(0x150)] == _0x432fe8(0x165)) {
          const { threadID: _0x5387c3 } = _0x5bc87d;
          let {
            threadName: _0x103b4d,
            participantIDs: _0x2d3de3,
            imageSrc: _0x587623,
          } = await _0x4b23a5[_0x432fe8(0x149)](_0x5387c3);
          if (
            _0x5bc87d["logMessageData"][_0x432fe8(0x136)][_0x432fe8(0x17c)](
              (_0x445b4a) =>
                _0x445b4a[_0x432fe8(0x182)] == _0x4b23a5[_0x432fe8(0x178)](),
            )
          ) {
            const _0x50586e = (
              await _0x4b23a5[_0x432fe8(0x14c)](_0x5bc87d[_0x432fe8(0x131)])
            )[_0x432fe8(0x143)];
            return (
              _0x4b23a5[_0x432fe8(0x189)](
                global[_0x432fe8(0x14a)][_0x432fe8(0x17b)] +
                  _0x432fe8(0x155) +
                  global[_0x432fe8(0x14a)][_0x432fe8(0x12d)] +
                  "\x20]",
                _0x5bc87d[_0x432fe8(0x16b)],
                _0x4b23a5[_0x432fe8(0x178)](),
              ),
              _0x4b23a5[_0x432fe8(0x169)](
                global[_0x432fe8(0x14a)][_0x432fe8(0x17b)] +
                  _0x432fe8(0x151) +
                  global[_0x432fe8(0x14a)][_0x432fe8(0x12d)] +
                  _0x432fe8(0x177),
                _0x4b23a5[_0x432fe8(0x178)](),
                _0x5387c3,
              ),
              _0x4b23a5[_0x432fe8(0x139)](
                "——[BOT\x20LOGS]——\x0a\x0aBot\x20has\x20been\x20added\x20to\x20a\x20group.\x0a\x0aName:\x20" +
                  (_0x103b4d || "Unnamed\x20Group") +
                  _0x432fe8(0x17d) +
                  _0x5bc87d[_0x432fe8(0x16b)] +
                  "\x0a\x0aTotal\x20of\x20members:\x20" +
                  _0x2d3de3[_0x432fe8(0x153)] +
                  _0x432fe8(0x14f) +
                  _0x50586e +
                  "\x0a\x0a[\x20f\x20]:\x20https://facebook.com/" +
                  _0x5bc87d["author"] +
                  _0x432fe8(0x14e),
                global[_0x432fe8(0x14a)]["ADMINBOT"][0x0],
              )
            );
          } else
            try {
              let _0x57552d = _0x5bc87d[_0x432fe8(0x158)][_0x432fe8(0x136)];
              for (let _0x3fb2c8 of _0x57552d) {
                let _0x2cadbb = _0x3fb2c8[_0x432fe8(0x182)];
                const _0x305512 = (
                  await _0x4b23a5[_0x432fe8(0x14c)](parseInt(_0x2cadbb))
                )[_0x432fe8(0x143)];
                _0x2cadbb !== _0x4b23a5[_0x432fe8(0x178)]() &&
                  _0x4b23a5[_0x432fe8(0x169)](
                    _0x432fe8(0x147) +
                      _0x305512 +
                      _0x432fe8(0x185) +
                      (_0x103b4d || "this\x20group") +
                      _0x432fe8(0x15b) +
                      _0x2d3de3["length"] +
                      _0x432fe8(0x152),
                    _0x2cadbb,
                    _0x5387c3,
                  );
              }
            } catch (_0x51cf13) {
              return reply(_0x51cf13[_0x432fe8(0x144)]);
            }
        }
        if (_0x5bc87d[_0x432fe8(0x150)] == "log:unsubscribe") {
          let { threadName: _0x521bb6, participantIDs: _0x1f06f8 } =
              await _0x4b23a5[_0x432fe8(0x149)](_0x5bc87d[_0x432fe8(0x16b)]),
            _0x4fca9a = _0x521bb6 || "Unnamed\x20Group";
          if (
            _0x5bc87d[_0x432fe8(0x158)][_0x432fe8(0x12f)] ==
            _0x4b23a5["getCurrentUserID"]()
          ) {
            const _0x1ceb91 = (
              await _0x4b23a5[_0x432fe8(0x14c)](_0x5bc87d[_0x432fe8(0x131)])
            )[_0x432fe8(0x143)];
            return _0x4b23a5["sendMessage"](
              _0x432fe8(0x138) +
                _0x4fca9a +
                "\x0a\x0aID:\x20" +
                _0x5bc87d[_0x432fe8(0x16b)] +
                _0x432fe8(0x157) +
                _0x1ceb91 +
                _0x432fe8(0x135) +
                _0x5bc87d[_0x432fe8(0x131)] +
                "\x0a\x0a——[BOT\x20LOGS]——",
              global["deku"][_0x432fe8(0x176)][0x0],
            );
          } else {
            const _0x55d12c =
                _0x5bc87d["author"] ==
                _0x5bc87d[_0x432fe8(0x158)][_0x432fe8(0x12f)]
                  ? _0x432fe8(0x174)
                  : _0x432fe8(0x12e),
              _0x7a3909 = (
                await _0x4b23a5[_0x432fe8(0x14c)](
                  _0x5bc87d[_0x432fe8(0x158)][_0x432fe8(0x12f)],
                )
              )[_0x432fe8(0x143)];
            return _0x4b23a5["shareContact"](
              _0x7a3909 +
                _0x432fe8(0x15f) +
                _0x55d12c +
                "\x0a" +
                _0x4fca9a +
                "\x20now\x20has\x20have\x20" +
                _0x1f06f8["length"] +
                _0x432fe8(0x142),
              _0x5bc87d[_0x432fe8(0x158)]["leftParticipantFbId"],
              _0x5bc87d[_0x432fe8(0x16b)],
            );
          }
        }
      });
  }); // end 

/* 
THIS BOT WAS MADE BY DEKU
CONTACT ME ON FACEBOOK: https://facebook.com/joshg101
*/
