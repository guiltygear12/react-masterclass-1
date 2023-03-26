import styled, {keyframes} from "styled-components"

const Wrapper = styled.div`
    background-color: ${(props)=>props.theme.backgroundColor};
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
    color:${(props)=>props.theme.textColor};
    transition: .5s;
    &:hover{
      transform:rotate(-180deg)
    }
`;
function theme(){
    return(
        <Wrapper>
            <Title>안녕하세요!</Title>
        </Wrapper>
    )
}

export default theme