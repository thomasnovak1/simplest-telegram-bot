const { Telegraf } = require('telegraf');
const config = require('../cfg/config.json');

const bot = new Telegraf(config.token); // init

bot.launch(); // launch

bot.command('cat', async (ctx, next) => { // /cat cmd
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search'); // you dont need to use api key btw
        const data = await response.json();
        const imgUrl = data[0].url;
        ctx.replyWithPhoto(imgUrl);
    } catch (error) {
        ctx.telegram.sendMessage(ctx.chat.id, 'Someth went wrong!');
    }
});
