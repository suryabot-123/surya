const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');

const Language = require('../language');
const Lang = Language.getString('wallpaper');

Asena.addCommand({pattern: 'git', fromMe: false, desc: "Gives github link of the bot"}, (async (message, match) => {

    var skl = await axios.get("https://www.mcgilltribune.com/wp-content/uploads/2020/02/hacker.png", { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(skl.data), MessageType.image, {mimetype: Mimetype.png, caption: ` ⭕ *MY CREATOR IS SURYA❤‍🔥*

⭕ *CONTACT 📡 :https://wa.link/1cuosr*

⭕ *GITHUB LINK :https://github.com/suryabot-123/surya*
`}) 

}));





