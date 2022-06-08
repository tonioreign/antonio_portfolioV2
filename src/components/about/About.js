import React from 'react';
import styled from 'styled-components';
import InfoIcon from '@mui/icons-material/Info';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { Fade } from 'react-reveal';

function About() {
    return (
        <Container id="about">
            <Fade bottom cascade>
                <Title>
                    {' '}
                    <span></span>
                    <InfoIcon
                        style={{
                            fontSize: 'var(--font__md)',
                            color: 'var(--color__primary)',
                        }}
                    />
                    <h2>About Me</h2>
                    <span></span>
                </Title>
            </Fade>
            <Fade bottom cascade>
                <Content>
                    <LeftContent>
                        <p>
                            Hello, my name is Antonio Jenkins, I am fully
                            committed to the philosophy of lifelong learning. I
                            am currently attending Full Sail University. I am a
                            Computer Science major currently with a 4.0 GPA.
                            Some programming languages and libraries that I
                            excel in are HTML, CSS, JavaScript, ReactJS, and C#.
                            I have attended several "Hackathons" recently
                            placing 2nd in 2021. I always try to share my
                            knowledge and past experiences with other developers
                            because I believe that helping others means helping
                            yourself. When I am not at my computer, I like to
                            spend my time coaching, reading, and being a father.
                        </p>
                        <p>
                            Here are a few technologies I’ve been working with
                            recently:
                        </p>
                        <Technologies>
                            <Tech>
                                <ArrowRightIcon
                                    style={{
                                        color: 'var(--color__primary)',
                                        fontSize: 'calc(var(--font__sm) + 5px)',
                                    }}
                                />
                                <span>HTML</span>
                            </Tech>
                            <Tech>
                                <ArrowRightIcon
                                    style={{
                                        color: 'var(--color__primary)',
                                        fontSize: 'calc(var(--font__sm) + 5px)',
                                    }}
                                />
                                <span>JavaScript (ES6+)</span>
                            </Tech>
                            <Tech>
                                <ArrowRightIcon
                                    style={{
                                        color: 'var(--color__primary)',
                                        fontSize: 'calc(var(--font__sm) + 5px)',
                                    }}
                                />
                                <span>CSS</span>
                            </Tech>
                            <Tech>
                                <ArrowRightIcon
                                    style={{
                                        color: 'var(--color__primary)',
                                        fontSize: 'calc(var(--font__sm) + 5px)',
                                    }}
                                />
                                <span>ReactJS</span>
                            </Tech>
                        </Technologies>
                    </LeftContent>
                    <RightContent>
                        <Profile src="./img/tonio_pic.jpg" />
                        <ProfileOverlay></ProfileOverlay>
                    </RightContent>
                </Content>
            </Fade>
        </Container>
    );
}

export default About;

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const Title = styled.div`
    padding-top: 50px;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 7.5vh;
    padding-top: 7.5vh;
    margin-top: 7.5vh;

    h2 {
        font-size: var(--font__md);
        color: var(--color__white);
    }

    span {
        width: 100px;
        height: 1px;
        background: var(--color__white-variant);
    }
`;

const Content = styled.div`
    display: flex;
    justify-content: center;
    gap: 3rem;
    color: var(--color__white-variant);
`;
const LeftContent = styled.div`
    display: flex;
    gap: 2rem;
    flex-direction: column;
    max-width: 500px;
    p {
        font-size: var(--font__sm);
    }
`;

const RightContent = styled.div`
    position: relative;
    width: max-content;
    height: max-content;
`;

const ProfileOverlay = styled.div`
    background: var(--color__primary-variant);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 6px;
    overflow: hidden;
    cursor: pointer;
`;

const Profile = styled.img`
    height: 300px;
    width: 300px;
    border-radius: 6px;
    flex-shrink: 0;
    position: relative;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 2px;
        height: 2px;
        background: var(--color__primary);
    }
`;

const Technologies = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 5px;
    font-size: var(--font__sm);
    color: var(--color__white-variant);
`;

const Tech = styled.div`
    display: flex;
    align-items: center;
`;
