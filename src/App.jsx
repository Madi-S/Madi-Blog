import Home from './components/Home'
import Navbar from './components/Navbar'
import Create from './components/Create'
import Page404 from './components/Page404'
import BlogDetails from './components/BlogDetails'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const App = () => {

    const onCreate = data => {
        const id = Math.floor(Math.random() * 1000)
        const blog = {...data, id}
        return fetch('http://localhost:8000/blogs', {
            method: 'POST',
            body: JSON.stringify(blog),
            headers: {'Content-Type': 'application/json'}
        })
    }

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
                            <Create onCreate={onCreate} />
                        </Route>

                        <Route exact path='/blog/:id'>
                            <BlogDetails />
                        </Route>

                        <Route path='*'>
                            <Page404 />
                        </Route>

                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App
