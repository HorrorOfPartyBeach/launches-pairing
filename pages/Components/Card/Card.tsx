import React from "react";
import Image from "next/image";

export interface LaunchDataProps {
  launch: any;
}

export const Card: React.FC<LaunchDataProps> = (props) => {
  const { launch } = props;
  const imageSrc = launch.links.mission_patch_small;

  return (
    <li>
      Mission Name: {launch.mission_name}
      Launch Date: {launch.launch_date_utc}
      Mission Patch:{" "}
      {launch.links.mission_patch_small?.length > 0 && (
        <Image
          src={imageSrc}
          alt={`${launch.mission_name} patch`}
          width="200px"
          height="200px"
        />
      )}
    </li>
  );
};
