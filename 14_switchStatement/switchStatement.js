const color = 'green';

// if (color === 'green') {
//   console.log('Go!');
// } else if (color === 'yellow') {
//   console.log('Get ready!');
// } else if (color === 'red ') {
//   console.log('Stop!');
// } else {
//   console.log('Incorrect color!');
// }

// switch (color) {
//   case 'green':
//     console.log('Go!');
//     break;
//   case 'yellow':
//     console.log('Get ready!');
//     break;
//   case 'red':
//     console.log('Stop!');
//     break;
//   default:
//     console.log('Incorrect color!');
// }

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
