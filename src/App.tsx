import { useEffect, useRef, useState } from 'react'
import './App.css'

const projects = [
  {
    title: 'Made a Social Media Platform with WEB3 Wallet Integration',
    role: 'Full Stack Developer',
    year: '2025',
    description:
      'Made a Social Media Platform with WEB3 Wallet Integration',
    tech: ['VueJS', 'TypeScript', 'Laravel', 'Ether.js', 'Tailwind CSS', 'Web3 Wallet Integration'],
    link: '#',
    image: './/assets/main4-1.png',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'Graphic Designing and Social Media Handling for a Start-Up',
    role: 'Graphic Designer and Social Media Handler',
    year: '2024',
    description:
      'Graphic Designing and Social Media Handling for a Start-Up',
    tech: ['Graphic Designing', 'Social Media Handling'],
    link: '#',
    image: './/assets/main3-3.png',
    gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  },
  {
    title: 'Web Development Company Website',
    role: 'Web Developer',
    year: '2023',
    description:
      'A static website for a Start-Up Web Development Company',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    image: './/assets/main1.png',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  {
    title: 'Gym Website and E-Commerce Platform',
    role: 'Full Stack Developer',
    year: '2023',
    description:
      'A static website for a Gym and E-Commerce Platform',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: '#',
    image: './/assets/main2-4.png',
    gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
]

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [activeProjectIndex, setActiveProjectIndex] = useState(0)
  const sectionsRef = useRef<HTMLElement[]>([])
  const projectCardsRef = useRef<HTMLElement[]>([])

  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'

    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
        }
      })
    }, observerOptions)

    // Sections will be observed after timeout to ensure refs are populated

    // Staggered animation for project cards
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('is-visible')
          }, index * 100)
        }
      })
    }, observerOptions)

    // Project cards will be observed after timeout to ensure refs are populated

    // Initial load animation for sidebar
    const sidebar = document.querySelector('.sidebar-inner')
    if (sidebar) {
      setTimeout(() => {
        sidebar.classList.add('loaded')
      }, 200)
    }

    // Ensure observers are set up after a brief delay to allow refs to populate
    const timeoutId = setTimeout(() => {
      sectionsRef.current.forEach((section) => {
        if (section) sectionObserver.observe(section)
      })

      projectCardsRef.current.forEach((card) => {
        if (card) cardObserver.observe(card)
      })
    }, 100)

    // Simulated intro loader
    const loadingTimeout = setTimeout(() => setIsLoading(false), 1200)

    return () => {
      clearTimeout(loadingTimeout)
      clearTimeout(timeoutId)
      sectionObserver.disconnect()
      cardObserver.disconnect()
    }
  }, [])

  return (
    <div className="app">
      {isLoading && (
        <div className="loading-overlay">
          <div className="loading-orb">
            <div className="orb-core" />
            <div className="orb-ring" />
            <div className="orb-glow" />
          </div>
          <p className="loading-text">Warming up the interface...</p>
        </div>
      )}
      <div className={`layout ${isLoading ? 'blurred' : ''}`}>
        <header className="sidebar">
          <div className="sidebar-inner">
            <div className="profile-image-wrapper">
              <div className="profile-image" data-animate-text>
                <img
                  src="./assets/profilepic.jpeg"
                  alt="Ansari Abdul Mannan"
                />
                <div className="profile-gradient"></div>
              </div>
            </div>
            <div className="brand">
              <span className="eyebrow" data-animate-text>Portfolio</span>
              <h1 className="name" data-animate-text>Ansari Abdul Mannan</h1>
              <p className="role" data-animate-text>
                Frontend Developer · UI/UX Designer · Graphic Designer · Social Media
                Handler · Community Manager
              </p>
            </div>

            <p className="bio" data-animate-text>
              I craft digital experiences that balance visual design with usability —
              from interfaces and design systems to social media visuals and
              community‑driven products.
            </p>

            <nav className="nav">
              <a href="#about" data-animate-text>About</a>
              <a href="#projects" data-animate-text>Projects</a>
              <a href="#contact" data-animate-text>Contact</a>
            </nav>

            <div className="meta">
              <div data-animate-text>
                <span className="label">Based in</span>
                <span className="value">Mumbai, India</span>
              </div>
              <div data-animate-text>
                <span className="label">Available for</span>
                <span className="value">Freelance & Full‑time</span>
              </div>
            </div>

            <div className="links">
              <a href="mailto:mannan23r4@gmail.com" data-animate-text>Email</a>
              <a href="https://www.linkedin.com/in/ansari-abdul-mannan-5b766925b/" target="_blank" rel="noreferrer" data-animate-text>
                LinkedIn
              </a>
            </div>
          </div>
        </header>

        <main className="content">
          <section
            id="about"
            className="section"
            ref={(el) => {
              if (el) sectionsRef.current[0] = el
            }}
          >
            <div className="section-header">
              <span className="section-label" data-animate-text>About</span>
              <h2 data-animate-text>Creating interfaces that feel effortless.</h2>
            </div>
            <div className="about-content">
              <p className="section-body" data-animate-text>
                I specialize in crafting interfaces that balance visual clarity with
                interaction. From early concepts to shipped products, I enjoy working
                across the full front‑end stack to bring ideas to life in the browser.
              </p>
              <div className="skills-grid" data-animate-text>
                <div className="skill-item">
                  <div className="skill-icon">🎨</div>
                  <span>UI/UX Design</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">💻</div>
                  <span>Frontend Dev</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">🎯</div>
                  <span>Branding</span>
                </div>
                <div className="skill-item">
                  <div className="skill-icon">📱</div>
                  <span>Social Media</span>
                </div>
              </div>
            </div>
          </section>

          <section
            id="projects"
            className="section"
            ref={(el) => {
              if (el) sectionsRef.current[1] = el
            }}
          >
            <div className="section-header">
              <span className="section-label" data-animate-text>Selected work</span>
              <h2 data-animate-text>Projects</h2>
            </div>

            <div className="project-split">
              <aside className="project-list-nav">
                {projects.map((project, index) => (
                  <button
                    key={project.title}
                    className={`project-tab ${activeProjectIndex === index ? 'active' : ''}`}
                    onClick={() => setActiveProjectIndex(index)}
                    ref={(el) => {
                      if (el) projectCardsRef.current[index] = el
                    }}
                  >
                    <span className="project-tab-title">{project.title}</span>
                    <span className="project-tab-meta">
                      {project.year} · {project.role}
                    </span>
                  </button>
                ))}
              </aside>

              <div className="project-detail">
                {projects[activeProjectIndex] && (
                  <article className="project-detail-card">
                    <div className="project-image-wrapper">
                      <div
                        className="project-image"
                        style={{ backgroundImage: `url(${projects[activeProjectIndex].image})` }}
                      >
                        <div
                          className="project-gradient-overlay"
                          style={{ background: projects[activeProjectIndex].gradient }}
                        ></div>
                      </div>
                    </div>

                    <div className="project-content">
                      <div className="project-meta">
                        <span className="project-year">{projects[activeProjectIndex].year}</span>
                        <span className="project-role">{projects[activeProjectIndex].role}</span>
                      </div>

                      <div className="project-main">
                        <h3>{projects[activeProjectIndex].title}</h3>
                        <p>{projects[activeProjectIndex].description}</p>

                        <div className="project-footer">
                          <div className="tags">
                            {projects[activeProjectIndex].tech.map((tag) => (
                              <span key={tag} className="tag">
                                {tag}
                              </span>
                            ))}
                          </div>
                          {/*<a
                            href={projects[activeProjectIndex].link}
                            className="project-link"
                            target="_blank"
                            rel="noreferrer"
                          >
                            View project
                          </a>*/}
                        </div>
                      </div>
                    </div>
                  </article>
                )}
              </div>
            </div>
          </section>

          <section
            id="contact"
            className="section"
            ref={(el) => {
              if (el) sectionsRef.current[2] = el
            }}
          >
            <div className="section-header">
              <span className="section-label" data-animate-text>Contact</span>
              <h2 data-animate-text>Let's work together.</h2>
            </div>
            <p className="section-body" data-animate-text>
              If you&apos;re working on something interesting and need help with
              design or front‑end engineering, I&apos;d love to hear from you.
            </p>
            <div className="contact-actions">
              <a className="primary-link" href="mailto:mannan23r4@gmail.com">
                Say hello
              </a>
              <a
                className="secondary-link"
                target='_blank'
                href=".//assets/ABDULMANNAN.pdf"
              >
                Download résumé
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
