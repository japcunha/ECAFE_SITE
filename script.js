const menuItens = '.navbar';

const navbar = document.querySelector('.navbar');
menuItens.forEach(item => {
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.text;
    navbar.appendChild(link);
})


const productList = document.querySelector('.menu');

//adiciona cada produto na lista
products.forEach(product => {
    const productItem = document.createElement('div'); // container para cada produto.
productItem.classList.add('product-item'); // adiciona uma classe para estilização
})
//nome do produto
const productName = document.createElement('h3');
productName.textContent = product.name;

//preço do produto


