import { Link } from "react-router-dom";


const Error = () => {
    return (
        <div className="text-center">
            <div className="alert">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span className="text-3xl font-bold">Not found</span>
                <div>
                    <Link className="text-center text-3xl  items-center justify-center font-bold bg-blue-100 p-2 rounded-lg " to='/'>Hoome</Link>
                </div>
            </div>
            
        </div>
    );
};

export default Error;