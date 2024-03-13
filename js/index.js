// import  arr  from "./dbl.js";
let container = document.createElement('div');
container.classList.add('container');

let tekst = document.createElement('h1');
tekst.innerHTML = 'В корзине: 1 товар';

let buttons = document.createElement('div');
buttons.classList.add('buttons');

let firstButton = document.createElement('button');
firstButton.classList.add('left');
firstButton.innerHTML = 'Показать первые 5';

let secondButton = document.createElement('button');
secondButton.classList.add('right');
secondButton.innerHTML = 'Показать все';



const clothes = document.createElement('div');
clothes.classList.add('clothes');

for (let i = 0; i < 4; i++) {
    let product = document.createElement('div');
    let image = document.createElement('img');
    let white = document.createElement('div');
    let black = document.createElement('div');
    let h2 = document.createElement('h2');
    let paragraph = document.createElement('p');
    let Button = document.createElement('button');
    product.classList.add('product');

    white.classList.add('white');

    image.src = 'img/bag.png';

    black.classList.add('black');

    h2.innerHTML = 'MENS CLOTHES (120)';

    paragraph.innerHTML = 'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday';

    Button.classList.add('favorite');
    Button.innerHTML = 'В избранное';


    white.append(image);
    black.append(h2);
    black.append(paragraph);
    black.append(Button);
    product.append(white);
    product.append(black);
    clothes.append(product);
}

buttons.append(firstButton);
buttons.append(secondButton);
container.append(tekst);
container.append(buttons);
container.append(clothes);
document.body.append(container);