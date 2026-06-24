import styled from 'styled-components';

export const TopBarContainer = styled.header`
    height: 50px;
    padding: 0 15px 0 5px;

    background-color: #FFF;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);

    display: flex;
    align-items: center;
    justify-content: flex-start;
`;

export const LogoImage = styled.img`
    width: 55px;
    height: 55px;
    object-fit: contain;
`;

export const TopBarTitle = styled.strong`
    color: #0f172a;

    font-size: 16px;
    font-weight: 700;
    line-height: 1;
`;


