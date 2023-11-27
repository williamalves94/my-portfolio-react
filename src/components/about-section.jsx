import {
  About,
  DivAbouteMe,
  DivText,
  DivImg,
} from "../styles/about-section-style";
import Perfil from "../assets/perfil3.jpg";

export const AboutSection = () => {
  return (
    <About id="sobre">
      <DivAbouteMe>
        <h2>
          Sobre<span>Mim</span>
        </h2>
        <DivImg>
          <img src={Perfil} />
        </DivImg>
        <DivText>
          <h3>Desenvolvedor Front-end React</h3>
          <p>
            Olá! Sou William, tenho 29 anos, atualmente morando em Sorocaba-SP.
            Sou desenvolvedor Front-end focado em React, estou estudando
            programação há 2 anos e meio e nesse período trabalhei em duas
            empresas como Desenvolvedor Front-end Junior ReactJS. No momento
            estou estudando JavaScript, ReactJS e NodeJS, e futuramente pretendo
            ampliar ainda mais meus conhecimentos em Tecnologias e Frameworks
            voltadas para o Back-end, e no momento meu principal objetivo é
            voltar para o mercado de trabalho como Desenvolvedor Front-end
            ReactJS.
          </p>
        </DivText>
      </DivAbouteMe>
    </About>
  );
};
