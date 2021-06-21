import Home from './components/Home'
import Navbar from './components/Navbar'
import Create from './components/Create'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <div className='app'>
                <Navbar />
                <div className='content'>
                    <Switch>
                        <Route exact path='/'>
                            <Home />
                        </Route>

                        <Route exact path='/create'>
                            <Create />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
