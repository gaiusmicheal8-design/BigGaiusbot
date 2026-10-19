import express from "express";
import { getReply } from "./whatsapp.js";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🔥 BigGaiusbot is online!");
});

app.get("/health", (req, res) => {
  res.json({
    status: "online",
    bot: "BigGaiusbot"
  });
});

// Test the automatic reply system
app.post("/test-reply", (req, res) => {
  const { message } = req.body;

  if (!message || typeof message !== "string") {
    return res.status(400).json({
      error: "Please provide a message."
    });
  }

  res.json({
    bot: "BigGaiusbot",
    received: message,
    reply: getReply(message)
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`BigGaiusbot running on port ${PORT}`);
}); express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🔥 BigGaiusbot is online!");
});

app.get("/health", (req, res) => {
  res.json({ status: "online", bot: "BigGaiusbot" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`BigGaiusbot running on port ${PORT}`);
});
