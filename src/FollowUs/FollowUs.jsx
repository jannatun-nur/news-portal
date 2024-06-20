import image from "../../public/connect.png";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

const FollowUs = () => {
  return (
    <div className="">
      {/* Main div */}
      <div className="lg:flex lg:justify-between md:flex md:justify-between">
        {/* left sec */}
        <section className=" lg:w-10/12 md:w-10/12 md:h-[180px] lg:mt-32">
          <div className="card lg:w-10/12 md:w-10/12 md:h-[180px] lg:h-[200px] bg-base-100 shadow-xl image-full">
            <figure>
              <img src={image} className="lg:w-full md:w-full md:h-[180px] lg:h-[200px] " alt="image" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-white text-4xl">Connect with Us</h2>
              <p className="text-white text-xl">
                Pocket News is here to give you daily services. We update daily
                news for your wellfare so that you can get any breaking news
                anytime, anywhere . We are providing servies since 2007. To get
                daily update , keep eyes on email & subscribe us.
              </p>
              
            </div>
          </div>
        </section>

        {/* right sec */}
        <section className=" lg:w-4/12 my-5">
          <p className="lg:text-4xl text-2xl text-gray-800 lg:my-10" >Follow Us on</p>
          <p className="text-white text-xl lg:text-4xl py-2 bg-blue-600 px-4 flex gap-3 my-2">
            <FaFacebook />
            Facebook
          </p>
          <p className="text-white text-xl lg:text-4xl py-2 bg-blue-400 px-4 flex gap-3 my-2">
            <FaTwitter />
            Twitter
          </p>
          <p className="text-white text-xl lg:text-4xl py-2 bg-pink-500 px-4 flex gap-3 my-2">
            <BsInstagram />
            Instagram
          </p>
          <p className="text-white text-xl lg:text-4xl py-2 bg-blue-700 px-4 flex gap-3 my-2">
            <FaLinkedin />
            Linkedin
          </p>
        </section>
      </div>
    </div>
  );
};

export default FollowUs;
