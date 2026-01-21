export function toRna(input: string) {
  const inputArray = input.split("");
  
  const transcriptionRules = new Map([
    ['G',  'C'],
    ['C',  'G'],
    ['T',  'A'],
    ['A',  'U']
  ]);

  const validInputs = Array.from(transcriptionRules.keys());

  let returnString = '';

  for(let i = 0; i < inputArray.length; i++){
    const eachChar = inputArray[i];
    
    if(!transcriptionRules.has(eachChar)){
      throw new Error("Invalid input DNA.");
      break;
    } 

    returnString += transcriptionRules.get(eachChar);
  }
  
  return returnString;
}
