import styled from "styled-components";

export const Projects = styled.section`
  border-top: 1px solid DeepSkyBlue;
  //background: linear-gradient(to bottom,#000, #000, #0994c2);//background-color: black;
  background-color: black;
  padding: 50px 0 50px 0;
  height: auto;
`;

export const DivTextMyProjects = styled.div`
  color: #fff;
  margin-top: 20px;
  h2 {
    text-align: center;
    margin-bottom: 50px;
    font-size: 50px;
  }
  span {
    margin-left: 10px;
    color: DeepSkyBlue;
  }
`;

export const DivAllProjets = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  gap: 30px;
  padding: 0 270px 20px 270px;

  @media (max-width: 1500px) {
    padding: 0 200px 0 200px;
  }

  @media (max-width: 1300px) {
    padding: 0 100px 0 100px;
  }

  @media (max-width: 1200px) {
    padding: 0 100px 0 100px;
  }

  @media (max-width: 991px) {
    padding: 0 50px 0 50px;
  }

  @media (max-width: 870px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 50px 0 50px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 40px 0 40px;
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 0 25px 0 25px;
  }

  @media (max-width: 560px) {
    grid-template-columns: 1fr;
  }
`;

export const DivImgAndText = styled.div`
  border: 2px solid DeepSkyBlue;
  border-radius: 14px;
  padding: 10px;
  //background-color: #000000;
`;

export const PortImg = styled.div`
  img {
    border: 1px solid DeepSkyBlue;
    border-radius: 10px;
    width: 100%;
  }
`;

export const DivBioImg = styled.div`
  color: #fff;
`;
export const ButtonProject = styled.div`
  //border: 2px solid DeepSkyBlue;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  background: linear-gradient(to left, #000, #000, #0994c2);
  cursor: pointer;
  font-size: 16px;
  font-weight: 300;
  margin-top: 10px;
  &:hover {
    //background: linear-gradient(to right,#070707, #070707, #179dca, #0994c2);
    background: #107ea3;
    transition: all.5s;
  }
  a {
    display: flex;
    color: #fff;
    align-items: center;
    justify-content: center;
    margin-left: 15px;
    font-size: 16px;
    text-decoration: none;
  }
`;
