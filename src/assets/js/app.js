window.addEventListener("DOMContentLoaded", (event) => {
    document.querySelectorAll('.link-obj-work').forEach((el) => {
        el.addEventListener('click', function (){ document.querySelector('#objects-work').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
    })});
    document.querySelectorAll('.link-proc-work').forEach((el) => {
        el.addEventListener('click', function (){ document.querySelector('#process-work').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
    })});
    document.querySelectorAll('.link-dealers-work').forEach((el) => {
        el.addEventListener('click', function (){ document.querySelector('#objects-accept').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
    })});
    document.querySelectorAll('.link-priem-work').forEach((el) => {
        el.addEventListener('click', function (){ document.querySelector('#priemush-work').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
    })});
    document.querySelectorAll('.link-cont').forEach((el) => {
        el.addEventListener('click', function (){ document.querySelector('#block-contact').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
    })});
    document.querySelectorAll('.float-button').forEach((el) => {
        el.addEventListener('click', function (){ document.querySelector('#app').scrollIntoView({behavior: "smooth", block: "start", inline: "start"})
    })});

    if (document.querySelector('#process-work')){
        document.querySelectorAll('.link-proc-work-footer').forEach((el) => {
                el.addEventListener('click', function (){ document.querySelector('#process-work').scrollIntoView({behavior: "smooth", block: "start", inline: "start"}
            )})
        })} else{
        document.querySelectorAll('.link-proc-work-footer').forEach((el) => {
            el.setAttribute('href','/#process-work')
        })
    };
    if (document.querySelector('#objects-accept')){
        document.querySelectorAll('.link-obj-work-footer').forEach((el) => {
            el.addEventListener('click', function (){ document.querySelector('#objects-accept').scrollIntoView({behavior: "smooth", block: "start", inline: "start"}
            )})
        })} else{
        document.querySelectorAll('.link-obj-work-footer').forEach((el) => {
            el.setAttribute('href','/#objects-accept')
        })
    };
    if (document.querySelector('#dealers-work')){
        document.querySelectorAll('.link-dealers-work-footer').forEach((el) => {
            el.addEventListener('click', function (){ document.querySelector('#dealers-work').scrollIntoView({behavior: "smooth", block: "start", inline: "start"}
            )})
        })} else{
        document.querySelectorAll('.link-dealers-work-footer').forEach((el) => {
            el.setAttribute('href','/#dealers-work')
        })
    };

    document.querySelectorAll('.toMainPage .menu-elem a').forEach((el) => {
        el.addEventListener('click', function (){
            window.location.href="/";
        })
    })
});

const visuality = localStorage.getItem('visuality') || 'version-row'
localStorage.setItem('visuality', visuality)


const theme = localStorage.getItem('theme-window') || 'dark-theme'
localStorage.setItem('theme-window', theme)

document.querySelector('html').setAttribute('theme', localStorage.getItem('theme-window'))


