import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    <div >
      <Header/>
      <Home/>
    </div>
  );
}

export default App;
const Stv = styled.div`
padding-left:100px;
`