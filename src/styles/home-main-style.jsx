import styled from 'styled-components';

export const Home = styled.section`
    display: flex;
    font-size: 20px;
    background: linear-gradient(to right,#000, #000, #0994c2); //background-color: black;   
    min-height: 100vh;
    color: #fff;
    align-items: center;    
`;

export const DivText = styled.div`
    position: absolute;
    color: #fff;
    margin-left: 300px;
    h2{
        font-size: 30px;

        @media( max-width: 600px ){
        font-size: 25px;
    }

    @media( max-width: 480px ){
        font-size: 23px;
    }

    }

    h3{
        font-size: 50px;
        margin-bottom: 10px;

        @media( max-width: 600px ){
        font-size: 45px;
    }

    @media( max-width: 480px ){
        font-size: 35px;
    }
    }

    h1{
        font-size: 65px;
        margin-bottom: 2px;

        @media( max-width: 600px ){
        font-size: 60px;
    }
    
    @media( max-width: 480px ){
        font-size: 50px;
    }
    
    }   
    span { 
        color: DeepSkyBlue;
    }

    @media( max-width: 900px ){
        margin: 0 100px 0 100px;
        text-align: center;
    }

    @media( max-width: 600px ){
        text-align: center;
        margin: 0 0 0 0;
    }
    
`;

export const DivIcon = styled.div`
    a {
        display: inline-flex;
        color: DeepSkyBlue;
        font-size: 40px;        
        margin-right: 20px;
        border: 2px solid DeepSkyBlue;
        border-radius: 50%;
        background: transparent;
        padding: 8px;
        :hover {
        color: #33ccff;
    }

    @media( max-width: 600px ){
        margin-top: 5px;
    }
        
    }
`;

export const ButtonCV = styled.button`
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

    @media( max-width: 600px ){
        margin-top: 30px;
    }           
`;

export const ImgBackground = styled.button`
    p{
        h2{
            color: black;
            font-size: 15px;
        }
    }
   img{
        width: 100vw;
        height: 100vh;
   }

`;

