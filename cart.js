
const init = () => {
let totalCost =0;


[...document.querySelectorAll('.cart-content__item')].forEach((basketItem) => {
  totalCost += Number(basketItem.querySelector('.input').value) * Number(basketItem.querySelector('.input').dataset.price);
  
});
document.getElementById('total-price').textContent = totalCost;

}; 
init();