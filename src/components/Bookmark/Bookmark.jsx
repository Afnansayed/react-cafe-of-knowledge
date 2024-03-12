import PropTypes from 'prop-types';
const Bookmark = ({bookmark}) => {
    return (
        <div className=' bg-slate-200 mb-2 p-2 rounded-lg'>
            <h1 className='text-xl'>{bookmark.title}</h1>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark:PropTypes.object
}
export default Bookmark;