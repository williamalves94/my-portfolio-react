import { Head, NavHeader, MenuIcon } from '../styles/header-style';
import { BiMenu } from "react-icons/bi";
import React, { useState } from 'react';
import { SidebarSection } from './sidebar';

  export const HeaderSection = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)

    return (
      <Head>                                    
        <p>Portfólio</p>
        <MenuIcon>
          <BiMenu onClick={showSidebar} />
          {sidebar && <SidebarSection active={setSidebar} />}
        </MenuIcon>
             
        <NavHeader>                      
          <a href="#home">Home</a>
          <a href="#sobre">Sobre</a>
          <a href="#skill">Habilidades</a>
          <a href="#projetos">Projetos</a>              
        </NavHeader>
                                  
      </Head>
    );
  };