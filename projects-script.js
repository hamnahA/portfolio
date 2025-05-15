document.addEventListener("DOMContentLoaded", () => {
  // Sample project data - replace with your actual projects
  const projects = [
    {
      id: 1,
      title: "Neural Interface Dashboard",
      brief: "A futuristic dashboard for monitoring neural connections with real-time data visualization.",
      description:
        "$ This project simulates a neural interface dashboard that monitors brain activity and neural connections in real-time. It features advanced data visualization techniques and a futuristic UI that responds to user interactions.\n\n$ The dashboard includes multiple views for different neural metrics, customizable alerts, and a predictive algorithm that anticipates neural patterns.\n\n$ I built this using React for the frontend, with D3.js for the complex visualizations. The backend uses Node.js with WebSockets for real-time data streaming.",
      // thumbnail: "/placeholder.svg?height=180&width=300",
      thumbnail: "cafe.png",
      status: "completed", // completed, in-progress, concept
      tags: ["React", "D3.js", "WebSockets"],
      techStack: ["React", "D3.js", "Node.js", "WebSockets", "SCSS"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 2,
      title: "Quantum Algorithm Visualizer",
      brief: "Interactive tool for visualizing quantum computing algorithms and their operations.",
      description:
        "$ The Quantum Algorithm Visualizer is an educational tool designed to help people understand how quantum computing algorithms work through interactive visualizations.\n\n$ Users can step through famous quantum algorithms like Shor's, Grover's, and quantum teleportation, seeing exactly how qubits change state at each step.\n\n$ Built with TypeScript and Three.js for the 3D visualizations, with a custom physics engine to simulate quantum behavior.",
      thumbnail: "/placeholder.svg?height=180&width=300",
      status: "in-progress",
      tags: ["TypeScript", "Three.js", "Quantum"],
      techStack: ["TypeScript", "Three.js", "WebGL", "HTML5 Canvas", "Web Workers"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 3,
      title: "Cyberpunk City Generator",
      brief: "Procedural generator that creates unique cyberpunk cityscapes with neon aesthetics.",
      description:
        "$ The Cyberpunk City Generator creates unique, procedurally generated cyberpunk cityscapes with detailed neon lighting, holographic advertisements, and futuristic architecture.\n\n$ Each generated city is completely unique, with its own layout, building styles, color schemes, and atmospheric conditions. Users can export their creations as high-resolution images.\n\n$ This project uses WebGL for rendering and custom shaders for the neon lighting effects. The procedural generation algorithms are based on modified Perlin noise functions.",
      thumbnail: "/placeholder.svg?height=180&width=300",
      status: "completed",
      tags: ["WebGL", "Procedural", "Shaders"],
      techStack: ["JavaScript", "WebGL", "GLSL Shaders", "Canvas API", "Perlin Noise"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 4,
      title: "AI Text Adventure",
      brief: "Text-based adventure game powered by AI that creates unique storylines for each player.",
      description:
        "$ This AI-powered text adventure game creates unique, personalized storylines for each player. The game adapts to player choices and writing style, creating a deeply immersive narrative experience.\n\n$ The game features multiple genres including cyberpunk, fantasy, and sci-fi, with branching storylines and dynamic character development based on player decisions.\n\n$ Built using a fine-tuned language model for the narrative generation, with a Node.js backend and a minimalist terminal-inspired UI.",
      thumbnail: "/placeholder.svg?height=180&width=300",
      status: "in-progress",
      tags: ["AI", "Node.js", "Game"],
      techStack: ["JavaScript", "Node.js", "OpenAI API", "Express", "MongoDB"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 5,
      title: "Holographic UI Kit",
      brief: "A collection of holographic UI components for futuristic web applications.",
      description:
        "$ The Holographic UI Kit is a comprehensive collection of UI components designed for futuristic and sci-fi themed web applications. It features holographic effects, glitch animations, and cyberpunk-inspired design elements.\n\n$ The kit includes buttons, cards, forms, navigation elements, loaders, and modals, all with customizable colors and effects. Each component is responsive and accessible.\n\n$ Built with vanilla JavaScript and CSS, with no dependencies, making it easy to integrate into any project. All effects are achieved using CSS animations and transforms for optimal performance.",
      thumbnail: "/placeholder.svg?height=180&width=300",
      status: "concept",
      tags: ["UI/UX", "CSS", "Animation"],
      techStack: ["HTML5", "CSS3", "JavaScript", "SVG", "CSS Variables"],
      liveLink: "#",
      codeLink: "#",
    },
    {
      id: 6,
      title: "Biometric Authentication System",
      brief: "Secure authentication system using facial recognition and fingerprint scanning.",
      description:
        "$ This biometric authentication system combines facial recognition and fingerprint scanning for highly secure user verification. It features liveness detection to prevent spoofing attacks and encrypted storage of biometric templates.\n\n$ The system includes an admin dashboard for managing users and monitoring authentication attempts, with detailed analytics and security logs.\n\n$ Built using TensorFlow.js for the facial recognition component, with WebAuthn for the fingerprint authentication. The backend uses Node.js with a secure database for storing encrypted templates.",
      thumbnail: "/placeholder.svg?height=180&width=300",
      status: "completed",
      tags: ["Security", "TensorFlow", "WebAuthn"],
      techStack: ["JavaScript", "TensorFlow.js", "WebAuthn API", "Node.js", "PostgreSQL"],
      liveLink: "#",
      codeLink: "#",
    },
  ]

  // Function to render project cards
  function renderProjects() {
    const projectsGrid = document.querySelector(".projects-grid")

    projects.forEach((project) => {
      const card = document.createElement("div")
      card.className = "project-card"
      card.dataset.id = project.id

      // Status badge class based on project status
      let statusClass = ""
      let statusIcon = ""

      switch (project.status) {
        case "completed":
          statusClass = "status-completed"
          statusIcon = "✓"
          break
        case "in-progress":
          statusClass = "status-in-progress"
          statusIcon = "⟳"
          break
        case "concept":
          statusClass = "status-concept"
          statusIcon = "✧"
          break
      }

      card.innerHTML = `
                <img src="${project.thumbnail}" alt="${project.title}" class="project-thumbnail">
                <div class="project-info-preview">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-brief">${project.brief}</p>
                    <div class="project-tags">
                        ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join("")}
                    </div>
                </div>
                <div class="project-status ${statusClass}">
                    <span class="status-icon">${statusIcon}</span>
                    <span class="status-text">[${project.status.toUpperCase()}]</span>
                </div>
                <div class="glitch-overlay"></div>
            `

      // Add click event to open modal
      card.addEventListener("click", () => openProjectModal(project))

      projectsGrid.appendChild(card)
    })
  }

  // Function to open project modal
  function openProjectModal(project) {
    const modal = document.querySelector(".project-detail-modal")
    const modalTitle = modal.querySelector(".modal-title")
    const modalImage = modal.querySelector(".project-detail-image")
    const modalDescription = modal.querySelector(".description-text")
    const techTags = modal.querySelector(".tech-tags")
    const liveLink = modal.querySelector(".live-link")
    const codeLink = modal.querySelector(".code-link")

    // Set modal content
    modalTitle.textContent = project.title
    modalImage.src = project.thumbnail
    modalImage.alt = project.title

    // Set description with terminal-style formatting
    modalDescription.textContent = project.description

    // Clear and add tech stack tags
    techTags.innerHTML = ""
    project.techStack.forEach((tech) => {
      const tag = document.createElement("span")
      tag.className = "tech-tag"
      tag.textContent = tech
      techTags.appendChild(tag)
    })

    // Set links
    liveLink.href = project.liveLink
    codeLink.href = project.codeLink

    // Show modal with animation
    modal.classList.add("show")

    // Add typing effect to description
    typeDescription(project.description)
  }

  // Function for typing effect in modal description
  function typeDescription(text) {
    const descriptionEl = document.querySelector(".description-text")
    descriptionEl.textContent = ""

    // Split by terminal prompt
    const parts = text.split("$ ")
    let currentPartIndex = 0
    let currentCharIndex = 0

    function typeNextChar() {
      if (currentPartIndex >= parts.length) return

      // Skip the first empty part if it exists
      if (currentPartIndex === 0 && parts[0] === "") {
        currentPartIndex++
        if (currentPartIndex >= parts.length) return
      }

      const currentPart = parts[currentPartIndex]

      // Add terminal prompt at the beginning of each part
      if (currentCharIndex === 0 && currentPartIndex > 0) {
        const promptSpan = document.createElement("span")
        promptSpan.className = "prompt"
        promptSpan.textContent = "$ "
        descriptionEl.appendChild(promptSpan)
      }

      // Type the next character
      if (currentCharIndex < currentPart.length) {
        descriptionEl.textContent += currentPart[currentCharIndex]
        currentCharIndex++
        setTimeout(typeNextChar, Math.random() * 30 + 10)
      } else {
        // Move to next part
        descriptionEl.innerHTML += "<br><br>"
        currentPartIndex++
        currentCharIndex = 0
        if (currentPartIndex < parts.length) {
          setTimeout(typeNextChar, 500)
        }
      }
    }

    // Start typing
    setTimeout(typeNextChar, 300)
  }

  // Function to close modal
  function closeProjectModal() {
    const modal = document.querySelector(".project-detail-modal")
    modal.classList.remove("show")
  }

  // Add event listener to close button
  document.querySelector(".close-modal-btn").addEventListener("click", closeProjectModal)

  // Close modal when clicking outside content
  document.querySelector(".project-detail-modal").addEventListener("click", function (e) {
    if (e.target === this) {
      closeProjectModal()
    }
  })

  // Close modal with Escape key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeProjectModal()
    }
  })

  // Initialize projects
  renderProjects()

  // Add scanner line animation
  const projectsContainer = document.querySelector(".projects-grid-container")

  projectsContainer.addEventListener("mouseenter", () => {
    const scannerLine = document.querySelector(".scanner-line")
    scannerLine.style.animation = "none"
    void scannerLine.offsetWidth // Trigger reflow
    scannerLine.style.animation = "scan 3s linear infinite"
  })

  // Add parallax effect to project cards
  document.addEventListener("mousemove", (e) => {
    const cards = document.querySelectorAll(".project-card")
    const x = e.clientX / window.innerWidth - 0.5
    const y = e.clientY / window.innerHeight - 0.5

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect()
      const cardCenterX = rect.left + rect.width / 2
      const cardCenterY = rect.top + rect.height / 2

      // Calculate distance from mouse to card center
      const distX = (e.clientX - cardCenterX) / 30
      const distY = (e.clientY - cardCenterY) / 30

      // Apply transform only if mouse is relatively close to the card
      if (Math.abs(distX) < 20 && Math.abs(distY) < 20) {
        card.style.transform = `perspective(1000px) rotateY(${distX * 0.2}deg) rotateX(${-distY * 0.2}deg) translateZ(10px)`
      } else {
        card.style.transform = ""
      }
    })
  })

  // Reset transforms when mouse leaves
  document.addEventListener("mouseleave", () => {
    const cards = document.querySelectorAll(".project-card")
    cards.forEach((card) => {
      card.style.transform = ""
    })
  })
})
