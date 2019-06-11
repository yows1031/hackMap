'use strict'
{
    const menu = document.getElementById('menu');
    const sideMenu = document.getElementById('sideMenu');

    const mask = document.getElementById('mask');
    const pointData = document.getElementById('pointData');
    const ul = document.querySelector('ul');
    const img = document.querySelector('img');

    const center = document.getElementById('center');
    const food = document.getElementById('food');
    const store = document.getElementById('store');

    const itnav = document.getElementById('itnav');
    const lowSon = document.getElementById('lowSon');
    const moriya = document.getElementById('moriya');

    const convenience = [
        {name:'セブンイレブン', id:"seven"},
        {name:'ファミリーマート', id:"familymart"},
        {name:'ミニストップ', id:"ministop"},
        {name:'ローソン', id:"lowson"}
    ]

        menu.addEventListener('click', () => {
            sideMenu.classList.remove('hidden');
            convenience.forEach((value) =>{
                const li = document.createElement('li');
                const newContent = document.createTextNode(value.name);
                const a = document.createElement('a');
                a.setAttribute("id", value.id)
                a.appendChild(newContent)
                a.classList.add('button.is-info')
                li.appendChild(a);
                store.appendChild(li);
            })
        })



    sideMenu.addEventListener('click', () => {
        while (store.firstChild) {
        store.removeChild(store.firstChild);
        }
        sideMenu.classList.add('hidden');
    })

    // 地図のアイコン

    mask.addEventListener('click', () => {
        while (img.firstChild) {
            img.removeChild(img.firstChild);
        }
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        mask.classList.add('hidden');
        pointData.classList.add('hidden')
    })

    pointData.addEventListener('click', () => {
        while (img.firstChild) {
            img.removeChild(img.firstChild);
        }
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
        mask.classList.add('hidden');
        pointData.classList.add('hidden')
    })

    itnav.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
    })

    lowSon.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
    })

    moriya.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
    })
}