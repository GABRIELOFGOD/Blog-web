import { useParams } from 'react-router-dom'

import BlogComp from '../components/BlogComp'

import { single, datas } from '../utils/dummy'

const ReadBlog = () => {
  const { id } = useParams()
  
  datas.map(data => {
    if(data)
  })
  
   return (
     <div>
       <BlogComp blog={single} />
     </div>
    )
  }
  
export default ReadBlog;