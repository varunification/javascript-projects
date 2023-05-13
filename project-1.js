// create variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');

let person = document.querySelector('.person');

const quotes = [
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
      person: "Albert Schweitzer"
    },
    {
      quote: "Believe you can and you're halfway there.",
      person: "Theodore Roosevelt"
    },
    {
      quote: "The future belongs to those who believe in the beauty of their dreams.",
      person: "Eleanor Roosevelt"
    },
    {
      quote: "In the middle of difficulty lies opportunity.",
      person: "Albert Einstein"
    },
    {
      quote: "The only limit to our realization of tomorrow will be our doubts of today.",
      person: "Franklin D. Roosevelt"
    },
    {
      quote: "The best way to predict the future is to create it.",
      person: "Peter Drucker"
    },
    {
      quote: "Don't watch the clock; do what it does. Keep going.",
      person: "Sam Levenson"
    },
    {
      quote: "You are never too old to set another goal or to dream a new dream.",
      person: "C.S. Lewis"
    },
    {
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      person: "Winston Churchill"
    }
  ];
  quotes.push(
    {
      quote: "The only way to do great work is to love what you do.",
      person: "Steve Jobs"
    },
    {
      quote: "Success usually comes to those who are too busy to be looking for it.",
      person: "Henry David Thoreau"
    },
    {
      quote: "The best revenge is massive success.",
      person: "Frank Sinatra"
    },
    {
      quote: "The secret of getting ahead is getting started.",
      person: "Mark Twain"
    },
    {
      quote: "The future depends on what you do today.",
      person: "Mahatma Gandhi"
    },
    {
      quote: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
      person: "Christian D. Larson"
    },
    {
      quote: "The harder I work, the luckier I get.",
      person: "Gary Player"
    },
    {
      quote: "Success is not in what you have, but who you are.",
      person: "Bo Bennett"
    },
    {
      quote: "Your time is limited, don't waste it living someone else's life.",
      person: "Steve Jobs"
    },
    {
      quote: "Don't be afraid to give up the good to go for the great.",
      person: "John D. Rockefeller"
    },
    // Add more quotes here...
  );
  btn.addEventListener('click',(e)=>{
    let random = Math.floor(Math.random()*quotes.length);
   quote.innerText=quotes[random].quote;
   person.innerText=quotes[random].person;



  });