import fetch from "node-fetch";
const technologiesListUrl = "https://codember.dev/mecenas.json";

const fetchTechnologies = async () => {
  const res = await fetch(technologiesListUrl);
  const response = await res.json();
  return response;
};

const example = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // 4 wins

const winnerRoulette = (inputArray) => {
  let result = "";
  // FILTRAMOS LOS IMPARES
  const evenItemsArray = inputArray.filter((_item, index) => index % 2 == 0);

  // SI EL ARRAY FILTRADO ES IMPAR REMOVEMOS EL PRIMERO "EL ULTIMO SE LO COME"
  if (inputArray.length % 2 != 0) evenItemsArray.shift();

  // SI QUEDA MAS DE UN ITEM HACEMOS EL PROCESO OTRA VEZ
  if (evenItemsArray.length > 1) {
    result = winnerRoulette(evenItemsArray);
  } else {
    result = `submit ${evenItemsArray[0].item}-${evenItemsArray[0].realIndex}`;
  }
  return result;
};

async function main() {
  const exampleWithRealIndex = example.map((item, index) => ({
    item,
    realIndex: index,
  }));
  console.log(winnerRoulette(exampleWithRealIndex));

  const technologiesList = await fetchTechnologies();
  const listWithRealIndex = technologiesList.map((item, index) => ({
    item,
    realIndex: index,
  }));

  console.log(winnerRoulette(listWithRealIndex));
}

main();
