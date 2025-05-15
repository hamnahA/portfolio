// This script integrates the projects section with the existing website

document.addEventListener("DOMContentLoaded", () => {
  // 1. Add the projects section CSS to the head
  const projectsStylesheet = document.createElement("link")
  projectsStylesheet.rel = "stylesheet"
  projectsStylesheet.href = "projects-styles.css"
  document.head.appendChild(projectsStylesheet)

  // 2. Update the navigation link to point to the projects section
  const projectsNavLink = document.querySelector('nav a[href="#"]')
  if (projectsNavLink) {
    projectsNavLink.href = "#projects"
  }

  // 3. Load the projects script
  const projectsScript = document.createElement("script")
  projectsScript.src = "projects-script.js"
  document.body.appendChild(projectsScript)

  // 4. Add keyboard shortcut for project navigation
  document.addEventListener("keydown", (e) => {
    // Press 'P' to scroll to projects section
    if (e.key === "p" && !e.ctrlKey && !e.altKey) {
      const projectsSection = document.getElementById("projects")
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  })
})
document.addEventListener("DOMContentLoaded", () => {
  // 1. Add the contact section CSS to the head
  const contactStylesheet = document.createElement("link")
  contactStylesheet.rel = "stylesheet"
  contactStylesheet.href = "contact-styles.css"
  document.head.appendChild(contactStylesheet)

  // 2. Update the navigation link to point to the contact section
  const contactNavLink = document.querySelector('nav a[href="#"]')
  if (contactNavLink) {
    contactNavLink.href = "#contact"
  }

  // 3. Load the contact script
  const contactScript = document.createElement("script")
  contactScript.src = "contact-script.js"
  document.body.appendChild(contactScript)

  // 4. Add keyboard shortcut for contact navigation
  document.addEventListener("keydown", (e) => {
    // Press 'C' to scroll to contact section
    if (e.key === "c" && !e.ctrlKey && !e.altKey) {
      const contactSection = document.getElementById("contact")
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" })
      }
    }
  })
})
