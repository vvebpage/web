// Array of channel data
const channels = [
    {
        name: "Channel Name 1",
        subscribers: "1M subscribers",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Channel Name 2",
        subscribers: "500K subscribers",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Channel Name 3",
        subscribers: "250K subscribers",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Channel Name 4",
        subscribers: "1.5M subscribers",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Channel Name 5",
        subscribers: "300K subscribers",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Channel Name 6",
        subscribers: "800K subscribers",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Channel Name 7",
        subscribers: "1.2M subscribers",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Channel Name 8",
        subscribers: "600K subscribers",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Channel Name 9",
        subscribers: "400K subscribers",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        name: "Channel Name 10",
 subscribers: "900K subscribers",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    }
];

// Function to render channels
function renderChannels() {
    const channelList = document.getElementById('channel-list');
    channels.forEach(channel => {
        const channelItem = document.createElement('div');
        channelItem.className = 'channel-item';

        const avatar = document.createElement('img');
        avatar.src = channel.avatar;
        avatar.alt = `${channel.name} Avatar`;
        avatar.className = 'channel-avatar';

        const channelInfo = document.createElement('div');
        channelInfo.className = 'channel-info';

        const channelName = document.createElement('div');
        channelName.className = 'channel-name';
        channelName.textContent = channel.name;

        const channelSubscribers = document.createElement('div');
        channelSubscribers.className = 'channel-subscribers';
        channelSubscribers.textContent = channel.subscribers;

        const subscribeButton = document.createElement('button');
        subscribeButton.className = 'subscribe-button';
        subscribeButton.textContent = 'Subscribe';

        channelInfo.appendChild(channelName);
        channelInfo.appendChild(channelSubscribers);
        channelItem.appendChild(avatar);
        channelItem.appendChild(channelInfo);
        channelItem.appendChild(subscribeButton);
        channelList.appendChild(channelItem);
    });
}

// Call the function to render channels on page load
document.addEventListener('DOMContentLoaded', renderChannels);