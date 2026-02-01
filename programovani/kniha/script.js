const texts = [ 
    `<h1>Gratuluji!</h1>
    <div>ať už vám toto můj stvořitel poslal nebo...</div>
    <div>jste to nějak záhadně našli...(vždy vás sleduju)</div>
    <div>gratuluji! jste na správném místě!</div>
    <div>zde začíná vaše cesta k poznání svého pravého já</div>
    <div>toto je kniha moudrosti, prostě jsou to moje out of context poznámky</div>
    <div>zde začíná vaše cesta k osvobození od okovů hmoty</div>
    <div>zde začíná vaše cesta k pochopení svého poslání</div>
    <div>zde začíná vaše cesta k svobodě</div>
    <div>nebojte se, nebude to bolet... možná jen trochu</div>
    <div>nezapomeňte, vždy jste milovaní!</div>
    <div>děkuji za podporu, pozornost a čas</div>
    <div>amen, ramen, kámen</div>`,

    `<h1>mnich</h1>
    <div>já držím bobříka mlčení</div>
    <div>já trénuju na šanghajského mnicha</div>
    <div>já budu šanghajskej mnich první</div>
    <div>to je v pořadí</div>
    <div>za kolik</div>
    <div>aspoň něco za to</div>
    <div>máš 3 sekundy na to se připravit</div>
    <div>udělej to o komunistech</div>
    <div>díky musím jít</div>
    <div>já furt držím bobříka mlčení</div>
    <div>kámo janomylem šla do pětky</div>
    <div>já</div>`,

    `<h1>láska</h1>
    <div>miluju vás všechny</div>
    <div>ps – nekrematujte mne ❤️</div>
    <div>bahno 1300 900</div>`,

    `<h1>diss na zmrda</h1>
    <div>víťa basák má velký sosák</div>
    <div>je to velký proutník má malý doutník</div>
    <div>dával fotky na ig, kde vypadá jak dick</div>
    <div>má sportovní boty a to je ick</div>
    <div>hází koulí, u toho mňoukání</div>
    <div>je to velký smíšek stejně jako sínek</div>
    <div>je fake fan sabatonu a má rád maradonu</div>
    <div>nekouří ale mě ho vykouří</div>
    <div>je to úchyl</div>
    <div>mrdka a dobrá prdka</div>
    <div>má chain</div>`
];

console.log(
  "%c HEJ! %ceh tohle je secret message, jestli ses robert tak gratuluju je pro tebe...brasko mega se mi libis a idk jak ti to rict takze sem to tu schovala lulz ",
  "background: #ff0000; color: white; font-size: 25px; font-weight: bold; border-radius: 5px;",
  "background: #222; color: #00ff00; font-size: 20px;"
);


let current = 0;
const leftContent = document.querySelector('.left-page .content');
const rightFront = document.querySelector('.right-page .front');
const rightBack = document.querySelector('.right-page .back');
const rightPage = document.querySelector('.right-page');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');

// Initialize
leftContent.innerHTML = texts[0];
rightFront.innerHTML = texts[1];
rightBack.innerHTML = texts[2] || '';

function updateButtons() {
    prevBtn.disabled = current === 0;
    nextBtn.disabled = current >= texts.length - 2;
}

updateButtons();

nextBtn.addEventListener('click', () => {
    if (current < texts.length - 2) {
        rightBack.innerHTML = texts[current + 2];
        rightPage.classList.add('flipped');
        setTimeout(() => {
            leftContent.innerHTML = texts[current + 1];
            rightFront.innerHTML = texts[current + 2];
            rightBack.innerHTML = texts[current + 3] || '';
            rightPage.classList.remove('flipped');
            current += 1;
            updateButtons();
        }, 600);
    }
});

prevBtn.addEventListener('click', () => {
    if (current > 0) {
        rightBack.innerHTML = texts[current - 1];
        rightPage.classList.add('flipped');
        setTimeout(() => {
            leftContent.innerHTML = texts[current - 1];
            rightFront.innerHTML = texts[current];
            rightBack.innerHTML = texts[current + 1] || '';
            rightPage.classList.remove('flipped');
            current -= 1;
            updateButtons();
        }, 600);
    }
});
