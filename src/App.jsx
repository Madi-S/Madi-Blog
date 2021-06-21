import Navbar from './components/Navbar'
import Home from './components/Home'

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <div className='content'>
                <Home />
            </div>
        </div>
    )
}

export default App
