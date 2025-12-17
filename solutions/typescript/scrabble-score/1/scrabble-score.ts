export function score(input: string): number {
  if(input === undefined){ return 0};
  if(!input.length) return 0;
 
  const scrabbleScoresMap = new Map<string, number>([
    ["AEIOULNRST", 1],
    ["DG", 2],
    ["BCMP", 3],
    ["FHVWY", 4],
    ["K", 5],
    ["JX", 8],
    ["QZ", 10],
  ]);

  const keysArray = [...scrabbleScoresMap.keys()];

  function getNumberForEachLetter (word: string): number{
    let total: number = 0;
    
    word.split("").forEach(char => {
      keysArray.forEach((key: string) => {
        if(char && key.includes(char.toUpperCase())){
          //reference map with each letter
          const number: number = scrabbleScoresMap.get(key)!;
          if(number !== undefined){
            total += number
          }
        }
      })
    })
    console.log('returnVal:', total);
    return total;
  }

  getNumberForEachLetter(input);
  
  return getNumberForEachLetter(input);
}

