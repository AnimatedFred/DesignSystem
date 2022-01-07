import logo from './logo.svg';
import './App.css';
import { Button } from './stories/Button';
import { Header } from './stories/Header';
import * as s from "./styles/globalStyles";
import styled from "styled-components";

export const ResponsiveWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: stretched;
  background-color: #000;
  align-items: stretched;
  width: 100%;
  @media (min-width: 767px) {
    flex-direction: row;
  }
`;




function App() {
  return (

    <ResponsiveWrapper>


          
          <s.Container flex={2} style={{
              backgroundColor: "#0B0B0C",
              padding: 24,
              borderRadius: 0,
              
              
            
              boxShadow: "5px 0px 11px 4px rgba(9, 9, 10, 0.3)",
            }}>
              <Header
  onCreateAccount={() => {}}
  onLogin={function noRefCheck() {}}
  onLogout={function noRefCheck() {}}
  user={{}}
/>
              <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        
    
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <s.SpacerSmall />

        <Button primary size="small" label="Log out" />
        
       
      </header>
    </div>
    </s.Container>
      </ResponsiveWrapper>



  );
}

export default App;
