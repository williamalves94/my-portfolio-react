import styled from 'styled-components'

export const Skill = styled.section`
    min-height: 100vh;
    align-items: center;
    background: linear-gradient(360deg,#000, #000, #0994c2);
    padding: 70px 0 0 0 ;
`;

export const DivMySkillsText = styled.div`
    h2{
        text-align: center;        
        color: white;
        font-size: 45px;

        @media( max-width: 300px ){
            font-size: 40px;
    }

    @media( max-width: 675px ){
        font-size: 35px;
        margin-bottom: 20px;
    }

    }
    span{
        color: DeepSkyBlue;
    }
    
`;

export const AllSkills = styled.div`    
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    padding: 20px 400px 20px 400px;

    @media( max-width: 1473px ){
        flex-direction: column;
        padding: 20px 400px 20px 400px;
    }

    @media( max-width: 1200px ){
        flex-direction: column;
        padding: 20px 270px 20px 270px;
    }

    @media( max-width: 1090px ){
        flex-direction: column;
        padding: 20px 300px 20px 300px;
    }

    @media( max-width: 1000px ){
        flex-direction: column;
        padding: 20px 270px 20px 270px;
    }

    @media( max-width: 890px ){
        flex-direction: column;
        padding: 20px 250px 20px 250px;
    }

    @media( max-width: 790px ){
        flex-direction: column;
        padding: 20px 220px 20px 220px;
    }

    @media( max-width: 768px ){
        flex-direction: column;
        padding: 20px 150px 100px 150px;        
    }

    @media( max-width: 675px ){
        padding: 0 150px 50px 150px;
    }

    @media( max-width: 628px ){
        padding: 0 100px 50px 100px;
    }

    @media( max-width: 490px ){
        padding: 0 70px 50px 70px;
    }

    @media( max-width: 415px ){
        padding: 20px 50px 50px 50px;
    }

    @media( max-width: 377px ){
        padding: 20px 30px 50px 30px;
    }

    @media( max-width: 331px ){
        padding: 20px 20px 50px 20px;
    }

    @media( max-width: 331px ){
        padding: 10px 10px 50px 10px;
    }

    @media( max-width: 300px ){
        padding: 10px 8px 50px 8px;
    }

    @media( max-width: 286px ){
        padding: 10px 5px 50px 5px;
    }
`;

export const TechnicalSkills = styled.div`   
    flex: 1 1 50px;
    h2{
        font-size: 20px;
        color: #fff;
        margin-bottom: 5px;
    }
    span {
        color: #fff;        
    }
    :nth-child(1) :nth-child(2) span{
        width: 55%;
    }
    :nth-child(3) :nth-child(2) span{
        width: 42%;
    }
    :nth-child(4) :nth-child(2) span{
        width: 46%;
    }
    :nth-child(5) :nth-child(2) span{
        width: 40%;
    }
    :nth-child(6) :nth-child(2) span{
        width: 30%;
    }
    :nth-child(7) :nth-child(2) span{
        width: 38%;
    }
    :nth-child(8) :nth-child(2) span{
        width: 30%;
    }

    @media( max-width: 1473px ){
        h2{
            text-align: center;
        }
    }

    @media( max-width: 768px ){
        h2{
            text-align: center;
        }
    }
    
`;

export const ProfessionalSkills = styled.div`         
    flex: 1 1 50px;
    h2{
        font-size: 20px;
        color: #fff;
        margin-bottom: 5px;
    }

    span {
        color: #fff;        
    }
    :nth-child(1) :nth-child(2) span{
        width: 87%;
    }
    :nth-child(3) :nth-child(2) span{
        width: 70%;
    }
    :nth-child(4) :nth-child(2) span{
        width: 85%;
    }
    :nth-child(5) :nth-child(2) span{
        width: 70%;
    }
    :nth-child(6) :nth-child(2) span{
        width: 65%;
    }
    :nth-child(7) :nth-child(2) span{
        width: 82%;
    }
    :nth-child(8) :nth-child(2) span{
        width: 74%;
    }

    @media( max-width: 1473px ){
        h2{
            text-align: center;
        }
    }

    @media( max-width: 768px ){
        h2{
            text-align: center;
        }
    }
`;

export const BoxTechnologys = styled.div`
    position: relative;
    border: 3px solid #0994c2;
    border-radius: 10px;
    padding: 25px;
    width: flex;
    background-color: black;    
`;

export const Technologys = styled.div`
    h3 {
        display: flex;
        justify-content: space-between;
        font-size: 17px;
        color: #fff;
    }
`;

export const Bar = styled.div`
    height: 25px;
    border: 1px solid DeepSkyBlue;
    border-radius: 8px;
    margin: 5px 0 20px 0;
    padding: 4px;
    span{
        display: block;
        height: 100%;
        border-radius: 4px;
        background: DeepSkyBlue;
        width: 50%;
    }
`;

