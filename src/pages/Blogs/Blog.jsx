import { useParams } from "react-router-dom";

const Blog = () => {
    const { category } = useParams();
    return <h1>This is Blog For {category}</h1>;
};

export default Blog;