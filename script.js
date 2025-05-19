const changeBtn = document.getElementById("changeBtn");
changeBtn.addEventListener("click", () => {
  changeBtn.textContent = "You clicked me!";
  changeBtn.style.background = "#f39c12";
});

// Bonus: long press on button
let longPressTimer;
changeBtn.addEventListener("mousedown", () => {
  longPressTimer = setTimeout(() => {
    alert("🤫 Secret long press action triggered!");
  }, 1000);
});
changeBtn.addEventListener("mouseup", () => clearTimeout(longPressTimer));
changeBtn.addEventListener("mouseleave", () => clearTimeout(longPressTimer));

// Tabs
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    tabButtons.forEach(b => b.classList.remove("active"));
    tabContents.forEach(c => c.classList.remove("active"));
    btn.classList.add("active");
    document.getElementById(btn.dataset.tab).classList.add("active");
  });
});

// Slideshow
const slides = [
  "https://images.pexels.com/photos/212236/pexels-photo-212236.jpeg",
  "https://images.pexels.com/photos/8468019/pexels-photo-8468019.jpeg",
  "https://images.pexels.com/photos/30981935/pexels-photo-30981935.jpeg"
];
let currentSlide = 0;
const slideImage = document.getElementById("slideImage");
document.getElementById("nextBtn").addEventListener("click", () => {
  currentSlide = (currentSlide + 1) % slides.length;
  slideImage.src = slides[currentSlide];
});
document.getElementById("prevBtn").addEventListener("click", () => {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  slideImage.src = slides[currentSlide];
});

// Form validation
const form = document.getElementById("joinForm");
form.addEventListener("submit", (e) => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name.length === 0 || password.length < 8 || !email.includes("@")) {
    alert("❌ Please ensure all fields are correctly filled.");
    e.preventDefault();
  } else {
    alert("✅ Form submitted successfully!");
  }
});

// Real-time name feedback
document.getElementById("name").addEventListener("input", (e) => {
  const feedback = document.getElementById("nameFeedback");
  feedback.textContent = e.target.value.length > 0 ? "Looks good ✅" : "";
});