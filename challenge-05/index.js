import fetch from "node-fetch";
const technologiesListUrl = "https://codember.dev/mecenas.json";

const fetchTechnologies = async () => {
  const res = await fetch(technologiesListUrl);
  const response = await res.json();
  return response;
};

const example = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // 4 wins

const winnerRoulette = (arr) => {};

async function main() {
  const technologiesList = fetchTechnologies();
}

main();
