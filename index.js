const axios = require('axios'); 

// Replace with your Page Access Token and the recipient's PSID
const PAGE_ACCESS_TOKEN = 'EAAPU64ObztsBO0myFiJZCvpSPReH7HBGmR4DDSB7ZA3lZCZByrK8U3MrSZB8Fh4ZChFwmeoMymm06uiyehV7YCqIjZC6e4dZCoT66ZBCWqeZBis0Tn7WpW2Pw3HAuui4OJHi2hx7ojrdkwjCcGM0ffNdxCZA8qaZA7BcOimAZCshWfeeR0G9psUiZBzGhLSRxykiLImjMIzk3e25bNIpsjxUEDwQZDZD';
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