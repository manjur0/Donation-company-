
const AllDonation = ({ donation }) => {
    const { picture, title, category } = donation;
    return (
        <div>
            <div >
                <div className="card card-compact bg-black shadow-xl  rounded-xl lg:gap-4">
                    <figure><img className="w-full" src={picture} alt="Picture" /></figure>
                    <div className="card-body bg-red-200">
                        <h4 className="bg-blue-200  ">{category}</h4>
                        <h2 className="card-title">{title}</h2>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDonation;