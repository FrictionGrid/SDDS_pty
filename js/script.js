/**
 * SDDS Enterprise System - Main JavaScript
 */

// Chatbot Toggle Function
function toggleChat() {
  const chatbot = document.getElementById("chatbot");
  if (chatbot) {
    chatbot.style.display = chatbot.style.display === "flex" ? "none" : "flex";
  }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('SDDS System loaded successfully');
});
