// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Determines how long it takes to prepare a certain juice.
 *
 * @param {string} name
 * @returns {number} time in minutes
 */
export function timeToMixJuice(name) {
  switch(name.toUpperCase())
    {
      case 'Pure Strawberry Joy'.toUpperCase():
        return 0.5;
        break;
      case 'Energizer'.toUpperCase():
      case 'Green Garden'.toUpperCase():
        return 1.5;  
        break;
      case 'Tropical Island'.toUpperCase():
        return 3;
        break;
      case 'All or Nothing'.toUpperCase():
        return 5;
        break;
      default:
          return 2.5;
        break;
        
    }
}

/**
 * Calculates the number of limes that need to be cut
 * to reach a certain supply.
 *
 * @param {number} wedgesNeeded
 * @param {string[]} limes
 * @returns {number} number of limes cut
 */
export function limesToCut(wedgesNeeded, limes) {
  let index = 0;
  let limeCount=0;
  while(wedgesNeeded > 0 && index< limes.length)
    {
      
      switch(limes[index])
      {
        case 'small':
            wedgesNeeded -=6;
            break;
          case 'medium':
            wedgesNeeded -=8;
          break;
          case 'large':
            wedgesNeeded -=10;  
          break;
      }
      
        index+=1;
        limeCount +=1;    
      
    }
      return limeCount;
}

/**
 * Determines which juices still need to be prepared after the end of the shift.
 *
 * @param {number} timeLeft
 * @param {string[]} orders
 * @returns {string[]} remaining orders after the time is up
 */
export function remainingOrders(timeLeft, orders) {
  
  let remOrders = orders.filter((elem)=>{
    let _timeToMix = timeToMixJuice(elem);
    
    if(timeLeft<=0)
    {
      return elem;
    }
    timeLeft-=_timeToMix;
  });
  console.log(remOrders);

  return remOrders;
}
