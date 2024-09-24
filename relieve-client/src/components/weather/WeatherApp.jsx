import Inputs from "./Inputs";
import TempAndDetails from "./TempAndDetails";
import TimeAndLocation from "./TimeAndLocation";
import TopButton from "./TopButton";

const WeatherApp = () => {
    return (
       <>
        <h2 className="text-blue-primary text-4xl font-bold text-center my-5 underline ">Weather Update</h2>
        <div className="mx-auto mt-4 py-5 px-20 bg-base-200 border-2 border-blue-primary">
            <TopButton></TopButton>
            <Inputs></Inputs>
            <TimeAndLocation />
            <TempAndDetails />
        </div>
       </>
    );
};

export default WeatherApp;