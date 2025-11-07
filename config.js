const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "XHYPHER:~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY01vNlY3NCtkbjlhVWFHcDdKVlFlVFFWbU9qZmgxR3ZoVDExWlhnUmsyTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNHFOVVJMVGl6eURtck9jTWlGak9mejJIb0hyVERCbWU4djFSTmlpa0Z6cz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RXp0R1Q5Rm4yTTN3RVVLZzVQTDZBL0hqMUZjanNtbjJIWWVvSWt6R0g4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJLNWhGY0VYTElKL0hkWCtlODl5YWRXci9wazFvVFU5dUIrazYwejgrZEdnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFEUWlyWHY1bjgrZVRidndzbzVsQXlrck1La3NZeElhQk1Nd05KY0xHRlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB3bzkyaEdmWG5nVHZwZ1NCanVsZUFIMXp2Q003MlBJNllKOXJHV3crQmM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUg2NHpuV21MdWRYM1RzQy9NSzJmcHNCaFJ1eHFCR3NUZm90Z29Qc0JsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnVjcXBHY1dLT2psMTRCYTVvWXJYWlBnd3oxRHcreExTQllqdzAwUTVrND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IloxWkVNVEtScGw2YWFYYlUvVFBlbkJsQ3g2aXpnWDJHendESWdpWHAwQ1REMXhDSEo0QnVzcWk3Q2ZCN2xHald3ZFkrblhFZGJBb1FMQm5wUzlqcUJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU0LCJhZHZTZWNyZXRLZXkiOiJZYVRPZXV4cXB4TExIMFdQV2ErK05HdTVlaktyVEt0WDhLMXptOC8zbU9zPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJWMUhSa2RBMVFnLU9tYVB5Y2ppYzJnIiwicGhvbmVJZCI6ImUxYjZlNTE2LTFjZGItNGIwZC05ZjkxLTE0NTUwOWI5M2FhZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJudG1RWDFYWlB4RkgrbnRPN05QaW1taXdMaGc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzdyZ3hwZE9XRDZCTW42NHNQUUdvUmo0VmNBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ik1STUFMVklOIiwibWUiOnsiaWQiOiIyNjM3MTAyNzY5MjY6MjRAcy53aGF0c2FwcC5uZXQiLCJsaWQiOiIxOTU1Mjg5OTAxNTA3NTM6MjRAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNPWFhsdkFFRUttN3VNZ0dHQVFnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJDM2Yxc3hMKzMvWUNHSDdORmxrNVFSQTNsTFM0Q2EzU3lLb2NydXJUTVg4PSIsImFjY291bnRTaWduYXR1cmUiOiJSQWtpWi91a3BRZjdJOGRjaTloN2RZd1NLalJQaHpiYUVVWk16U0piWjkvOStuUFlHdGxMVU5CRDRnYW04VU1rVmNRTGY1dzQxMjdCTjd3SVdQV1JBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoicHp5OXpycDRmc2FIUDc5TEdzZ3VrOGRiVDdqK1BmV01pc2xMdGRhdmRvcXFFSXBPSkpJSGJ0Z2tJcEZTcDA2UFpqNzlhN2RlMVhuUUhqTUhCNElRQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNjM3MTAyNzY5MjY6MjRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUXQzOWJNUy90LzJBaGgrelJaWk9VRVFONVMwdUFtdDBzaXFISzdxMHpGLyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FVSUVnPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzYyNTMyNzkxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUY3bCJ9",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY KHAN-MD 🤍*",
// set the auto reply massage on status reply  
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "KHAN-MD",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "KHAN-MD",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "92342758XXXX",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "Jᴀᴡᴀᴅ TᴇᴄʜX",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ Jᴀᴡᴀᴅ TᴇᴄʜX*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/149k8x.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar *KHAN-MD*⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
AUTO_VOICE: process.env.AUTO_VOICE || "false",
// make true for send automatic voices
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923146190772",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "log", 
// change it to 'same' if you want to resend deleted message in same chat 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
