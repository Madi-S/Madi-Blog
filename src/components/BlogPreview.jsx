import { Link } from 'react-router-dom'

const BlogPreview = ({data}) => {
    return (
        <Link to={`/blog/${data.id}`}>
            <h2 className='content__blog-preview-heading'>{data.title}</h2>
            <p> — "{data.author}"</p>
        </Link>
    )
}

export default BlogPreview
