const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendButton = document.getElementById('sendButton');

const botResponses = {
    greetings: [
        "Hello! How can I help you today?",
        "Hi there! What can I do for you?",
        "Hey! Nice to see you. How can I assist?",
        "Greetings! What would you like to know?"
    ],
    help: [
        "I can help you with various things! Try asking about what I can do, my capabilities, or just say hello. You can also ask me about the weather, time, or just chat!",
        "I'm here to assist! You can ask me about my features, capabilities, or just have a casual conversation. Type 'capabilities' to learn more!"
    ],
    capabilities: [
        "I can respond to greetings, answer questions about my capabilities, provide help, tell you the current time, and have basic conversations. I work entirely in your browser with no data sent to external servers!",
        "My abilities include: greeting you, explaining what I can do, providing the current time, and engaging in simple conversation. All processing happens locally in your browser for complete privacy!"
    ],
    time: [
        `The current time is ${new Date().toLocaleTimeString()}.`,
        `Right now it's ${new Date().toLocaleTimeString()}.`
    ],
    goodbye: [
        "Goodbye! Have a great day!",
        "See you later! Take care!",
        "Bye! Come back anytime!",
        "Farewell! It was nice chatting with you!"
    ],
    thanks: [
        "You're welcome! Happy to help!",
        "No problem at all!",
        "Glad I could help!",
        "Anytime! That's what I'm here for!"
    ],
    default: [
        "I'm not sure I understand. Can you try rephrasing that?",
        "Hmm, I didn't quite get that. Could you ask in a different way?",
        "I'm still learning! Try asking about my capabilities or saying hello.",
        "I'm not sure how to respond to that. Type 'help' to see what I can do!"
    ]
};

function getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

function detectIntent(message) {
    const lowerMessage = message.toLowerCase().trim();

    if (lowerMessage.match(/^(hi|hello|hey|greetings|howdy|sup|yo)/)) {
        return 'greetings';
    }

    if (lowerMessage.match(/(help|assist|support|guide)/)) {
        return 'help';
    }

    if (lowerMessage.match(/(what can you do|capabilities|features|abilities|what do you do)/)) {
        return 'capabilities';
    }

    if (lowerMessage.match(/(time|what time|current time|clock)/)) {
        return 'time';
    }

    if (lowerMessage.match(/^(bye|goodbye|see you|farewell|see ya|later)/)) {
        return 'goodbye';
    }

    if (lowerMessage.match(/(thank|thanks|thx|appreciate)/)) {
        return 'thanks';
    }

    return 'default';
}

function getBotResponse(userMessage) {
    const intent = detectIntent(userMessage);

    if (intent === 'time') {
        return `The current time is ${new Date().toLocaleTimeString()}.`;
    }

    return getRandomResponse(botResponses[intent]);
}

function addMessage(content, type) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;

    const avatarDiv = document.createElement('div');
    avatarDiv.className = 'message-avatar';
    avatarDiv.textContent = type === 'bot' ? '🤖' : '👤';

    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = content;

    messageDiv.appendChild(avatarDiv);
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);

    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function handleUserMessage() {
    const message = userInput.value.trim();

    if (!message) return;

    addMessage(message, 'user');
    userInput.value = '';

    setTimeout(() => {
        const botResponse = getBotResponse(message);
        addMessage(botResponse, 'bot');
    }, 500);
}

sendButton.addEventListener('click', handleUserMessage);

userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handleUserMessage();
    }
});

window.addEventListener('load', () => {
    setTimeout(() => {
        addMessage("Hello! I'm Simple Chatbot. I work entirely in your browser with complete privacy. How can I help you today?", 'bot');
    }, 300);
});
