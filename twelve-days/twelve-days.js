//
// This is only a SKELETON file for the 'Twelve Days' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const days = {1:['first','one'],2:['second','two'],3:['third','three'],
  4:['fourth','four'],5:['fifth','five'],6:['sixth','six'],7:['seventh','seven'],
  8:['eighth','eight'],9:['ninth','nine'],10:['tenth','ten'],
  11:['eleventh','eleven'],12:['twelfth','twelve']};

  
    const gifts = {
      1:['a Partridge in a Pear Tree',' Partridges in a Pear Tree'],
      2:['a Turtle Dove','Turtle Doves'],
      3:['a French Hen','French Hens'],
      4:['a Calling Bird','Calling Birds'],
      5:['a Gold Ring','Gold Rings'],
      6:['a Goose-a-Laying','Geese-a-Laying'],
      7:['a Swan-a-Swimming','Swans-a-Swimming'],
      8:['a Maid-a-Milking','Maids-a-Milking'],
      9:['a Lady Dancing','Ladies Dancing'],
      10:['a Lord-a-Leaping','Lords-a-Leaping'],
      11:['a Piper Piping','Pipers Piping'],
      12:['a Drummer Drumming','Drummers Drumming']
    
    }

  

  const song =(day,gift)=>
    {
      return `On the ${day} day of Christmas my true love gave to me: ${gift}`;
    }

export const recite = (_fromDay=1,_toDay) => {
  const giveGift = [];
  var _recite = ';'
  var reciteDays = {}
  var isRange =false;
  var reciteRange =''
  var _showFromDay =1;
  if(_toDay ===undefined)
  {
    _toDay=_fromDay;
    _fromDay=1
    
  }
  else{
    isRange = true;
    _showFromDay = _fromDay;
    _fromDay=1;
    
  }
  for (const day in days) 
    {
      if ( day >=_fromDay &&  day <= _toDay  )
        reciteDays[day] = days[day]
    }


  for (const day in reciteDays) {
    
    let TheGiftStr = day ==1 ? gifts[day][0] : `${days[day][1]} ${gifts[day][1]}`;
    _recite = song(days[day][0],TheGiftStr)
    
    if(giveGift.length >0) 
    {
  
      _recite = _recite + ', ' + giveGift.join(', ')+"\n";
      giveGift.unshift(`${TheGiftStr}`);
    }
    else{
      giveGift.unshift(`and ${TheGiftStr}.`)
      _recite += '.\n'
    }
      if(isRange && day >= _showFromDay)
      {
        if (_toDay > day) 
          reciteRange +=_recite +"\n";
        else
          reciteRange +=_recite

        
      }
    }

    return isRange==true ? reciteRange: _recite;
  
};
