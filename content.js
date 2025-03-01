function watchVideo(index, totalVideos) {
  const videoLinks = document.querySelectorAll(
    "ytd-video-renderer a#video-title"
  );

  if (index < totalVideos) {
    if (videoLinks.length > index) {
      videoLinks[index].click();
      setTimeout(() => {
        window.history.back();
        setTimeout(() => {
          watchVideo(index + 1, totalVideos);
        }, 3000);
      }, 15000);
    }
  }
}

watchVideo(1, 10);
