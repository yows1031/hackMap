'use strict'
{
    const whiteBack = 'img/white.png'
    // モーダルリスト
    const infoItnav = [
        'イトナブ石巻',
        '会場・運営本部',
        '８：００〜２２：００',
        '０２２５−９０−４２８２',
    ];
    const itnavImg = 'img/itnav.png';

    const infoEyetopia = [
        'アイトピアホール',
        '発表会場',
        '０２２５−９２−５１９２',
    ];
    const eyetopiaImg = 'img/white.png'

    const infoKawabay = [
        'かわべいホール',
        '石巻市かわまち交流センター',
        'ハッカソン会場',
        '０２２５−９３−６４４８',
    ];
    const kawabayImg = 'img/white.png'

    const infoThree = [
        '第3ステージ',
        'BootCanp会場',
        '１０：００〜２２：００',
        '０９０−７８８０−２０５２',
    ];
    const threeImg = 'img/white.png'

    const infoIrori = [
        'IRORI 石巻',
        '懇親会会場',
        '０２２５−２５−４９５３',
    ];
    const iroriImg = 'img/white.png'

    const infoMoriya = [
        'そば処・もりや',
        'そば屋',
        '１１：００〜１６：３０',
        '０２２５−２２−１６６０',
    ];

    const infoMakiishi = [
        'まきいし',
        '釜飯・ハンバーグ',
        '１１：００〜１４：００',
        '０２２５−９３−４６８０',
    ];

    const infoHibari = [
        '中国料理 雲雀',
        '中華料理・餃子',
        '１１：００〜１４：００',
        '１７：００〜２１：００',
        '０２２５−９４−５１７８',
    ];

    const infogingyokusui = [
        '銀玉水',
        '寿司・定食',
        '１１：００〜２１：００',
        '０２２５−９３−２２６３',
    ];

    const infoSahara = [
        'ラーメン佐原',
        '１１：００〜１４：３０',
        '１７：００〜２０：３０',
        '０２２５−２４−６５５９',
    ];

    const infoNodaya = [
        'おにぎり 野田や',
        '弁当・惣菜',
        '７：００〜',
        '０２２５−２２−４４０１',
    ];

    const infoGenki = [
        'いしのまき元気市場',
        'フードコーナー',
        '１１：００〜２０：００',
        '０２２５−９８−５５３９',
    ];

    const infoMarumiya = [
        '麺屋 丸宮',
        'ラーメン つけ麺',
        '１１：００〜１４；３０',
        '１８：００〜２０：３０',
        '０２２５−２３−５１６６',
    ];

    const infoSyenron = [
        'しぇんろんバード',
        'ラーメン 焼き鳥',
        '１１：００〜１４；３０',
        '１７：００〜２３：３０',
        '０２２５−９０−３８８９',
    ];

    const infoTenkuuan = [
        '天空庵',
        'そば処 居酒屋',
        '１１：３０〜１３；３０',
        '１７：００〜０：００',
        '０２２５−２５−６４４６',
    ];

    const infoNigonbo = [
        'ニゴンボ',
        'バー',
        '１９：００〜',
        '０８０−２８３１−３７１６',
    ];

    const infoDacha = [
        '石巻バル Daccha',
        'バー',
        '１７：００〜２３：００',
        '０２２５−９８−４７７９',
    ];

    const infoHukko = [
        '復興バー',
        'バー',
        '２０：００〜０：００',
        '０２２５−２５５−４９５３',
    ];

    const infoDisco = [
        'カレー屋DISCO',
        'インドカレー 無国籍料理',
        '平日１８：００〜２２；００',
        '土日１２：００〜２２：００',
    ];

    const infoTarutaru = [
        'タルタルーガ',
        'イタリアン',
        '１１：３０〜１５；００',
        '１７：００〜２２：００',
        '０５０−３５８０−３２５４',
    ];
    

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

    const infoDrug = [
        '星薬局',
        '０２２５−２２−１５１８',
        '９：３０〜１８：３０',
    ];
    const drugImg = 'img/photo.png';

    const mask = document.getElementById('mask');
    const pointData = document.getElementById('pointData');
    const target = document.getElementById('target');

    //centralBuilding
    const itnav = document.getElementById('itnav');
    const eyetopia = document.getElementById('eyetopia');
    const kawabay = document.getElementById('kawabay');
    const three = document.getElementById('three');

    //foodShop
    const moriya = document.getElementById('moriya');
    const makiishi = document.getElementById('makiishi');
    const hibari = document.getElementById('hibari');
    const gingyokusui = document.getElementById('gingyokusui');
    const sahara = document.getElementById('sahara');
    const nodaya = document.getElementById('nodaya');
    const genki = document.getElementById('genki');
    const marumiya = document.getElementById('marumiya');
    const syenron = document.getElementById('syenron');
    const tenkuuan = document.getElementById('tenkuan')
    const nigonbo = document.getElementById('nigonbo');
    const dacha = document.getElementById('dacha');
    const hukko = document.getElementById('hukko');
    const disco = document.getElementById('disco');
    const tarutaru = document.getElementById('tarutaru');

    //afterParty&convenience
    const irori = document.getElementById('irori');
    const station = document.getElementById('station');
    const cityHall = document.getElementById('cityHall');
    const seven = document.getElementById('seven');
    const familimart = document.getElementById('familymart')
    const lowSon = document.getElementById('lowSon');
    const ministop = document.getElementById('ministop');
    const drug = document.getElementById('drug');

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

    eyetopia.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
        target.src = eyetopiaImg;
        infoEyetopia.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    });

    kawabay.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
        target.src = kawabayImg;
        infoKawabay.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    });

    three.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
        target.src = threeImg;
        infoThree.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    });

    irori.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
        target.src = iroriImg;
        infoIrori.forEach((value) =>{
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

    function cityHallIcon() {
        cityHall.classList.remove('fa-store');
        cityHall.classList.add('fa-building');
    }
    cityHallIcon()

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

    drug.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
        target.src = drugImg;
        infoDrug.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    });

    moriya.addEventListener('click', () => {
        mask.classList.remove('hidden');
        pointData.classList.remove('hidden');
        target.src = whiteBack;
        infoMoriya.forEach((value) =>{
            const li = document.createElement('li');
            const newContent = document.createTextNode(value);
            li.appendChild(newContent)
            ul.appendChild(li);
        })
    });


}