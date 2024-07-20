//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
/*
const colorObj = 
{
  'black':0,
  'brown':1,
  'red':2,
  'orange':3,
  'yellow':4,
  'green':5,
  'blue':6,
  'violet':7,
  'grey':8,
  'white':9
}
*/
export const colorCode = (code) => {
  //return colorObj[code]
  return COLORS.indexOf(code)
};


//export const COLORS = Array.from(new Set(Object.keys(colorObj).map((elem)=>elem)));
export const COLORS =new Array('black','brown', 'red','orange','yellow','green','blue','violet','grey','white')
