const twilio = require('twilio');

const AccessToken = twilio.jwt.AccessToken;
const ChatGrant = AccessToken.ChatGrant;

const TokenGenerator = (identity, deviceId) => {
    const appName ='LinefinderChat';

    const endpointId = appName + ':'  + identity + ':' + deviceId;

    const chatGrant = new ChatGrant({
        serviceSid: process.env.TWILIO_CHAT_SERVICE_SID,
        endpointId: endpointId,
    });

    const token = new AccessToken(
        process.env.TWILIO_ACCOUNT_SID,
        process.env.TWILIO_API_KEY,
        process.env.TWILIO_API_SECRET,
    );

    token.addGrant(chatGrant);
    token.identity = identity;

    return token;
} 

module.exports = { generate: TokenGenerator };