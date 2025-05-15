

const firebaseConfig = {
    apiKey: "AIzaSyA7o-3wQM9L5jG--eLTV2U4t5mrWLAnHjE",
    authDomain: "hamnah-portfolio.firebaseapp.com",
    databaseURL: "https://hamnah-portfolio-default-rtdb.firebaseio.com",
    projectId: "hamnah-portfolio",
    storageBucket: "hamnah-portfolio.firebasestorage.app",
    messagingSenderId: "905889818269",
    appId: "1:905889818269:web:044bc8aa9c82e0ea405674",
    measurementId: "G-LK4FPY1G1G"
  };

  firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const db = firebase.database();

  const FIREBASE_URL = "https://hamnah-portfolio-default-rtdb.firebaseio.com/Widgets.json";

  function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        document.getElementById('login').style.display = 'none';
        document.getElementById('logoutBtn').style.display = 'block';
        showToast("Edit mode enabled");
        loadWidgets(true);
      })
      .catch((error) => alert("Login failed: " + error.message));
  }

  function logout() {
    auth.signOut().then(() => {
      loadWidgets(false);
      document.getElementById('logoutBtn').style.display = 'none';
      document.getElementById('login').style.display = 'none';
    });
  }

  function showToast(msg) {
    const toast = document.getElementById('toast');
    toast.textContent = msg;
    toast.style.display = 'block';
    setTimeout(() => {
      toast.style.display = 'none';
    }, 2500);
  }

  // function loadWidgets(isAdmin = false) {
  //   fetch(FIREBASE_URL)
  //     .then(res => res.json())
  //     .then(data => {
  //       const container = document.getElementById("widget-container");
  //       container.innerHTML = "";

  //       data.forEach((widget, index) => {
  //         const box = document.createElement("div");
  //         box.className = "grid-box";
  //         box.innerHTML = `
  //           <h3 ${isAdmin ? "contenteditable='true' onblur='editTitle(" + index + ", this.innerText)'" : ""}>${widget.title}</h3>
  //           <p ${isAdmin ? "contenteditable='true' onblur='editContent(" + index + ", this.innerText)'" : ""}>${widget.content}</p>
  //         `;
  //         container.appendChild(box);
  //       });
  //     });
  // }
  function loadWidgets(isAdmin = false) {
    fetch(FIREBASE_URL)
      .then(res => res.json())
      .then(data => {
        const container = document.getElementById("widget-container");
        container.innerHTML = "";
  
        data.forEach((widget, index) => {
          const card = document.createElement("div");
          card.className = "vibe-card";
  
          card.innerHTML = `
            <div class="card-header">
              <div class="card-icon">
              </div>
              <h4 ${isAdmin ? `contenteditable="true" onblur="editTitle(${index}, this.innerText)"` : ""}>
                ${widget.title}
              </h4>
            </div>
            <div class="card-content">
              <p ${isAdmin ? `contenteditable="true" onblur="editContent(${index}, this.innerText)"` : ""}>
                ${widget.content}
              </p>
            </div>
          `;
  
          container.appendChild(card);
        });
      });
  }
  
  function editTitle(index, newTitle) {
    db.ref("Widgets/" + index + "/title").set(newTitle);
  }

  function editContent(index, newContent) {
    db.ref("Widgets/" + index + "/content").set(newContent);
  }

  // Secret shortcut to toggle login
  window.addEventListener("keydown", function (e) {
    if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      const loginBox = document.getElementById("login");
      loginBox.style.display = loginBox.style.display === 'none' ? 'block' : 'none';
    }
  });

  // Load viewer mode on start
  loadWidgets(false);

 // Add this to your main.js file - improved version for correct active state
document.addEventListener('DOMContentLoaded', function() {
// Set initial active link based on URL hash
setActiveNavLink();

// Update active link when hash changes
window.addEventListener('hashchange', setActiveNavLink);

function setActiveNavLink() {
  // Get all navigation links
  const navLinks = document.querySelectorAll('nav a');
  
  // Remove active class from all links
  navLinks.forEach(link => {
    link.classList.remove('active');
    // Also remove any inline styles that might be causing issues
    link.style.textDecoration = '';
  });
  
  // Get current hash from URL
  let currentHash = document.location.hash;
  
  // If no hash is present but we're on the homepage
  if (!currentHash && (document.location.pathname === '/' || document.location.pathname.endsWith('index.html'))) {
    currentHash = '#'; // Default to home
  }
  
  // Find the matching navigation link
  const activeLink = currentHash ? 
                    document.querySelector(`nav a[href="${currentHash}"]`) : 
                    document.querySelector('nav a[href="#"]');
  
  // Apply active class to the current link if found
  if (activeLink) {
    activeLink.classList.add('active');
    console.log('Active link set to:', currentHash || 'home');
  } else {
    console.log('No matching navigation link found for:', currentHash);
  }
}

// Also add click handlers to each nav link to ensure proper highlighting
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    // Remove active class from all links
    document.querySelectorAll('nav a').forEach(l => {
      l.classList.remove('active');
    });
    
    // Add active class to clicked link
    this.classList.add('active');
  });
});
});
document.addEventListener('DOMContentLoaded', function() {
    // Glitch effect enhancement
    const glitchText = document.querySelector('.glitch');
    
    function randomGlitch() {
        const duration = Math.random() * 200 + 50;
        
        glitchText.style.textShadow = `
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(255, 0, 255, 0.7),
            ${Math.random() * 10 - 5}px ${Math.random() * 10 - 5}px 0 rgba(0, 255, 255, 0.7)
        `;
        
        setTimeout(() => {
            glitchText.style.textShadow = 'none';
        }, duration);
    }
    
    // Random glitch effect
    setInterval(() => {
        if (Math.random() > 0.7) {
            randomGlitch();
        }
    }, 2000);
    
    // Terminal typing effect
    const terminalBody = document.querySelector('.terminal-body p');
    const terminalText = terminalBody.textContent;
    terminalBody.textContent = '';
    
    let i = 0;
    const typeTerminal = () => {
        if (i < terminalText.length) {
            terminalBody.textContent += terminalText.charAt(i);
            i++;
            setTimeout(typeTerminal, Math.random() * 50 + 20);
        }
    };
    
    // Start typing when terminal is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(typeTerminal, 500);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(document.querySelector('.terminal'));
    
    // Add hover effects to cards
    const cards = document.querySelectorAll('.vibe-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const randomColor = getRandomNeonColor();
            this.style.borderColor = randomColor;
            this.style.boxShadow = `0 0 15px ${randomColor}`;
            
            const header = this.querySelector('.card-header h4');
            if (header) {
                header.style.color = randomColor;
            }
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'rgba(0, 255, 255, 0.1)';
            this.style.boxShadow = 'var(--shadow)';
            
            const header = this.querySelector('.card-header h4');
            if (header) {
                header.style.color = 'var(--primary)';
            }
        });
    });
    
    function getRandomNeonColor() {
        const colors = [
            '#00ffff', // cyan
            '#ff00ff', // magenta
            '#ffff00', // yellow
            '#00ff00', // green
            '#ff3399'  // pink
        ];
        
        return colors[Math.floor(Math.random() * colors.length)];
    }
    
    // Add parallax effect to grid
    document.addEventListener('mousemove', function(e) {
        const grid = document.querySelector('.grid-overlay');
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        
        grid.style.backgroundPosition = `${x * 20}px ${y * 20}px`;
    });
    
    // Mobile menu
    const createMobileMenu = () => {
        const header = document.querySelector('header .container');
        
        if (document.querySelector('.mobile-menu-btn')) return;
        
        const mobileMenuBtn = document.createElement('div');
        mobileMenuBtn.classList.add('mobile-menu-btn');
        mobileMenuBtn.innerHTML = `
            <div class="hamburger">
                <span></span>
                <span></span>
                <span></span>
            </div>
        `;
        
        header.appendChild(mobileMenuBtn);
        
        const navLinks = document.querySelector('.nav-links');
        const navClone = navLinks.cloneNode(true);
        navClone.classList.add('mobile-nav');
        document.body.appendChild(navClone);
        
        mobileMenuBtn.addEventListener('click', function() {
            this.classList.toggle('active');
            navClone.classList.toggle('show');
        });
    };
    
    // Create mobile menu if screen width is less than 576px
    if (window.innerWidth < 576) {
        createMobileMenu();
    }
    
    // Update on resize
    window.addEventListener('resize', function() {
        if (window.innerWidth < 576 && !document.querySelector('.mobile-menu-btn')) {
            createMobileMenu();
        }
    });
    
    // Add CSS for mobile menu
    const style = document.createElement('style');
    style.textContent = `
        .mobile-menu-btn {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1000;
        }
        
        .hamburger {
            width: 30px;
            height: 20px;
            position: relative;
        }
        
        .hamburger span {
            display: block;
            width: 100%;
            height: 2px;
            background-color: var(--primary);
            position: absolute;
            left: 0;
            transition: var(--transition);
        }
        
        .hamburger span:nth-child(1) {
            top: 0;
        }
        
        .hamburger span:nth-child(2) {
            top: 50%;
            transform: translateY(-50%);
        }
        
        .hamburger span:nth-child(3) {
            bottom: 0;
        }
        
        .mobile-menu-btn.active .hamburger span:nth-child(1) {
            transform: translateY(9px) rotate(45deg);
        }
        
        .mobile-menu-btn.active .hamburger span:nth-child(2) {
            opacity: 0;
        }
        
        .mobile-menu-btn.active .hamburger span:nth-child(3) {
            transform: translateY(-9px) rotate(-45deg);
        }
        
        .mobile-nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100vh;
            background-color: rgba(10, 10, 22, 0.95);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 2rem;
            z-index: 999;
            transform: translateY(-100%);
            transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            backdrop-filter: blur(10px);
        }
        
        .mobile-nav.show {
            transform: translateY(0);
        }
        
        .mobile-nav a {
            font-size: 1.5rem;
            padding: 1rem;
        }
    `;
    
    document.head.appendChild(style);
    
    // Add cyber button effect
    const cyberButton = document.querySelector('.cyber-button');
    
    cyberButton.addEventListener('mouseenter', function() {
        this.style.setProperty('--shadow-color', 'rgba(0, 255, 255, 0.5)');
    });
    
    cyberButton.addEventListener('mouseleave', function() {
        this.style.setProperty('--shadow-color', 'rgba(0, 255, 255, 0.2)');
    });
});
document.addEventListener('DOMContentLoaded', function() {
  // Get elements
  const viewJourneyBtn = document.getElementById('view-journey-btn');
  const minimizeJourneyBtn = document.getElementById('minimize-journey-btn');
  const journeyPreview = document.getElementById('journey-preview');
  const journeyTimeline = document.getElementById('journey-timeline');
  
  // Add click event to view journey button
  viewJourneyBtn.addEventListener('click', function() {
      // Play button click sound (optional)
      playSound('click');
      
      // Hide the preview with loading animation
      journeyPreview.style.opacity = '0';
      
      // After animation completes, hide preview and show timeline
      setTimeout(() => {
          journeyPreview.style.display = 'none';
          journeyTimeline.style.display = 'block';
          
          // Set animation delay for timeline items
          const timelineItems = document.querySelectorAll('.timeline-item');
          timelineItems.forEach((item, index) => {
              item.style.setProperty('--item-index', index);
          });
          
          // Animate progress bars
          animateProgressBars();
          
          // Add glitch effect to locked items
          addGlitchEffects();
          
          // Play reveal sound (optional)
          playSound('reveal');
      }, 500);
  });
  
  // Add click event to minimize button
  minimizeJourneyBtn.addEventListener('click', function() {
      // Play button click sound (optional)
      playSound('click');
      
      // Hide timeline
      journeyTimeline.style.opacity = '0';
      
      // After animation completes, hide timeline and show preview
      setTimeout(() => {
          journeyTimeline.style.display = 'none';
          journeyTimeline.style.opacity = '1';
          journeyPreview.style.display = 'flex';
          journeyPreview.style.opacity = '1';
      }, 500);
  });
  
  // Function to animate progress bars
  function animateProgressBars() {
      const progressBars = document.querySelectorAll('.progress-bar');
      
      progressBars.forEach(bar => {
          const width = bar.style.width;
          bar.style.width = '0%';
          
          setTimeout(() => {
              bar.style.width = width;
          }, 300);
      });
  }
  
  // Function to add glitch effects to locked items
  function addGlitchEffects() {
      const lockedItems = document.querySelectorAll('.timeline-item.locked');
      
      lockedItems.forEach(item => {
          const title = item.querySelector('.milestone-title');
          const originalText = title.textContent;
          
          setInterval(() => {
              if (Math.random() > 0.9) {
                  title.textContent = generateGlitchText(originalText);
                  setTimeout(() => {
                      title.textContent = originalText;
                  }, 200);
              }
          }, 3000);
      });
  }
  
  // Function to generate random glitch text
  function generateGlitchText(text) {
      const chars = '!@#$%^&*()_+-=[]{}|;:,.<>?/';
      let result = '';
      
      for (let i = 0; i < text.length; i++) {
          if (Math.random() > 0.7) {
              result += chars[Math.floor(Math.random() * chars.length)];
          } else {
              result += text[i];
          }
      }
      
      return result;
  }
  
  // Function to play sound effects (optional)
  function playSound(type) {
      // Uncomment and implement if you want sound effects
      /*
      const sounds = {
          click: 'click.mp3',
          reveal: 'reveal.mp3'
      };
      
      const sound = new Audio(sounds[type]);
      sound.volume = 0.2;
      sound.play();
      */
  }
  
  // Add hover effects to timeline items
  const timelineItems = document.querySelectorAll('.timeline-item');
  
  timelineItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
          // Add any additional hover effects here
      });
  });
});

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
