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




// SIMPLE PAGE SEARCH ENGINE
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");

  searchInput.addEventListener("keyup", () => {
    const query = searchInput.value.toLowerCase();

    // SELECT EVERYTHING YOU WANT SEARCHABLE
    const items = document.querySelectorAll(
      "h1, h2, h3, p, a, .column, .danger-zone"
    );

    items.forEach(item => {
      const text = item.textContent.toLowerCase();
      
      if (text.includes(query)) {
        item.style.display = "";  // Show
      } else {
        item.style.display = "none"; // Hide
      }
    });
  });
});


  

