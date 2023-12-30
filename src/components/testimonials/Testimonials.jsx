import React, { useContext } from "react";
import MyContext from "../../context/data/MyContext";

function Testimonial() {
  const context = useContext(MyContext);
  const { mode } = context;
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 py-10 mx-auto">
          <h1
            className=" text-center text-3xl font-bold text-black"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            Testimonial
          </h1>
          <h2
            className=" text-center text-2xl font-semibold mb-10"
            style={{ color: mode === "dark" ? "white" : "" }}
          >
            <span className=" text-blue-500">Customer </span>feedback
          </h2>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  I've been shopping online for years, and this website stands
                  out from the rest. Not only is their user interface incredibly
                  intuitive, but the range of products they offer is vast and of
                  top-notch quality. My orders always arrive on time, and their
                  customer support team is always ready to assist. A five-star
                  experience every time!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#0000FF" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Alexander Hipp
                </h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  What a fantastic shopping experience! The website is fast,
                  secure, and easy to navigate. The detailed product
                  descriptions and customer reviews helped me make informed
                  decisions. Moreover, their return and exchange policy is
                  hassle-free. I've recommended this site to all my friends and
                  family. Truly a gem in the online shopping world.
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#0000FF" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Christin Hume
                </h2>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mb-0 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                />
                <p
                  style={{ color: mode === "dark" ? "white" : "" }}
                  className="leading-relaxed"
                >
                  I've always been a bit skeptical about buying clothes online
                  due to size issues, but this website changed my perception
                  entirely. Their size guide is accurate, and the clothing items
                  I've purchased fit perfectly. The delivery was prompt, and
                  everything was packaged beautifully. Plus, the occasional
                  discounts and deals are a cherry on top. Highly recommended!
                </p>
                <span className="inline-block h-1 w-10 rounded bg-blue-500 mt-6 mb-4" />
                <h2
                  style={{ color: mode === "dark" ? "#0000FF" : "" }}
                  className="text-gray-900 font-medium title-font tracking-wider text-sm uppercase"
                >
                  Daniel Dwarshuis
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Testimonial;
