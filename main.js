let ul = document.getElementById('ul')


let form = document.forms[0]
form.onsubmit = function (ev){
    ev.preventDefault()
    let input = this.inputData.value
    if (input.match(/[A-Za-z0-9=]/g)){

        let checkActive = ()=> {
            if (li.classList.contains('active')) {
                li.classList.remove('active');
                li.style.background = 'none';
            } else {
                li.classList.toggle('active')
                li.style.background = 'gold';
            }
        }


        let li = document.createElement('li')
        let [name, value] = input.split("=");
        li.innerText = `${name}=${value}`
        li.setAttribute('name', name);
        li.onclick = (()=>{checkActive()})
        ul.appendChild(li)


    }
}


document.getElementsByClassName('delete')[0].onclick = (()=>{
    let selectedElements = document.getElementsByClassName('active')
    Array.from(selectedElements).forEach(elem => elem.remove()                                     /*через Array.from делаю из коллекции массив для того что бы применить к нему метод массива*/
    )
})





let listWrapper  = document.getElementById('ul')
const getName = (li) => {
    return li.getAttribute('name')                     /*нахожу елемент стринги, которому дал атрибут, для предачи его в сравнение*/

}

const getValue = (li) => {
    return li.textContent.split('=')[1]                    /*розделяю содержимое li и беру второй елемент массива для передачи в сравнение*/
}

const sortByAlfavit = (a, b) => {
    return a.localeCompare(b)                                      /*вместо ифов использовал метод localeCompare, под капотом там тоже сравнения идут */
}

const getCurrentValue = (key, value) =>{
    return key === 'name'?getName(value):getValue(value)            /*тернарным выражением выбираю будет сортироватся name || value*/
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




document.querySelector('.sort_by_name').addEventListener('click', ()=>{
    onSortArray('name')
})

document.querySelector('.sort_by_value').addEventListener('click', ()=>{
    onSortArray('value')
})





/*
document.getElementsByClassName('sort_by_name')[0].onclick = (()=>{
    let array = []
    let collection = document.getElementsByTagName('li')
    let elements = Array.from(collection)
    for (const li of elements) {
        let [name, value] = li.split('=')
        let obj = {
            name: name,
            value: value
        }
        array.push(obj)
    }
    console.log(array)

})
*/



/*    let array = []
    let collection = [...document.getElementsByTagName('li')]

    collection.forEach(elem => {
        let [name, value] = elem.split('=')
        let obj = {
            name: name,
            value: value
        }
        array.push(obj)
    })
    console.log(array)*/







/*let liSet = document.getElementsByTagName('li')
for (let li of liSet ){
    li.onclick(()=>{
        if(li.classList.contains('active')){
            li.classList.remove('active');
        }else{
            li.classList.add('active');
        }
    });
}*/






