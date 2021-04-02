import './App.css'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import listPage from './pages/listPage/listPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/list/page/:page?" exact component={listPage} />
          <Route path="/beer" exact render={() => <h1>Beer</h1>} />
          <Redirect from="/" to="/list/page/1" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App
