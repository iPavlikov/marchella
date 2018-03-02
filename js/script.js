
function cart_button() {
	var cart_btn = document.getElementById('cart_btn');
	console.log(cart_btn.classList.item);
	cart_btn.onclick = cart_btn.classList.toggle('active');
	// body...
};

cart_button();