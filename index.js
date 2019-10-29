#!/usr/bin/env node
const Discord = require("discord.js");
const yargs = require("yargs");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const Client = new Discord.Client();
Client.login(process.env.TOKEN);

const NO_COLOR = "\033[0m";
const DARK_GRAY = "\033[1;30m";
const RED = "\033[0;31m";
const GREEN = "\033[0;32m";

const options = yargs
  .usage("Usage: -c <channel id>")
  .option("c", {
    alias: "channel",
    describe: "ID of the channel to which you want to send the embed",
    type: "string",
    demandOption: true
  })
  .option("f", {
    alias: "embedfile",
    describe: "JSON file with embed code, that you want to send",
    type: "string",
    demandOption: true
  }).argv;

Client.on("ready", async () => {
  const channel = Client.channels.find(ch => ch.id === options.c);

  if (!channel) {
    console.log(
      RED +
        "[ERROR]" +
        "\n" +
        DARK_GRAY +
        `Can't get access to channel with id "${options.c}"!` +
        "\n" +
        "Check that your bot/user has access to this channel" +
        NO_COLOR
    );
    process.exit(1);
  }

  const filename = path.join(__dirname, options.f);
  try {
    var embed = JSON.parse(fs.readFileSync(filename));
  } catch (err) {
    console.error(
      RED +
        "[ERROR]" +
        DARK_GRAY +
        `Can't read file "${options.f}"!\nCheck that the file exists, or permissions, or that the JSON in file is correct.` +
        NO_COLOR
    );
    process.exit(1);
  }
  var message = ""; // type is String, value is "".

  if (Object.keys(embed).includes("embed")) {
    message = embed.content;
    embed = embed.embed;
  }

  try {
    await channel.send(message, { embed });
  } catch (err) {
    console.log(
      RED +
        "[ERROR]" +
        "\n" +
        DARK_GRAY +
        `Can't send the message to channel with id "${options.c}"!` +
        "\n" +
        "Check that your bot/user has access to this channel" +
        NO_COLOR
    );
    process.exit(1);
  }

  console.log(
    GREEN + `Successfully sent message in channel ${channel.name}` + NO_COLOR
  );

  process.exit(0);
});
