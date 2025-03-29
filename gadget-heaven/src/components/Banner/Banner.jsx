import bannerImg from "../../assets/banner.jpg";

const Banner = () => {
  return (
    <div className="hero bg-purple-700 text-white rounded-2xl mt-2 my-9 min-h-screen">
      <div className="hero-content mt-[-250px] text-center">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-bold">
            Upgrade Your Tech Accessorize with Gadget Heaven Accessories
          </h1>
          <p className="mt-5 max-w-[670px] mx-auto">
            Explore the latest gadgets that will take your experience to the
            next level. From smart devices to the coolest accessories, we have
            it all!
          </p>
          <button className="btn btn-primary rounded-4xl bg-white text-purple-700 font-bold px-5 mt-10">
            Shop Now
          </button>
          <img
            src={bannerImg}
            className="h-[411px] w-[800px] border-10 border-purple-200 rounded-4xl ml-16 mt-20 absolute"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
