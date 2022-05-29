import { Client, Message } from "discord.js";
import { Command } from "../lib/command/Command";

// command değişkeni export olmak zorunda. ismini değiştiremezsiniz

export const command = new Command("test", "/test"); // komutların genel bilgilendirmeleri

command.name = "test"; // komut ismini buradan ayarlayabilirsiniz
command.useage = "/test";
// komut kullanımını buradan ayarlayabilirsiniz // IPUCU: // komut yanlış kullanılırsa useage geriye dönecek

export const process = async (client: Client, message: Message, args: string[]) => {
  message.channel.send("test");
  return;
}; // Bu kısım komut kullanıldığında olacak olaylar
