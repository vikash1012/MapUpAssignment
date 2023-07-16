const crypto = require('crypto');

function generateApiKey() {
  const apiKeyLength = 32; // Length of the API key you want to generate
  const buffer = crypto.randomBytes(apiKeyLength);
  const apiKey = buffer.toString('hex');
  return apiKey;
}

