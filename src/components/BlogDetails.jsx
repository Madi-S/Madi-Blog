import { useParams, useHistory } from 'react-router-dom'
import useFetch from '../useFetch'
import BlogView from './BlogView'

const BlogDetails = () => {
    const { id } = useParams()
    const history = useHistory()
    const [blog, isPending, error] = useFetch(`blogs/${id}`)

    const handleDelete = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
            method: 'DELETE'
        }).then(() => history.push('/'))
    }

    return (
        <div className='content__blog-details'>
            {error && <div className='content__error'>Error: {error}</div>}
            {isPending && <div className='content__loading'>Loading ...</div>}
            {blog && <BlogView data={blog} />}
            {!isPending && <button className='content__blog-delete' onClick={handleDelete}>Delete</button>}
        </div>
    )
}

export default BlogDetails
