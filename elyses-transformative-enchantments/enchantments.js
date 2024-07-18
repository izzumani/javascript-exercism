// @ts-check

/**
 * Double every card in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with every card doubled
 */
export function seeingDouble(deck) {
  return deck.map(elem=> elem *2);
}

/**
 *  Creates triplicates of every 3 found in the deck.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with triplicate 3s
 */
export function threeOfEachThree(deck) {
  return deck.reduce((acc,elem)=>{
   
    
    if(elem==3)
      acc.push(...Array(3).fill(3))
    else
      acc.push(elem)
    
    return acc
  },[])
}

/**
 * Extracts the middle two cards from a deck.
 * Assumes a deck is always 10 cards.
 *
 * @param {number[]} deck of 10 cards
 *
 * @returns {number[]} deck with only two middle cards
 */
export function middleTwo(deck) {
  let midIndex =deck.length/2;
  return deck.slice(midIndex-1,midIndex+1)
}

/**
 * Moves the outside two cards to the middle.
 *
 * @param {number[]} deck with even number of cards
 *
 * @returns {number[]} transformed deck
 */

export function sandwichTrick(deck) {
  const topCard = deck.pop();
  const bottomaCard = deck.shift();
  const midIndex = (deck.length/2)

  deck.splice(midIndex,0,topCard,bottomaCard);
  return deck;


}

/**
 * Removes every card from the deck except 2s.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} deck with only 2s
 */
export function twoIsSpecial(deck) {
  return deck.filter(elem=> elem==2);
}

/**
 * Returns a perfectly order deck from lowest to highest.
 *
 * @param {number[]} deck shuffled deck
 *
 * @returns {number[]} ordered deck
 */
export function perfectlyOrdered(deck) {
   return deck.sort((a,b)=>{
    if(a > b)
      return 1;
    else if(a < b)
      return -1;
    else
    return 0;

   });
}

/**
 * Reorders the deck so that the top card ends up at the bottom.
 *
 * @param {number[]} deck
 *
 * @returns {number[]} reordered deck
 */
export function reorder(deck) {
  return deck.reverse();
}

// const deck = [1, 2, 3, 4, 10];
// console.log(seeingDouble(deck));

// const deck = [1, 3, 9, 3, 7];
// console.log(threeOfEachThree(deck));

// const deck = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(middleTwo(deck));

// const deck = [1, 2, 3, 5, 6, 10];
// console.log(sandwichTrick(deck));
// const deck = [1, 2, 3, 4, 10, 2];
// console.log(twoIsSpecial(deck));

// const deck = [10, 1, 5, 3, 2, 8, 7];
// console.log(perfectlyOrdered(deck));

// const deck = [10, 1, 5, 3, 2];
// console.log(reorder(deck));
// => [2, 3, 5, 1, 10]