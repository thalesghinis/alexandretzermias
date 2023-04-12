import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { StyledContainer, StyledScreen } from './components/StyledGlobal'


function App() {
  return (
    <StyledScreen>
      <Header />
        <StyledContainer>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/sobre' element={<About/>}/>
            <Route path='/contato' element={<Contact/>}/>
          </Routes> 
        </StyledContainer>
      <Footer />

    </StyledScreen >
  );
}

export default App;
