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
                        <Route path='/create'>
                            <Create />
                        </Route>

                        <Route path='/'>
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
