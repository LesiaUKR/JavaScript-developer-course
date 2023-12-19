
function learnJS(lang, callback) {
  console.log(`I study: ${lang}`);
  callback();
}

function done() {
  console.log('I learnt this lesson');
}

learnJS('JavaScript', done);