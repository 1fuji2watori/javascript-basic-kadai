const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    const noClick = document.getElementById('text');
    setTimeout(() => {
        noClick.textContent = 'ボタンをクリックしました';
    }, 2000);
});