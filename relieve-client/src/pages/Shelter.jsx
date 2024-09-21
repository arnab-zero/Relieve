import { FaPeopleLine, FaMapLocation } from "react-icons/fa6";
import { BsFillHouseAddFill } from "react-icons/bs";
import ShelterFinder from "../components/Shelter/ShelterFinder";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";
import ShelterCard from "../components/Shelter/ShelterCard";

const Shelter = () => {
    const [shelters, setShelters] = useState([]);
    useEffect(()=> {
        fetch('/data/shelters.json')
        .then(res => res.json())
        .then(data => setShelters(data))
    },[])
    return (
        <div className="font-manrope bg-base-100 min-h-screen">
            <div className="relative font-manrope">
                <img src="/shelterBanner.png" alt="Shelter Banner" className="w-full h-96 object-cover" />

                <div className="absolute top-0 left-0 w-full h-96 bg-black opacity-40 z-10"></div>

                <div className="absolute top-0 left-0 w-full h-96 flex justify-between items-center z-20 px-5">
                    <span>
                        <h2 className="text-base-100 text-7xl font-bold mb-4 ">Bangladesh</h2>
                        <h2 className="text-white text-5xl font-bold bg-red-900 p-4 rounded-md">Disaster Emergency</h2>
                    </span>
                    <div className="bg-[#002b47] w-80 py-4 px-8">
                        <h2 className="text-3xl font-bold text-white text-center">Our Network</h2>
                        <hr className="my-1" />
                        <div className="flex items-center gap-10">
                            <span>
                                <FaPeopleLine className="text-5xl text-white" />
                                <p className="text-gray-300 text-sm">People</p>
                            </span>
                            <p className="text-white text-3xl font-bold">10,129</p>
                        </div>
                        <div className="flex items-center gap-10 mb-1">
                            <span>
                                <FaMapLocation className="text-4xl mt-1 text-white" />
                                <p className="text-gray-300 text-sm">Districts</p>
                            </span>
                            <p className="text-white text-3xl font-bold">64</p>
                        </div>
                        <div className="flex items-center gap-10">
                            <span>
                                <BsFillHouseAddFill className="text-4xl text-white" />
                                <p className="text-gray-300 text-sm">Shelters</p>
                            </span>
                            <p className="text-white text-3xl font-bold">758</p>
                        </div>
                    </div>
                </div>
            </div>
            <span className="flex justify-center my-2">
                <div className="flex-auto max-w-4xl">
                    <ShelterFinder />
                </div>
            </span>
            {/* <h2 className="text-4xl text-blue-primary font-bold text-center my-10">Shelters</h2> */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
                {
                    shelters.map(shelter => <ShelterCard
                    key = {shelter.shelterId}
                    shelter = {shelter}
                    ></ShelterCard>)
                }
            </div>
        </div>
    );
};

export default Shelter;
