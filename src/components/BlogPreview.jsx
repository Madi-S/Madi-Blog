const BlogPreview = ({ title, authour }) => {
    return (
        <>
            <h2 className='content__blog-preview-heading'>{title}</h2>
            <p> — "{authour}"</p>
        </>
    )
}

export default BlogPreview
