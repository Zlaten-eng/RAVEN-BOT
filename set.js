/* if you're using pannel carefully edit this part

There's no need to configure this if you're deploying via Heroku — just set them in the environment variables.*/

const sessionName = 'session';
const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01QSEdIMzR5Vm1sU3NMc1VWQzdWWEZvRk9qRkoxdGRDVjZHTThUSjZGYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRXk4d3h6ajNGU2Y1NFRmQzlnSkZNOUtaVlJPSDAxVUozSW50amdsci9CTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQ1RWY2VtZk9iTXByOGFYRmJQWnYxU096djRwOHdURUVQK1BFYnRqSW5RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRa3NQejFPYkhIVzk1UHFyb0FocmZWWXllNVQ5QW1GUWRNczlGYUE2bVdjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVEWHNQK1ppc3J0VkRrcitFS0Q1QWV1elFxdTFjN2ZIUnFKVStoL21xbkk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB3bk1PcjFZUVNNNm1zWkp3eVpRWitWNVpCVk1QSzlKZW45R3R5d0lTMms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0hRTmc0VlFNWG96ZlIrUzRZYjlRbDFsNkZnNlZrZWZtaGtyL21lNFYzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaktndldaV2txNTdIUkdaS0Zaa0xXeER1RWdadnJabDlaSzB5MGpzU01TOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZ4aWR0eE1JMmp4Y2NnTjQ2K2NqL2JsbVgrcERqZS9IdzRPeW9pcHFoa0ZxWHUzUWVWaWErYXdjbFROdnhFMTFaT2ViUEFrZmJjNVJOOE9NR2lsZ2lnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzgsImFkdlNlY3JldEtleSI6IlRIajNjTHc3MW90d2xzTmpka1lvQllMY205NWIxcTJ3MFBuWDNIWldBVms9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0NzY5Njc3MzA1QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6Ijk1MzdCQTc0QTIyQUJBQTRDQjBCQTk1Nzc5RTIyQzc2In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDc3MjI2NDh9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDc2OTY3NzMwNUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwNENEMUNGRUQ2OUY2RTM4NEIxNEIzNzEyQUUwMEJBRiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ3NzIyNjUxfV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiI4RUc1RDRWSyIsIm1lIjp7ImlkIjoiMjU0NzY5Njc3MzA1OjQyQHMud2hhdHNhcHAubmV0IiwibGlkIjoiMzMxMjM0MDg1OTMwNzc6NDJAbGlkIiwibmFtZSI6IuS4juafkOS6uuaIluafkOS6i+eahO+8ieiBlOezuyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjdXenRBSEVJSERzTUVHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiN0hOODVHcnNPZmkxK3VvbzM3WkJlWmZUU1JqRVp1aC9KaFVwWlJhclEzUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoid0dBUGJjcTd5UGFOSDlYYU4vTnl1TGxnOW1kNnlIT1VZVzRkS0VvaW9pR05TNUZQY2lOY0VPSTZlOUZ3b0k0b3ZiYkhMdUs0MXBUTnk0UEcxcGJQRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Im5hbEVhRzd0WDdwUzJ0ck94ckdyOER3WTVyYzhGYzhReFFsVisvaGVlK1V5SXhIWG5wTHExaDFQR0t2VjBEMUdUVW90Q0J0T2JtYzVVTktYR0t6dmd3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0NzY5Njc3MzA1OjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmV4emZPUnE3RG40dGZycUtOKzJRWG1YMDBrWXhHYm9meVlWS1dVV3EwTjAifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNCSUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NzcyMjYzOCwibGFzdFByb3BIYXNoIjoiUFdrNUIiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdsNSJ9';
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
const dev = process.env.DEV || '254769677305';
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
