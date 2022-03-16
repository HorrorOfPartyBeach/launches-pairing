export const fetchLaunchData = async () => {
  const url = "https://api.spacexdata.com/v3/launches";
  try {
    return await fetch(url).then((data) => data.json());
  } catch (error) {
    console.log("error", error);
  }
};
