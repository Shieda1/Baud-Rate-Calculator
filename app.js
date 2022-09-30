// https://www.omnicalculator.com/other/baud-rate

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const baudrateRadio = document.getElementById('baudrateRadio');
const bitspersecondRadio = document.getElementById('bitspersecondRadio');
const numberofbitsperbaudRadio = document.getElementById('numberofbitsperbaudRadio');

let baudrate;
let bitspersecond = v1;
let numberofbitsperbaud = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

baudrateRadio.addEventListener('click', function() {
  variable1.textContent = 'Bits per second';
  variable2.textContent = 'Number of bits per baud';
  bitspersecond = v1;
  numberofbitsperbaud = v2;
  result.textContent = '';
});

bitspersecondRadio.addEventListener('click', function() {
  variable1.textContent = 'Baud rate';
  variable2.textContent = 'Number of bits per baud';
  baudrate = v1;
  numberofbitsperbaud = v2;
  result.textContent = '';
});

numberofbitsperbaudRadio.addEventListener('click', function() {
  variable1.textContent = 'Baud rate';
  variable2.textContent = 'Bits per second';
  baudrate = v1;
  bitspersecond = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(baudrateRadio.checked)
    result.textContent = `Baud rate = ${computebaudrate().toFixed(2)}`;

  else if(bitspersecondRadio.checked)
    result.textContent = `Bits per second = ${computebitspersecond().toFixed(2)}`;

  else if(numberofbitsperbaudRadio.checked)
    result.textContent = `Number of bits per baud = ${computenumberofbitsperbaud().toFixed(2)}`;
})

// calculation

function computebaudrate() {
  return Number(bitspersecond.value) / Number(numberofbitsperbaud.value);
}

function computebitspersecond() {
  return Number(baudrate.value) * Number(numberofbitsperbaud.value);
}

function computenumberofbitsperbaud() {
  return Number(bitspersecond.value) / Number(baudrate.value);
}