document.addEventListener("DOMContentLoaded", () => {
  // Get form elements
  const contactForm = document.getElementById("contact-form")
  const successMessage = document.querySelector(".status-message.success")
  const errorMessage = document.querySelector(".status-message.error")

  // Add form submission handler
  if (contactForm) {
    contactForm.addEventListener("submit", handleFormSubmit)
  }

  // Function to handle form submission
  async function handleFormSubmit(e) {
    e.preventDefault()

    // Hide any previous status messages
    successMessage.style.display = "none"
    errorMessage.style.display = "none"

    // Get form data
    const formData = new FormData(contactForm)
    const formDataObj = Object.fromEntries(formData.entries())

    try {
      // Simulate form submission with a delay
      // In a real implementation, you would send this data to your server or a form service
      await simulateFormSubmission(formDataObj)

      // Show success message
      successMessage.style.display = "block"

      // Reset form
      contactForm.reset()

      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.style.display = "none"
      }, 5000)
    } catch (error) {
      // Show error message
      errorMessage.style.display = "block"
      console.error("Form submission error:", error)

      // Hide error message after 5 seconds
      setTimeout(() => {
        errorMessage.style.display = "none"
      }, 5000)
    }
  }

  // Function to simulate form submission (replace with actual API call)
  function simulateFormSubmission(data) {
    return new Promise((resolve, reject) => {
      // Simulate network request
      setTimeout(() => {
        // 90% chance of success (for demo purposes)
        if (Math.random() < 0.9) {
          console.log("Form submitted successfully:", data)
          resolve({ success: true })
        } else {
          reject(new Error("Random submission error"))
        }
      }, 1500)
    })
  }

  // Add pixel art hover effects
  const pixelWindow = document.querySelector(".pixel-window")
  const pixelInputs = document.querySelectorAll(".pixel-input")

  if (pixelWindow) {
    // Add scan line animation on hover
    pixelWindow.addEventListener("mouseenter", () => {
      const scanLine = document.createElement("div")
      scanLine.className = "scan-line"
      pixelWindow.appendChild(scanLine)

      setTimeout(() => {
        if (scanLine && scanLine.parentNode) {
          scanLine.parentNode.removeChild(scanLine)
        }
      }, 4000)
    })
  }

  // Add focus effects to inputs
  pixelInputs.forEach((input) => {
    input.addEventListener("focus", function () {
      this.style.borderColor = getRandomNeonColor()
    })

    input.addEventListener("blur", function () {
      this.style.borderColor = "#3a7e7e"
    })
  })

  function getRandomNeonColor() {
    const colors = [
      "#00ffff", // cyan
      "#ff00ff", // magenta
      "#ffff00", // yellow
      "#00ff00", // green
    ]

    return colors[Math.floor(Math.random() * colors.length)]
  }

  // Add glitch effect to button on hover
  const pixelButton = document.querySelector(".pixel-button")

  if (pixelButton) {
    pixelButton.addEventListener("mouseenter", function () {
      this.classList.add("glitch-hover")

      // Random glitch effect
      const glitchInterval = setInterval(() => {
        if (Math.random() > 0.7) {
          this.style.transform = `translateY(-2px) translate(${Math.random() * 2 - 1}px, ${Math.random() * 2 - 1}px)`

          setTimeout(() => {
            this.style.transform = "translateY(-2px)"
          }, 100)
        }
      }, 500)

      // Store the interval ID to clear it later
      this.dataset.glitchInterval = glitchInterval
    })

    pixelButton.addEventListener("mouseleave", function () {
      this.classList.remove("glitch-hover")

      // Clear the glitch interval
      if (this.dataset.glitchInterval) {
        clearInterval(Number.parseInt(this.dataset.glitchInterval))
      }

      this.style.transform = "translateY(-2px)"
    })
  }

  // Update navigation link to point to the contact section
  const contactNavLink = document.querySelector('nav a[href="#"]')
  if (contactNavLink) {
    contactNavLink.href = "#contact"
  }
})
