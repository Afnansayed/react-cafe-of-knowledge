import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookMarks,readingTime}) => {
    
    return (
        <div className='ml-5 mt-5 space-y-5'>
            <div className='bg-purple-200 p-4 text-center text-2xl rounded-lg'>
                <h1>Spent Time On Read : {readingTime} min</h1>
            </div>
            <h1 className="text-5xl">BookMarks : {bookMarks.length}</h1>
            {
            bookMarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};
Bookmarks.propTypes ={
    bookMarks:PropTypes.array.isRequired,
    readingTime:PropTypes.number
}
export default Bookmarks;