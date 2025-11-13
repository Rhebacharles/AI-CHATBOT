# 🤖 Simple Chatbot

*A privacy-friendly, static chatbot application that runs entirely in your browser — no backend, no data collection, and no external API calls.*

---

## 🌐 Live Demo
Experience it here: **[https://rhebacharles.github.io/AI-CHATBOT/](https://rhebacharles.github.io/AI-CHATBOT/)**

---

## 🧠 Overview
**Simple Chatbot** is a lightweight, rule-based conversational interface built using **vanilla HTML, CSS, and JavaScript**.  
It demonstrates how you can create an interactive chat experience without relying on any external servers or dependencies — everything happens locally in your browser.

---

## ✨ Features
- 🔒 **100% Privacy** — All chat processing is handled entirely in your browser.  
- 🎨 **Modern UI** — Clean, minimal design with soft shadows and smooth interactions.  
- 📱 **Fully Responsive** — Optimized for desktop, tablet, and mobile devices.  
- 🤖 **Rule-Based Logic** — Handles several predefined intents:
  - Greetings (`hello`, `hi`, `hey`)
  - Help requests
  - Capability inquiries
  - Time-related queries
  - Goodbyes
  - Expressions of thanks  
- ⚡ **No Dependencies** — Pure vanilla JavaScript — no frameworks required.  
- 🚀 **Instant Load** — Lightweight, fast, and deploys easily on GitHub Pages.  

---

## 🛠️ Setup & Deployment

### 🔹 Local Development
Clone this repository and open it locally:
```bash
git clone https://github.com/rhebacharles/AI-CHATBOT.git
cd AI-CHATBOT
Open index.html in your browser:

bash
Copy code
# macOS
open index.html

# Linux
xdg-open index.html

# Windows
start index.html
Or simply drag and drop the index.html file into your browser window.

🔹 Deploying to GitHub Pages
Push your code to a GitHub repository (already done for this version).

Go to Settings → Pages.

Under Source, select:

makefile
Copy code
Branch: main
Folder: /(root)
Click Save.

GitHub will automatically deploy your site within a few minutes at:

php-template
Copy code
https://<your-username>.github.io/<repository-name>/
Example (for this project):
➡️ https://rhebacharles.github.io/AI-CHATBOT/

📂 File Structure
bash
Copy code
AI-CHATBOT/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive layout
├── script.js           # Chatbot logic and intent detection
├── README.md           # Project documentation
└── LICENSE             # MIT License
⚙️ Customization
➕ Adding New Intents
To extend chatbot capabilities:

Open script.js.

Add a new intent under the chatbot responses, for example:

js
Copy code
const botResponses = {
    yourIntent: [
        "Response 1",
        "Response 2"
    ]
};
Add keyword detection logic inside the detectIntent() function:

js
Copy code
if (lowerMessage.match(/(keyword1|keyword2)/)) {
    return 'yourIntent';
}
🎨 Changing Colors
To customize the chatbot theme:

Open style.css.

Find the gradient or color definitions:

css
Copy code
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
Replace the colors with your preferred palette.

💬 Modifying the Welcome Message
Open script.js.

Locate:

js
Copy code
addMessage("Hi — I am a demo chatbot. Try typing 'hello' or 'what can you do?'");
Replace it with your custom welcome text.

💻 Technologies Used
HTML5 — Semantic and accessible markup

CSS3 — Responsive design with Flexbox and modern styling

JavaScript (ES6) — Lightweight, rule-based logic engine

🌍 Browser Compatibility
This chatbot works smoothly across:

Chrome / Edge (latest)

Firefox (latest)

Safari (latest)

Android Chrome

iOS Safari

🤝 Contributing
Contributions are welcome!
Feel free to fork this repository and submit pull requests with feature enhancements or design improvements.

📄 License
This project is licensed under the MIT License — see the LICENSE file for details.

❤️ Acknowledgments
Built with ❤️ as a demonstration of privacy-first, client-side web applications
that respect user data by keeping all processing local to your browser.

