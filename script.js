// Portfolio JavaScript - Modern Dark Theme

// Data
const portfolioData = {
    skills: [
        { name: 'HTML', level: 95, category: 'frontend', icon: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 17.56L4.85 3.48h14.3L12 17.56zM8.4 9.17L12 16.4l3.6-7.23H8.4z"/></svg>' },
        { name: 'CSS', level: 90, category: 'frontend', icon: '<svg class="icon" viewBox="0 0 24 24"><path d="M4.5 10.5C4.5 12.981 6.519 15 9 15s4.5-2.019 4.5-4.5S11.481 6 9 6 4.5 8.019 4.5 10.5zM9 8c1.378 0 2.5 1.122 2.5 2.5S10.378 13 9 13 6.5 11.878 6.5 10.5 7.622 8 9 8zm6.5 1h5v2h-5v-2zm0-4h5v2h-5V5zm0 8h5v2h-5v-2z"/></svg>' },
        { name: 'JavaScript', level: 85, category: 'frontend', icon: '<svg class="icon" viewBox="0 0 24 24"><path d="M3 3h18v18H3V3zm16.525 13.707c-.131-.821-.666-1.511-2.252-2.155-.552-.252-1.165-.438-1.349-.854-.068-.247-.078-.382-.034-.529.113-.484.687-.629 1.137-.495.293.09.507.293.629.631.666-.427.666-.427 1.125-.714-.17-.262-.252-.382-.361-.495-.387-.433-1.014-.666-1.957-.647l-.484.056c-.465.113-.907.349-1.179.666-.785.89-.562 2.447.393 3.082.945.594 2.323.728 2.495 1.316.17.699-.514 1.025-1.179 1.034-.728.016-1.144-.224-1.587-.832l-1.165.676c.14.224.283.327.507.521 1.071.945 3.761.899 4.236-.521.018-.056.131-.382.034-.899zm-5.933-.016c-.224-.507-.224-.945-.158-1.316.102-.438.416-.785.832-.907.728-.238 1.316.17 1.488.631.17.438-.034 1.316-.832 1.316-.361 0-.619-.158-1.025-.495l-1.125.652c.187.327.393.465.69.666.737.495 1.722.676 2.609.393.832-.262 1.316-.832 1.488-1.634.17-.699-.045-1.511-.495-1.986-.737-.785-2.012-1.059-3.034-.629-.521.224-.832.594-1.025 1.059-.283.629-.224 1.311.072 4.948.2 4.358 2.618 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.072-4.948 0-3.259-.014-3.668-.072-4.948-.072-4.354-.2-6.782-2.618-6.979-6.98-.059-1.281-.073-1.689-.072-4.948z"/></svg>' },
        { name: 'React', level: 80, category: 'frontend', icon: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>' },
        { name: 'Node.js', level: 85, category: 'backend', icon: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>' },
        { name: 'MongoDB', level: 80, category: 'database', icon: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>' },
        { name: 'Git', level: 90, category: 'tools', icon: '<svg class="icon" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/></svg>' },
    ],
    projects: [
        {
            id: 1,
            title: 'Portfolio Website',
            description: 'Personal portfolio website built with React and Node.js, featuring project galleries, contact forms, and responsive design.',
            image: 'https://i.pinimg.com/736x/88/84/a7/8884a7b0c6e6779e6cf473bfccab6a9d.jpg',
            category: 'fullstack',
            tech: ['React', 'Node.js', 'MongoDB', 'CSS'],
            liveLink: 'https://mark-njoroge-portfolio.vercel.app',
            githubLink: 'https://github.com/marknjoroge/portfolio'
        },
        {
            id: 2,
            title: 'E-commerce Platform',
            description: 'Full-featured e-commerce platform with shopping cart, payment integration, and admin dashboard.',
            image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop',
            category: 'fullstack',
            tech: ['React', 'Node.js', 'Stripe', 'MongoDB'],
            liveLink: 'https://ecommerce-demo.vercel.app',
            githubLink: 'https://github.com/marknjoroge/ecommerce-platform'
        },
        {
            id: 3,
            title: 'Task Management App',
            description: 'Collaborative task management application with real-time updates and team collaboration features.',
            image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop',
            category: 'frontend',
            tech: ['Vue.js', 'Firebase', 'Vuex', 'CSS'],
            liveLink: 'https://task-manager-demo.vercel.app',
            githubLink: 'https://github.com/marknjoroge/task-manager'
        },
        {
            id: 4,
            title: 'Social Media Dashboard',
            description: 'Analytics dashboard for social media metrics with data visualization and reporting features.',
            image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop',
            category: 'fullstack',
            tech: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
            liveLink: 'https://social-dashboard.vercel.app',
            githubLink: 'https://github.com/marknjoroge/social-dashboard'
        }
    ],
    };

// DOM Elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const typingText = document.querySelector('.typing-text');
const statNumbers = document.querySelectorAll('.stat-number');
const contactForm = document.getElementById('contact-form');
const themeToggle = document.getElementById('theme-toggle');
const backToTop = document.getElementById('back-to-top');
const downloadCv = document.getElementById('download-cv');

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    initializePageLoader();
    initializeParticles();
    initializeMouseTrail();
    initializeParallax();
    initializeGlitchEffect();
    initializeTheme();
    initializeNavigation();
    initializeTypingEffect();
    initializeSkills();
    initializeProjects();
        initializeCounters();
    initializeContactForm();
    initializeScrollEffects();
    initializeBackToTop();
    initializeDownloadCV();
});

// Page Loader
function initializePageLoader() {
    const pageLoader = document.getElementById('page-loader');
    
    // Hide loader after content is loaded
    window.addEventListener('load', () => {
        setTimeout(() => {
            pageLoader.classList.add('hidden');
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500);
        }, 1000);
    });
    
    // Initialize section animations
    initializeSectionAnimations();
}

// Section Animations
function initializeSectionAnimations() {
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animate skill bars when skills section is visible
                if (entry.target.classList.contains('skills')) {
                    animateSkillBars();
                }
                
                // Animate counters when stats section is visible
                if (entry.target.classList.contains('about')) {
                    animateCounters();
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.classList.add('section-animate');
        observer.observe(section);
    });
}

// Enhanced Skill Bar Animation
function animateSkillBars() {
    const progressBars = document.querySelectorAll('.skill-progress');
    
    progressBars.forEach((bar, index) => {
        const width = bar.getAttribute('data-width');
        bar.style.width = '0%';
        
        setTimeout(() => {
            bar.style.width = width + '%';
        }, index * 100);
    });
}

// Enhanced Counter Animation
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (count < target) {
                count += increment;
                counter.textContent = Math.ceil(count);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCounter();
    });
}

// Particle Animation
function initializeParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (15 + Math.random() * 10) + 's';
        particlesContainer.appendChild(particle);
    }
}

// Unique Mouse Trail Effect
function initializeMouseTrail() {
    const trail = [];
    const maxTrailLength = 20;
    
    document.addEventListener('mousemove', (e) => {
        if (Math.random() > 0.95) { // Only create trail occasionally
            const dot = document.createElement('div');
            dot.className = 'mouse-trail-dot';
            dot.style.left = e.clientX + 'px';
            dot.style.top = e.clientY + 'px';
            dot.style.background = `hsl(${Math.random() * 60 + 160}, 100%, 70%)`;
            document.body.appendChild(dot);
            
            trail.push(dot);
            
            if (trail.length > maxTrailLength) {
                const oldDot = trail.shift();
                oldDot.remove();
            }
            
            setTimeout(() => {
                dot.style.opacity = '0';
                setTimeout(() => dot.remove(), 500);
            }, 100);
        }
    });
}

// Parallax Effect
function initializeParallax() {
    const heroContent = document.querySelector('.hero-content-wrapper');
    const heroImage = document.querySelector('.hero-image');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
        if (heroImage) {
            heroImage.style.transform = `translateY(${scrolled * parallaxSpeed * 0.8}px) scale(${1 + scrolled * 0.0005})`;
        }
    });
}

// Glitch Text Effect
function initializeGlitchEffect() {
    const title = document.querySelector('.hero-title');
    
    title.addEventListener('mouseenter', () => {
        title.style.animation = 'glitch 0.3s ease-in-out';
        setTimeout(() => {
            title.style.animation = '';
        }, 300);
    });
}

// Theme Management
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    document.documentElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('svg');
    if (theme === 'dark') {
        icon.innerHTML = '<path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>';
    } else {
        icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    }
}

// Navigation
function initializeNavigation() {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                navMenu.classList.remove('active');
                
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });
}

// Typing Effect
function initializeTypingEffect() {
    const titles = ['Web Developer', 'Frontend Developer', 'Backend Developer', 'Full Stack Developer'];
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentTitle = titles[titleIndex];
        
        if (isDeleting) {
            typingText.textContent = currentTitle.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingText.textContent = currentTitle.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentTitle.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            titleIndex = (titleIndex + 1) % titles.length;
            typingSpeed = 500;
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
}

// Skills Section
function initializeSkills() {
    const skillsContainer = document.querySelector('.skills-container');
    const categoryButtons = document.querySelectorAll('.skill-category-btn');
    
    // Initial render
    renderSkills('all');
    
    // Category filter functionality
    categoryButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const category = btn.dataset.category;
            renderSkills(category);
        });
    });
    
    function renderSkills(category) {
        const filteredSkills = portfolioData.skills.filter(skill => 
            category === 'all' || skill.category === category
        );
        
        skillsContainer.innerHTML = filteredSkills.map((skill, index) => `
            <div class="skill-item" data-category="${skill.category}" style="animation-delay: ${index * 0.1}s">
                <div class="skill-icon">
                    ${skill.icon}
                </div>
                <div class="skill-name">${skill.name}</div>
                <div class="skill-level">${skill.level}%</div>
                <div class="skill-bar">
                    <div class="skill-progress" style="width: 0%" data-width="${skill.level}%"></div>
                </div>
            </div>
        `).join('');
        
        // Animate skill bars with staggered timing
        setTimeout(() => {
            const progressBars = skillsContainer.querySelectorAll('.skill-progress');
            progressBars.forEach((bar, index) => {
                setTimeout(() => {
                    const width = bar.getAttribute('data-width');
                    bar.style.width = width;
                }, index * 100);
            });
        });
    }
}


// Advanced Animations for Modern Projects
function addModernProjectAnimations() {
    const cards = document.querySelectorAll('.modern-project-card');
    
    cards.forEach((card, index) => {
        // Initial state
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px) scale(0.9)';
        card.style.filter = 'blur(10px)';
        
        // Staggered entrance animation
        setTimeout(() => {
            card.style.transition = 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0) scale(1)';
            card.style.filter = 'blur(0)';
        }, index * 300);
        
        // Add parallax effect on mouse move
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-15px) scale(1.02)`;
        });
        
        // Reset on mouse leave
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0) scale(1)';
        });
        
        // Add click ripple effect
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.borderRadius = '50%';
            ripple.style.background = 'rgba(100, 255, 218, 0.3)';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.animation = 'rippleEffect 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            const rect = this.getBoundingClientRect();
            ripple.style.left = (e.clientX - rect.left - 10) + 'px';
            ripple.style.top = (e.clientY - rect.top - 10) + 'px';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
    
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            }
        });
    }, {
        threshold: 0.1
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
}

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes rippleEffect {
        to {
            width: 400px;
            height: 400px;
            margin-left: -200px;
            margin-top: -200px;
            opacity: 0;
        }
    }
    
    .modern-project-card.in-view {
        animation: cardGlow 3s ease-in-out infinite alternate;
    }
    
    @keyframes cardGlow {
        from {
            box-shadow: 0 0 20px rgba(100, 255, 218, 0.1);
        }
        to {
            box-shadow: 0 0 40px rgba(100, 255, 218, 0.2);
        }
    }
`;
document.head.appendChild(rippleStyle);

// Photo Gallery Projects System
class PhotoGallery {
    constructor() {
        this.projects = [...portfolioData.projects];
        this.currentIndex = 0;
        this.modal = null;
        
        this.init();
    }
    
    init() {
        this.renderGallery();
        this.setupModalHandlers();
    }
    
    renderGallery() {
        const galleryGrid = document.querySelector('.gallery-grid');
        if (!galleryGrid) return;
        
        const photoCards = this.projects.map((project, index) => this.createPhotoCard(project, index)).join('');
        galleryGrid.innerHTML = photoCards;
        
        // Add click handlers
        this.setupPhotoCardHandlers();
        
        // Add entrance animations
        this.addCardAnimations();
    }
    
    createPhotoCard(project, index) {
        return `
            <div class="photo-card" data-project-index="${index}">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="photo-overlay">
                    <div class="photo-info">
                        <h3 class="photo-title">${project.title}</h3>
                        <span class="photo-category">${project.category}</span>
                    </div>
                </div>
            </div>
        `;
    }
    
    setupPhotoCardHandlers() {
        const photoCards = document.querySelectorAll('.photo-card');
        photoCards.forEach(card => {
            card.addEventListener('click', () => {
                const index = parseInt(card.dataset.projectIndex);
                this.openModal(index);
            });
        });
    }
    
    openModal(index) {
        this.currentIndex = index;
        const project = this.projects[index];
        const modal = document.getElementById('photo-modal');
        
        if (!modal || !project) return;
        
        // Update modal content
        document.getElementById('modal-photo').src = project.image;
        document.getElementById('modal-photo').alt = project.title;
        document.getElementById('modal-title').textContent = project.title;
        document.getElementById('modal-description').textContent = project.description;
        document.getElementById('modal-live-link').href = project.liveLink;
        document.getElementById('modal-github-link').href = project.githubLink;
        
        // Update tech tags
        const techTagsContainer = document.getElementById('modal-tech-tags');
        if (techTagsContainer) {
            techTagsContainer.innerHTML = project.tech.map(tech => 
                `<span class="modal-tech-tag">${tech}</span>`
            ).join('');
        }
        
        // Show modal
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Setup navigation
        this.setupNavigationHandlers();
    }
    
    closeModal() {
        const modal = document.getElementById('photo-modal');
        if (modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    setupModalHandlers() {
        this.modal = document.getElementById('photo-modal');
        
        // Close button
        const closeBtn = document.getElementById('photo-modal-close');
        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.closeModal());
        }
        
        // Overlay click
        const overlay = document.getElementById('photo-modal-overlay');
        if (overlay) {
            overlay.addEventListener('click', () => this.closeModal());
        }
        
        // Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') {
                this.closeModal();
            }
        });
    }
    
    setupNavigationHandlers() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', () => this.navigate(-1));
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', () => this.navigate(1));
        }
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.modal.classList.contains('active')) return;
            
            if (e.key === 'ArrowLeft') {
                this.navigate(-1);
            } else if (e.key === 'ArrowRight') {
                this.navigate(1);
            }
        });
    }
    
    navigate(direction) {
        this.currentIndex += direction;
        
        // Wrap around
        if (this.currentIndex < 0) {
            this.currentIndex = this.projects.length - 1;
        } else if (this.currentIndex >= this.projects.length) {
            this.currentIndex = 0;
        }
        
        this.openModal(this.currentIndex);
    }
    
    addCardAnimations() {
        const photoCards = document.querySelectorAll('.photo-card');
        photoCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px) scale(0.9)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0) scale(1)';
            }, index * 100);
        });
    }
}

// Initialize Photo Gallery
let photoGallery;
document.addEventListener('DOMContentLoaded', () => {
    photoGallery = new PhotoGallery();
});

// Enhanced Contact Form
function initializeContactForm() {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    
    // Form validation
    function validateForm() {
        let isValid = true;
        
        // Reset previous errors
        document.querySelectorAll('.form-input, .form-textarea').forEach(input => {
            input.classList.remove('error');
        });
        
        // Validate name
        if (nameInput.value.trim().length < 2) {
            nameInput.classList.add('error');
            isValid = false;
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.classList.add('error');
            isValid = false;
        }
        
        // Validate message
        if (messageInput.value.trim().length < 10) {
            messageInput.classList.add('error');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Real-time validation
    nameInput.addEventListener('blur', () => {
        if (nameInput.value.trim().length < 2) {
            nameInput.classList.add('error');
        } else {
            nameInput.classList.remove('error');
        }
    });
    
    emailInput.addEventListener('blur', () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailInput.classList.add('error');
        } else {
            emailInput.classList.remove('error');
        }
    });
    
    messageInput.addEventListener('blur', () => {
        if (messageInput.value.trim().length < 10) {
            messageInput.classList.add('error');
        } else {
            messageInput.classList.remove('error');
        }
    });
    
    // Form submission
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.classList.add('loading');
        submitBtn.textContent = '';
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const formData = {
            name: nameInput.value,
            email: emailInput.value,
            message: messageInput.value
        };
        
        // Here you would normally send data to a server
        console.log('Form submitted:', formData);
        
        // Show success message
        submitBtn.disabled = false;
        submitBtn.classList.remove('loading');
        submitBtn.textContent = 'Send Message';
        
        const successMessage = document.createElement('div');
        successMessage.className = 'form-success';
        successMessage.innerHTML = `
            <svg class="icon" viewBox="0 0 24 24" style="width: 24px; height: 24px; margin-right: 8px; vertical-align: middle;">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
            Thank you for your message! I'll get back to you soon.
        `;
        
        contactForm.appendChild(successMessage);
        contactForm.reset();
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successMessage.style.opacity = '0';
            setTimeout(() => successMessage.remove(), 300);
        }, 5000);
    });
}

// Scroll Effects
function initializeScrollEffects() {
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        const sections = document.querySelectorAll('section');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
        
        // Navbar scroll effect
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// Back to Top
function initializeBackToTop() {
    if (backToTop) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }
}

// Download CV
function initializeDownloadCV() {
    if (downloadCv) {
        downloadCv.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Create a simple CV download
            const cvContent = `
John Doe - Web Developer Portfolio
=====================================

Contact:
Email: marknjorogembugua@gmail.com
GitHub: https://github.com
LinkedIn: https://linkedin.com

Skills:
- HTML (95%)
- CSS (90%)
- JavaScript (85%)
- React (80%)
- Node.js (85%)
- MongoDB (80%)
- Git (90%)


Projects:
- Portfolio Website (Full-stack React/Node.js application)
- Weather Dashboard (Interactive weather application with API integration)
- Blog API (RESTful API with authentication and CRUD operations)
            `;
            
            const blob = new Blob([cvContent], { type: 'text/plain' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = 'John_Doe_CV.txt';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
        });
    }
}
