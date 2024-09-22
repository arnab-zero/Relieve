import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import CommunityDetailCard from "../CommunityDetailCard";

const Communities = () => {
  const { communities, setCommunities } = useOutletContext(); // Access passed state

  useEffect(() => {
    console.log("Communities: ", communities);
  }, [communities]);

  return (
    <div>
      {/* Render the communities */}
      <ul>
        {communities.length > 0 ? (
          communities.map((community) => (
            <CommunityDetailCard key={community.orgId} community={community} />
          ))
        ) : (
          <p>No communities found.</p>
        )}
      </ul>
    </div>
  );
};

export default Communities;
