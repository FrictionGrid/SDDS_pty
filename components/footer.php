  </div> <!-- Close .app -->

  <!-- Chatbot -->
  <div class="chatbot-btn" onclick="toggleChat()">💬</div>

  <div class="chatbot-panel" id="chatbot">
    <div class="chatbot-header">
      SDDS AI Assistant
      <button onclick="toggleChat()">✕</button>
    </div>
    <div class="chatbot-body">
      <div class="chatbot-msg bot">สวัสดีครับ มีอะไรให้ช่วยไหม</div>
    </div>
    <div class="chatbot-input">
      <input type="text" placeholder="พิมพ์คำสั่งถึง AI..." />
      <button>ส่ง</button>
    </div>
  </div>

  <!-- External JavaScript -->
  <script src="js/script.js"></script>
</body>

</html>
