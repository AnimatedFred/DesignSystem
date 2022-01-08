import logo from './logo.svg';
import './App.css';
import { Button } from './stories/Button';
import { Header } from './stories/Header';
import * as s from "./styles/globalStyles";
import styled from "styled-components";

export const pageWrapper = styled.div`
display: flex;
background-color: #000;
flex: 1;
flex-direction: column;
justify-content: stretched;
align-items: stretched;
width: 100%;
@media (min-width: 767px) {
  flex-direction: row;
}
`;

export const ResponsiveColumn = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: stretched;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;

export const StyledProfile = styled.img`
  
  background-color: var(--accent);
  border-radius: 16px;
  width: 100px;
  @media (min-width: 900px) {
    width: 200px;
  }
  @media (min-width: 1000px) {
    width: 200px;
  }
  transition: width 0.5s;
`;



function App() {
  return (
    <pageWrapper>
<ResponsiveColumn flex={1} style={{ padding: 24 }} test>
      <s.Container   flex={1.5}
            style={{
              backgroundColor: "#fff",
              borderColor:"#000",
              padding: 24,
              borderRadius: 0,
            }}>
  

</s.Container>
<s.Container   flex={4}
          
          style={{
            backgroundColor: "#0B0B0C",
            padding: 24,
            borderRadius: 0,
          }}>
sssxkmsxmxkxkxs

</s.Container>



          
          </ResponsiveColumn>


      
</pageWrapper>
      
      
  

  );
}

export default App;
