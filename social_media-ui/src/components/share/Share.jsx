import "./share.css";
import {PermMedia, Label, Room, EmojiEmotions} from "@material-ui/icons";

export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img className="shareProfileImg" src="/assets/person/2.jpeg" alt="" />
                    <input placeholder="PERSONALISE AND SHARE YOUR RECIPE" className="shareInput"/>
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                        <div className="shareOption">
                            
                            <PermMedia htmlColor="tomato" className="shareIcon"/>
                            <span className="shareOptionText">Media </span>
                        </div>
                        
                    </div>
                    <div className="heading">
                            <h3 className="title">What are your favourite cuisines?</h3>
                        </div>
                    <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
