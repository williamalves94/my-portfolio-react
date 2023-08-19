import styled from 'styled-components';

export const About = styled.section`
    display: flex;
    background: linear-gradient(360deg,#000, #000, #0994c2);
    border-top: 1px solid DeepSkyBlue;
    border-bottom: 1px solid DeepSkyBlue;
    min-height: 100vh;
    justify-content: center;
`;

export const DivAbouteMe = styled.div`
    color: #fff;
    margin-top: 70px;
    h2{
        font-size: 50px;
        text-align: center;
        margin-bottom: 50px;
    }
    span{
        margin-left: 10px;
        color: DeepSkyBlue;
    }
`;

export const DivText = styled.div`
    text-align: center;
    h3{
        color: DeepSkyBlue;
        font-size: 35px;
        margin-top: 45px;
        margin-bottom: 30px;
        @media( max-width: 450px ){
            padding: 0 10px 0 10px
        }
        
    }
    p{  
        font-size: 16px;
        padding: 0 25px 25px 25px;
        @media( max-width: 450px ){
            padding: 0 25px 25px 25px
        }
    }
  
`;

export const DivImg = styled.div`
    text-align: center;
    img{
        width: 350px;
        height: 350px;
        border-radius: 50%;
        border: 2px solid DeepSkyBlue;
        @media( max-width: 450px ){
            width: 250px;
            height: 250px;
            margin-left: 20px;
            margin-right: 20px;
        }
    }

`;


//background: linear-gradient(360deg, #000, #000, #0994c2);