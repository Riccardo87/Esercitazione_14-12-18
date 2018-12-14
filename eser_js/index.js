

// Costante che contiene Array con 3 Oggetti, Ognuno contiene un ID (num) e Nome (String) //

const newArray =
[
    {
        id: 1,
        name: 'Riccardo'
    },

    {
        id: 2,
        name: 'Lara'
    },
    {
        id: 3,
        name: 'Silvia'
    },
]

    console.log(newArray);

    /* Ciclo FOR che iteri elementi dell'array e che mi stampi ID e Name del singolo oggetto all'interno di tag HTML;
    Prima della Stampa converire ID  da Num a Stringa
    ID sarà contenuto da un Tag STAN e il Nome dal Tag P
    Successivamente aggiungere una classe al tag SPAN e tramite quest'ultimo dare un Colore  #FF0000 e uno stile BOLD */

    // Usare AppenChild


    let risp = ''

    for (let i=0; i < newArray.length; i++) {
        risp += newArray[i].id + newArray[i].name
        console.log(newArray[i]);
    }

    document.getElementById('stampArray').innerHTML = risp;