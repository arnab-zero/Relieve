import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import CommunityDetailCard from "../CommunityDetailCard";

const Communities = () => {
  const { communities, events } = useOutletContext(); // Access passed state

  useEffect(() => {

  }, [communities]);



  return (
    <div className="h-screen overflow-scroll scrollbar-hide">
      {/* Render the communities */}
      <ul>
        {communities && communities.length > 0 ? (
          communities.map((community) => (
            <CommunityDetailCard
              key={community.orgId || community.tempId}
              props={{ community, events }} // Pass `community` as prop
            />
          ))
        ) : (
          <p>No communities found.</p>
        )}
      </ul>
    </div>
  );
};

export default Communities;
