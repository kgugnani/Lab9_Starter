let form = document.querySelector('form');
form.addEventListener('submit', e => {
  e.preventDefault();
  let output = document.querySelector('output');
  let firstNum = document.querySelector('#first-num').value;
  let secondNum = document.querySelector('#second-num').value;
  let operator = document.querySelector('#operator').value;
  
  if (operator === 'divide' && secondNum === '0') {
        throw new Error('Cannot divide by zero.');
  }
  output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
});

document.getElementById('console-log').addEventListener('click', () => {
  try{
    console.log('This is a console log message.');
  }
  catch(error){
    console.log("Cannot print to console.")
  }
   
});


document.getElementById('console-error').addEventListener('click', () => {
  console.error('This is a console error message.');
});


let count = 0;
document.getElementById('console-count').addEventListener('click', () => {
  console.count('Counter');
  count++;
});


document.getElementById('console-warn').addEventListener('click', () => {
  console.warn('This is a console warning message.');
});

document.getElementById('console-assert').addEventListener('click', () => {
  console.assert(false, 'Assertion failed: This should not be true.');
});

document.getElementById('console-clear').addEventListener('click', () => {
  console.clear();
});


let obj = { name: 'John', age: 30 };
document.getElementById('console-dir').addEventListener('click', () => {
  console.dir(obj);
});


document.getElementById('console-dirxml').addEventListener('click', () => {
  console.dirxml(document);
});


document.getElementById('console-group-start').addEventListener('click', () => {
  console.group('Group');
  console.log('Message 1');
  console.log('Message 2');
});

document.getElementById('console-group-end').addEventListener('click', () => {
  console.log('Message 3');
  console.log('Message 4');
  console.groupEnd();
});

let tableData = [
  { name: 'SWE', classnum: 110 },
  { name: 'AI', classnum: 150 },
  { name: 'OS', classnum: 120 }
];
document.getElementById('console-table').addEventListener('click', () => {
  console.table(tableData);
});


document.getElementById('console-timer-start').addEventListener('click', () => {
  console.time('Timer');
});


document.getElementById('console-timer-end').addEventListener('click', () => {
  console.timeEnd('Timer');
});


document.getElementById('console-trace').addEventListener('click', () => {
  console.trace('Trace message');
});

// Trigger a Global Error Demo
document.getElementById('trigger-error').addEventListener('click', () => {
  nonExistentFunction(); 
});
