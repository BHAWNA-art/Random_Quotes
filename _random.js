//by API

var data;
const displaytext =()=>{
    let index = Math.floor(Math.random()*data.length);
    document.querySelector('.quote-text').innerHTML=data[index].QuoteName;
    document.querySelector('.author').innerHTML=data[index].AuthorName;
}


fetch("https://localhost:44367/api/Default").then(function(response){
    return response.json();
}).then(function(data){
    this.data = data;
    displaytext();
});

function newQuote(){
    displaytext();
}