import fetch from "node-fetch";
const usersEndPoint = "https://codember.dev/encrypted.txt";

const asciiCheatSet = {
  31: "",
  32: " ",
  33: "!",
  34: '"',
  35: "#",
  36: "$",
  37: "%",
  38: "&",
  39: "'",
  40: "(",
  41: ")",
  42: "*",
  43: "+",
  44: ",",
  45: "-",
  46: ".",
  47: "/",
  48: "0",
  49: "1",
  50: "2",
  51: "3",
  52: "4",
  53: "5",
  54: "6",
  55: "7",
  56: "8",
  57: "9",
  58: ":",
  59: ";",
  60: "<",
  61: "=",
  62: ">",
  63: "?",
  64: "@",
  65: "A",
  66: "B",
  67: "C",
  68: "D",
  69: "E",
  70: "F",
  71: "G",
  72: "H",
  73: "I",
  74: "J",
  75: "K",
  76: "L",
  77: "M",
  78: "N",
  79: "O",
  80: "P",
  81: "Q",
  82: "R",
  83: "S",
  84: "T",
  85: "U",
  86: "V",
  87: "W",
  88: "X",
  89: "Y",
  90: "Z",
  91: "[",
  92: "\\",
  93: "]",
  94: "^",
  95: "_",
  96: "`",
  97: "a",
  98: "b",
  99: "c",
  100: "d",
  101: "e",
  102: "f",
  103: "g",
  104: "h",
  105: "i",
  106: "j",
  107: "k",
  108: "l",
  109: "m",
  110: "n",
  111: "o",
  112: "p",
  113: "q",
  114: "r",
  115: "s",
  116: "t",
  117: "u",
  118: "v",
  119: "w",
  120: "x",
  121: "y",
  122: "z",
  123: "{",
  124: "|",
  125: "}",
  126: "~",
  127: "",
};

const fetchCodes = async () => {
  return fetch(usersEndPoint).then((response) => response.text());
};

const codeToString = (codeRaw) => {
  const codeSplit = codeRaw.split(" ");
  let word = "";
  codeSplit.map((code) => {
    const codeArr = Array.from(code);
    let asciiTemp = "";
    codeArr.map((number) => {
      if (Object.keys(asciiCheatSet).includes(asciiTemp + number)) {
        word += asciiCheatSet[asciiTemp + number];
        asciiTemp = "";
      } else {
        asciiTemp += number;
      }
    });
    word += " ";
  });

  return word;
};

async function main() {
  const codes = await fetchCodes();
  console.log(codeToString("109105100117")); // midu
  console.log(codeToString("9911110010110998101114")); // codember
  console.log(codeToString("9911110010110998101114 109105100117")); // codember midu
  console.log(codeToString("11210897121 116101116114105115")); // play tetris
  console.log(codeToString(codes));

  console.log(codeToString("115111109111115 108101103105111110"));
  console.log(
    codeToString(
      "83101 113117105101110 101114101115 84101 9911111011112299111 84117 110111 109101 9911111011199101115 97 109105 84101 101115116111121 1119811510111411897110100111 84101 101115116111121 115105103117105101110100111 81117105101114101115 10611710397114 7411710110397 99111110109105103111 8697108101 8697109111115 97 10611710397114 691061019911711697 101115116101 9911110997110100111 101110 10897 11610111410910511097108 11511798109105116 116561181061045651505752561029911097108"
    )
  );
}

main();
