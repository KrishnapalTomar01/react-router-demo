import { useNavigate } from "react-router-dom";
import './BlogPreview.Styles.css';

const categories = ["Entertainment", "Education", "Computers", "Science"]

const BlogPreview = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>Blogs</h1>
            {
                categories.map((element) => {
                    return (
                        <div className="link-container" onClick={() => navigate(element)}>
                            <span className="link-span"> {element} </span>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default BlogPreview;