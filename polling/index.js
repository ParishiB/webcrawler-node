function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = Math.random();
      resolve(data);
    }, 1000);
  });
}

async function pollData() {
  setInterval(async () => {
    try {
      const data = await fetchData();
    } catch (error) {
      console.error("Error occured");
    }
  }, 5000);
}

pollData().catch((error) => {
  console.error("Error occurred", error);
});

const axios = require("axios");
const { response } = require("express");

async function fetch() {
  try {
    const response = await axios.get("https./vdv");
    return response.data;
  } catch (error) {
    console.error("Error fetching data");
  }
}

async function pollData(interval, duration) {
  const endTime = Date.now() + duration;
  while (Date.now() < endTime) {
    try {
      const data = await fetchData();
      console.log("Fetched data", data);
    } catch (error) {
      console.error("Error fetching data");
    }
    await new Promise((resolve) => setTimeout(resolve, interval));
  }

  console.log("Polling completed");
}

pollData(500, 60000).catch((error) => {
  console.error("Polling error:", error);
});
