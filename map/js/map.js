'use strict'
{
    const menu = document.getElementById('menu');
    const sideMenu = document.getElementById('sideMenu');

    const mask = document.getElementById('mask');
    const pointData = document.getElementById('pointData');
    const ul = document.querySelector('ul');
    const img = document.querySelector('img');

    const itnav = document.getElementById('itnav');
    const lowSon = document.getElementById('lowSon');
    const moriya = document.getElementById('moriya');

    menu.addEventListener('click', () => {
        sideMenu.classList.remove('hidden');
    })

    sideMenu.addEventListener('click', () => {
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