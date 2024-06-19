import image from "../../public/connect.png";

const FollowUs = () => {
  return (
    <div>
      {/* Main div */}
      <div>
        {/* left sec */}
        <section>
          <div className="card w-6/12 h-[300px] bg-base-100 image-full ml-10">
            <figure>
              <img src={image} alt="image" className="w-full h-[300px]" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-4xl text-white font-semibold py-2">
                Connect with Us
              </h2>
              <p className="text-white text-2xl">
               Pocket News is here to give you daily services. We update daily news for your wellfare so that
               you can get any breaking news anytime, anywhere . We are providing servies since 2007. To get daily 
               update , keep eyes on email & subscribe us.
              </p>

              <input className="bg-white rounded-lg text-blue-600 w-5/12 py-1" placeholder="@gmail.com"/>
             
            </div>
          </div>
        </section>

        {/* right sec */}
        <section>
            
        </section>
      </div>
    </div>
  );
};

export default FollowUs;
