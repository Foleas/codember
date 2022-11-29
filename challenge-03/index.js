import fetch from "node-fetch";
const colorsEndPoint = "https://codember.dev/colors.txt";

const fetchColors = async () => {
  return fetch(colorsEndPoint).then((response) => response.text());
};

const isZebra = (array) => {
  return array.every((color, index) => {
    if (color === array[0] && index % 2 === 0) return true;
    if (color === array[1] && index % 2 === 1) return true;
    return false;
  });
};

const getLongestZebras = (colorsArr) => {
  let tempZebra = [],
    longestZebra = [];
  colorsArr.forEach((color) => {
    tempZebra.push(color);

    console.log("tempZebra", tempZebra);
    console.log("longestZebra", tempZebra);

    if (isZebra(tempZebra)) {
      longestZebra.push(color);
      console.log("SI");
    } else {
      tempZebra = [];
      console.log("NO");
    }
  });

  return [longestZebra.length, longestZebra[longestZebra.length - 1]];
};

async function main() {
  const colors = await fetchColors();

  // console.log(getLongestZebras(["red", "blue", "red", "blue", "green"])); // -> 4, blue
  console.log(getLongestZebras(["green", "red", "blue", "gray"])); //-> 2, gray
  //   console.log(getLongestZebras(["blue", "blue", "blue", "blue"])); // -> 1, blue
  //   console.log(getLongestZebras(["red", "green", "red", "green", "red", "green"])); // -> 6, green
  //   console.log(getLongestZebras(["blue", "red", "blue", "red", "gray"])); // -> 4, red
  //   console.log(getLongestZebras(["red", "red", "blue", "red", "red", "red", "green"])); // -> 3, red
  //   console.log(
  //     getLongestZebras(["red", "blue", "red", "green", "red", "green", "red", "green"])
  //   ); // -> 6, green
}

main();
