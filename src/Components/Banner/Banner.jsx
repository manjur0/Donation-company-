

const Banner = () => {
    return (
        <div>
            <div className="hero h-96 bg-cover bg-center  my-5" style={{ backgroundImage: 'url(https://i.ibb.co/YDpDrLB/Banner.jpg)' }}>
                <div className="hero-overlay bg-opacity-95 bg-white"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl md:text-5xl font-bold text-black">I Grow By Helping People In Need</h1>
                        <div className="join">
                            <input className="input input-bordered lg:w-[470px] outline-none text-black join-item" placeholder="Search here...." />
                            <button className="btn join-item bg-red-500 hover:bg-red-500 text-white rounded-lg ">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;