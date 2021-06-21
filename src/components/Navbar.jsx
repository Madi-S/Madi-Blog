import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='navbar__heading'>The Madi Blog</h1>
            <div className='navbar__links'>
                <Link className='navbar__link' to='/'>Home</Link>
                <Link className='navbar__link' to='/create' style={{
                    color: '#fff',
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: '#f1356d'
                }}>New Blog</Link>
            </div>
        </nav>
    )
}

export default Navbar
