const BlogPreview = ({ title, authour }) => {
    return (
        <>
            <h2 className='content__blog-preview-heading'>{title}</h2>
            <p>Written by {authour}</p>
        </>
    )
}

export default BlogPreview
