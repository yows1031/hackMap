'use strict'
{
    const infoItnav = [
        'イトナブ石巻',
        '会場・運営本部',
        '８：００〜２２：００',
        '０２２５−９０−４２８２',
    ];
    const itnavImg = 'img/itnav.png';

    const infolowson = [
        'ローソン中央2丁目店',
        'コンビニ',
        '７：００〜２２：００',
    ];
    const lowSonImg = 'img/photo.png';

    const infoMoriya = [
        'そば処・もりや',
        'そば屋',
        '１１：００〜１６：３０',
        '０２２５−２２−１６６０',
    ];
    const moriyaImg = 'img/photo.png';

    const mask = document.getElementById('mask');
    const pointData = document.getElementById('pointData');
    const target = document.getElementById('target');

    const itnav = document.getElementById('itnav');
    const lowSon = document.getElementById('lowSon');
    const moriya = document.getElementById('moriya');
    

    const list = document.getElementsByClassName('list');
    const ul = document.querySelector('ul');

    itnav.addEventListener('click', () => {
        target.src = itnavImg;
        infoItnav.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    })

    lowSon.addEventListener('click', () => {
        target.src = lowSonImg;
        infolowson.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    })

    moriya.addEventListener('click', () => {
        target.src = moriyaImg;
        infoMoriya.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    })


}