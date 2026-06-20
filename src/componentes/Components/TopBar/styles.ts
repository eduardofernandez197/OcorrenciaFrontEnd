import styled from 'styled-components';

export const TopBarContainer = styled.header`
    height: 80px;
    padding: 0 15px;

    background-color: #ff8300;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const MenuButton = styled.button`
    min-width: 90px;
    height: 42px;
    padding: 0 16px;

    border: none;
    border-radius: 5px;
    background-color: white;
    color: #ff8300;

    font-weight: 600;
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s ease, transform 0.2s ease;

    &:hover {
        background-color: #fff6e5;
        transform: translateY(-1px);
    }
`;
