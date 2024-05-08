const crypto = require('crypto');

function calculateChecksum(chunk) {
    return crypto.createHash('sha256').update(chunk).digest('hex');
}

function splitIntoChunks(inputString, chunkLength) {
    const chunks = [];
    for (let i = 0; i < inputString.length; i += chunkLength) {
        let chunk = inputString.slice(i, i + chunkLength);
        if (chunk.length < chunkLength) {
            chunk = chunk.padEnd(chunkLength);
        }
        chunks.push(chunk);
    }
    return chunks;
}

// Example usage:
const inputString = "Here is example string :)";
const chunkLength = 3;
const chunks = splitIntoChunks(inputString, chunkLength);
chunks.forEach(chunk => {
    const checksum = calculateChecksum(chunk);
    console.log(checksum);
});
