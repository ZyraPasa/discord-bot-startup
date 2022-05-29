import { Client, Message } from "discord.js";
import { Command } from "../lib/command/Command";

// command değişkeni export olmak zorunda. ismini değiştiremezsiniz

export const command = new Command("help", "/help"); // komutların genel bilgilendirmeleri

command.name = "help"; // komut ismini buradan ayarlayabilirsiniz
command.useage = "/help";
// komut kullanımını buradan ayarlayabilirsiniz // IPUCU: // komut yanlış kullanılırsa useage geriye dönecek

command.options = { onlyArgs: true, maxArgs: 3 };
// onylArgs = true olursa bu komut argüman kullanımına zorunlu tutar
// maxArgs var ise maximum argüman sayısını zorunlu tutar

export const process = async (client: Client, message: Message, args: string[]) => {
  console.log("help");
  message.channel.send("yardım");
  return;
}; // Bu kısım komut kullanıldığında olacak olaylar
