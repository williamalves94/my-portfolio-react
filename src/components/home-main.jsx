import { Home, DivText, DivIcon, ButtonCV } from '../styles/home-main-style';
import { BiLogoLinkedin, BiLogoGithub, BiLogoWhatsapp } from "react-icons/bi";
import curriculo from '../assets/curriculowilliam.pdf';

  export const HomeMain = () => {
    return (
      <Home id="home">       
        <DivText>          
          <h2>Olá, Eu sou</h2>
          <h1>William Alves</h1>
          <h3>E eu sou <span>Desenvolvedor Front-end</span></h3>
          <DivIcon>
            <a href="https://www.linkedin.com/in/william-alves-4b7683221/" target='_blank'><BiLogoLinkedin/></a>
            <a href="https://github.com/williamalves94" target='_blank'><BiLogoGithub/></a>
            <a href="https://wa.me/5515997781428" target='_blank'><BiLogoWhatsapp/></a>
          </DivIcon>
          <ButtonCV>
            <a href={curriculo} download="Curriculo William">Download CV</a>
          </ButtonCV>
        </DivText>
      </Home>
    );
  };
