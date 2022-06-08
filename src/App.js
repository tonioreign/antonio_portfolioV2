import React from 'react';
import './App.css';
import styled from 'styled-components';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Socials from './components/socials/Socials';
import Bubbles from './components/bubbles/Bubbles';
function App() {
    return (
        <Container>
            <Bubbles />
            <Socials />
            <Navbar />
            <Wrap>
                <Home />
            </Wrap>
            <Wrap>
                <About />
            </Wrap>
            <Wrap>
                <Projects />
            </Wrap>
            <Wrap>
                <Contact />
            </Wrap>
            <Footer />
        </Container>
    );
}

export default App;

const Container = styled.div`
    position: relative;
    width: 100%;
    background: var(--color__bg);
`;

const Wrap = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    width: 75vw;
`;
