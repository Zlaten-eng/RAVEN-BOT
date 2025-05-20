/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0dCT29wRWRjeWJnaEVQZjZKRy9EQjhKSjE3emlhamZFU1dzc3JCaWJHZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN0tkZXMrWjRFc1VuR1Vvd2g0cHdXd2xUYkFuRXVsb2JCMmh2YUR0Sm1sQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtQy91OG5taDhBM1pBa2crbWNlZUFuWDQ0NFRpazFnQXkyUlhXRjhaU2xnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpRkZIUnN5S2NqWUtYdmRvQXk5UXd5MjRxMDR4NENkK0orSms4ZStSNERFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlFaThyQW1mUWNRL0Q1MTI4MlVTSUhMVDhENTBUeHlaN3JUTjFPWlNBV0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1wKzFldVd1WHFhdEttM1UrOU5ONytpMDZsd3prL24vU21BNHFiOUtDMkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkRFV2x6ZXFDekkzNmgrWEo1aDNoU1ZyVXlhODFaMnk0ZEdlUDdQY1ltZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK2RTZUZPeVFWODJEeWdyaWJnemtpeXZuVUw5ZkNTZUN4OEpNV0ptWk9VRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikl2a1cxb3NtVlAxVkRIZnV3TmdwamdkNXJQK1VkSTZicUNnQzA3bDRUTE8rRVZsK2x4NVhLWlMzWEw5MjVYSXVyZWNvNDMrQ05JdExud1laU0FRcURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA1LCJhZHZTZWNyZXRLZXkiOiJocTUzZGtpRWdIVWxBTG9USDFSQ0lwZFlidlhQNjVjT01GSnJTQ2kzTlljPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI1NDcxODI0NzIwM0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI4QjRCOUQzMTdDMDI2RTU2OUIwQ0EyRDQyMjBFMzVGRCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ3NzMwMDkwfSx7ImtleSI6eyJyZW1vdGVKaWQiOiIyNTQ3MTgyNDcyMDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNjcxNDQyMDhBQ0EyQTkzOEFFN0VBMUM2REEwQTZFQTIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NzczMDA5NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOnRydWUsInBhaXJpbmdDb2RlIjoiV0xLRzc2QjYiLCJtZSI6eyJpZCI6IjI1NDcxODI0NzIwMzo5QHMud2hhdHNhcHAubmV0IiwibmFtZSI6IvCdmbDwnZqb8J2anfCdmpHwnZqe8J2am+KBjiIsImxpZCI6IjE3MTQzODM4NDQwNjYxMjo5QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSVB6dU5BQkVQejhzTUVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiRHUwcjB2MmFlaENDMVVLRHFER05KT0VtM1BxMlBjaDZFWktTVThzRGpYZz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiM3RuN0lvQnI2NGxleWJqUzNuSVd0U3EwQ25tcVJXbmViR3NvYnpLT2MxODhyNlhYUXpCZ29lRE9pUDB5OVRLZG0ySkpVNXNwMVUxVTYwMFdrUjUzRGc9PSIsImRldmljZVNpZ25hdHVyZSI6IldqOXd0SUdJcmJTQ05KeWpCV3JrazFqVWp0cUUrR3l6aUxST1NxeXkwM3IvbS9DcFZjTW8wMmtObERaSklYdjUzVnlCQll2c0NDVU1kUnhxWGxpTEN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzE4MjQ3MjAzOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUTd0SzlMOW1ub1FndFZDZzZneGpTVGhKdHo2dGozSWVoR1NrbFBMQTQxNCJ9fV0sInBsYXRmb3JtIjoic21iYSIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ3NzMwMDU5LCJsYXN0UHJvcEhhc2giOiIzUjlaMzkiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUZDWCJ9';
const autobio = process.env.AUTOBIO || 'TRUE';
const autolike = process.env.AUTOLIKE_STATUS || 'FALSE';
const autoviewstatus = process.env.AUTOVIEW_STATUS || 'TRUE';
const welcomegoodbye = process.env.WELCOMEGOODBYE || 'FALSE';
const prefix = process.env.PREFIX || '.';
const appname = process.env.APP_NAME || '';
const herokuapi = process.env.HEROKU_API;
const gptdm = process.env.GPT_INBOX || 'FALSE';
const mode = process.env.MODE || 'PRIVATE';
const anticall = process.env.AUTOREJECT_CALL || 'FALSE';
const botname = process.env.BOTNAME || '𝗥𝗔𝗩𝗘𝗡-𝗕𝗢𝗧';
const antibot = process.env.ANTIBOT || 'FALSE';
const author = process.env.STICKER_AUTHOR ||'𝗕𝗢𝗧';
const packname = process.env.STICKER_PACKNAME || '𝗥𝗔𝗩𝗘𝗡';
const antitag = process.env.ANTITAG || 'TRUE';
const dev = process.env.DEV || '254718247203';
const owner = dev.split(",");
const menulink = process.env.MENU_LINK || 'https://files.catbox.moe/duv8ac.jpg';
const menu = process.env.MENU_TYPE || 'VIDEO';
const badwordkick = process.env.BAD_WORD_KICK || 'FALSE';
const bad = process.env.BAD_WORD || 'fuck';
const autoread = process.env.AUTOREAD || 'FALSE';
const antidel = process.env.ANTIDELETE || 'TRUE';
const admin = process.env.ADMIN_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗿𝗲𝘀𝗲𝗿𝘃𝗲𝗱 𝗳𝗼𝗿 𝗔𝗱𝗺𝗶𝗻𝘀!';
const group = process.env.GROUP_ONLY_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝗚𝗿𝗼𝘂𝗽𝘀!';
const botAdmin = process.env.BOT_ADMIN_MSG || '𝗜 𝗻𝗲𝗲𝗱 𝗔𝗱𝗺𝗶𝗻 𝗽𝗿𝗲𝘃𝗶𝗹𝗲𝗱𝗴𝗲𝘀!';
const NotOwner = process.env.NOT_OWNER_MSG || '𝗖𝗼𝗺𝗺𝗮𝗻𝗱 𝗺𝗲𝗮𝗻𝘁 𝗳𝗼𝗿 𝘁𝗵𝗲 𝗼𝘄𝗻𝗲𝗿!';
const wapresence = process.env.WA_PRESENCE || 'online';
const antilink = process.env.ANTILINK || 'TRUE';
const mycode = process.env.CODE || '254';
const antiforeign = process.env.ANTIFOREIGN || 'FALSE';
const port = process.env.PORT || 8080;
const antilinkall = process.env.ANTILINK_ALL || 'TRUE';

module.exports = { session, sessionName, autobio, author, packname, dev, owner, badwordkick, bad, mode, group, NotOwner, botname, botAdmin, antiforeign, menu, menulink, autoread, antilink, admin, mycode, antilinkall, anticall, antitag, antidel, wapresence, welcomegoodbye, antibot, herokuapi, prefix, port, gptdm, appname, autolike, autoviewstatus };  
