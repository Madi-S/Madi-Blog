const Navbar = () => {
    return (
        <nav className='navbar'>
            <h1 className='navbar__heading'>The Madi Blog</h1>
            <div className='navbar__links'>
                <a className='navbar__link' href='/'>Home</a>
                <a className='navbar__link' href='/create' style={{
                    color: '#fff',
                    padding: '8px',
                    borderRadius: '8px',
                    backgroundColor: '#f1356d'
                }}>New Blog</a>
            </div>
        </nav>
    )
}

export default Navbar
