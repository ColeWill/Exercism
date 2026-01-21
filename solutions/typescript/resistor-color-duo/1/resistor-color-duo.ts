export function decodedValue(input: Array<string>): number {
  const colorArr = input;
  const COLORS_MAP = new Map([
    ['black', 0],
    ['brown', 1],
    ['red', 2],
    ['orange', 3],
    ['yellow', 4],
    ['green', 5],
    ['blue', 6],
    ['violet', 7],
    ['grey', 8],
    ['white', 9]
  ]);
  let returnString = '';
  colorArr.forEach((el)=>{
    if(returnString.length < 2){
      returnString += COLORS_MAP.get(el)
    }
  })

  return Number(returnString)
}
