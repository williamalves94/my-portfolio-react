import { Skill, DivMySkillsText, TechnicalSkills, ProfessionalSkills, AllSkills, BoxTechnologys, Technologys, Bar } from '../styles/skill-section-style';




export const SkillSection = () => {
    return (
        <Skill id="skill">
            <DivMySkillsText>
                <h2>Minhas <span>Habilidades</span></h2>
            </DivMySkillsText>

            <AllSkills>                   
                    <TechnicalSkills>
                        <h2>Habilidades Técnicas</h2>
                        <BoxTechnologys>                  
                            <Technologys>
                                <h3>HTML <span>55%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>

                            <Technologys>
                                <h3>CSS <span>50%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>
                            
                            <Technologys>
                                <h3>Styled Components <span>42%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>
                            
                            <Technologys>
                                <h3>Javascript <span>46%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>

                            <Technologys>
                                <h3>ReactJS <span>40%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>

                            <Technologys>
                                <h3>React Native <span>30%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>

                            <Technologys>
                                <h3>Typescript <span>38%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>

                            <Technologys>
                                <h3>NextJS <span>30%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>                            
                        </BoxTechnologys>
                    </TechnicalSkills>
 
                    <ProfessionalSkills>
                    <h2>Habilidades Profissionais</h2>
                        <BoxTechnologys>            
                            <Technologys>
                                <h3>Comprometimento <span>80%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>
                            
                            <Technologys>
                                <h3>Autoconfiança <span>50%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>
                            
                            <Technologys>
                                <h3>Resolução de problemas <span>70%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>
                            
                            <Technologys>
                                <h3>Organização <span>85%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>

                            <Technologys>
                                <h3>Trabalho em equipe <span>70%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>

                            <Technologys>
                                <h3>Proatividade <span>65%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>

                            <Technologys>
                                <h3>Comunicação <span>82%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>

                            <Technologys>
                                <h3>Foco em resultados <span>74%</span></h3>
                                <Bar><span></span></Bar>
                            </Technologys>                            
                        </BoxTechnologys>
                    </ProfessionalSkills>
            </AllSkills>          
        </Skill>
    )
};