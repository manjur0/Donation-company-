import { Link } from "react-router-dom";

const AllDonation = ({ donation }) => {
    const { id, picture, title, category, category_bg } = donation;
    return (
        <div >
            <Link to={`/donation/${id}`}>
                <div >
                    <div className="card card-compact shadow-xl  rounded-xl ">
                        <figure><img className="w-full" src={picture} alt="Picture" /></figure>
                        <div className="card-body">
                            <span className=" inline p-2">{category}</span>
                            <h2 className={`card-title `}>{title}</h2>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AllDonation;