let display = document.getElementById('input'); 
let buttons = document.querySelectorAll('button'); // selects all the elements of button tag and stores it in buttons
let buttonsArr = Array.from(buttons); // from nodelist to array 
let string = ''; // will be used for storing 
buttonsArr.forEach(btn =>
{
    btn.addEventListener('click', (e) =>
    {
        if(e.target.innerHTML == 'Del')
        {
            string = string.substring(0,string.length-1); // removes 1 element from stored length
            display.value = string;
        }
        else if(e.target.innerHTML == 'AC')
        {
            string = '';
            display.value = string;
        }
        else if(e.target.innerHTML == '=')
        {
            string = eval(string); // eval() converts string into number and calculate it
            display.value = string;
        }
        else
        {
            string += e.target.innerHTML; // stores the pressed button value
            display.value  = string; // displays pressed button value in placehoder
            console.log(e.target.innerHTML); 
        }
    });
});
