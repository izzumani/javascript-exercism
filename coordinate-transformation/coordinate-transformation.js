// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d translation of a coordinate pair.
 *
 * @param {number} dx the translate x component
 * @param {number} dy the translate y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  translated coordinate pair in the form [x, y]
 */
export function translate2d(dx, dy) {
     let _dx = dx;
    let _dy = dy;
    return  function innerTranslate2d(dx, dy)
    {
        return [dx +_dx, _dy +dy ]
    }
}

/**
 * Create a function that returns a function making use of a closure to
 * perform a repeatable 2d scale of a coordinate pair.
 *
 * @param {number} sx the amount to scale the x component
 * @param {number} sy the amount to scale the y component
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  scaled coordinate pair in the form [x, y]
 */
export function scale2d(sx, sy) {
     let _sx = sx;
    let _sy = sy;
    return function (sx, sy)
    {
        return [_sx *sx,  _sy * sy]
    }
}

/**
 * Create a composition function that returns a function that combines two
 * functions to perform a repeatable transformation
 *
 * @param {function} f the first function to apply
 * @param {function} g the second function to apply
 *
 * @returns {function} a function which takes an x, y parameter, returns the
 *  transformed coordinate pair in the form [x, y]
 */
export function composeTransform(f, g) {
   return function (zx,zy)
    {
        let firstFunction = f;
        let [_zx, _zy] = firstFunction(zx,zy)
        let secondFunction = g;
        return secondFunction(_zx,_zy);

    }
}

/**
 * Return a function that memoizes the last result.  If the arguments are the same as the last call,
 * then memoized result returned.
 *
 * @param {function} f the transformation function to memoize, assumes takes two arguments 'x' and 'y'
 *
 * @returns {function} a function which takes x and y arguments, and will either return the saved result
 *  if the arguments are the same on subsequent calls, or compute a new result if they are different.
 */
export function memoizeTransform(f) {
        let cacheMemoize={};

 
   
   return function (...args)
   {
       let key = JSON.stringify(args);
       
       let memValue =  cacheMemoize[key];
       
       if(memValue) return memValue;
       console.log('from function')
       cacheMemoize = {};
       memValue =  f(...args);
       cacheMemoize[key] = memValue;
       
       return memValue;
       
   }
}
