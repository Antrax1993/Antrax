const { WhatsApp } = require('whatsapp-web.js');

/**
 * Plugin para obtener ID de canales
 * @param {WhatsApp} client
 */
module.exports = (client) => {
  client.on('message', (message) => {
    if (message.body.startsWith('.idcanal')) {
      const chatId = message.from;
      client.getChatById(chatId).then((chat) => {
        if (chat.isGroup) {
          const groupId = (link unavailable);
          message.reply(`ID del canal: ${groupId}`);
        } else {
          message.reply('Este no es un canal');
        }
      });
    }
  });
};

handler.command = ['idcanal]
export default handler;
