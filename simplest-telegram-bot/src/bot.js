const { Telegraf } = require('telegraf');
const config = require('../cfg/config.json');

const bot = new Telegraf(config.token);

bot.launch();

bot.on('text', function (ctx, next) {
    ctx.telegram.sendMessage(ctx.message.chat.id, "Hi!");
});
