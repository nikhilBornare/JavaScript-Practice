let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      try {
        string = eval(string);
        document.querySelector('.display').value = string;
      } catch {
        document.querySelector('.display').value = "Error";
      }
    } else if (e.target.innerHTML == 'C') {
      string = "";
      document.querySelector('.display').value = string;
    } else {
      string += e.target.innerHTML;
      document.querySelector('.display').value = string;
    }
  });
});

// Dark Mode Toggle
const toggleModeButton = document.querySelector('.toggle-mode');
toggleModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
