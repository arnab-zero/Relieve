import { Link } from "react-router-dom";
const ShelterCard = ({shelter}) => {
    const {shelterId, imageUrl, name, zilla, upazilla, location, contactNumbers, capacity, currentPeople} = shelter;
    return (
        <Link to={`/shelter/${shelterId}`}>
            <div className="card bg-base-100 shadow-sm p-6 border-gray-200 border-2" >
                <figure className="">
                    <img
                        src={imageUrl}
                        alt="shelter"
                        className="h-56 rounded-lg" />
                </figure>
                <div className="card-body">
                    <p className="text-green-primary font-work-sans space-x-2 flex items-center md:space-x-8 mt-6">
                        {
                            contactNumbers.map(tag => <span className="p-3 bg-base-200 rounded-full">{tag}</span>)
                        }
                    </p>
                    <h2 className="card-title mt-4 font-playfair text-2xl font-bold">{name}</h2>
                    <p className="font-work-sans font-medium text-gray-500">By : {"As-Sunnah Foundation"}</p>
                    <hr className="my-5 border-dashed text-gray-600" />
                    <div className="font-work-sans text-gray-500 font-medium flex justify-between">
                        <p>{zilla}</p>
                        <span className="flex gap-2 font-medium">
                            <p>{upazilla}</p>
                        </span>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ShelterCard;