var colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];

async function getQuotes(){
    const response= await fetch("https://gist.githubusercontent.com/nasrulhazim/54b659e43b1035215cd0ba1d4577ee80/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    const data=await response.json();
    
    showQuote(data["quotes"])
    
}
var quote;
var author;
function showQuote(quotes){
    
    var randomColor=Math.floor(Math.random() * colors.length);
    var randomQuote=Math.floor(Math.random() * quotes.length);
    document.documentElement.style.setProperty('--primary-color', colors[randomColor]);
    quote=quotes[randomQuote].quote;
    author=quotes[randomQuote].author;
    document.getElementById("quote-text").textContent=quote;
    document.getElementById("quote-author").textContent=author;
    var currentQuote= document.getElementById("quote-text").textContent;
    var currentAuthor=document.getElementById("quote-author").textContent
    document.getElementById("quote-text").animate(
        [
        {opacity:0},
        {opacity:1}
    ],{
        duration:1000,

    })
    
    
}
function tweetQuote(){
    tweetBtn.setAttribute("href",`https://twitter.com/intent/tweet?text=${quote}@${author}`)
}
function tumblrQuote(){
    tumblrBtn.setAttribute("href",`https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=${author}&content=${quote}.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`)
}
var newQuoteBtn=document.getElementById("new-quote");
var tweetBtn=document.getElementById("tweet-quote");
var tumblrBtn=document.getElementById("tumblr-quote");

document.addEventListener("DOMContentLoaded",()=>{
    getQuotes();
    newQuoteBtn.onclick=()=>{
        getQuotes()
    }
    tweetBtn.onclick=()=>{
        tweetQuote()
    }
    tumblrBtn.onclick=()=>{
        tumblrQuote()
    }
    
})

