import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonations } from "../LocalStorag/LocalStorag";

const Donation = () => {
    const donations = useLoaderData()
    const [appliedDonat, setAppliedDonat] = useState([]);
    useEffect(() => {
        const storDonationId = getDonations();
        if (donations.length > 0) {
            const appliedDonation = donations.filter(donation => storDonationId.includes(donation.id));

            setAppliedDonat(appliedDonation);
        }
    }, [])
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={donations.picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">Box Office News! {appliedDonat.length}</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Donation;