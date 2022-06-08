import styled from 'styled-components';

const Bubbles = () => {
    return (
        <Bubble>
            <span style={{ '--i': 11 }}></span>
            <span style={{ '--i': 5 }}></span>
            <span style={{ '--i': 2 }}></span>
            <span style={{ '--i': 10 }}></span>
            <span style={{ '--i': 14 }}></span>
            <span style={{ '--i': 23 }}></span>
            <span style={{ '--i': 18 }}></span>
            <span style={{ '--i': 16 }}></span>
            <span style={{ '--i': 19 }}></span>
            <span style={{ '--i': 20 }}></span>
            <span style={{ '--i': 22 }}></span>
            <span style={{ '--i': 12 }}></span>
            <span style={{ '--i': 18 }}></span>
            <span style={{ '--i': 21 }}></span>
            <span style={{ '--i': 15 }}></span>
            <span style={{ '--i': 24 }}></span>
            <span style={{ '--i': 17 }}></span>
            <span style={{ '--i': 13 }}></span>
            <span style={{ '--i': 28 }}></span>{' '}
            <span style={{ '--i': 11 }}></span>
            <span style={{ '--i': 5 }}></span>
            <span style={{ '--i': 9 }}></span>
            <span style={{ '--i': 10 }}></span>
            <span style={{ '--i': 14 }}></span>
            <span style={{ '--i': 23 }}></span>
            <span style={{ '--i': 18 }}></span>
            <span style={{ '--i': 16 }}></span>
            <span style={{ '--i': 19 }}></span>
            <span style={{ '--i': 20 }}></span>
            <span style={{ '--i': 22 }}></span>
            <span style={{ '--i': 12 }}></span>
            <span style={{ '--i': 18 }}></span>
            <span style={{ '--i': 21 }}></span>
            <span style={{ '--i': 15 }}></span>
            <span style={{ '--i': 24 }}></span>
            <span style={{ '--i': 17 }}></span>
            <span style={{ '--i': 13 }}></span>
            <span style={{ '--i': 23 }}></span>
        </Bubble>
    );
};

export default Bubbles;

const Bubble = styled.div`
    position: relative;
    display: flex;

    span {
        position: relative;
        flex-shrink: 0;
        height: 30px;
        width: 30px;
        background: var(--color__primary);
        margin: 0 4px;
        border-radius: 50%;
        box-shadow: 0 0 0 10px var(--color__primary-variant),
            0 0 50px var(--color__primary), 0 0 100px var(--color__primary);
        animation: backgroundAnimate 30s linear infinite;
        animation-duration: calc(250s / var(--i));

        &:nth-child(even) {
            background: var(--color__secondary);
            box-shadow: 0 0 0 10px var(--color__secondary-variant),
                0 0 50px var(--color__secondary),
                0 0 100px var(--color__secondary);
            animation: backgroundAnimate 30s linear infinite;
            animation-duration: calc(250s / var(--i));
        }
    }
`;
