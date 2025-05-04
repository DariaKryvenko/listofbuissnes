let add= document.querySelector('.add')
let input = document.querySelector(".input")
add.addEventListener('click',function(){
    let text=input.value
    let container= document.querySelector('.container')
    container.innerHTML+=` 
    <div class="element">
    <input type="checkbox">
    <span>${text}</span>
    <button>удалить</button>
</div>  


// получить все кнопки удалить
    `
})
