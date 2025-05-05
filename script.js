let add= document.querySelector('.add')
let input = document.querySelector(".input")
add.addEventListener('click',function(){
    let text=input.value
    let container= document.querySelector('.container')
    container.innerHTML+=` 
    <div class="element">
    <input type="checkbox">
    <span>${text}</span>
    <button class="delete-btn">удалить</button>
</div>  
// получить все кнопки удалить    `
})
const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(button => {
  button.addEventListener('click', () => {
    button.parentElement.remove();
  });
});
