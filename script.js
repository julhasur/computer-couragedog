var button= document.getElementById('switch');
var h1=document.querySelector('#content h1');
var screen=document.getElementById('screen');

function SwitchOnOff() {
    if (button.classList.contains('green')) {
        button.classList.remove('green');
        button.style.backgroundColor = 'red';
        h1.textContent = 'Turned off';
        h1.style.color = 'black';
        content.style.boxShadow = 'none';
    }
    else {
        button.classList.add('green');
        button.style.backgroundColor = 'green';
        h1.textContent = 'Turned on';
        h1.style.color = 'green';
        div.style.boxShadow = '0 0 50px 20px green'; // Emit light from the div
      }
  }

// SwitchOnOff();
  // Add event listener to the button
button.addEventListener('click',SwitchOnOff);
button.addEventListener('click', function() {
    var screen = document.getElementById('screen');
    screen.classList.toggle('green-bg');
  });
