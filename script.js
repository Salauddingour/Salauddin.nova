

window.onload = () => {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");
  }
}
//  Filter Projects by Category
function filterProjects(category) {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach(card => {
    if (category === 'all' || card.classList.contains(category)) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
//  Chatbot Toggle
function toggleChatbot() {
  const bot = document.getElementById("chatbot");
  bot.style.display = bot.style.display === "flex" ? "none" : "flex";
}

//  Chat Simulation 
function sendMsg() {
  const input = document.getElementById("userInput");
  const msg = input.value.trim();
  if (!msg) return;

  const chatBody = document.getElementById("chat-body");

  // Show user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-msg";
  userMsg.innerText = msg;
  chatBody.appendChild(userMsg);

  // Bot reply
  const botMsg = document.createElement("div");
  botMsg.className = "bot-msg";
  botMsg.innerText = getBotReply(msg);
  chatBody.appendChild(botMsg);

  // Scroll to bottom
  chatBody.scrollTop = chatBody.scrollHeight;

  input.value = "";
}
function getBotReply(message) {
  const msg = message.toLowerCase();

  if (msg.includes("hello") || msg.includes("hi") || msg.includes("salaam")) {
    return "Hi! For more info, call Salauddin at 7505921913 or email goursalauddin@gmail.com";
  } else if (msg.includes("name")) {
    return "I'm Salauddin's personal assistant bot 🤖";
  } else if (msg.includes("thanks") || msg.includes("thank you")) {
    return "You're welcome, bro! 💯";
  } else {
    return "Sorry, I didn’t get that. Type 'hello' to start.";
  }
}
