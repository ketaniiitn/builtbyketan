import { useRef, useState, useEffect } from "react";

export default function NavBar() {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const experienceRef = useRef(null);

  const handleScrollToSection = (refValue) => {
    if (refValue.current) {
      refValue.current.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu on section click
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 704);
    };

    // Set initial state
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="section-nav">
      <ul className="social-links">
        <li>
          <a href="https://www.linkedin.com/in/ketanbajpai/">
            <svg
              className="social-icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 24 24"
            >
              <path d="M 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 L 5 3 z M 5 5 L 19 5 L 19 19 L 5 19 L 5 5 z M 7.7792969 6.3164062 C 6.9222969 6.3164062 6.4082031 6.8315781 6.4082031 7.5175781 C 6.4082031 8.2035781 6.9223594 8.7167969 7.6933594 8.7167969 C 8.5503594 8.7167969 9.0644531 8.2035781 9.0644531 7.5175781 C 9.0644531 6.8315781 8.5502969 6.3164062 7.7792969 6.3164062 z M 6.4765625 10 L 6.4765625 17 L 9 17 L 9 10 L 6.4765625 10 z M 11.082031 10 L 11.082031 17 L 13.605469 17 L 13.605469 13.173828 C 13.605469 12.034828 14.418109 11.871094 14.662109 11.871094 C 14.906109 11.871094 15.558594 12.115828 15.558594 13.173828 L 15.558594 17 L 18 17 L 18 13.173828 C 18 10.976828 17.023734 10 15.802734 10 C 14.581734 10 13.930469 10.406562 13.605469 10.976562 L 13.605469 10 L 11.082031 10 z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a href="https://github.com/ketaniiitn">
            <svg
              className="social-icon"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path d="M 24 4 C 12.972066 4 4 12.972074 4 24 C 4 35.027926 12.972066 44 24 44 C 35.027934 44 44 35.027926 44 24 C 44 12.972074 35.027934 4 24 4 z M 24 7 C 33.406615 7 41 14.593391 41 24 C 41 31.66536 35.956939 38.122519 29 40.251953 L 29 35.136719 C 29 33.226635 27.899316 31.588619 26.308594 30.773438 A 10 8 0 0 0 32.4375 18.720703 C 32.881044 17.355414 33.376523 14.960672 32.199219 13.076172 C 29.929345 13.076172 28.464667 14.632086 27.765625 15.599609 A 10 8 0 0 0 24 15 A 10 8 0 0 0 20.230469 15.59375 C 19.529731 14.625773 18.066226 13.076172 15.800781 13.076172 C 14.449711 15.238817 15.28492 17.564557 15.732422 18.513672 A 10 8 0 0 0 21.681641 30.779297 C 20.3755 31.452483 19.397283 32.674042 19.097656 34.15625 L 17.783203 34.15625 C 16.486203 34.15625 15.98225 33.629234 15.28125 32.740234 C 14.58925 31.851234 13.845172 31.253859 12.951172 31.005859 C 12.469172 30.954859 12.144453 31.321484 12.564453 31.646484 C 13.983453 32.612484 14.081391 34.193516 14.650391 35.228516 C 15.168391 36.160516 16.229687 37 17.429688 37 L 19 37 L 19 40.251953 C 12.043061 38.122519 7 31.66536 7 24 C 7 14.593391 14.593385 7 24 7 z"></path>
            </svg>
          </a>
        </li>
        <li>
          <a
            href="https://leetcode.com/u/ketan_iiitn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              className="social-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 128 128"
            >
              <path d="M61.7 7.2L52.5 17l23 22.3-23 21.9 9.2 9.6 32.3-31.5L61.7 7.2z" />
              <path d="M32.7 64.2c0 9.7 4.4 18.5 11.3 24.3l9.3-8.9c-4.7-3.4-7.7-8.8-7.7-15.1s3-11.6 7.7-15l-9.3-9c-6.9 5.8-11.3 14.5-11.3 24.3z" />
              <path d="M52.4 91l9.2 10 34.4-34.7L61.6 31l-9.2 9.2 24.6 24.6L52.4 91z" />
            </svg>
          </a>
        </li>
      </ul>

      {isMobile ? (
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="btn-mobile-nav"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
          />
        </svg>
      ) : (
        <ul className="page-links">
          <li>
            <a href="#" className="menu">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="menu"
              onClick={() => handleScrollToSection(skillsRef)}
            >
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="menu"
              onClick={() => handleScrollToSection(experienceRef)}
            >
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="menu"
              onClick={() => handleScrollToSection(projectsRef)}
            >
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="menu"
              onClick={() => handleScrollToSection(contactRef)}
            >
              <span>Contact Me</span>
            </a>
          </li>
        </ul>
      )}

      {isMobile && isMenuOpen && (
        <ul className="page-links mobile">
          <li>
            <a href="#" className="menu" onClick={() => setIsMenuOpen(false)}>
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#skills"
              className="menu"
              onClick={() => handleScrollToSection(skillsRef)}
            >
              <span>Skills</span>
            </a>
          </li>
          <li>
            <a
              href="#experience"
              className="menu"
              onClick={() => handleScrollToSection(experienceRef)}
            >
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="menu"
              onClick={() => handleScrollToSection(projectsRef)}
            >
              <span>Projects</span>
            </a>
          </li>
          <li>
            <a
              href="#resume"
              className="menu"
              onClick={() => handleScrollToSection(resumeRef)}
            >
              <span>My Resume</span>
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
