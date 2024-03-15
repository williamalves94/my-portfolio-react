import Portifolio1 from "../assets/myportfolio.jpg";
import Lordoftherings from "../assets/capaport.jpg";
import Portifolio3 from "../assets/rickcapa.jpg";
import Portifolio4 from "../assets/pf4.jpg";
import Portifolio5 from "../assets/pf5.jpg";
import Portifolio6 from "../assets/pf6.jpg";
import {
  Projects,
  DivImgAndText,
  PortImg,
  DivBioImg,
  DivAllProjets,
  DivTextMyProjects,
  ButtonProject,
} from "../styles/project-section-style";
import { BiLinkExternal } from "react-icons/bi";

export const ProjectSection = () => {
  return (
    <Projects id="projetos">
      <DivTextMyProjects>
        <h2>
          Meus <span>Projetos</span> Pessoais
        </h2>
      </DivTextMyProjects>

      <DivAllProjets>
        <DivImgAndText>
          <PortImg>
            <img src={Portifolio3} />
          </PortImg>
          <DivBioImg>
            <h4>Projeto 3</h4>
            <p>Empty</p>
            <ButtonProject
              href="https://azs-web-rickandmorty-green.vercel.app/"
              target="_blank"
            >
              <a
                href="https://azs-web-rickandmorty-green.vercel.app/"
                target="_blank"
              >
                Ver Projeto
              </a>
              <a
                href="https://azs-web-rickandmorty-green.vercel.app/"
                target="_blank"
              >
                <BiLinkExternal />
              </a>
            </ButtonProject>
          </DivBioImg>
        </DivImgAndText>

        <DivImgAndText>
          <PortImg>
            <img src={Lordoftherings} />
          </PortImg>
          <DivBioImg>
            <h4>Landing Page O Senhor dos Anéis</h4>
            <p>
              90% finalizado com Javascript, ReactJS, Styled Components e React
              Router Dom 100% responsivo
            </p>
            <ButtonProject>
              <p>Ver Projeto</p>
              <a href="#">
                <BiLinkExternal />
              </a>
            </ButtonProject>
          </DivBioImg>
        </DivImgAndText>

        <DivImgAndText>
          <PortImg>
            <img src={Portifolio1} />
          </PortImg>
          <DivBioImg>
            <h4>Meu Portfolio Pessoal</h4>
            <p>
              Projeto desenvolvido por mim do zero com ReactJS<br></br>e Styled
              Components 100% responsivo.
            </p>
            <ButtonProject>
              <p>Ver Projeto</p>
              <a href="https://website-mui.vercel.app/ target=_blank">
                <BiLinkExternal />
              </a>
            </ButtonProject>
          </DivBioImg>
        </DivImgAndText>

        <DivImgAndText>
          <DivBioImg>
            <PortImg>
              <img src={Portifolio4} />
            </PortImg>
            <h4>Projeto 4</h4>
            <p>Empty</p>
            <ButtonProject>
              <p>Ver Projeto</p>
              <a href="#">
                <BiLinkExternal />
              </a>
            </ButtonProject>
          </DivBioImg>
        </DivImgAndText>

        <DivImgAndText>
          <PortImg>
            <img src={Portifolio5} />
          </PortImg>
          <DivBioImg>
            <h4>Projeto 5</h4>
            <p>Empty</p>
            <ButtonProject>
              <p>Ver Projeto</p>
              <a href="#">
                <BiLinkExternal />
              </a>
            </ButtonProject>
          </DivBioImg>
        </DivImgAndText>

        <DivImgAndText>
          <PortImg>
            <img src={Portifolio6} />
          </PortImg>
          <DivBioImg>
            <h4>Projeto 6</h4>
            <p>Empty</p>
            <ButtonProject>
              <p>Ver Projeto</p>
              <a href="#">
                <BiLinkExternal />
              </a>
            </ButtonProject>
          </DivBioImg>
        </DivImgAndText>
      </DivAllProjets>
    </Projects>
  );
};
