const Asena = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');

if (Config.WORKTYPE == 'private') {
    
Asena.addCommand({pattern: 'aliv', fromMe: true,dontAddCommandList: true}, (async (message, match) => {


await message.sendMessage(r_text[i]);

 }));
}

else if (Config.WORKTYPE == 'public') {
    
Asena.addCommand({pattern: 'aliv', fromMe: false,dontAddCommandList: true}, (async (message, match) => {

    

await message.sendMessage(r_text[i]);

 }));
}
