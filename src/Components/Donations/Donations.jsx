import { useEffect, useState } from "react";
import AllDonation from "../AllDonation/AllDonation";


const Donations = () => {
    const [donations, setDonation] = useState([]);
    useEffect(() => {
        fetch('donations.json')
            .then(res => res.json())
            .then(data => setDonation(data));
    }, [])
    return (
        <div >
            <div className="text-center">
                {/* <h2 className="text-3xl">Features donations {donations.length}</h2> */}

            </div>
            <div className="container mx-auto grid grid-cols-1 gap-4  lg:grid lg:grid-cols-4  md:gap-4 md:my-10">
                {
                    donations.map(donation => <AllDonation key={donation.id} donation={donation}></AllDonation>)
                }
            </div>
        </div>

    );
};

export default Donations;