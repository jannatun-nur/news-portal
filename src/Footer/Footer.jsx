

const Footer = () => {
    return (
        <div className="bg-gradient-to-r from-indigo-800 via-blue-600 to-blue-400 text-white
        p-10">
          <div className="lg:flex lg:justify-between md:flex md:justify-between columns-1">
            {/* sec for left */}
            <section>
             <p className="text-2xl font-semibold">Visit Our More Services</p>   
             <p className="py-2 text-xl">www.dailynews.org.com</p>   
             <p className="text-xl">www.healthcare.org.com</p>   
             <p className="py-2 text-xl">www.firstaid.org.com</p>   
            </section>

            {/* sec for right */}
            <section className="mt-10 md:mt-0 lg:mt-0">
            <p className="text-2xl font-semibold">Subscribe Us</p>
            <input className="bg-white rounded-lg text-blue-500" placeholder="@gmail.com"/>
            </section>
          </div>  
        </div>
    );
};

export default Footer;