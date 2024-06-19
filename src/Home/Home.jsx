
import FollowUs from "../FollowUs/FollowUs";
import NewsPortal from "../NewsPortal/NewsPortal";
import Slider from "../Slider/Slider";


const Home = () => {
    return (
        <div className="bg-white px-4">
           <NewsPortal/>
           <Slider/>
           <FollowUs/>
        </div>
    );
};

export default Home;