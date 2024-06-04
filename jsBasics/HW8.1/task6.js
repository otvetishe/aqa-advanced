const numbersList = [1,10,14,2,4,5,43,34];
const duplicatedList = [...numbersList];

duplicatedList.sort((a,b) => b - a);
console.log(duplicatedList);