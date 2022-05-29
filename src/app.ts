import { Client, Collection, Intents } from "discord.js";
import { readdirSync } from "fs";

const client: Client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_VOICE_STATES],
});

const events: string[] = readdirSync("./build/events");

client.on("ready", () => {
  client.user?.setPresence({ status: "dnd", activities: [{ name: "Licores ♥", type: "PLAYING" }] });
  events.forEach(async (event: string) => {
    await import(`./events/${event}`).then((e: any) => {
      e.event(client);
    });
  });
});

client.login("BOT TOKEN");
