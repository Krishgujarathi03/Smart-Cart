import React from "react";
import Layout from "../../components/layout/Layout";
import HeroSection from "../../components/herosection/HeroSection";
import Filter from "../../components/filter/Filter";
import ProductCard from "../../components/productcard/ProductCard";
import Track from "../../components/track/Track";
import Testimonial from "../../components/testimonials/Testimonials";
import { Link } from "react-router-dom";
// import { addToCart, deleteFromCart } from "../../redux/CartSlice";
// import { useDispatch, useSelector } from "react-redux";

function Home() {
  // const context = useContext(MyContext);
  // console.log(context);
  // // Destructuring
  // const { name, rollno } = context;
  // const dispatch = useDispatch();
  // const cartItem = useSelector((state) => state.cart);

  // const addCart = () => {
  //   dispatch(addToCart("shirt"));
  // };
  // const deleteCart = () => {
  //   dispatch(deleteFromCart("shirt"));
  // };
  // console.log(cartItem);

  return (
    <Layout>
      <HeroSection />
      <Filter />
      <ProductCard />
      <div className="flex justify-center -mt-10 mb-4">
        <Link to={"/allproducts"}>
          <button className=" bg-gray-300 px-5 py-2 rounded-xl">
            See more
          </button>
        </Link>
      </div>
      <Track />
      <Testimonial />
    </Layout>
  );
}

export default Home;
