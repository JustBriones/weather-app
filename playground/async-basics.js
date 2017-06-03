console.log('Starting App');

setTimeout(() => {
  console.log('inside of callback')
}, 2000);

setTimeout(() => {
  console.log('inside of callback 2 works as well')
}, 0);

console.log('Finishing up');
