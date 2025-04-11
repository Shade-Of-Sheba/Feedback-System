// generate-qrs.js
const QRCode = require('qrcode');
const fs = require('fs');
const path = require('path');

// Create a folder to store QR codes
const outputFolder = './qr-codes';
if (!fs.existsSync(outputFolder)) {
  fs.mkdirSync(outputFolder);
}

// Define feedback form locations
const locations = [
  { name: 'hotel', url: 'https://yourdomain.com/feedback/hotel' },
  { name: 'waterpark', url: 'https://yourdomain.com/feedback/waterpark' },
  { name: 'food', url: 'https://yourdomain.com/feedback/food' }
];

// Generate a QR code for each location
locations.forEach(async (loc) => {
  const filePath = path.join(outputFolder, `qr_${loc.name}.png`);
  try {
    await QRCode.toFile(filePath, loc.url, {
      color: {
        dark: '#000',  // QR code color
        light: '#FFF'  // Background color
      },
      width: 300
    });
    console.log(`✅ Generated: ${filePath}`);
  } catch (err) {
    console.error(`❌ Error generating QR for ${loc.name}:`, err);
  }
});
