import "./BlogSection.component.css";
import BlogCard from '../BlogCard/BlogCard.component';
import Images from "../../utils/importImages";
import { Link } from "react-router-dom";

const blogs = [
    {
        title: "How UX works in web",
        date: "Nov 9, 2023",
        image: Images.worksImage1, 
        tags: ["UI", "UX"]
    },
    {
        title: "Designing for Accessibility",
        date: "Oct 22, 2023",
        image: Images.worksImage1, 
        tags: ["Accessibility", "Design"]
    },
    {
        title: "The Future of UI Trends",
        date: "Sep 15, 2023",
        image: Images.worksImage1, 
        tags: ["UI", "Trends"]
    }
];

const BlogSection = () => {
    return (
        <div className="blog-container">
            <div className="blog-header">
                <div className="header-left">
                    <img src={Images.star} alt="Star Icon" className="star-icon" />
                    <h2>Blog</h2>
                </div>
                <Link to="/" className="view-all">view all</Link>
            </div>
            <div className="blog-list">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} blog={blog} />
                ))}
            </div>
        </div>
    );
};

export default BlogSection;
