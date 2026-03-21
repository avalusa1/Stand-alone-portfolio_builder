#!/usr/bin/env node

/**
 * Config Validator
 * Validates portfolio.config.json against JSON schema
 * Runs before build
 */

import Ajv from "ajv";
import addFormats from "ajv-formats";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ajv = new Ajv();
addFormats(ajv);

async function validateConfig() {
  try {
    const configPath = path.join(__dirname, "../portfolio.config.json");
    const schemaPath = path.join(__dirname, "../config.schema.json");

    if (!fs.existsSync(configPath)) {
      console.error("❌ portfolio.config.json not found!");
      process.exit(1);
    }

    if (!fs.existsSync(schemaPath)) {
      console.error("❌ config.schema.json not found!");
      process.exit(1);
    }

    const config = JSON.parse(fs.readFileSync(configPath, "utf-8"));
    const schema = JSON.parse(fs.readFileSync(schemaPath, "utf-8"));

    const validate = ajv.compile(schema);
    const valid = validate(config);

    if (!valid) {
      console.error("❌ Portfolio config validation failed:");
      console.error(validate.errors);
      process.exit(1);
    }

    console.log("✅ Portfolio config is valid!");

    // Additional checks
    if (config.personal.gender !== "male" && config.personal.gender !== "female") {
      throw new Error("Gender must be 'male' or 'female'");
    }

    if (config.personal.avatarIndex < 1 || config.personal.avatarIndex > 4) {
      throw new Error("avatarIndex must be 1-4");
    }

    console.log(
      `✅ Avatar: ${config.personal.gender} - avatar ${config.personal.avatarIndex}`
    );

    process.exit(0);
  } catch (error) {
    console.error("❌ Validation error:", error.message);
    process.exit(1);
  }
}

validateConfig();
