import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faDiscord } from '@fortawesome/free-brands-svg-icons';
import styles from '@/styles/Home.module.css'

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
};

const NavBar: React.FC = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container>

        <Navbar.Brand href="/" onClick={scrollToTop}>
          ⛩️ &nbsp;Concrete Garden
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#team">Team</Nav.Link>
            <Nav.Link href="#membership" disabled>Membership</Nav.Link>
            <NavDropdown title="Events" id="collasible-nav-dropdown">
              <NavDropdown.Item href="https://twitter.com/AzukiNYC/status/1641185733246320640" target="_blank">NFT NYC</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/monthly-events" disabled>Monthly Events</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="https://twitter.com/AzukiNYC">
              <span className={styles.navIcon}>
                <FontAwesomeIcon icon={faTwitter} style={{ width: '18px' }} />&nbsp;
              </span>
              Twitter
            </Nav.Link>
            <Nav.Link href="https://discord.com/invite/Yv6TqXs6Xp">
              <span className={styles.navIcon}>
                <FontAwesomeIcon icon={faDiscord} style={{ width: '18px' }} />&nbsp;
              </span>
              Discord
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default NavBar;
