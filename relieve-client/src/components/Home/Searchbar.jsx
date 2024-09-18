const Searchbar = ({ setQuery }) => {
    const handleChange = (e) => {
        setQuery(e.target.value);
    };

    return ( 
        <div className="font-manrope">
            <span className="flex justify-center my-10">
                <input
                    type="text"
                    placeholder="Type any location, contact or any info"
                    onChange={handleChange}
                    className="input input-bordered input-info border-blue-secondary focus:border-blue-secondary focus:outline-blue-secondary w-full max-w-md" />
            </span>
        </div>

        {/* Detail */}
        <div className="space-y-2">
          <label
            htmlFor="detail"
            className="block text-sm font-medium text-gray-700"
          >
            Detail
          </label>
          <textarea
            id="detail"
            name="detail"
            value={formData.detail}
            onChange={handleChange}
            placeholder="Provide details about your need"
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.detail ? "border-red-500" : "border-gray-300"
            } bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
            rows="3"
          />
          {errors.detail && (
            <p className="text-sm text-red-600 mt-1">{errors.detail}</p>
          )}
        </div>

        {/* Zilla */}
        <div className="space-y-2">
          <label
            htmlFor="zilla"
            className="block text-sm font-medium text-gray-700"
          >
            Zilla
          </label>
          <select
            id="zilla"
            name="zilla"
            value={formData.zilla}
            onChange={handleChange}
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.zilla ? "border-red-500" : "border-gray-300"
            } bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          >
            <option value="">Select Zilla</option>
            {Object.keys(zillaUpazillaData).map((zilla) => (
              <option key={zilla} value={zilla}>
                {zilla}
              </option>
            ))}
          </select>
          {errors.zilla && (
            <p className="text-sm text-red-600 mt-1">{errors.zilla}</p>
          )}
        </div>

        {/* Upazilla */}
        <div className="space-y-2">
          <label
            htmlFor="upazilla"
            className="block text-sm font-medium text-gray-700"
          >
            Upazilla
          </label>
          <select
            id="upazilla"
            name="upazilla"
            value={formData.upazilla}
            onChange={handleChange}
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            disabled={!formData.zilla} // Disable until zilla is selected
          >
            <option value="">Select Upazilla</option>
            {upazillas.map((upazilla) => (
              <option key={upazilla} value={upazilla}>
                {upazilla}
              </option>
            ))}
          </select>
        </div>

        {/* Location */}
        <div className="space-y-2">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700"
          >
            Location
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter your location"
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.location ? "border-red-500" : "border-gray-300"
            } bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.location && (
            <p className="text-sm text-red-600 mt-1">{errors.location}</p>
          )}
        </div>

        {/* Contact No */}
        <div className="space-y-2">
          <label
            htmlFor="contactNo"
            className="block text-sm font-medium text-gray-700"
          >
            Contact No.
          </label>
          <input
            type="tel"
            id="contactNo"
            name="contactNo"
            value={formData.contactNo}
            onChange={handleChange}
            placeholder="Enter your contact number"
            className={`mt-1 block w-full py-2 px-3 border ${
              errors.contactNo ? "border-red-500" : "border-gray-300"
            } bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
          />
          {errors.contactNo && (
            <p className="text-sm text-red-600 mt-1">{errors.contactNo}</p>
          )}
        </div>

        {/* Map Location Link */}
        <div className="space-y-2">
          <label
            htmlFor="mapLink"
            className="block text-sm font-medium text-gray-700"
          >
            Map Location Link
          </label>
          <input
            type="url"
            id="mapLink"
            name="mapLink"
            value={formData.mapLink}
            onChange={handleChange}
            placeholder="Enter map location link"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

    );
};

export default Searchbar;
