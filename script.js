let rating = 0;
const thankyouDiv = document.querySelector('.thankyou');
const submit = document.getElementById("para3");
const buttons = document.querySelectorAll('li button');
const value = document.querySelector('.t1 span');
for (let i = 0; i < 5; i++)
{
    buttons[i].addEventListener('click', () =>
    {
        rating = buttons[i].innerHTML;
        console.log(rating);
    })
}
submit.addEventListener('click', () => {
    value.innerHTML = rating;
    thankyouDiv.style.zIndex = '2';
});






