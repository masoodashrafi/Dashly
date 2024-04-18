document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('in-stock').addEventListener('click', () => {
        window.location.href = 'in-stock.html';
    });

    document.getElementById('out-of-stock').addEventListener('click', () => {
        window.location.href = 'out-of-stock.html';
    });

    document.getElementById('pending-order').addEventListener('click', () => {
        window.location.href = 'pending-order.html';
    });
});