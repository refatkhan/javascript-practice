function calculateWatchTime(times) {
    let totalTime = 0;
    const timeObject = {
      hours: 0,
      minutes: 0,
      seconds: 0, 
    };
    for (const element of times) {
        if( typeof element !== "number" || element == NaN){
            return "Invalid";
        }
    }
    for (const element of times) {
      totalTime += element;
    }
    timeObject.hours = Math.floor(totalTime / 3600); 
    timeObject.minutes = Math.floor((totalTime % 3600) / 60);  
    timeObject.seconds =(Math.floor(totalTime % 3600)) % 60;
    return timeObject;
  }
  
  const check = [];
  const result = calculateWatchTime(check);
  console.log(result); 
  