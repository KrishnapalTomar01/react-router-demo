import { Link } from "react-router-dom";
import './BlogPreview.Styles.css';

const categories = ["Entertainment", "Education", "Computers", "Science"]

const BlogPreview = () => {
    return (
        <div>
            <h1>Blogs</h1>
            {
                categories.map((element) => {
                    return (
                        <div className="link-container">
                            <Link to={element}> {element} </Link>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default BlogPreview;