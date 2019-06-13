'use strict'
{
    const infoItnav = [
        'イトナブ石巻',
        '会場・運営本部',
        '８：００〜２２：００',
        '０２２５−９０−４２８２',
    ];
    const itnavImg = 'img/itnav.png';

    const infoStation = [
        '石巻駅',
        '路線：仙石線 石巻線',
        '仙台行快速最終 20:59',
    ];
    const stationImg = 'img/photo.png';

    const infoSeven = [
        'セブン-イレブン',
        '石巻鋳銭場店',
        'コンビニ',
        '24時間',
    ];
    const sevenImg = 'img/photo.png';

    const infoFamilimart = [
        'ファミリーマート',
        '石巻千石町店',
        'コンビニ',
        '24時間',
    ];
    const familimartImg = 'img/photo.png';

    const infoMinistop = [
        'ミニストップ',
        '石巻サンプラザホテル店',
        'コンビニ',
        '24時間',
    ];
    const ministopImg = 'img/photo.png';

    const infolowson = [
        'ローソン',
        '中央2丁目店',
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


    const lowSon = document.getElementById('lowSon');
    const moriya = document.getElementById('moriya');
    const itnav = document.getElementById('itnav');
    const station = document.getElementById('station')

    const seven = document.getElementById('seven');
    const familimart = document.getElementById('familymart')
    const ministop = document.getElementById('ministop');

    const ul = document.getElementById('myUL');

    itnav.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
        target.src = itnavImg;
        infoItnav.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    });

    station.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
        target.src = stationImg;
        infoStation.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    });

    seven.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
        target.src = sevenImg;
        infoSeven.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    });

    familimart.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
        target.src = familimartImg;
        infoFamilimart.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    });

    ministop.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
        target.src = ministopImg;
        infoMinistop.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    });

    lowSon.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
        target.src = lowSonImg;
        infolowson.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    });

    moriya.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
        target.src = moriyaImg;
        infoMoriya.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    });


}