window.addEventListener(
    'contextmenu',
    function (e) {
        e.preventDefault();
    },
    false,
);

document.getElementById('discord').addEventListener('click', function () {
    window.open('https://discord.gg/tm5hmEd4VE', '_blank').focus();
});

document.getElementById('github').addEventListener('click', function () {
    window.open('https://github.com/face-hh', '_blank').focus();
});

document.getElementById('paypal').addEventListener('click', function () {
    window.open('https://paypal.me/FaceDev', '_blank').focus();
});

setTimeout(async () => {
    $('#preloader').fadeToggle();
    update();
}, 1500);

setInterval(update, 10000);

function update() {

    tippy('#discord', { delay: 100, theme: 'discord', content: 'My Discord server', });
    tippy('#github', { delay: 100, theme: 'github', content: 'My GitHub profile', });
    tippy('#paypal', { delay: 100, theme: 'paypal', content: 'My PayPal link for donations' });
    tippy('.logo', { delay: 100, placement: 'right', content: 'Damn you really like to hover everywhere!', });
    tippy('.name', { delay: 100, placement: 'left', content: 'AAAAAAAAA', });
    tippy('.xd', { delay: 100, placement: 'bottom', content: 'DM me if you\'re interested in hiring me!'})

    const life = new Date(Date.now()).getFullYear() - new Date(2007, 11, 29).getFullYear() - 1;
    document.getElementById('life').innerText = life;
}