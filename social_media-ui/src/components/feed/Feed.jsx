import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

export default function Feed({user}) {

    const [posts, setPosts] = useState([]);
    

    useEffect(()=>{

        const fetchPosts = async () =>{
            const res = user 
            ? await axios.get("posts/timeline/" + user._id)
            : await axios.get("posts/timeline/" + user._id);
            setPosts(res.data)
        }
        fetchPosts();
    },[user]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share 
                user={user}/>
                {posts.map ((p)=>(
                <Post key={p._id} post ={p}/>    
                ))}
                

            </div>
        </div>
    )
}
