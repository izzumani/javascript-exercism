// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  return birdsPerDay.reduce((sum,elem)=>{
    return sum +=elem;
  },0);
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
  let birdsPerWeek = new Array();
  let numberOfDaysInWeek =7;
  let index = 0;
  while(birdsPerDay.length-1 > index)
    {
      
      birdsPerWeek.push(birdsPerDay.slice(index,numberOfDaysInWeek));
      
      index =numberOfDaysInWeek;
      numberOfDaysInWeek +=7;
      if (birdsPerDay.length-1 < numberOfDaysInWeek)
      {
        numberOfDaysInWeek = birdsPerDay.length;
      }
      
    }

  return birdsPerWeek[week-1].reduce((sum,elem)=>{
    return sum+=elem;
  },0)
  
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {number[]} corrected bird count data
 */
export function fixBirdCountLog(birdsPerDay) {
  let fixBird =true;
  for(let birdIndex = 0;birdIndex < birdsPerDay.length; birdIndex++)
  {
    if(fixBird)
    {
      birdsPerDay[birdIndex]+=1;
      fixBird = false;
    }
    else{
      fixBird = true;
    }
  }
  return birdsPerDay;
}
