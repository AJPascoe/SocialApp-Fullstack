import { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.css";
import axios from "axios";

export default function Feed() {

    const [posts, setPosts] = useState([]);
    const [text, setText] = useState("");

    useEffect(()=>{

        const fetchPosts = async () =>{
            const res = await axios.get("posts/timeline/6160271af0b7f180f5998e4f");
            setPosts(res.data)
        }
        fetchPosts();
    },[]);
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share />
                {posts.map ((p)=>(
                <Post key={p._id} post ={p}/>    
                ))}
                

            </div>
        </div>
    )
}
