const path = require("path");
const dotenv = require("dotenv");

// Load local environment variables before verifying required keys
dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });

if (!process.env.RESEND_API_KEY) {
  console.error("Missing required environment variable: RESEND_API_KEY");
  process.exit(1);
}
