// Array of message data
const messages = [
    {
        sender: "Channel Name 1",
        text: "New video uploaded: How to Code in JavaScript!",
        time: "2 hours ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        message: "Check out our latest tutorial!"
    },
    {
        sender: "Channel Name 2",
        text: "Don't miss our latest tutorial on CSS Flexbox!",
        time: "5 hours ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        message: "Learn how to create responsive layouts."
    },
    {
        sender: "Channel Name 3",
        text: "Check out our new video on React Hooks!",
        time: "1 day ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        message: "Master React Hooks with our guide."
    },
    {
        sender: "Channel Name 4",
        text: "Your subscription is confirmed! Welcome to our channel.",
        time: "1 day ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        message: "Thank you for joining us!"
    },
    {
        sender: "Channel Name 5",
        text: "New live stream scheduled for this Friday!",
        time: "2 days ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        message: "Join us for an interactive session."
    },
    {
        sender: "Channel Name 6",
        text: "Join us for a Q&A session this weekend!",
        time: "3 days ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        message: "Ask us anything about web development."
    },
    {
        sender: "Channel Name 7",
        text: "New video: Top 10 JavaScript Frameworks in 2023!",
        time: "4 days ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        message: "Find out which frameworks are trending."
    },
    {
        sender: "Channel Name 8",
        text: "Don't forget to like and subscribe!",
        time: "5 days ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        message: "Your support helps us grow!"
    },
    {
        sender: "Channel Name 9",
        text: "New collaboration video with Channel Name 10!",
        time: "6 days ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        message: "Check out our latest collab!"
    },
    {
        sender: "Channel Name 10",
        text: "Thank you for being a loyal subscriber!",
        time: "1 week ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg",
        message: "We appreciate your support!"
    }
];

// Function to render messages
function renderMessages() {
    const messageList = document.getElementById('message-list');
    messages.forEach(message => {
        const messageItem = document.createElement('div');
        messageItem.className = 'message-item';

        const avatar = document.createElement('img');
        avatar.src = message.avatar;
        avatar.alt = `${message.sender} Avatar`;
        avatar.className = 'message-avatar';

        const messageInfo = document.createElement('div');
        messageInfo.className = 'message-info';

        const messageSender = document.createElement('div');
        messageSender.className = 'message-sender';
        messageSender.textContent = message.sender;

        const messageText = document.createElement('div');
        messageText.className = 'message-text';
        messageText.textContent = message.text;

        const messageTime = document.createElement('div');
        messageTime.className = 'message-time';
        messageTime.textContent = message.time;

        const messageDetail = document.createElement('div');
        messageDetail.className = 'message-detail';
        messageDetail.textContent = message.message; // Display the additional message

        messageInfo.appendChild(messageSender);
        messageInfo.appendChild(messageText);
        messageInfo.appendChild(messageTime);
        messageInfo.appendChild(messageDetail); // Append the additional message
        messageItem.appendChild(avatar);
        messageItem.appendChild(messageInfo);
        messageList.appendChild(messageItem);
    });
}

// Call the function to render messages on page load
document.addEventListener('DOMContentLoaded', renderMessages);