import bannerImg from '../../assets/books.jpg'

const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen my-5 rounded-4xl ">
      <div className="hero-content flex-col justify-around items-center gap-10 px-15 lg:flex-row-reverse">
        <img
          src={bannerImg}
          className="bannerImg w-110"
        />
        <div>
          <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
          <button className="btn btn-success my-12 p-5">View The List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
