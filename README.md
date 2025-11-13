# Simple Chatbot

A **privacy-friendly**, static chatbot application that runs entirely in your browser. No backend, no data collection, and no external API calls.

## Overview

Simple Chatbot is a lightweight, rule-based conversational interface built with vanilla HTML, CSS, and JavaScript. It demonstrates how to create an interactive chat experience without requiring any server-side infrastructure or external dependencies.

### Features

- 🔒 **100% Privacy** - All processing happens locally in your browser
- 🎨 **Modern UI** - Clean, minimal design with smooth animations
- 📱 **Fully Responsive** - Works perfectly on desktop and mobile devices
- 🤖 **Rule-Based Logic** - Responds to 5+ predefined intents:
  - Greetings (hello, hi, hey)
  - Help requests
  - Capability inquiries
  - Time queries
  - Goodbyes
  - Thanks
- ⚡ **No Dependencies** - Pure vanilla JavaScript, no frameworks needed
- 🚀 **Instant Load** - Lightweight and fast

## Live Demo

Visit the live chatbot: **[Your GitHub Pages URL will be here]**

## Setup & Deployment

### Local Development

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/simple-chatbot-static.git
   cd simple-chatbot-static
   ```

2. Open `index.html` in your browser:
   ```bash
   # On macOS
   open index.html

   # On Linux
   xdg-open index.html

   # On Windows
   start index.html
   ```

   Or simply drag `index.html` into your browser window.

### Deploying to GitHub Pages

1. Push your code to a GitHub repository named `simple-chatbot-static`

2. Go to your repository on GitHub

3. Navigate to **Settings** → **Pages**

4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`

5. Click **Save**

6. GitHub will deploy your site. After a few minutes, your chatbot will be live at:
   ```
   https://yourusername.github.io/simple-chatbot-static/
   ```

## File Structure

```
simple-chatbot-static/
├── index.html          # Main HTML structure
├── style.css           # Styling and responsive design
├── script.js           # Chatbot logic and intent detection
├── README.md           # This file
└── LICENSE             # MIT License
```

## Customization

### Adding New Intents

Edit `script.js` and modify the `botResponses` object to add new response categories:

```javascript
const botResponses = {
    yourIntent: [
        "Response 1",
        "Response 2"
    ]
};
```

Then add detection logic in the `detectIntent()` function:

```javascript
if (lowerMessage.match(/(keyword1|keyword2)/)) {
    return 'yourIntent';
}
```

### Changing Colors

The chatbot uses a gradient color scheme. To customize:

1. Open `style.css`
2. Find the gradient definitions:
   ```css
   background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
   ```
3. Replace the color values with your preferred colors

### Modifying the Welcome Message

In `script.js`, find the `window.addEventListener('load')` section and change the welcome text:

```javascript
addMessage("Your custom welcome message here!", 'bot');
```

## Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox, gradients, and animations
- **Vanilla JavaScript** - No frameworks or libraries

## Browser Compatibility

Works on all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Feel free to fork this repository and submit pull requests for improvements!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

Built as a demonstration of privacy-first web applications that respect user data by processing everything locally.

---

**Made with ❤️ using vanilla JavaScript**
