class Bot {
    constructor(name, avatar, actions) {
        this.name = name;
        this.avatar = avatar;
        this.actions = actions;
    }
}

class Message {
    constructor(sender, content, timestamp, avatar) {
        this.sender = sender;
        this.content = content;
        this.timestamp = timestamp;
        this.avatar = avatar;
    }
}

const bots = [
    new Bot('Pierre', 'Images\Pierre.png', ['Bonjour', 'Heure', 'Quoi']),
    new Bot('Paul', 'Images\Paul.png', ['Bonjour', 'Jour', 'Hein']),
    new Bot('Jacques', 'Images\Jacques.png', ['Bonjour', 'Mois', 'Oui'])
];

// Fonction pour gérer les actions des bots en fonction de la commande entrée par l'utilisateur
function handleCommand(command) {
    // Votre logique pour gérer les commandes ici
}

function displayMessage(message) {
    const chatContainer = document.getElementById('chatContainer');

    const messageContainer = document.createElement('div');
    messageContainer.classList.add('message-container');
    messageContainer.classList.add(message.sender === 'user' ? 'user-message' : 'bot-message');

    const avatar = document.createElement('img');
    avatar.src = message.avatar;
    avatar.classList.add('avatar');

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerHTML = `<strong>${message.sender}</strong><br>${message.content}`;

    const timestamp = document.createElement('div');
    timestamp.classList.add('timestamp');
    timestamp.innerText = message.timestamp.toLocaleTimeString();

    messageContainer.appendChild(avatar);
    messageContainer.appendChild(messageContent);
    messageContainer.appendChild(timestamp);

    chatContainer.appendChild(messageContainer);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

function sendMessage() {
    const inputMessage = document.getElementById('inputMessage');
    const messageContent = inputMessage.value.trim();

    if (messageContent === '') {
        return; // Ne pas envoyer de message vide
    }

    // Créez et affichez le message de l'utilisateur
    const userMessage = new Message('user', messageContent, new Date(), 'Images\avatar.png');
    displayMessage(userMessage);

    // Traitez les commandes et les actions des bots
    // (exemple : si le message est 'help', affichez les commandes disponibles)
    if (messageContent === 'help') {
        displayHelp();
    } else if (messageContent.toLowerCase() === 'hello' || messageContent.toLowerCase() === 'bonjour') {
        HelloBot();
    } else {
        // Gérez les autres actions des bots ici
    }

    inputMessage.value = ''; // Videz le champ de saisie du message
}

function HelloBot() {
    bots.forEach((bot) => {
        const responseMessage = new Message(bot.name, 'Bonjour', new Date(), bot.avatar);
        displayMessage(responseMessage);
    });
}

function init() {

    document.getElementById('sendMessage').addEventListener('click', sendMessage);

    document.getElementById('inputMessage').addEventListener('keydown', (event) => {
        if (event.key === 'Envoyer') {
            sendMessage();
        }
    });

}
function displayHelp() {
    const helpMessage = new Message(
        'Bot',
        'Voici les commandes disponibles : help, commande1, commande2...',
        new Date(),
        'Images/helpImage.png'
    );
    displayMessage(helpMessage);
}

document.addEventListener('DOMContentLoaded', init);
document.addEventListener("DOMContentLoaded", function () {
    const chatArea = document.getElementById("chatArea");
    const messageInput = document.getElementById("inputMessage");
    const sendButton = document.getElementById("sendMessage");

    // Ajoutez vos fonctions et votre logique ici
});