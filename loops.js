for (var i = 1; i < 25; i++) {
  console.log(`I am ${i} strange loop${i === 0 ? '' : 's'}.`);
}

let countdown = 100;

while (countdown > 0) {
  console.log(--countdown);
}
