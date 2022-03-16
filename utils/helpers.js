export const fetchLaunchData = async () => {
  const url = "https://api.spacexdata.com/v3/launches?limit=10";
  try {
    return await fetch(url).then((data) => data.json());
  } catch (error) {
    console.log("ERROR", error);
  }
};

export const configureFirstStageData = (launch) => {
  const firstStage = launch.rocket.first_stage.cores;
  return firstStage.map((core) => {
    return core.core_serial === null
      ? "N/A"
      : core.core_serial.length > 1
      ? `${core.core_serial}, `
      : core.core_serial;
  });
};

export const configureSecondStageData = (launch) => {
  const secondStage = launch.rocket.second_stage.payloads;
  const payloadArrays = Object.entries(secondStage).map(([key, value]) => [
    value.payload_id,
    value.payload_type,
  ]);
  return payloadArrays;
};
