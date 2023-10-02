// Todo: Make M+ M- and MC functional
let string = ""; 
// initially blank string

let buttons = document.querySelectorAll('.button');
// saare button mai event listner lagana hai so use buttons and 
// queryselectorAll(it select all whose class is button)

Array.from(buttons).forEach((button)=>{
  // buttons se ek array banao or un pr for each lagao()

  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      // if someone clicks on equal sign = then evaluate that exp
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = ""
      // c clear the screen
      document.querySelector('input').value = string;
    }
    else{ 
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    // jisko bhi select karenge uske value string mai aake print hoge
      }
  })
})