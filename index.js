import TelegramBot from "node-telegram-bot-api";
import 'dotenv/config';

const token = process.env.TOKEN;

const bot = new TelegramBot(token, {polling: true});

bot.on('text', async (msg) =>{
    try {
        if(msg.from.username === 'pipisabot' && msg.from.is_bot && !msg.text.includes('Следующая попытка завтра!')){
            await bot.deleteMessage(msg.chat.id, msg.from.id);
        }
    } catch (error) {
        console.log(error);
        console.log(msg)
    }
});
