document.addEventListener("DOMContentLoaded", () => {
  const video = document.getElementById("featureVideo");
  const picture = document.getElementById("pictureElement");  // The image that will unmute the video
  const icon = document.getElementById("speakerIcon");  // Keep the icon for reference, if needed

  // Ensure volume is normal and the video starts muted
  video.volume = 1.0;
  video.muted = true;
  icon.textContent = "🔇";  // Initial speaker icon text

  // Add a click event listener to the picture element
  picture.addEventListener("click", () => {
    console.log('Picture clicked, current mute state:', video.muted);

    // If the video is muted, unmute it
    if (video.muted) {
      video.muted = false;

      // Force the video to play (this may be necessary due to autoplay restrictions in browsers)
      video.play().then(() => {
        console.log("Video unmuted and playing");
      }).catch(err => {
        console.warn("Browser blocked playback:", err);
      });

      // Update icon to indicate unmuted state
      icon.textContent = "🔊";
      icon.classList.add("unmuted");
      console.log("Video unmuted, icon updated to 🔊");
    } else {
      // If the video is unmuted, mute it
      video.muted = true;
      icon.textContent = "🔇";
      icon.classList.remove("unmuted");
      console.log("Video muted, icon updated to 🔇");
    }
  });

  // Adding search bar functionality
  const searchInput = document.getElementById('searchBar');
  const searchButton = document.getElementById('searchButton');

  // When user clicks the search button
  searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();  // Get the search query
    if (query) {
      console.log('Searching for:', query);
      // You could now implement your search logic here, like filtering content or querying a database
    } else {
      console.log('Please enter a search term');
    }
  });

  // Optional: You can also listen for the "Enter" key to submit the search
  searchInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      searchButton.click();  // Trigger the search button click event
    }
  });
});

// Google search functionality
const searchInput = document.getElementById('searchBar');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query) {
    // Redirect to Google with the query
    const googleURL = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(googleURL, "_blank");   // Opens in new tab
  }
});

// Allow Enter key to trigger search
searchInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    searchButton.click();
  }
});
