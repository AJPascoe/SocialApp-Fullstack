import Topbar from "../../components/topbar/Topbar";
import Feed from "../../components/feed/Feed";
import "./home.css";

export default function Home({user}) {
  return (
    <>
      <Topbar />
      <div className="backg">
        <div className="homeContainer">
          <Feed 
            user={user}/>
        </div>
      </div>
    </>
  );
}
