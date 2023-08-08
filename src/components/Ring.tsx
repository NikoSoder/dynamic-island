import { BellIcon } from "@heroicons/react/24/solid";
import { BellSlashIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
const Ring = () => {
  const [showRing, setShowRing] = useState(true);
  return (
    <div className="flex animate-fadeIn items-center justify-between">
      {showRing && (
        <BellIcon
          onClick={() => setShowRing(!showRing)}
          className="h-5 w-5 animate-bell cursor-pointer text-white"
        />
      )}
      {!showRing && (
        <div className="rounded-full bg-orange-600 px-3">
          <BellSlashIcon
            onClick={() => setShowRing(!showRing)}
            className="h-5 w-5 cursor-pointer text-white"
          />
        </div>
      )}
      {showRing ? (
        <p className="text-white">Ring</p>
      ) : (
        <p className="text-orange-600">Silent</p>
      )}
    </div>
  );
};

export default Ring;
