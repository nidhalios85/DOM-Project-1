document.addEventListener('DOMContentLoaded', () => {
    updateTotal();

    document.querySelectorAll('.increase-qty').forEach(button => {
        button.addEventListener('click', () => {
            const quantityInput = button.parentElement.querySelector('.quantity');
            quantityInput.value = parseInt(quantityInput.value) + 1;
            updateTotal();
        });
    });

    document.querySelectorAll('.decrease-qty').forEach(button => {
        button.addEventListener('click', () => {
            const quantityInput = button.parentElement.querySelector('.quantity');
            if (parseInt(quantityInput.value) > 1) {
                quantityInput.value = parseInt(quantityInput.value) - 1;
                updateTotal();
            }
        });
    });

    document.querySelectorAll('.like-item').forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
        });
    });

    document.querySelectorAll('.delete-item').forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.parentElement.remove();
            updateTotal();
        });
    });

    function updateTotal() {
        let total = 0;
        document.querySelectorAll('.cart-item').forEach(item => {
            const price = parseFloat(item.querySelector('.item-details p').textContent.replace('Price: ', '', 'DT'));
            const quantity = parseInt(item.querySelector('.quantity').value);
            total += price * quantity;
        });
        document.querySelector('.cart-total h2').textContent = `Total: ${total.toFixed(2)} DT`;
    }
});
