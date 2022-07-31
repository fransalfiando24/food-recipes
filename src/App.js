import {BrowserRouter as Router, Link} from 'react-router-dom'
import styled from 'styled-components'
import {GiKnifeFork} from 'react-icons/gi'
import Pages from './pages/Pages'
import Category from './components/Category'
import Search from './components/Search'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav> 
          <GiKnifeFork/>
          <Logo to='/'>Let's Cook Together</Logo>
          <GiKnifeFork/>
        </Nav>
        <Category/>
        <Search/>
        <Pages/>
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  @media only screen and (max-width: 768px){
    font-size: 1.1rem;
  }
`


const Nav = styled.div`
  padding: 2rem 0;
  width : 100%;
  height : 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    font-size: 2rem;
    margin: 0 1rem;
  }
  @media only screen and (max-width: 768px){
    svg{
      font-size: 1.5rem;
    }
  }
`

export default App;
