import { HeaderSection } from './components/header-section';
import { AboutSection } from './components/about-section';
import { HomeMain } from './components/home-main';
import { SkillSection } from './components/skill-section';
import { ProjectSection } from './components/project-section';
//import { ContactSection } from './components/contact-section';
import { FooterSection } from './components/footer-section';

const App = () => {
  return (
    <div>
      <HeaderSection />
      <HomeMain />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <FooterSection />
    </div>    
  )
}

export default App;
