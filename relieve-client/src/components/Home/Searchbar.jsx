
const Searchbar = () => {
    return (
        <div className="font-manrope">
            <span className="flex justify-center my-10">
                <input
                    type="text"
                    placeholder="Type any location, contact or any info"
                    className="input input-bordered input-info border-blue-secondary focus:border-blue-secondary focus:outline-blue-secondary w-full max-w-md" />
            </span>
        </div>
    );
};

export default Searchbar;