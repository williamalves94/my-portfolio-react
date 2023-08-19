import { Footer, IconFooter } from '../styles/footer-section-style';
import { BiCopyright } from "react-icons/bi";

export const FooterSection = () => {
    return (
        <Footer>
            <p>Todos os direitos reservados 2023</p>
            <IconFooter>
                <BiCopyright />
            </IconFooter>
        </Footer>
    );
};