let p = document.createElement('p');
let blocPage = document.querySelector('#bloc_page');
let gAuthor = document.querySelector('#in_author');
let gTitle = document.querySelector('#in_title');
let gWeb = document.querySelector('#in_web');
gAuthor.addEventListener('change', updateAuthor);
gTitle.addEventListener('change', updateTitle);
gWeb.addEventListener('change', updateWebsite);

class Book{
    constructor(title, author, siteWeb="http://www.pasadresse.com"){
        this.title = title;
        this.author = author;
        this.siteWeb = siteWeb;
    }
}

let ISBN000001 = new Book('Le vrais visage des poissons', 'Damien Kafik-Delphin');
let ISBN000002 = new Book('Ma mère sur la commode', 'Ema Delphin','http://www.twitter.com');
let etagere =[ISBN000001, ISBN000002];
let howManyBook = etagere.length;
console.log(howManyBook);
//etagere.push(bookDeux);

function updateTitle(e) {
    gTitle.textContent = e.target.value;
}

function updateAuthor(e) {
    gAuthor.textContent = e.target.value;
}

function updateWebsite(e) {
    gWeb.textContent = e.target.value;
    console.log(gWeb.textContent);
}

function addBook() {
    if (gTitle.textContent && gAuthor.textContent){ 
        let pushit = new Book(gTitle.textContent, gAuthor.textContent, gWeb.textContent);
        etagere.push(pushit);
    } else {
        alert('Veuillez remplir tous les champs !');
    }   
}
    

function displayEtagere(){
    p.innerHTML="";
    for (let element of etagere) {
        blocPage.appendChild(p); 
        if (element.siteWeb == ""){
            element.siteWeb = "http://www.addressdebase.com"
        }            
        p.innerHTML += `<a href="${element.siteWeb}" target="blank">${element.author}</a> est l'auteur du livre : ${element.title} <br />`;
        
    }
    howManyBook = etagere.length;
    p.innerHTML += `Il y a ${howManyBook} livres sur l'étagère.`;  
}

console.log(gWeb.textContent);