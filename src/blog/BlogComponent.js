import { useEffect , useState } from "react";
import { BlogsTable } from "./BlogsTable";
import {posts} from "./MyPosts"
import './form.css';



export const BlogComponent = () => {
   
   const [isClicked, setIsClicked] = useState(false);

   // getting data from storage
   const getData = () => {
      const data = localStorage.getItem('Posts')
      if (data) {
         return JSON.parse(data)
      } else {
         return posts
      }
   }
   const getBlog = () => {
      const Data = localStorage.getItem('Blog')
      if (Data) {
         return JSON.parse(Data)
      } else {
         return []
      }
   }
   
   // Main Array Of Objects
   const [Posts, setPost] = useState(getData())
   const [Blog, setBlog] = useState(getBlog());

  
   // Input fields state 
   const [subject, setSubject] = useState("");
   const [description, setDescription] = useState("");
   const [date, setDate] = useState("");


   //form submit
   const handleSubmit = (event) => {
      event.preventDefault();
      let post = {
         subject,
         description,
         date
      }

      setPost([...Posts, post]);
      setSubject('');
      setDescription('');
      setDate('');
      setIsClicked(false);
   }


   // saving data
   
   useEffect(() => {
      localStorage.setItem('Posts', JSON.stringify(Posts))
   }, [Posts])
   useEffect(() => {
      localStorage.setItem('Blog', JSON.stringify(Blog))
   }, [Blog])





   return (
      <>
         <div>
            <button onClick={() => setBlog(Posts)} className="btnTop">List all posts</button>
            <button onClick={() => setIsClicked((prev) => !prev)}className="btnTop">Create post</button>
            {isClicked &&
               <form onSubmit={handleSubmit} className="formInput ">
                  <div>
                  <label>Subject</label>
                  <input type={"text"} required autoFocus maxLength={20} name="subject" onChange={(e) => setSubject(e.target.value)} value={subject} />
                  </div>
                  <div>
                  <label>Description</label>
                  <input type={"text"} required autoFocus maxLength={30} name="description" onChange={(e) => setDescription(e.target.value)} value={description} />
                  </div>
                  <div>
                  <label>Date</label>
                  <input type={"datetime-local"} required autoFocus maxLength={50} name="date" onChange={(e) => setDate(e.target.value)} value={date} />
                  </div>
                  <button type="submit"className="btnTop">Add a new post</button>
               </form>}
               <BlogsTable Blog={Blog} />
                
               

         </div>
      </>
   )
}
