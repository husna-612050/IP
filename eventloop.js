(() => {
    console.log('this is the start');
  setTimeout(() => {
    console.log('Callback 1: this is a msg from call back');
  },2000); // has a default time value of 
  console.log('this is just a message');
  setTimeout(() => {
    console.log('Callback 2: this is a msg from call back');
  }, 1000);
  console.log('this is the end');
})();
