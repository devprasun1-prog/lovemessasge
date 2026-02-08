// Love Dictionary
const loveLetters = {
  A: "Always in my heart 💕",
  B: "Best thing in my life 💖",
  C: "Cutest person ever 😘",
  D: "Dream girl 💭❤️",
  E: "Everything to me 🌍",
  F: "Forever mine ♾️💕",
  G: "Gift from God 🙏❤️",
  H: "Heart stealer 💘",
  I: "I love you endlessly 😍",
  J: "Just perfect 💫",
  K: "Kindest soul 💖",
  L: "Love of my life ❤️",
  M: "My happiness 😊",
  N: "No one like you 💕",
  O: "Only you 💘",
  P: "Precious to me 💎",
  Q: "Queen of my heart 👑❤️",
  R: "Reason I smile 😊",
  S: "Sweetest love 🍭💖",
  T: "True love 💕",
  U: "Universe for me 🌌",
  V: "Very special 💝",
  W: "World to me 🌍❤️",
  X: "XOXO hugs & kisses 😘",
  Y: "You are mine 💕",
  Z: "Zindagi meri ❤️"
};


// Elements
const nameInput = document.getElementById("nameInput");
const previewBtn = document.getElementById("previewBtn");
const generateBtn = document.getElementById("generateBtn");
const previewBox = document.getElementById("previewBox");
const previewResult = document.getElementById("previewResult");
const linkBox = document.getElementById("linkBox");
const shareLink = document.getElementById("shareLink");
const copyBtn = document.getElementById("copyBtn");


// Preview Button
previewBtn.addEventListener("click", () => {

  const name = nameInput.value.trim().toUpperCase();

  if (name === "") {
    alert("Please enter a name ❤️");
    return;
  }

  previewResult.innerHTML = "";

  for (let letter of name) {

    if (loveLetters[letter]) {

      const line = document.createElement("p");

      line.innerHTML = `
        ⭐ <b>${letter}</b> → ${loveLetters[letter]}
      `;

      previewResult.appendChild(line);
    }
  }

  previewBox.style.display = "block";
  linkBox.style.display = "none";
});


// Generate Link Button
generateBtn.addEventListener("click", () => {

  const name = nameInput.value.trim().toUpperCase();

  if (name === "") {
    alert("Please enter a name ❤️");
    return;
  }

  // Encode name for URL
  const encodedName = encodeURIComponent(name);

  // Create link
  const link =
    window.location.origin +
    window.location.pathname.replace("index.html", "") +
    "love.html?name=" +
    encodedName;

  shareLink.value = link;

  linkBox.style.display = "block";
});


// Copy Button
copyBtn.addEventListener("click", () => {

  shareLink.select();
  shareLink.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(shareLink.value);

  copyBtn.innerText = "Copied ✅";

  setTimeout(() => {
    copyBtn.innerText = "Copy Link 📋";
  }, 2000);
});