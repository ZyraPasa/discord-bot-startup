import "dotenv/config";
import { Client, Message } from "discord.js";
import { readdirSync } from "fs";
import { ICommand } from "../lib/command/CommandInterface";
import { AllowedMentionsTypes } from "discord-api-types/v10";

const commands = new Map<
  string,
  { command: ICommand; process: (client: Client, message: Message, args: string[]) => void }
>();
const commandList: string[] = readdirSync("./build/commands");

commandList.forEach(async (command) => {
  await import(`../commands/${command}`).then((cmd: any) => {
    commands.set(cmd.command.name, cmd);
  });
});

export const event = (client: Client) => {
  client.on("messageCreate", (message: Message) => {
    message.content.trim();
    if (!message.content) return;
    if (message.content[0] === "/") {
      createCommand(client, message);
    }
    // custom system
    //
  });
};

const createCommand = async (client: Client, message: Message) => {
  const fullMessage: string[] = message.content.split(" ");
  let commandName: string = fullMessage[0].split("/")[1];
  fullMessage.splice(0, 1);
  const args: string[] = fullMessage;
  const cmd = commands.get(commandName);
  if (!cmd) return message.channel.send("Böyle bir komut bulunamadı! Yardım almak için /yardım yazabilirsin.");
  if (cmd.command.options?.onlyArgs && !args.length)
    return message.channel.send(`Doğru kullanım: ${cmd.command.useage}`);
  if (cmd.command.options?.maxArgs && cmd.command.options?.maxArgs < args.length)
    return message.channel.send(`Komutu yanlış kullandınız. Doğru kullanım: ${cmd.command.useage}`);
  cmd.process(client, message, args);
};
