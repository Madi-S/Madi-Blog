import BlogPreview from './BlogPreview'

const BlogList = props => {
    return (
        <div className='content__blog-list'>
            <h2>{props.title}</h2>
            {props.blogs.map(blog => (
                <div key={blog.id} className='content__blog-preview'>
                    <BlogPreview data={blog} />
                </div>
            ))}
        </div>
    )
}

export default BlogList
