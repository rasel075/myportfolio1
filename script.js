const data = {
  name: "Harun or Rashid (Rasel)",
  subtitle: "Student of SUST, CSE",
  profileImage: "https://raw.githubusercontent.com/2021331019/myPortfolio1/main/profile1.jpg",
  email: "harunorrashid289@gmail.com",
  facebook: "https://www.facebook.com/mohammad.rasel2021",
  projects: [
    {
      icon: "✊",
      title: "Rock Paper Scissors Game",
      description: "A fun browser-based game with simple logic."
    },
    {
      icon: "📚",
      title: "Tuition Media Web App",
      description: "A system to manage tuition communication in Sylhet."
    },
    {
      icon: "🚧",
      title: "Coming Soon",
      description: "More awesome projects are on the way!"
    }
  ]
};

// Load data into the DOM
function loadPortfolio() {
  // Hero section
  document.querySelector(".profile-pic").src = data.profileImage;
  document.querySelector("h1").innerHTML = `Hi, I'm <span class="highlight">${data.name}</span>`;
  document.querySelector(".subtitle").textContent = data.subtitle;

  // Projects
  const projectGrid = document.querySelector(".project-grid");
  projectGrid.innerHTML = "";
  data.projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <h3>${project.icon} ${project.title}</h3>
      <p>${project.description}</p>
    `;
    projectGrid.appendChild(card);
  });

  // Contact Info
  document.querySelector(".contact a[href^='mailto']").textContent = data.email;
  document.querySelector(".contact a[href^='mailto']").href = "mailto:" + data.email;
  document.querySelector("#facebook-link").href = data.facebook;

  // Footer Year
  document.getElementById("year").textContent = new Date().getFullYear();
}

// Fade in effect
const sections = document.querySelectorAll("section");
const options = {
  threshold: 0.2,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("fade-in");
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

window.onload = loadPortfolio;
