#!/usr/bin/env node

/**
 * Avatar Processor
 * Converts custom photos to stylized avatars using Sharp
 * Runs at build time if customPhotoPath is provided in portfolio.config.json
 */

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function processAvatar(photoPath, outputPath) {
  try {
    if (!fs.existsSync(photoPath)) {
      console.error(`❌ Photo file not found: ${photoPath}`);
      return false;
    }

    // Check output directory exists
    const outputDir = path.dirname(outputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    console.log(`🎨 Processing avatar: ${photoPath} → ${outputPath}`);

    // Process: Resize, square crop, apply blur for avatar effect, convert to PNG
    await sharp(photoPath)
      .resize(200, 200, {
        fit: "cover", // crop to square
        position: "center",
      })
      .modulate({
        saturation: 1.2, // boost colors
        brightness: 1.05, // slight brighten
      })
      .blur(0.8) // very slight blur for softness
      .png({ quality: 85 })
      .toFile(outputPath);

    console.log(`✅ Avatar created: ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`❌ Error processing avatar:`, error.message);
    return false;
  }
}

// Main execution
async function main() {
  try {
    const configPath = path.join(__dirname, "../portfolio.config.json");
    
    if (!fs.existsSync(configPath)) {
      console.log(
        "⚠️  portfolio.config.json not found. Skipping avatar processing."
      );
      process.exit(0);
    }

    const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    const photoPath = config.personal?.customPhotoPath;

    if (!photoPath) {
      console.log("ℹ️  No custom photo specified. Using default avatar.");
      process.exit(0);
    }

    const fullPhotoPath = path.resolve(__dirname, "../", photoPath);
    const outputPath = path.join(
      __dirname,
      "../public/avatars/custom-avatar.png"
    );

    const success = await processAvatar(fullPhotoPath, outputPath);
    process.exit(success ? 0 : 1);
  } catch (error) {
    console.error("❌ Avatar processing failed:", error);
    process.exit(1);
  }
}

main();
