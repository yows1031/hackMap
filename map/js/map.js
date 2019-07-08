'use strict'
{
    const menu = document.getElementById('menu');
    const sideMenu = document.getElementById('sideMenu');

    const mask = document.getElementById('mask');
    const pointData = document.getElementById('pointData');
    const img = document.querySelector('img');
    const myUl = document.getElementById("myUL");

    const centralBuilding = [
        {name:'イトナブ石巻', id:"itnav"},
        {name:'アイトピアホール', id:"eyetopia"},
        {name:'かわべい', id:"kawabay"},
        {name:'第3ステージ', id:"three"},
    ]

    const foodShop = [
        {name:'もりや', id:"moriya"},
        {name:'まきいし', id:"makiishi"},
        {name:'雲雀', id:"hibari"},
        {name:'銀玉水', id:"gingyokusui"},
        {name:'佐原', id:"sahara"},
        {name:'野田や', id:"nodaya"},
        {name:'いしのまき元気市場', id:"genki"},
        {name:'丸宮', id:"marumiya"},
        {name:'しぇんろん', id:"syenron"},
        {name:'天空庵', id:"tenkuan"},
        {name:'ニゴンボ', id:"nigonbo"},
        {name:'DACHA', id:"dacha"},
        {name:'復興バー', id:"hukko"},
        {name:'カレー屋ディスコ', id:"disco"},
        {name:'タルタルーガ', id:"tarutaru"},
    ]

    const afterParty = [
        {name:'IRORI', id:"irori"},
    ]

    const convenience = [
        {name:'石巻駅', id:"station"},
        {name:'石巻市役所', id:"cityHall"},
        {name:'セブンイレブン', id:"seven"},
        {name:'ファミリーマート', id:"familymart"},
        {name:'ミニストップ', id:"ministop"},
        {name:'ローソン', id:"lowSon"},
        {name:'星薬局', id:"drug"}
    ]

    const center = document.getElementById('center');
    const party = document.getElementById('party');
    const food = document.getElementById('food');
    const store = document.getElementById('store');

   const map = document.getElementById('map');

    function mapping() {

        centralBuilding.forEach((value, index) => {
            const i = document.createElement('i');
            i.classList.add('fas');
            i.classList.add('fa-building');
            i.setAttribute("id", value.id);
            const number = document.createTextNode(index + 1)
            i.appendChild(number);
            map.appendChild(i);
        });

        afterParty.forEach((value, index) => {
            const i = document.createElement('i');
            i.classList.add('fas');
            i.classList.add('fa-utensils');
            i.setAttribute("id", value.id);
            // const number = document.createTextNode(index + 1)
            // i.appendChild(number);
            map.appendChild(i);
        });
        
        foodShop.forEach((value, index) => {
            const i = document.createElement('i');
            i.classList.add('fas');
            i.classList.add('fa-utensils');
            i.setAttribute("id", value.id);
            const number = document.createTextNode(index + 1)
            i.appendChild(number);
            map.appendChild(i);
        });

        convenience.forEach((value, index) => {
            const i = document.createElement('i');
            i.classList.add('fas');
            i.classList.add('fa-store');
            i.setAttribute("id", value.id);
            const number = document.createTextNode(index + 1)
            i.appendChild(number);
            map.appendChild(i);
        });
    }

    mapping();

    menu.addEventListener('click', () => {
        sideMenu.classList.remove('hidden');

        centralBuilding.forEach((value, index) =>{
            const li = document.createElement('li');
            const number = document.createTextNode(index + 1);
            const newContent = document.createTextNode(value.name);
            li.appendChild(number);
            li.appendChild(newContent);
            center.appendChild(li);
        })

        afterParty.forEach((value, index) =>{
            const li = document.createElement('li');
            // const number = document.createTextNode(index + 1);
            const newContent = document.createTextNode(value.name);
            // li.appendChild(number);
            li.appendChild(newContent);
            party.appendChild(li);
        })

        foodShop.forEach((value, index) =>{
            const li = document.createElement('li');
            const number = document.createTextNode(index + 1);
            const newContent = document.createTextNode(value.name);
            li.appendChild(number);
            li.appendChild(newContent);
            food.appendChild(li);
        })

        convenience.forEach((value, index) =>{
            const li = document.createElement('li');
            const number = document.createTextNode(index + 1);
            const newContent = document.createTextNode(value.name);
            li.appendChild(number);
            li.appendChild(newContent);
            store.appendChild(li);
        })
    })



    sideMenu.addEventListener('click', () => {
        
        while (center.firstChild) {
            center.removeChild(center.firstChild);
        }

        while (food.firstChild) {
            food.removeChild(food.firstChild);
        }

        while (store.firstChild) {
        store.removeChild(store.firstChild);
        }
        sideMenu.classList.add('hidden');
    })

    mask.addEventListener('click', () => {
        while (img.firstChild) {
            img.removeChild(img.firstChild);
        }
        while (myUl.firstChild) {
            myUl.removeChild(myUl.firstChild);
        }
        mask.classList.add('hidden');
        pointData.classList.add('hidden')
    })

    pointData.addEventListener('click', () => {
        while (img.firstChild) {
            img.removeChild(img.firstChild);
        }
        while (myUl.firstChild) {
            myUl.removeChild(myUl.firstChild);
        }
        mask.classList.add('hidden');
        pointData.classList.add('hidden')
    })

}