import BlogList from './BlogList'
import useFetch from '../useFetch'

const Home = () => {
    const endpoint = 'blogs'
    const [blogs, isPending, error] = useFetch(endpoint)

    return (
        <div className='home'>
            {error && <div className='content__error'>Error: {error}</div>}
            {isPending && <div className='content__loading'>Loading ...</div>}
            {blogs && <BlogList title='Top Blogs' blogs={blogs} />}
        </div>
    )
}

export default Home
