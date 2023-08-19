import styled from 'styled-components';

export const Head = styled.header`
    width: 100%;
    height: 70px;
    position: fixed;
    z-index: 100;
    background-color: black;
    color: white;
    border-bottom: 1px solid #0994c2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p{
        margin-left: 100px;
        font-weight: 600;
        font-size: 25px;

        @media( max-width: 800px ){
        margin-left: 35px;
    }
    }    
`;

export const NavHeader = styled.nav`
    margin-right: 60px;
    a {
        color: #fff;
        justify-content: space-around;
        margin-right: 45px;
        font-size: 17px;
        transition: all.3s;
        text-decoration: none;

        @media( max-width: 800px ){
            display: none;
            font-size: 18px;
            margin: 20px 0px;
    }
    }
    a:hover {
        color: DeepSkyBlue;

    }

    @media( max-width: 800px ){
        position: absolute;
        top: 100%;
        left: 0;
        width: 100%;
        padding: 0 20px ;

    }
`;

export const MenuIcon = styled.menu`
    font-size: 35px;
    display: none;
    margin-right: 35px;
    margin-top: 9px;
    cursor: pointer;
    
    

    @media(max-width: 800px ){
        display: block;
    }
`;
