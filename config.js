const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER || "18038675382"  // Make SURE its Not Be Empty, Else Bot Stoped And Errors,
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://salmanytofficial:s4salmanyt@cluster0.6wtgil3.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'xheikhsalman4422@gmail.com'
global.github = 'https://github.com/salmanytofficial/XLICON-MD'
global.location = 'Lahore Pak'
global.gurl = 'https://instagram.com/itz_shaikho/' // add your username
global.sudo = process.env.SUDO || '18038675382' 
global.devs = '18038675382';
global.website = 'https://github.com/salmanytofficial/XLICON-MD' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/3c341828d86ee7a89c73f.jpg'
module.exports = {
  sessionName:  process.env.SESSION_ID ||  "XLICON-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkVIcDQ2ZSs5bXg3UDcwOWFXdU9PZmVjb25ZbTZId1EzWFgzUWM3TndWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid3JSVW9RQVN0ZXZHZWZwMTlQZUlkV0FrOGVkejA1cEpxOFJNZFF6NWdTZz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTTFCaWo4UXF3bVlLQ3BKVHI2RWFneUYxRzQ3bmVTc1BVMUJQQmdYMFdJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQaUhadXhWbmR0QlhCdy9PNWxPVU5yUFFhMWYvTmxOazQ2SWthbWwzMmdjPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNDNnJtWmM4MXIzdDNyOCt3RmQ3Z0JIekt1T2d3UWttOVp2WSswWW9JMU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlF5dGNCZEZxdnZhTStTRmxKaVBqWVZPQmJTVVl0RmtIWE9yaUpROGR5Qlk9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPNnFtL0wzQ2k3cklJdmxQdE5TVU9aRXFrV29wNmRYOFpZeXZsNnBmd0Nrb0paeXNOSDNZNFdMQmVPc2JNb2Zia2JmUi9QbEVUcDd1YU1sNkdrbFJDUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjEyNywiYWR2U2VjcmV0S2V5IjoiZjd1c2Q2V0hmYTJNL21TZ3hTdTJVUWdqaE1ld0kyTWQrK2M3YmxmQ2dQMD0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiMlRTUm1IOE1UbUMxUFlMTDFuZm1MUSIsInBob25lSWQiOiJiZmM0YzJiNC00MTBlLTRlOTYtYTZhMi0yNTU3NTkxZGRhNDgiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMERCMjRreVZyaW83Qk9wempLS2wrZnoxRk1jPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxaUNWNHJMOG44bWFPNTkzZEt0Q2U3VWJqOHM9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNPdkgrZElERU9pSWhxc0dHQUU9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Iis2QTQzYlJ1aExjYlArNm9EN1A2cVhkNjNxclgzaFVnUVFpR0htRHFaRDg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlZMcFV2cWN5R0poSTlwYWpkNHUvYnBwMHdPcXJ1NXk4cnJOMTRyT0tjaTZGblkzbU5QaUUrdzl6MHllUHJIRFBTcDdRaVdwVUJTdUt4aDk4aHQxQkRRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJXR09XUFllZVFJZkx2b3Y3aFF4dnpmN3psdGZSY2F4RkU2T3ljMk5GOFMxY1M1Y0hwdVBMUThJMmh1V3NYdGNKS2V0Mnd0U0g1aVhpeFNRQnZWOFpEdz09In0sIm1lIjp7ImlkIjoiMTgwMzg2NzUzODI6MUBzLndoYXRzYXBwLm5ldCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIxODAzODY3NTM4MjoxQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmZ1Z09OMjBib1MzR3ovdXFBK3orcWwzZXQ2cTE5NFZJRUVJaGg1ZzZtUS8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MDA4ODk3MDl9",  //PUT Session Id Here, 
  author:  process.env.PACK_AUTHER ||  'DARK CHATHUN',
  packname:  process.env.PACK_NAME || 'CHATHUN',
   
  botname:   process.env.BOT_NAME === undefined ? "DARK CHATHUN" : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'DARKCHATHUN' : process.env.OWNER_NAME,  
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? true : process.env.AUTO_READ_STATUS,
  autoreaction:  process.env.AUTO_REACTION  === undefined ? true : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? 'HI I AM CHATHUN' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'GOJO',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
