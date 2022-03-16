import React, { useState, useEffect, Fragment } from "react";
import Image from "next/image";
import { ListItem } from "../ListItem/ListItem";
import { fetchLaunchData } from "../../../utils/helpers";
import styles from "../../../styles/Home.module.css";

export const Card: React.FC = () => {
  const [launchData, setLaunchData] = useState([]);
  const [loading, setLoading] = useState(false);

  const getLaunchData = async () => {
    const launches = await fetchLaunchData();
    if (launches) {
      setLaunchData(launches);
      setLoading(true);
    }
  };

  useEffect(() => {
    getLaunchData();
  }, []);

  return (
    <Fragment>
      {loading &&
        launchData?.map((launch) => {
          return (
            <ul key={launch.flight_number} className={styles.card}>
              <ListItem launch={launch} />
            </ul>
          );
        })}
    </Fragment>
  );
};
