import styled from 'styled-components';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Socials = () => {
    return (
        <Container>
            <RightSocial>
                <a href="https://github.com/tonioreign" target="_blank">
                    <GitHubIcon className="social__icon" />
                </a>
                <a
                    href="https://www.linkedin.com/in/tonioreign/"
                    target="_blank"
                >
                    <LinkedInIcon className="social__icon" />
                </a>
                <a href="https://twitter.com/tonioreign" target="_blank">
                    <TwitterIcon className="social__icon" />
                </a>
                <a href="https://instagram.com/tonioreign" target="_blank">
                    <InstagramIcon className="social__icon" />
                </a>
                <a href="https://youtube.com/tonioreign" target="_blank">
                    <YouTubeIcon className="social__icon" />
                </a>
                <span></span>
            </RightSocial>
            <LeftSocial>
                <a href="mailto: tonioreign@gmail.com">
                    <h4>tonioreign@gmail.com</h4>
                </a>
                <span></span>
            </LeftSocial>
        </Container>
    );
};

export default Socials;

const Container = styled.div`
    width: 100%;
`;

const RightSocial = styled.div`
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 0 40px;

    span {
        width: 2px;
        height: 90px;
        background: var(--color__white-variant);
    }
`;

const LeftSocial = styled.div`
    position: fixed;
    right: 0;
    bottom: 0;
    color: var(--color__white-variant);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 25px;
    padding: 0 40px;
    h4 {
        writing-mode: vertical-rl;
        text-orientation: mixed;
        cursor: pointer;
        transition: all 125ms ease-in;
        font-size: var(--font__sm);
        letter-spacing: 1.7;
        &:hover {
            color: var(--color__primary);
            transform: scale(1.05);
        }
    }
    span {
        width: 2px;
        height: 90px;
        background: var(--color__white-variant);
    }
`;
