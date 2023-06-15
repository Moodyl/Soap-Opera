# Documentazione - Soap Opera
Il progetto consiste in un sito "antologico" riguardo alle mani e la loro relazione con la saponetta e l'atto di lavare le mani. Questa pagina espone la storia, il funzionamento, il movimento e l'iconografia della saponetta.


## Riferimenti progettuali
La saponetta è uno strumento nato con lo sviluppo delle prime civiltà ed ha uno stretto legame interattivo con le nostre mani. Lo stile prende spunto tipograficamente dalle pubblicità da donna casalinga del 1900, dove 


## Design dell’interfaccia e modalità di interazione


## Tecnologia utilizzata
Il sito utilizza degli iframe disposti in orizzontale grazie al flexbox...

```html
<main>
        <iframe src="/home.html"></iframe>
        <iframe src="/act-1.html"></iframe>
        <iframe src="/act-2.html"></iframe>
        <iframe src="/act-3.html"></iframe>
</main>
```

... e dispone di elementi link che permettono di navigare i vari iframe individualmente.

Le pagine individuali hanno una struttura composta principalmente da griglie.

```html
<a href="https://ixd-supsi.github.io/2023/progetti/2_antologia_a_due_mani/" id="index">
        <svg width="70px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 551.7 245.9"
            style="enable-background:new 0 0 551.7 245.9;" xml:space="preserve" transform="scale(-1, 1)">
            <style type="text/css">
                .st0 {
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                }
            </style>
            <path class="st0" d="..."/>
        </svg><br>
        Index
    </a>
    
    <a id="previous" onclick="ChangeSlide('prev')">
        <svg width="70px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 551.7 245.9"
            style="enable-background:new 0 0 551.7 245.9;" xml:space="preserve" transform="scale(-1, 1)">
            <style type="text/css">
                .st0 {
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                }
            </style>
            <path class="st0" d="..."/>
        </svg><br>
        Previous Act
    </a>
    
    <a id="next" onclick="ChangeSlide('next')">
        <svg width="70px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 551.7 245.9"
            style="enable-background:new 0 0 551.7 245.9;" xml:space="preserve">
            <style type="text/css">
                .st0 {
                    fill-rule: evenodd;
                    clip-rule: evenodd;
                }
            </style>
            <path class="st0" d="..."/>
        </svg><br>
        Next Act
    </a>
```

Questo pezzo di codice tiene conto della posizione degli iframe e cambia la visibilità dei link a dipendenza del iframe nel quale si è.

```js
main.addEventListener('scroll', () => {
    const scrollPosition = main.scrollLeft;
    const slideWidth = main.offsetWidth;
    const currentIndex = Math.round(scrollPosition / slideWidth);
    switch (currentIndex) {
        default:
            prevButton.style.display = 'block'
            nextButton.style.display = 'block'
            break;

        case 0:
            prevButton.style.display = 'none'
            nextButton.style.display = 'block'

            buttons.forEach((button) => {
                button.style.fill = colorHome;
                button.style.color = colorHome;
            });

            break;

        case 1:
            prevButton.style.display = 'block'

            buttons.forEach((button) => {
                button.style.fill = colorAct1;
                button.style.color = colorAct1;
            });
            break;

        case 2:
            nextButton.style.display = 'block'

            buttons.forEach((button) => {
                button.style.fill = colorAct2;
                button.style.color = colorAct2;
            });
            break;

        case 3:
            nextButton.style.display = 'none'

            buttons.forEach((button) => {
                button.style.fill = colorAct3;
                button.style.color = colorAct3;
            });
            break;
    }

});
```

Questa funzione permette di cambiare iframe in modo da rimanere tra il numero minimo e massimo di iframe presenti.

```js
function ChangeSlide(direction) {
    window.event.preventDefault();

    if (direction === 'prev') {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        scrollToSlide(currentIndex);

    } else if (direction === 'next') {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        scrollToSlide(currentIndex);
    }

};
```

Questa funzione calcola lo spazio di scroll necessario per andare all'iframe successivo di modo da rimanere dentro il contenitore dato.

```js
function scrollToSlide(index) {
    const slideWidth = main.offsetWidth;
    main.scrollTo({
        left: index * slideWidth,
        behavior: 'smooth'
    })
};
```
## Target e contesto d’uso
Essendo un prodotto informativo, il target è piuttosto ampio (ma specialmente adatto ad un pubblico giovane) ed il contesto d’uso si situa nella ricerca e scoperta individuale.
