import { Link } from "react-router-dom";
import { IoIosCall } from "react-icons/io";
import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../pages/Authentication/AuthProvider";


const ShelterCard = ({ shelter, setUserId }) => {
    const { shelterId, imageUrl, name, zilla, upazilla, location, contactNumbers, capacity, currentPeople } = shelter;

    const [isAdmin, setIsAdmin] = useState(false);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        if (user && shelter) {
            if (shelter.eventId === user.userId) {
                setIsAdmin(true);
                setUserId(user.userId)
            }
        }
    }, [user, shelter])

    return (
        <div className="card bg-base-100 shadow-sm p-6 border-gray-200 border-2" >
            <figure className="">
                <img
                    src={imageUrl}
                    alt="shelter"
                    className="h-56 rounded-lg" />
            </figure>
            <div className="">
                <p className="text-gray-700 font-work-sans space-x-1 flex items-center md:space-x-4 mt-2">
                    {
                        contactNumbers.map(tag => <span className="p-3 flex justify-center items-center  gap-1 bg-base-200 rounded-full">
                            <IoIosCall className="text-lg" />
                            {tag}</span>)
                    }
                </p>
                <h2 className="card-title mt-4 text-blue-primary text-2xl font-bold">{name}</h2>
                {/* <p className="font-work-sans font-medium text-gray-500">By : {"As-Sunnah Foundation"}</p> */}
                <hr className="my-5 border-dashed text-gray-600" />
                <div className="font-work-sans text-gray-500 font-medium flex justify-between">
                    <p>{zilla}</p>
                    <span className="flex gap-2 font-medium">
                        <p>{upazilla}</p>
                    </span>
                </div>
               {
                isAdmin &&  <Link to={`/shelter/${shelterId}`}
                className={`btn ml-20 text-base-100 bg-blue-primary text-md font-medium mt-4`}
                >Manage Your Shelter</Link>
               }
            </div>
        </div>
    );
};

export default ShelterCard;