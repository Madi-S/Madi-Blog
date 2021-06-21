const BlogView = ({ data }) => {
    return (
        <div className='content__blog'>
            <h2 className='content__blog-heading'>{data.title}</h2>

            <p>{data.body}</p>

            <blockquote>{data.author}</blockquote>
        </div>
    )
}

export default BlogView
