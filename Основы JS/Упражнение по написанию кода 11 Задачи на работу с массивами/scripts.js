// const family = ["Peter", "Ann", "Alex", "Linda"];

// function showFamily(arr) {
//   let str = "";
//   arr.lenght === 0 ? (str = "Cемья пуста") : (str = "Семья состоит из: ");
//   arr.forEach((member) => {
//     str += `${member} `;
//   });
//   return str;
// }

// console.log(showFamily(family));

const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"];

function standardizeStrings(arr) {
  arr.forEach((city) => {
    console.log(city.toLowerCase());
  });
}

standardizeStrings(favoriteCities);
