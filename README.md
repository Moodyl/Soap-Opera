SUPSI 2022-23  
Corso d’interaction design, CV427.01  
Docenti: A. Gysin, G. Profeta  

Elaborato 2: Antologia a due mani

# Soap Opera
Autore: Lauro Gianella  
[Soap Opera](https://moodyl.github.io/Soap-Opera/)

Il progetto consiste in un sito "antologico" riguardo alle mani e la loro relazione con la saponetta e l'atto di lavare le mani. Questa pagina espone la storia, il funzionamento, il movimento e l'iconografia della saponetta.


## Riferimenti progettuali
La saponetta è uno strumento nato con lo sviluppo delle prime civiltà ed ha uno stretto legame interattivo con le nostre mani. Lo stile prende spunto tipograficamente dalle pubblicità da donna casalinga del fine 1800 inizio 1900, dove l'igiene era molto più pensata come dimostrazione di superiorità rispetto agli altri (come esempio appaiono i primi elettrodomestici).

Come copywriting, lo spunto proviene dall'opera ed il teatro in generale, dove la performance viene divisa in atti. In combinazione con nomi come "Messy Charisma" e "Tactile Dance" insinua un po' il dramma e la solennità del teatro, pur rimanendo nel tema della saponetta.


## Design dell’interfaccia e modalità di interazione
L'interfaccia si presenta come 4 sezioni che raccontano ognuno un lato differente del sapone. L'interazione è limitata al cambiare sezione.
Il progetto completo come visualizzato comprende la saponetta che segue il mouse e le immagini del sito che devono essere pulite.
<img width="500" alt="Screenshot 2023-06-15 alle 18 27 24" src="https://github.com/Moodyl/Soap-Opera/assets/101795037/76eaff4a-bb11-4794-b938-3b051ce6ea60">
<img width="500" alt="Screenshot 2023-06-15 alle 18 27 34 2" src="https://github.com/Moodyl/Soap-Opera/assets/101795037/bf3033c5-fa2e-4e90-87f8-1a9497628893">
<img width="500" alt="Screenshot 2023-06-15 alle 18 32 00" src="https://github.com/Moodyl/Soap-Opera/assets/101795037/aa82da95-af72-429c-b163-2631faf8c0a7">
<img width="500" alt="Screenshot 2023-06-15 alle 18 27 38" src="https://github.com/Moodyl/Soap-Opera/assets/101795037/9db44820-343a-417b-bc40-390c0a2e251b">
<img width="500" alt="Screenshot 2023-06-15 alle 18 32 19" src="https://github.com/Moodyl/Soap-Opera/assets/101795037/081f33ff-25d9-48d6-99ec-3d9dfcda563d">
<img width="500" alt="Screenshot 2023-06-15 alle 18 27 42" src="https://github.com/Moodyl/Soap-Opera/assets/101795037/267edb23-bd07-45f9-9a30-9532a4db02e9">
<img width="500" alt="Screenshot 2023-06-15 alle 18 32 38" src="https://github.com/Moodyl/Soap-Opera/assets/101795037/3f1ebaf3-fdbb-4852-9a0f-39a8052e1b23">


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
Le pagine individuali hanno una struttura composta principalmente da griglie.
```css
div.column-grid {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    column-gap: 20px;
    padding: 100px 50px;
    position: relative;
    grid-auto-flow: auto;
}

div.column-row-grid {
    display: grid;
    grid-template: 1fr 1fr / repeat(8, 1fr);
    column-gap: 20px;
    padding: 100px 50px;
    position: relative;
    grid-auto-flow: auto;
}
```
Questo codice tiene conto della posizione degli iframe e cambia la visibilità dei link a dipendenza del iframe nel quale si è.

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
Essendo un prodotto dal carattere informativo, il target è piuttosto ampio ed il contesto d’uso si situa nella ricerca e scoperta individuale.
