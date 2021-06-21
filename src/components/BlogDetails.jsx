import { useParams } from 'react-router-dom'
import useFetch from '../useFetch'
import BlogView from './BlogView'

const BlogDetails = () => {
    const { id } = useParams()
    const [blog, isPending, error] = useFetch(`blogs/${id}`)

    return (
        <div className='content__blog-details'>
            {error && <div className='content__error'>Error: {error}</div>}
            {isPending && <div className='content__loading'>Loading ...</div>}
            {blog && <BlogView data={blog} />}
        </div>
    )
}

export default BlogDetails
