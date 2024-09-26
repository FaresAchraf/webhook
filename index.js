const axios = require('axios'); 

// Replace with your Page Access Token and the recipient's PSID
const PAGE_ACCESS_TOKEN = 'EAAPU64ObztsBO3o5TekiaEsV9Vhvpm1C5c3h0Lab6ZCucTJF1viQ5ZCS7vLAsMsN0RCQzChnwj4CDwDWTYF95XC9rsCWpgjHbv3BbIZBYuebFSuARELAse00aQ0ZAr2ZBIcuZBS9ZBH8kmQbQ5ritltNkqxHeKF6ZCx6qSXTlRQxchLQE7MG8ZCG11hQWhXpDldB0ZCLo0LRLEAkb44GfChVoYLemY';
const RECIPIENT_PSID = 'https://www.facebook.com/messages/e2ee/t/25860219496926611'; // Page-scoped User ID

async function sendMessage(recipientId, messageText) {
  console.log('Sending message to PSID:', recipientId); // Debugging recipient PSID
  console.log('Using Page Access Token:', PAGE_ACCESS_TOKEN); // Debugging Page Access Token
  
  try {
    const response = await axios({
      url: `https://graph.facebook.com/v12.0/me/conversations/messages?access_token=${PAGE_ACCESS_TOKEN}`,
      params: {
        access_token: PAGE_ACCESS_TOKEN // Corrected
      },
      data: {
        recipient: {
          id: recipientId
        },
        message: {
          text: messageText
        }
      }
    });
    console.log('Message sent:', response.data);
  } catch (error) {
    console.error('Unable to send message:', error.response ? error.response.data : error.message);
  }
}

// Call the function with the recipient's PSID and the message you want to send
sendMessage(RECIPIENT_PSID, 'Hello, this is a test message!');