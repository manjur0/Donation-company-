import Swal from "sweetalert2";

const getDonations = () => {
    const storedDonation = localStorage.getItem('Donate Successfully')
    if (storedDonation) {
        return JSON.parse(storedDonation);
    }
    return [];
}


const saveDonations = id => {
    const storedDonations = getDonations()
    const exists = storedDonations.find(donationId => donationId === id);
    if (!exists) {
        storedDonations.push(id);
        localStorage.getItem('Donate Successfully', JSON.stringify(storedDonations));
    }
    //  else {
    //     Swal.fire(
    //         'The Internet?',
    //         'That thing is still around?',
    //         'question'
    //     )
    // }
}
export { getDonations, saveDonations };