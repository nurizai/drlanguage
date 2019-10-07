import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro'
import Homepage from './Homepage'
import Navigation from './Navigation'
import { getCards } from './services'
import GlobalStyles from './GlobalStyles';

function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    getCards().then(setCards)

  }, [])

  return (
    <Router>
      <AppStyled>
        <GlobalStyles />
        <Switch>
          <Route exact path="/" render={() => <Homepage cards={cards} />} />
          <Route path="/bookmarked" render={() => <h1>Bookmarked</h1>} />
          <Route path="/settings" render={() => <h1>Settings</h1>} />
        </Switch>
        <Navigation />
      </AppStyled>
    </Router>
  )
}


const AppStyled = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  height: 100%;
  background-color: white;
`

export default App;
