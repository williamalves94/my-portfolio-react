import { About, DivAbouteMe, DivText, DivImg } from '../styles/about-section-style';
import Perfil from '../assets/perfil3.jpg';

    export const AboutSection = () => {
        return (
            <About id="sobre">
                <DivAbouteMe>
                    <h2>Sobre<span>Mim</span></h2>
                    <DivImg>
                        <img src={ Perfil }/>
                    </DivImg>                     
                    <DivText>
                        <h3>Desenvolvedor Front-end React</h3>
                        <p>Olá! Sou William, tenho 29 anos, atualmente morando em Sorocaba-SP. Sou desenvolvedor Front-end focado em React com TypeScript,
                            estou estudando programação há quase 2 anos e meio e nesse período trabalhei em duas empresas como Desenvolvedor Front-end Junior ReactJS.
                            No momento estou estudando JavaScript, ReactJS, React Native,
                            TypeScript e Styled Components, e futuramente pretendo ampliar meus conhecimentos em Tecnologias e Frameworks voltadas para o Back-end,
                            e no momento meu principal objetivo é atuar no mercado de trabalho como Desenvolvedor Front-end.
                            </p>
                    </DivText>
                </DivAbouteMe>
            </About>
        );
    };