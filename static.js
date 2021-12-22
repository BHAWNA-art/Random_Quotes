//static

const quotes=[
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde",
        
    },
    {
        quote: "To live is the rarest thing in the world. Most people exist, that is all.",
        author: "Oscar Wilde",
       
    },
    {
        quote: "True friends stab you in the front.",
        author: "Oscar Wilde",
        
    },
    {
        quote: "Women are made to be Loved, not understood.",
        author: "Oscar Wilde",
       
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi",
        
    },
    {
        quote: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
        author: "Mahatma Gandhi",
        
    },
    {
        quote: "No one can make you feel inferior without your consent.",
        author: "Eleanor Roosevelt",
      
    },
    {
        quote: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
        author: "Eleanor Roosevelt",
        
    },
    {
        quote: "Do what you feel in your heart to be right - for you'll be criticized anyway.",
        author: "Eleanor Roosevelt",
        
    },
    {
        quote: "Do one thing every day that scares you.",
        author: "Eleanor Roosevelt",
        
    },
    {
        quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate; only love can do that.",
        author: "Martin Luther King",
        
    },
    {
        quote: "Our lives begin to end the day we become silent about things that matter.",
        author: "Martin Luther King",
        
    },
    {
        quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.",
        author: "Martin Luther King",
        
    },
    {
        quote: "Injustice anywhere is a threat to justice everywhere.",
        author: "Martin Luther King",
       
    },
    {
        quote: "The time is always right to do what is right.",
        author: "Martin Luther King",
        
    },
    {
        quote: "Life's most persistent and urgent question is, 'What are you doing for others?",
        author: "Martin Luther King",
       
    },
    {
        quote: "Weak people revenge. Strong people forgive. Intelligent People Ignore.",
        author: "Albert Einstein",
       
    },
    {
        quote: "I have not failed. I've just found 10,000 ways that won't work.",
        author: "Thomas A. Edison",
       
    },
    {
        quote: "Genius is one percent inspiration and ninety-nine percent perspiration.",
        author: "Thomas A. Edison",
        
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author: "Thomas A. Edison",
        
    },
    {
        quote: "If we did all the things we are capable of, we would literally astound ourselves.",
        author: "Thomas A. Edison",
       
    },
    {
        quote: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.",
        author: "Albert Einstein",
       
    },
    {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw",
      
    },
    {
        quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
        author: "Winston Churchill",
      
    },
    {
        quote: "If you're going through hell, keep going.",
        author: "Winston Churchill",
        
    },
    {
        quote: "We make a living by what we get, but we make a life by what we give.",
        author: "Winston Churchill",
       
    },
    {
        quote: "Peace begins with a smile.",
        author: "Mother Teresa",
      
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        author: "Mother Teresa",
       
    },
    {
        quote: "If you can't feed a hundred people, then feed just one.",
        author: "Mother Teresa",
       
    },
    {
        quote: "Kind words can be short and easy to speak, but their echoes are truly endless.",
        author: "Mother Teresa",
      
    },
    {
        quote: "Isn't it nice to think that tomorrow is a new day with no mistakes in it yet?",
        author: "L.M. Montgomery",
       
    },
    {
        quote: "Tomorrow is always fresh, with no mistakes in it.",
        author: "L.M. Montgomery",
       
    },
    {
        quote: "We should regret our mistakes and learn from them, but never carry them forward into the future with us.",
        author: "L.M. Montgomery",

    },
    {
        quote: "It's so easy to be wicked without knowing it, isn't it?",
        author: "L.M. Montgomery",
       
    },
    {
        quote: "All the darkness in the world cannot extinguish the light of a single candle.",
        author: "Francis of Assisi",
      
    },
    {
        quote: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.",
        author: "Francis of Assisi",
     
    },
    {
        quote: "Preach the Gospel at all times and when necessary use words.",
        author: "Francis of Assisi",
       
    },
    {
        quote: "A single sunbeam is enough to drive away many shadows.",
        author: "Francis of Assisi",
        
    },
    {
        quote: "You never fail until you stop trying.",
        author: "Albert Einstein",
       
    },
    {
        quote: "You see things; you say, 'Why?' But I dream things that never were; and I say 'Why not?",
        author: "George Bernard Shaw",
        
    },
    {
        quote: "We don't stop playing because we grow old; we grow old because we stop playing.",
        author: "George Bernard Shaw",
        
    },
    {
        quote: "Progress is impossible without change, and those who cannot change their minds cannot change anything.",
        author: "George Bernard Shaw",
       
    },
    {
        quote: "A life spent making mistakes is not only more honorable, but more useful than a life spent doing nothing.",
        author: "George Bernard Shaw",
       
    },
    {
        quote: "Kindness is a language which the deaf can hear and the blind can see.",
        author: "Mark Twain",
        
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
       
    },
    {
        quote: "Whenever you find yourself on the side of the majority, it is time to pause and reflect.",
        author: "Mark Twain",
        
    }
]


// const quoteBtn = document.getElementById('quote-btn');
// const quote = document.querySelector('.quote-text');
// const author = document.querySelector('.author');

// quoteBtn.addEventListener('click', ()=>{
//     let index = Math.floor(Math.random()*quotes.length);

//     quote.innerHTML = quotes[index].quote;
//     author.innerHTML= quotes[index].author;
// })
function newQuote(){
    let index = Math.floor(Math.random()*quotes.length);
    
 const quote = document.querySelector('.quote-text');
 const author = document.querySelector('.author');
 quote.innerHTML = quotes[index].quote;
  author.innerHTML= quotes[index].author;
}