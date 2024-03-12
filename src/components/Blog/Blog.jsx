import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";
const Blog = ({blog,handleaddToBookMark,handelReadingTime}) => {
     const {title,cover,author_img,posted_date,author,reading_time,hashtag} = blog;
    return (
        <div className='mb-20 space-y-3'>
            <img className='w-[50%] mx-auto' src={cover} alt={`Cover picture of the title ${title}`} />
            <div className='flex justify-between'>
                <div className='flex gap-10'>
                    <img className='w-16 rounded-full border-2' src={author_img} alt="" />
                    <div>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                      <span>{reading_time} min read</span>
                      <button onClick={() =>handleaddToBookMark(blog)} className='ml-3'><CiBookmark /></button>
                </div>
            </div>
            <h1 className='text-2xl'>{title}</h1>
            <p className='space-x-5'>
                {
                   hashtag.map((hash,idx) => <span key={idx}><a href="">#{hash}</a></span> )
                }
            </p>
            <button onClick={()=>handelReadingTime(reading_time)} className='text-xl text-purple-500 underline'>Mark as read</button>
        </div>
    );
};
Blog.propTypes ={
    blog:PropTypes.object.isRequired,
    handleaddToBookMark:PropTypes.func.isRequired,
    handelReadingTime:PropTypes.func
}
export default Blog;
