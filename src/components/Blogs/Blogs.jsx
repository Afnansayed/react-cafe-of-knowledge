import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleaddToBookMark,handelReadingTime}) => {
    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
      fetch('blog.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
    },[])
    return (
        <div className="md:w-2/3">
            <h1 className="text-5xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blog => <Blog key={blog.id}
                    handleaddToBookMark={handleaddToBookMark}
                    handelReadingTime={handelReadingTime}
                     blog={blog}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleaddToBookMark:PropTypes.func.isRequired,
    handelReadingTime:PropTypes.func
}
export default Blogs;