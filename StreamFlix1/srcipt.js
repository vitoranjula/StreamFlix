function hl(seletor, classe, duracao = 2500, atraso = 0) {
    const lista = typeof seletor === 'string'
        ? Array.from(document.querySelectorAll(seletor))
        : [seletor];
    lista.forEach((el, i) => {
        if (!el) return;
        setTimeout(() => {
            el.classList.add(classe);
            setTimeout(() => el.classList.remove(classe), duracao);
        }, atraso + i * 200);
    });
}


function selecionarPorId() {
    const elemento = document.getElementById("titulo-filme");
    console.log(elemento);
    console.log(elemento.tagName);
    console.log(elemento.textContent);
    console.log(elemento.id);

    hl('#titulo-filme', 'elemento-selecionado');
    hl('#filme-principal', 'elemento-selecionado');

}

function selecionarPorClasse() { 


const elementos = document.getElementsByClassName("genero-acao");

console.log("Quantidade:", elementos.length);

for (let i = 0; i < elementos.length; i++) {
    console.log(i, elementos[i].textContent.trim());
}

    hl('.genero-acao',  'highlight-acao',  2500);
    hl('.genero-drama', 'highlight-acao', 2500);
}

function selecionarPorQuery () {
    const elementos = document.querySelector("filme-mini");
    console.log (elementos);
    hl (elementos, `elemento-selecionado`);
}


function selecionarTodos () {
    const elementos = document.querySelectorAll("filme-mini");

    console.log("Quantidade", elementos.length);

    elementos.forEach((el, indice) => {
        console.log(indice, el.textContent.trim());
    });

    elementos.forEach((el, i) => hl(el, 'elemento-selecionado', 2500, i * 300));
}



function mudarTexto() {
    const titulo = document.getElementById("titulo-destaque");
    titulo.textContent = "Vitor p Anjula";
    console.log("Novo Texto:", titulo.textContent);

    titulo.classList.add("texto-animado");
      setTimeout(() => titulo.classList.remove('texto-animado'), 1500);
    hl('#titulo-destaque', 'elemento-selecionado', 2000);
}


function adicionarBadge () {
    const badge = document.createElement("span");

    badge.className = "badge";

    badge.textContent = "⭐ Em Alta";

    const container = document.getElementById("badge-container");

container.innerHTML = ""

    container.appendChild(badge);

    console.log("badge criado", badge);
};

function mudarPoster () {
    const poster =document.getElementById('poster-destaque');

    const titulo = document.getElementById("titulo-destaque");

    const opcoes = [

        {
            url: 'https://image.tmdb.org/t/p/w500/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg',
            nome: 'The Last of Us'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/qZtAf4Z1lazGQoYVXiHOrvLr5lI.jpg',
            nome: 'Wednesday'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/ztkUQFLlC19CCMYHW9o1zWhJRNq.jpg',
            nome: 'Breaking Bad'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg',
            nome: 'Round 6'
        },

        {
            url: 'https://image.tmdb.org/t/p/w500/twfKp60THrcOIep9sjHODOOfO8d.jpg',
            nome: 'Stranger Things'
        },
    ];

    const sorteado = opcoes[Math.floor(Math.random() * opcoes.length)]; 
    poster.src = sorteado.url;
    poster.alt = sorteado.nome;
    titulo.textContent = sorteado.nome;
    console.log("Poster trocado para:", sorteado.nome);
    poster.style.opacity = "0";
poster.style.transition = "opacity 0.3s";
setTimeout(() => {
    
poster.style.opacity = "1";
}, 300);

poster.classList.add("poster-fade-in");

setTimeout(() => {
    
    poster.classList.remove("poster-fade-in"),
    600
}, 300);

}

function adicionarDestaque () {
    const card =document.getElementById("filme-destaque");
    card.classList.add("destaque");
    console.log("Classe atuais:", card.className);
    setTimeout(() => {
        card.classList.remove("destaque");
    }, 3000);
}


function lerInput () {
    const input = document.getElementById("input-busca");
    const texto = input.value.trim();
    if (texto  === "") {
        alert ("!Digite algo no campo primeiro!")
        return;
    }

     const titulo = document.getElementById("titulo-destaque");

     titulo.textContent = texto;
     console.log("Valor lido", texto);

     console.log("Caracteres:", texto.length);

     titulo.classList.add("texto-animado");setTimeout(() => titulo.classList.remove("titulo-animado"), 1500);
         hl(
        '#input-busca',          // elemento
        'elemento-selecionado', // classe CSS
        1500                    // duração
    );

    
}



