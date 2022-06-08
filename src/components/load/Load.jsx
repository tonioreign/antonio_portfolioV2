import styled from 'styled-components';

const Load = () => {
    return (
        <Container>
            <video
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    height: '200px',
                    width: '200px',
                }}
                src="./mp4/loading.webm"
                muted
                autoPlay
                controls=""
            ></video>
        </Container>
    );
};

export default Load;

const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
`;
