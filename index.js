function writeCards(names, event) {
    let messages = []; 
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  function countDown(number) {
    while (number >= 0) {
      console.log(number);
      number--;
    }
  }
  
  // Test the functions
  console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"));
  countDown(5);
  