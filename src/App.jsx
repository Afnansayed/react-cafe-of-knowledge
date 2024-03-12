import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookMarks,setBookMarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);

  const handleaddToBookMark = blog => {
    //console.log(blog);
    const newBookMarks = [...bookMarks,blog];
    setBookMarks(newBookMarks);
  }
  const handelReadingTime = time =>{
    //console.log('Reading time will be updated',time);
    setReadingTime(readingTime + time);
    //console.log(readingTime)
  }
  return (
    <>
     <Header></Header>
     <div className='md:flex container mx-auto'>
     <Blogs handleaddToBookMark={handleaddToBookMark}
     handelReadingTime={handelReadingTime}
     ></Blogs>
     <Bookmarks bookMarks={bookMarks} readingTime={readingTime}></Bookmarks>
     </div>
   
    </>
  )
}

export default App
