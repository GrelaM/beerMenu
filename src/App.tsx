import 'antd/dist/antd.css'
import './App.css'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'

import listPage from './pages/listPage/listPage'
import singlePage from './pages/singleBeerPage/singleBeerPage'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App__body"> 
        <Switch>
          <Route path="/list/page/:page?" exact component={listPage} />
          <Route path="/beer/:id?" exact component={singlePage} />
          <Redirect from="/" to="/list/page/1" />
        </Switch>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
