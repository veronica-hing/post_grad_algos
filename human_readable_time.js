function humanReadable (seconds) {
    //given seconds
    //want output in 2 digit chunks in format
    // 00:00:00, where it's hours:minutes:seconds
    let time = []; //will hold [hours,minutes,seconds] [ 0,9,9]
    const hour = 60*60;//sixty minutes that are sixty seconds each
    const minute = 60; //sixty seconds in a minute
    time.push(Math.floor(seconds/hour));//floor how many hours are in seconds;
    time.push(Math.floor((seconds%hour)/minute));//floor the remainder of hours for minutes
    time.push(seconds%minute);//remainder in seconds

    //format to be double digit always
    let strTime = time.map(n=>String(n).padStart(2,'0')); //['00','09','09']

    return strTime.join(':');
  }

  console.log(humanReadable(59));
  console.log(humanReadable(3599));