import { Contact, DivTextContact, Form, DivTwoInputs, DivInput, DivTextArea, TextAreaInput, ButtonContact } from '../styles/contact-section-style';


export const ContactSection = () => {
    return(
        <Contact>
            <DivTextContact>
                <h2>Contato</h2>
            </DivTextContact>
            <Form>
                    <DivTwoInputs>
                        <DivInput>
                            <input type="text" placeholder='Nome' required/>
                            <span></span>
                        </DivInput>
                        
                        <DivInput>
                            <input type="email" placeholder='E-mail' required/>
                            <span></span>
                        </DivInput>
                    </DivTwoInputs>

                    <DivTwoInputs>
                        <DivInput>
                            <input type="number" placeholder='' required/>
                            <span></span>
                        </DivInput>

                        <DivInput>
                            <input type="email" placeholder='' required/>
                            <span></span>
                        </DivInput>
                    </DivTwoInputs>

                    <DivTextArea>
                        <TextAreaInput name="" id="" cols="30" rows="10" required placeholder='Mensagem'>
                            <h2>teste area</h2>
                        </TextAreaInput>
                    </DivTextArea>
                    <ButtonContact>
                        <a href="#">Enviar Mensagem</a>
                    </ButtonContact>
            </Form>
        </Contact>
    )
}; 