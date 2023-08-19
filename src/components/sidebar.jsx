import React from 'react';
import { BiSolidHome, BiSolidUser, BiLogoReact, BiDesktop } from 'react-icons/bi'
//import SidebarItem from '../SidebarItem';
import { DivSidebar, IconSidebar } from '../styles/sidebar-styles';

export const SidebarSection = ({ active  }) => {

    return (
        <DivSidebar sidebar={ active }>
            <IconSidebar>                        
                <a href="#home"><BiSolidHome/></a>                           
                <a href="#sobre"><BiSolidUser /></a>                                
                <a href="#skill"><BiLogoReact /></a>                               
                <a href="#projetos"><BiDesktop /></a>
            </IconSidebar>           
        </DivSidebar>
    )
}