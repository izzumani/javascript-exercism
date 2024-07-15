/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */
export function cookingStatus(timer)
{
    if(timer==0)
    {
        return 'Lasagna is done.';
    }
    else if(timer > 0)
    {
        return 'Not done, please wait.';
    }
    else
    {
        return 'You forgot to set the timer.'
    }
}

export function preparationTime (layers,prepTime)
{
    if (prepTime)
    {
        return layers.length * prepTime;
    }
    else{
        return layers.length * 2;
    }
}

export function quantities(layers)
{
   return layers.filter((elem)=>{
        return elem == 'noodles' || elem == 'sauce'
    }).reduce((obj,elem)=>{
        let result = elem=='noodles' ? 50 : 0.2;
        if(obj[elem]!==undefined)
        {
            
            obj[elem] +=result
        }
     
    return obj;
    },{'noodles':0,'sauce':0});

   
}

export const addSecretIngredient = function (friendsList, myList)
{
   
    myList.push(friendsList[friendsList.length-1]);
    
    

}

export const scaleRecipe =  (recipe, portions)=>
    {
        const newRecipe =  JSON.parse(JSON.stringify(recipe));

        for (let key in newRecipe)
        {
            newRecipe[key] = (recipe[key]/2) * portions
        }
            return newRecipe;
    }