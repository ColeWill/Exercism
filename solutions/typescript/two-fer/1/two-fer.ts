/**
 * This stub is provided to make it straightforward to get started.
 */

export function twoFer(input: string): string {
  console.log('input:', input)
  const name = typeof input === 'string' ? input : "you";
  let returnVal = `One for ${name}, one for me.`
  return returnVal;
}
