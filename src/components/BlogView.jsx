const BlogView = ({ data }) => {
    

    return (
        <div className='content__blog'>
            <h2 className='content__blog-heading'>{data.title}</h2>
            <div>{data.body}</div>
            <p>Written by {data.author}</p>
        </div>
    )
}

export default BlogView
