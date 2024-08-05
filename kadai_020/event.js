const btn = document.getElementById('btn');

btn.addEventListener('click', ()=> {
    const noClick = document.getElementById('text');
    noClick.textContent = 'ボタンをクリックしました';    
});