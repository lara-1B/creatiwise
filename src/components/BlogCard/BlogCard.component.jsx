import "./BlogCard.component.css";

const BlogCard = ({ blog }) => {
    return (
        <div className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
                <p className="blog-date">{blog.date}</p>
                <h3 className="blog-title">{blog.title}</h3>
                <div className="blog-tags">
                    {blog.tags.map((tag, index) => (
                        <span key={index} className="blog-tag">{tag}</span>
                    ))}
                </div>
            </div>
            <button className="read-button">Read</button>
        </div>
    );
};

export default BlogCard;
