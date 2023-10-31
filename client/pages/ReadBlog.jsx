import { useParams } from 'react-router-dom'

import {findBlog} from '../context/finder'

const ReadBlog = () => {
  const { id } = useParams()
  
  const btnFct = () => {
    console.log(findBlog)
  }
   return (
     <div>
       ReadBlog {id}
       <button onClick={btnFct}>button</button>
     </div>
    )
  }
  
  export default ReadBlog