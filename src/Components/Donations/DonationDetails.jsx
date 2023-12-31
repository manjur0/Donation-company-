
import { useLoaderData, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { saveDonations } from '../LocalStorag/LocalStorag';

const DonationDetails = () => {
    const donations = useLoaderData()
    const { id } = useParams();
    const parseind = parseInt(id)
    const donation = donations.find(Donation => Donation.id === parseind)
    console.log(donation);
    const handleDonate = () => {
        saveDonations(parseind);
        Swal.fire(
            'Thanks For Donating!',
            'Successfully donated!',
            'success'
        )
    }
    return (
        <div className='mx-4'>
            <div className=" my-12 card w-full glass shadow-md">
                <figure><img className='min-w-full' src={donation.picture} alt="car!" /></figure>
                <div className="card-body  bg-opacity-25">
                    <div className="card-actions justify-start">
                        <button onClick={handleDonate} className="btn btn-primary text-[18px]">Donate  {donation.price}</button>
                    </div>
                </div>
            </div>
            <div className='mb-16  text-black'>
                <h2 className="card-title text-3xl">{donation.title}</h2>
                <p className='mt-4'>{donation.description}</p>
            </div>
        </div>
    );
};

export default DonationDetails;