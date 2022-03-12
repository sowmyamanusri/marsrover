function capitalize(word:string):string {
    if (word === undefined) throw new Error("word is required");
    return word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
}


console.log(capitalize("hello"));

function generateInitials(firstName: string, lastName:string):string {
    if (firstName === undefined) throw new Error("firstName is required");
    if (lastName === undefined) throw new Error("lastName is required");
    return firstName.substring(0, 1).toUpperCase() + "." + lastName.substring(0, 1).toUpperCase();
  
  }
  console.log(generateInitials("sowmya","manu"));



  function addVAT(originalPrice:number, vatRate:number) :number{
    if (originalPrice === undefined) throw new Error("originalPrice is required");
    if (vatRate === undefined) throw new Error("vatRate is required");
  
    const vatAmount :number = (originalPrice * vatRate) / 100;
    if ((vatAmount - Math.floor(vatAmount)) !== 0) {
      const amount = (originalPrice + vatAmount).toFixed(2);
      return parseFloat(amount);
    } else {
      return (originalPrice + vatAmount);
    }
  }
console.log(addVAT(33.5,17.5));


 const arr :Array<string>= ["sheep", "badger", "sheep", "sheep", "chicken"];
 function countSheep(array :Array<string>):number {
  if (array === undefined) throw new Error("arr is required");
  let sheepCount:number = 0;
  array.map(pet => {
    if (pet === "sheep") sheepCount++;
  });
  return sheepCount;
}
console.log(countSheep(arr));



let arr1 :Array<number>= [1, 55, 4, 3, 7, 8];
    let arr2:Array<number> = [55, 23, 65, 0,4,7,8,];
function duplicateNumbers(arr1:Array<number>, arr2:Array<number>) :Array<number>{
 return [...new Set(arr1.filter((value) =>arr2.includes(value)))];
}
console.log(duplicateNumbers(arr1,arr2))


 
const str :string[] =["is", "higher", "than", "min", "number"]
function camelCaseWords(words:Array<string>) : string{
  let word = words[0].toLowerCase();
  for (let index = 1; index < words.length; index++) {
    words[index] = words[index].toLowerCase().charAt(0).toUpperCase() + words[index].substring(1, words[index].length);
    word = word + words[index];
  }
  return word;
}
console.log(camelCaseWords(str));

