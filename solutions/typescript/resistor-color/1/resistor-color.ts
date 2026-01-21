export const colorCode = (input: string): number => {
  const COLORS_MAP = new Map ([
  ['black', 0],
  ['brown', 1],
  ['red', 2],
  ['orange', 3],
  ['yellow', 4],
  ['green', 5],
  ['blue', 6],
  ['violet', 7],
  ['grey', 8],
  ['white', 9],
]);
 
  
  console.log('input:', input);
  const value = COLORS_MAP.get(input.toLowerCase());
  let result = 0;
  if(value !== undefined){
    result = value;
  }
  return result;
}

 export const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
];
