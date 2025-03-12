// Array of saved videos
const savedVideos = [
    {
        id: "9bZkp7q19f0",
        title: "Understanding JavaScript Closures",
        channelName: "Channel Name 1",
        views: "250K views",
        uploadTime: "2 days ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        id: "3fumBcKC6RE",
        title: "CSS Grid Layout Tutorial",
        channelName: "Channel Name 2",
        views: "500K views",
        uploadTime: "3 days ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        id: "4fGmBcKC6RE",
        title: "React Hooks Explained",
        channelName: "Channel Name 3",
        views: "300K views",
        uploadTime: "1 week ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        id: "5hGmBcKC6RE",
        title: "Node.js Crash Course",
        channelName: "Channel Name 4",
        views: "150K views",
        uploadTime: "5 days ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    },
    {
        id: "6iGmBcKC6RE",
        title: "Web Development Trends 2023",
        channelName: "Channel Name 5",
        views: "400K views",
        uploadTime: "2 weeks ago",
        avatar: "https://storage.googleapis.com/a1aa/image/fg2GXPkZOL6sN2P0Lh0CjpWg8ox2zcMdRW5M0ywGnyM.jpg"
    }
];

// Function to render saved videos
function renderSavedVideos() {
    const videoList = document.getElementById('video-list');
    savedVideos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';

        // Create an iframe for the embedded YouTube video
        const iframe = document.createElement('iframe');
        iframe.src = `https://www.youtube.com/embed/${video.id}`; // Embed URL for YouTube
        iframe.width = "560"; // Set width
        iframe.height = "315"; // Set height
        iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"; // Allow features
        iframe.allowFullscreen = true; // Allow fullscreen
        iframe.className = 'video-iframe'; // Add class for styling

        const videoInfo = document.createElement('div');
        videoInfo.className = 'video-info';

        const channelAvatar = document.createElement('img');
        channelAvatar.src = video.avatar;
        channelAvatar.alt = `${video.channelName} Avatar`;
        channelAvatar.className = 'channel-avatar';

        const videoTitle = document.createElement('div');
        videoTitle.className = 'video-title';
        videoTitle.textContent = video.title;

        const videoMeta = document.createElement('div');
        videoMeta.className = 'video-meta';
        videoMeta.textContent = `${video.channelName} • ${video.views} • ${video.uploadTime}`;

        videoInfo.appendChild(channelAvatar);
        videoInfo.appendChild(videoTitle);
        videoInfo.appendChild(videoMeta);
        videoItem.appendChild(iframe); // Append the iframe instead of the thumbnail
        videoItem.appendChild(videoInfo);
        videoList.appendChild(videoItem);
    });
}

// Call the function to render saved videos on page load
document.addEventListener('DOMContentLoaded', renderSavedVideos);
