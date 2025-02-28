chrome.runtime.sendMessage({ action: "checkTab" }, (response) => {
  if (response.isYoutube) {
    document.getElementById("message").innerHTML = "Tailor Your Feed";
    document.getElementById("action").style.display = "block";
  } else {
    document.getElementById("message").innerHTML = "Please Open Youtube Tab!";
    document.getElementById("action").style.display = "none";
  }
});

const start = document.getElementById("startBtn");
if (start) {
  start.addEventListener("click", () => {
    const topic = document.getElementById("topic").value.trim();
    if (topic) {
      chrome.runtime.sendMessage({ action: "startSearch", topic: topic });
    } else {
      alert("Please Enter Topic");
    }
  });
}
