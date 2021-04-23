let btn=document.getElementById('newQuote');
let quoteDisplay=document.getElementById('quote');
let quote=[
    "You only live once, but if you do it right, once is enough.",
    "I am so clever that sometimes I don't understand a single word of what I am saying.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "It is our choices, Harry, that show what we truly are, far more than our abilities",
	"All men who have turned out worth anything have had the chief hand in their own education.",
	"Trust yourself. You know more than you think you do.",
    "No one can make you feel inferior without your consent.",
   
	


]
btn.addEventListener('click',function()
{
    var randomQuote=quote[Math.floor(Math.random()*quote.length)];
    quoteDisplay.innerHTML=randomQuote;
})


