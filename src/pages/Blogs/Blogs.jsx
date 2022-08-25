import { Routes, Route} from "react-router-dom";
import BlogPreview from "./BlogPreview";
import Blog from "./Blog";

const Blogs = () => {
    return (
        <Routes>
            <Route index element={<BlogPreview />} />
            <Route path=":category" element={<Blog />}/>
        </Routes>
    );
};

export default Blogs;