const weekday = 'saturday';

switch (weekday) {
  case 'monday':
    console.log("Keep calm and pretend it's not Monday");
    break;
  case 'tuesday':
    console.log('Tuesday is ' + "just Monday's ugly sister.");
    break;
  case 'wednesday':
    console.log(
      'Nothing screws ' +
        'up your Friday like' +
        "realizing it's only " +
        'Wednesday'
    );
    break;
  case 'thursday':
    console.log("It's Friday! " + 'Sorry...Just practicing ' + 'for tomorrow');
    break;
  case 'friday':
    console.log('Stay strong! ' + 'Weekend is coming soon!');
    break;
  case 'saturday':
  case 'sunday':
    console.log(
      'Why are ' +
        'Saturday and Sunday the  ' +
        'strongest days? Because ' +
        'all the others are ' +
        'week-days!'
    );
    break;
  default:
    console.log('This is weekday ' + "which I don't know");
    break;
}
