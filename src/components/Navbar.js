import React, { useState, useEffect } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import { Link } from "react-router-dom";
import { ImBlog } from "react-icons/im";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import { BsSun, BsMoon } from "react-icons/bs";
import { FiGlobe } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const { t, i18n } = useTranslation();

  // Load saved preferences
  useEffect(() => {
    const savedDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedDarkMode);
    
    // Apply dark mode to document
    if (savedDarkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', newDarkMode);
    
    if (newDarkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.setAttribute('data-theme', 'light');
    }
  };

  // Change language
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  // Scroll handler
  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
    return () => window.removeEventListener("scroll", scrollHandler);
  }, []);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={`${navColour ? "sticky" : "navbar"} ${darkMode ? 'navbar-dark' : 'navbar-light'}`}
      style={{
        backgroundColor: darkMode 
          ? (navColour ? 'rgba(0, 0, 0, 0.95)' : 'rgba(0, 0, 0, 0.85)')
          : (navColour ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.85)'),
        backdropFilter: 'blur(10px)',
        borderBottom: darkMode ? '1px solid rgba(255, 255, 255, 0.1)' : '1px solid rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease'
      }}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <p 
            className="img-fluid logo" 
            style={{ 
              color: darkMode ? '#fff' : '#333',
              margin: 0,
              fontWeight: 'bold',
              fontSize: '1.5rem'
            }}
          >
            Ngọc Tiến
          </p>
        </Navbar.Brand>
        
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
          style={{
            border: 'none',
            padding: '4px 8px'
          }}
        >
          <span style={{ backgroundColor: darkMode ? '#fff' : '#333' }}></span>
          <span style={{ backgroundColor: darkMode ? '#fff' : '#333' }}></span>
          <span style={{ backgroundColor: darkMode ? '#fff' : '#333' }}></span>
        </Navbar.Toggle>
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link 
                as={Link} 
                to="/" 
                onClick={() => updateExpanded(false)}
                style={{ color: darkMode ? '#fff' : '#333' }}
              >
                <AiOutlineHome style={{ marginBottom: "2px" }} /> {t('navbar.home')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/about"
                onClick={() => updateExpanded(false)}
                style={{ color: darkMode ? '#fff' : '#333' }}
              >
                <AiOutlineUser style={{ marginBottom: "2px" }} /> {t('navbar.about')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/project"
                onClick={() => updateExpanded(false)}
                style={{ color: darkMode ? '#fff' : '#333' }}
              >
                <AiOutlineFundProjectionScreen style={{ marginBottom: "2px" }} /> {t('navbar.projects')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/resume"
                onClick={() => updateExpanded(false)}
                style={{ color: darkMode ? '#fff' : '#333' }}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> {t('navbar.resume')}
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                href="#"
                target="_blank"
                rel="noreferrer"
                style={{ color: darkMode ? '#fff' : '#333' }}
              >
                <ImBlog style={{ marginBottom: "2px" }} /> {t('navbar.blogs')}
              </Nav.Link>
            </Nav.Item>

            {/* Language Dropdown */}
            <Nav.Item className="mx-2">
              <Dropdown>
                <Dropdown.Toggle
                  variant="outline-secondary"
                  size="sm"
                  style={{
                    backgroundColor: 'transparent',
                    border: `1px solid ${darkMode ? '#fff' : '#333'}`,
                    color: darkMode ? '#fff' : '#333',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                >
                  <FiGlobe size={16} />
                  {i18n.language.toUpperCase()}
                </Dropdown.Toggle>

                <Dropdown.Menu
                  style={{
                    backgroundColor: darkMode ? '#333' : '#fff',
                    border: `1px solid ${darkMode ? '#555' : '#ddd'}`,
                    minWidth: '120px'
                  }}
                >
                  <Dropdown.Item
                    onClick={() => changeLanguage('vi')}
                    style={{
                      color: darkMode ? '#fff' : '#333',
                      backgroundColor: i18n.language === 'vi' ? (darkMode ? '#555' : '#f8f9fa') : 'transparent'
                    }}
                  >
                    🇻🇳 Tiếng Việt
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => changeLanguage('en')}
                    style={{
                      color: darkMode ? '#fff' : '#333',
                      backgroundColor: i18n.language === 'en' ? (darkMode ? '#555' : '#f8f9fa') : 'transparent'
                    }}
                  >
                    🇺🇸 English
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav.Item>

            {/* Dark Mode Toggle */}
            <Nav.Item>
              <Button
                variant="outline-secondary"
                size="sm"
                onClick={toggleDarkMode}
                style={{
                  backgroundColor: 'transparent',
                  border: `1px solid ${darkMode ? '#fff' : '#333'}`,
                  color: darkMode ? '#fff' : '#333',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '5px',
                  marginLeft: '5px'
                }}
                title={darkMode ? t('navbar.lightMode') : t('navbar.darkMode')}
              >
                {darkMode ? <BsSun size={16} /> : <BsMoon size={16} />}
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;