import styled from 'styled-components';

export const Contact = styled.section`
    min-height: auto;
    background: linear-gradient(360deg,#000, #000, #0994c2);
    border-top: 1px solid DeepSkyBlue;
    
`;

export const DivTextContact = styled.section`
    h2{        
        text-align: center;        
        color: #fff;
        font-size: 45px;
        margin-top: 40px;
    }
    span{
        color: DeepSkyBlue;
    }
`;

export const Form = styled.section`
    border: 3px solid yellow;
    max-width: 700px;
    text-align: center;
    justify-content: center;
    align-items: center;    
`;

export const DivTwoInputs = styled.section`
    position: relative;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

export const DivInput = styled.section`
    position: relative;
    width: 49%;
    margin: 15px 0;
    padding: 5px;
    input{
        width: 100%;
        height: 100%;
        border: 3px solid deepskyblue;
        border-radius: 15px;
        outline: none;
        font-size: 17px;
        font-weight: 600;
        background: transparent;
        color: #fff;
    }
`;

export const DivTextArea = styled.section`
    
`;

export const TextAreaInput = styled.section`
    border: 2px solid deepskyblue;
    border-radius: 10px;
    height: 100%;
`;

export const ButtonContact = styled.section`
    display: inline-block;
    background: DeepSkyBlue;
    height: 50px;
    border-radius: 15px;
    padding: 10px;
    transition: .5s ease;
    cursor: pointer;
    letter-spacing: 2.0px;
    margin-top: 20px;
    &:hover {
    background-color: #33ccff;
    }
    a {
        color: black;
        font-size: 15px;
        text-decoration: none;
        text-align: center;
        font-weight: 600;
    }            
`;




