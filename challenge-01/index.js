import fetch from "node-fetch";
const usersEndPoint = "https://codember.dev/users.txt";

const userKeys = ["usr", "eme", "psw", "age", "loc", "fll"];

const fetchUsers = async () => {
  return fetch(usersEndPoint)
    .then((response) => response.text())
    .then((text) => {
      const linesArray = text
        .split("\n\n")
        .map((line) => line.split(/ |\n/))
        // .filter((_item, index) => index < 10)
        .map((user) => {
          const userObject = {};
          user.forEach((attr) => {
            const temp = attr.split(":");
            userObject[temp[0]] = temp[1];
          });
          return userObject;
        });
      //   console.log("linesarray", linesArray);
      return linesArray;
    });
};

const checkUsersProps = (user) => {
  for (let i = 0; i < userKeys.length; i++) {
    if (!user.hasOwnProperty(userKeys[i]) || userKeys[i] === "") {
      return false;
    }
  }

  return true;
};

async function main() {
  const users = await fetchUsers();
  //   console.log("USER RAW", users.length);
  const usersFiltered = users.filter((user) => checkUsersProps(user));
  console.log(
    "USERS FILTERED",
    usersFiltered[usersFiltered.length - 1],
    usersFiltered.length
  );
}

main();
