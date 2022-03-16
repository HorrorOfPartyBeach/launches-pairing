import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import {
  configureFirstStageData,
  configureSecondStageData,
} from "../../../utils/helpers";

export interface LaunchDataProps {
  launch: any;
}

export const ListItem: React.FC<LaunchDataProps> = (props) => {
  const { launch } = props;
  const imageSrc = launch.links.mission_patch_small;

  const firstStageCores = configureFirstStageData(launch);
  const secondStagePayloads = configureSecondStageData(launch);

  return (
    <li className={styles.li}>
      <p>
        <strong>Mission Name:</strong> {launch.mission_name}
      </p>
      <p>
        <strong>Launch Date:</strong> {launch.launch_date_utc}
      </p>
      <Fragment>
        {launch.links.mission_patch_small ? (
          <Image
            src={imageSrc}
            alt={`${launch.mission_name} patch`}
            width="200px"
            height="200px"
          />
        ) : (
          <Image
            src="https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png"
            alt="ss"
            width="200px"
            height="200px"
          />
        )}
      </Fragment>
      <p>
        <strong>Core Serial:</strong> {firstStageCores}
      </p>
      {secondStagePayloads.map((payloadItem) => {
        return (
          <Fragment key={`${launch.flight_number} ${payloadItem[0]}`}>
            <p>
              <strong>Payload ID:</strong> {payloadItem[0]}
            </p>
            <p>
              <strong>Payload Type:</strong> {payloadItem[1]}
            </p>
          </Fragment>
        );
      })}
      <p>
        <strong>Launch Success: </strong>
        {launch.launch_success === true
          ? "Successful Launch"
          : "Failed to Launch"}
      </p>

      {launch.launch_success === false && (
        <Fragment>
          {Object.entries(launch.launch_failure_details).map(
            ([key, value], i) => {
              return (
                <p key={i}>
                  <strong>{key}:</strong> {value}
                </p>
              );
            }
          )}
        </Fragment>
      )}
    </li>
  );
};
