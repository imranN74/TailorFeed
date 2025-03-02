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
  } else {
    setTimeout(() => {
      window.location.href = "https://www.youtube.com/";
      alert("Process Finished!");
    }, 3000);
    return;
  }
}

watchVideo(1, 5);
