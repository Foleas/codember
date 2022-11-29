const MIN_VALUE = 11098;
const MAX_VALUE = 98123;

const containsTwoFives = (array) => {
  let qty = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 5) qty++;
    if (qty >= 2) {
      return true;
    }
  }
  return false;
};

const checkPass = (pass) => {
  const passArray = Array.from(String(pass), (num) => Number(num));
  if (containsTwoFives(passArray)) {
    for (let i = 0; i < passArray.length; i++) {
      if (passArray[i + 1] !== undefined && passArray[i + 1] < passArray[i]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
};

async function main() {
  // console.log(checkPass(55678)); // correcto
  // console.log(checkPass(12555)); // correcto
  // console.log(checkPass(55555)); // correcto
  // console.log(checkPass(12345)); // incorrecto
  // console.log(checkPass(57775)); // incorrecto

  const validPass = [];

  for (let i = 11098; i < 98123; i++) {
    if (checkPass(i)) {
      validPass.push(i);
    }
  }

  // console.log(validPass.length);
  // console.log(validPass);
  console.log(`submit ${validPass.length}-${validPass[55]}`);
}

main();
