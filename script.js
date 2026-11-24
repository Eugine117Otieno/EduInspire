
/* =========================
   MOTIVATIONAL QUOTES
========================= */

const quotes = [
    {
        text: "Education is the most powerful weapon which you can use to change the world.",
        author: "Nelson Mandela"
    },
    {
        text: "The beautiful thing about learning is that nobody can take it away from you.",
        author: "B.B. King"
    },
    {
        text: "Success is the sum of small efforts, repeated day in and day out.",
        author: "Robert Collier"
    },
    {
        text: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        text: "Learning never exhausts the mind.",
        author: "Leonardo da Vinci"
    },
    {
        text: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        text: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    }
];

function newQuote() {

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];

    const quoteElement = document.getElementById("quote");
    const authorElement = document.getElementById("author");

    if (quoteElement && authorElement) {
        quoteElement.textContent = `"${quote.text}"`;
        authorElement.textContent = `— ${quote.author}`;
    }
}


/* =========================
   MOTIVATIONAL MESSAGES
========================= */

const motivationalMessages = [
    "🌟 You are capable of achieving amazing things!",
    "🚀 Your dreams are bigger than your fears!",
    "📚 Every page you read builds your future!",
    "💪 Never stop learning. Never stop growing!",
    "🏆 Great success begins with small steps!",
    "🔥 Your hard work today will create your success tomorrow!",
    "✨ You have the power to change your future!",
    "🎯 Stay focused. Your goals are worth fighting for!",
    "🌍 The world needs your talents and ideas!",
    "🧠 Every mistake is a chance to become smarter!"
];

function showMotivation() {

    const randomIndex = Math.floor(
        Math.random() * motivationalMessages.length
    );

    const messageElement = document.getElementById("motivation-message");

    if (messageElement) {
        messageElement.textContent = motivationalMessages[randomIndex];
    }
}
