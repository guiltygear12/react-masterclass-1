import styled, {keyframes} from "styled-components"

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
export const aniRotate = keyframes`
  0%{
    transform: rotate(0deg);
  }
  50%{
    opacity:0
  }
  100%{
    transform: rotate(360deg);
  }
`;
const Title = styled.h1`
    color:green;
    transition: .5s;
    &:hover{
      transform:rotate(-90deg)
    }
`;
const Box = styled.div`
  background-color: ${(props)=>props.bgColor};
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${aniRotate} 3s linear infinite;
  ${Title}:hover{
    color:white;
    transform:rotate(180deg);
  }
`;
const Circle = styled(Box)`
  border-radius: 50%;
`;
const Btn = styled.button`
  background-color:tomato;
  color:white;
`;
const Input = styled.input.attrs({required:true, maxLength:10})`
  background-color: aqua;
`;
function App() {

  return (
    <Wrapper>
      <Title>안녕하세요!</Title>
      <Box bgColor="black">
        1
      </Box>
      <Box bgColor="tomato">
        <Title>상자</Title>
      </Box>
      <Circle bgColor="skyblue">
        3
      </Circle>
      <Btn>
        버튼
      </Btn>
      <Btn as="a" href="#none">
        버튼2
      </Btn>
      <Input />
      <Input />
      <Input />
      <Input />
    </Wrapper>
  )
}

export default App
