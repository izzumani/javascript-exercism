// @ts-check

export class ArgumentError extends Error {}

export class OverheatingError extends Error {
  constructor(temperature) {
    super(`The temperature is ${temperature} ! Overheating !`);
    this.temperature = temperature;
  }
}

/**
 * Check if the humidity level is not too high.
 *
 * @param {number} humidityPercentage
 * @throws {Error}
 */
export function checkHumidityLevel(humidityPercentage) {
  if(humidityPercentage>70)
    throw new Error()
}

/**
 * Check if the temperature is not too high.
 *
 * @param {number|null} temperature
 * @throws {ArgumentError|OverheatingError}
 */
export function reportOverheating(temperature) {
  if(temperature ==null)
  {
    throw new ArgumentError()
  }
  else if(temperature > 500)
  {
    //console.log('OverheatingError(temperature)')
    throw new OverheatingError(temperature)
  }
    
}

/**
 *  Triggers the needed action depending on the result of the machine check.
 *
 * @param {{
 * check: function,
 * alertDeadSensor: function,
 * alertOverheating: function,
 * shutdown: function
 * }} actions
 * @throws {ArgumentError|OverheatingError|Error}
 */
export function monitorTheMachine(actions) {
 try {
  actions.check()
 } catch (error) {
  if(error instanceof ArgumentError)
  {
    actions.alertDeadSensor()
  }
  else if (error instanceof OverheatingError)
  {
    //console.log(`Temp: ${error.temperature}`);
    if(error.temperature <=600)
    {
      actions.alertOverheating();
    }
    else{
      actions.shutdown();
    }
    
  }
  else{
    throw error;
  }
  
 }
}

//console.log(checkHumidityLevel(100));
// reportOverheating(800);
// class UnknownError extends Error {}

// const actions = {
//   check: ()=> {throw new UnknownError()},
//   alertDeadSensor: ()=>console.log('Alert Dead Sensor'),
//   alertOverheating: ()=>console.log('Alert over heating'),
//   shutdown: ()=>console.log('shutdown'),
// };



// monitorTheMachine(actions);