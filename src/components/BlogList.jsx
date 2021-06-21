const BlogList = props => {
    return (
        <div className='content__blog-list'>
            {props.children}
            {props.blogs.map(blog => (
                <div key={blog.id} className='content__blog-preview'>
                    <h2 className='content__blog-preview-heading'>
                        {blog.title}
                    </h2>
                    <p>Written by {blog.authour}</p>
                </div>
            ))}
        </div>
    )
}

export default BlogList
