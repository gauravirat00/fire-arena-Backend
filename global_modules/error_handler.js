// var Discord = require("discord.js");
//unhandledRejection
process.on('unhandledRejection', async(reason, promise) => {
  console.error( "[ANTI-CRASH] An error has occured and been successfully handled: [unhandledRejection]".bold.red)
console.log(reason, promise)
  await codeDB.set("_last_error*", `${reason}`);
  var err = new Discord.EmbedBuilder().setColor("#f20000").setTitle("Error Handler 🚨").setDescription(`\`\`\`js\n${require('util').inspect(reason).replace(/\/home\/runner\/o/g, "rk_host")}\`\`\``).setTimestamp().setFooter({text: "[unhandledRejection]" + rkID});
report_wh([err])
});

process.on("uncaughtException", async(err, origin) => {
  console.error(`[ANTI-CRASH] An error has occured and been successfully handled: [uncaughtException]`.bold.red)
console.log(err, origin)
  await codeDB.set("_last_error*", `${err}`);
  var ero = new Discord.EmbedBuilder().setColor("#f20000").setTitle("Error Handler 🚨").setDescription(`\`\`\`js\n${require('util').inspect(err).replace(/\/home\/runner\/o/g, "rk_host")}\`\`\``).setTimestamp().setFooter({text: "[uncaughtException]" + rkID});
report_wh([ero])
});

process.on('uncaughtExceptionMonitor', async(err, origin) => {
  console.error("[ANTI-CRASH] An error has occured and been successfully handled: [uncaughtExceptionMonitor]".bold.red);
   console.log(err, origin)
  await codeDB.set("_last_error*", `${err}`);
  var er = new Discord.EmbedBuilder().setColor("#f20000").setTitle("Error Handler 🚨").setDescription(`\`\`\`js\n${require('util').inspect(err).replace(/\/home\/runner\/o/g, "rk_host")}\`\`\``).setTimestamp().setFooter({text: "[uncaughtExceptionMonitor]" + rkID});
report_wh([er])
 });