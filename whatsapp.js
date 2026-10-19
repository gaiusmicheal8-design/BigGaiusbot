const replies = {
  hello: "Hello! 👋 Welcome to BigGaiusbot!",
  hi: "Hi there! 🤖 I'm BigGaiusbot. How can I help you?",
  help: "I'm BigGaiusbot! I can greet you and answer simple commands.",
  name: "My name is BigGaiusbot! 🔥",
  thanks: "You're welcome! 😊"
};

function getReply(message) {
  const text = message.trim().toLowerCase();

  if (replies[text]) {
    return replies[text];
  }

  return "Thanks for messaging BigGaiusbot! 🤖 I'm still learning. Type 'help' to see what I can do.";
}

export { getReply };
