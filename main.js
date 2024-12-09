let ul = document.getElementById('ul')


let form = document.forms[0]
form.onsubmit = function (ev){
    ev.preventDefault()
    let input = this.inputData.value
    input.trim()
    if (input.match(/^[A-Za-z0-9=' ']+$/g)){                                                 /*проверка что ввводится в поле инпут*/

        let checkActive = ()=> {
            if (li.classList.contains('active')) {                                   /*создаю функцию которая проверяет есть ли active у елементов списка и если он есть удаляет его, если его нет то добавляет при клике  */
                li.classList.remove('active');
                li.style.background = 'none';
            } else {
                li.classList.toggle('active')
                li.style.background = 'gold';
            }
        }


        let li = document.createElement('li')                 /*создаю елемент и заполняю его */
        let [name, value] = input.split("=");
        li.innerText = `${name}=${value}`
        li.setAttribute('name', name);                                         /*назначаю атрибуты всем полям name */
        li.onclick = (()=>{checkActive()})                                            /*добавляю лишкам функцию с классом active при клике */
        ul.appendChild(li)
    }else {
        console.log('err')
    }
}


document.getElementsByClassName('delete')[0].onclick = (()=>{                              /*создаю кнопку удалить */
    let selectedElements = document.getElementsByClassName('active')
    Array.from(selectedElements).forEach(elem => elem.remove()                                     /*через Array.from делаю из коллекции массив для того что бы применить к нему метод массива*/
    )
})





let listWrapper  = document.getElementById('ul')
const getName = (li) => {
    return li.getAttribute('name')                                        /*нахожу елемент стринги, которому дал атрибут, для предачи его в сравнение*/
}

const getValue = (li) => {
    return li.textContent.split('=')[1]                                       /*розделяю содержимое li и беру второй елемент массива для передачи в сравнение*/
}

const sortByAlfavit = (a, b) => {
    return a.localeCompare(b)                                                         /*вместо ифов использовал метод localeCompare, под капотом там тоже сравнения идут */
}

const getCurrentValue = (key, value) =>{
    return key === 'name'?getName(value):getValue(value)                               /*тернарным выражением выбираю будет сортироватся name || value*/
}


const onSortArray = (key) => {
    const list  = document.querySelectorAll('li')
    const itemsArray = Array.from(list);
    itemsArray.sort((a, b) => {
        return sortByAlfavit(getCurrentValue(key, a),getCurrentValue(key, b))
    })
    listWrapper.innerHTML = '';
    itemsArray.forEach(item => listWrapper.appendChild(item))
}



                                                                                                                       /*даю кнопке функцию при нажатии с ключом name */
document.querySelector('.sort_by_name').addEventListener('click', ()=>{
    onSortArray('name')
})

                                                                                                                       /*даю кнопке функцию при нажатии с ключом value */
document.querySelector('.sort_by_value').addEventListener('click', ()=>{
    onSortArray('value')
})














