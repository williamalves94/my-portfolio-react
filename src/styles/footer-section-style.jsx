import styled from 'styled-components';

export const Footer = styled.footer`
    height: 70px;
    width: 100%;
    background-color: black;
    align-items: center;
    justify-content: center;
    display: flex;
    border-top: 1px solid DeepSkyBlue;
    p{
        color: #fff;       
    }

    @media( max-width: 300px ){
        font-size: 14px;
    }
`;

export const IconFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin-left: 5px;
`;