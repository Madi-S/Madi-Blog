import { useState } from 'react'
import BlogList from './BlogList'

const Home = () => {
    const [blogs, setBlogs] = useState([
        {
            title: 'Chelsea is UCL 2020/2021 Champion',
            body: 'lorem ipsum',
            authour: 'London Sports',
            id: 14324
        },
        {
            title: 'Haaland future is obscure',
            body: 'lorem ipsum',
            authour: 'German Football',
            id: 21256
        },
        {
            title: 'Italia is main favourite on Euro 2021?',
            body: 'lorem ipsum',
            authour: 'La Gazzette',
            id: 994583
        }
    ])

    return (
        <div className='home'>
            <BlogList blogs={blogs}>
                <h1>Top Blogs</h1>
            </BlogList>
        </div>
    )
}

export default Home
