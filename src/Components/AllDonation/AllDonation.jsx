
const AllDonation = ({ donation }) => {
    const { picture, title, category, category_bg } = donation;
    return (
        <div>
            <div >
                <div className="card card-compact shadow-xl  rounded-xl ">
                    <figure><img className="w-full" src={picture} alt="Picture" /></figure>
                    <div className="card-body">
                        <span className=" inline  p-2">{category}</span>
                        <h2 className="card-title">{title}</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDonation;