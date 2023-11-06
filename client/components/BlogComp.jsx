import { AiOutlineLike, AiOutlineDislike } from 'react-icons/ai'
import { BiCommentDetail } from 'react-icons/bi'

const BlogComp = ({ blog }) => {

  const submitComment = e => {
    e.preventDefault()
    
  }
  
  return (
    <div className="pt-4 px-4">
      <h1 className='text-2xl text-center font-extrabold'>{blog.heading}</h1>
      <div className='text-gray justify-center text-[10px] py-1 flex gap-8'>
        <b>By: {blog.blogBy}</b>
        <p>{blog.postedAt}</p>
      </div>
      
      <p className='text-justify'>{blog.body}</p>
      
      <div className='flex grid grid-cols-3 my-2  py-2 text-center text-gray'>
        <div className='flex justify-center items-center gap-2 my-auto'>
          <span>{blog.like.length}</span>
          <AiOutlineLike />
        </div>
        <div className='flex justify-center items-center gap-2 my-auto'>
          <span>{blog.dislike.length}</span>
          <AiOutlineDislike />
        </div>
        <div className='flex justify-center items-center gap-2 my-auto'>
          <span>{blog.comments.length}</span>
          <BiCommentDetail />
        </div>
      </div>
      
      <form onSubmit={submitComment} className='flex flex-col'>
        <textarea placeholder="What do you think about this post? Comment!" className='w-full border-2 max-h-32 h-32 outline-0 p-4 rounded-sm border-primary bg-transparent' />
        <button className='bg-primary rounded-sm px-5 mr-0  py-3 w-fit h-fit my-2 text-secondary font-bold hover:bg-body outline-0'>Post</button>
      </form>
      <div>
        {
          blog.comments.map(comment => (
            <div
              key={comment.id}
              className='shadow-sm p-2 pt-4 text-justify relative shadow-black my-4'
            >
              <small className='right-8 top-1 absolute text-gray text-[10px] italic'>{comment.name}</small>
              <p className='text-sm'>{comment.comment}</p>
              <div className='grid grid-cols-2 text-center text-gray py-2 text-xs'>
                <div className='flex justify-center items-center gap-2 my-auto'>
                  <span>{comment.like.length}</span>
                  <AiOutlineLike />
                </div>
                <div className='flex justify-center items-center gap-2 my-auto'>
                  <span>{comment.dislike.length}</span>
                  <AiOutlineDislike />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default BlogComp;