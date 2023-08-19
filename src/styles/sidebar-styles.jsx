import styled from 'styled-components';

export const DivSidebar = styled.div`
  background: linear-gradient(to right,#000, #000, #0994c2);
  border-bottom: 2px solid #0994c2;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  height: 8%;
  top: 69px;
  width: 100%;
  border-radius: 0 0 50px 50px;
  left: ${props => props.sidebar ? '0' : '100%'};

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

export const IconSidebar = styled.div`
  a{
    color: #fff;
    font-size: 35px;
    cursor: pointer;
    margin: 0 25px 0 25px;

    :hover{
    color: #0994c2;
    transition: all.3s;
}

    @media(max-width: 400px ){
      font-size: 35px;
      margin: 0 18px 0 18px;
    }

    @media(max-width: 320px ){
      font-size: 35px;
      margin: 0 12px 0 12px;
    }

    @media(max-width: 310px ){
      font-size: 30px;
      margin: 0 15px 0 15px;
    }
  }
`;

//export const IconSidebar = styled.div`
  //width: 50%;
  //color: #fff;
  //cursor: pointer;
  //font-size: 30px;
  //display: flex;
  //justify-content: center;
  //align-items: center;
  //justify-content: space-between;
  //:hover{
  //color: #0994c2;
  //transition: all.3s;
//}
//`;