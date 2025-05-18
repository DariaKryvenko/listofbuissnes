let add = document.querySelector('.add');
let input = document.querySelector(".input");
let container = document.querySelector('.container');

add.addEventListener('click', function() {
    let text = input.value;
    container.innerHTML += `
    <div class="element">
        <input type="checkbox" class='save'>
        <span class='text'>${text}</span>
        <button class="delete-btn">удалить</button>
    </div>
    `;

    // Находим ВСЕ кнопки удаления
    let deleteButtons = container.querySelectorAll('.delete-btn');
    deleteButtons.forEach(btn => {
        btn.onclick = function() {
            btn.parentElement.remove();
        };
    });
});
