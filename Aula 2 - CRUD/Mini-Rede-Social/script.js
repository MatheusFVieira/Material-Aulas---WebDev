// Dados de exemplo dos posts
let posts = [
    {
        text: "Este é o primeiro post",
        category: "Notícias",
        image: "https://placedog.net/150?random=1",
        date: "12/10/2021 12:00:00"
    },
    {
        text: "Este é o segundo post",
        category: "Dicas",
        image: "https://placedog.net/150?random=2",
        date: "12/10/2022 12:00:00"
    },
    {
        text: "Este é o terceiro post teste",
        category: "Eventos",
        image: "https://placedog.net/150?random=3",
        date: "12/10/2023 12:00:00"
    }
];

window.onload = function(){
    carregarPosts();
    mostrarPost();

    document.querySelector("#postForm").addEventListener("submit", addPost)
    document.querySelector('#postList').addEventListener('click', handleClick);
};

function handleClick(infosDoEvento){
    const action = infosDoEvento.target.dataset.action;
    const index = infosDoEvento.target.dataset.index;

    if(action === "Editar"){
        editarPost(index);
    } else if(action === "Apagar"){
        apagarPost(index);
    }
}

// CREAT

 function addPost(infosDoEvento){
    infosDoEvento.preventDefault();

    const textoPost = document.querySelector("#postText").value;
    const categoriaPost = document.querySelector("#postCategory").value;
    const imagemPost = document.querySelector("#postImage").value;

    const novoPost = {
        text: textoPost,
        category: categoriaPost,
        image: imagemPost,
        date: new Date().toLocaleString()
    }

    posts.unshift(novoPost)


    document.querySelector("#postForm").reset();
    salvarPosts();
    mostrarPost();
 }

//READ

function mostrarPost(){
    //Pegando o elemento onde os Tweets serão inseridos
    const listaPosts = document.querySelector("#postList");
    listaPosts.innerHTML = ""
    //Passando pelo array criando um tweet para cada post
    posts.forEach((pegaItem, index) => {
        const cardPost = document.createElement("div")
        cardPost.classList.add("card")

        cardPost.innerHTML = `
            <h4>${pegaItem.text}</h4>
            <img src="${pegaItem.image}"/>
            <h5>Categoria: ${pegaItem.category}</h5>
            <h6>Data e hora:${pegaItem.date}}</h6>
            <button data-action="Editar" data-index="${index}"<i class="fa-solid fa-pen-to-square"></i> Editar</button>
            <button data-action="Apagar" data-index="${index}"><i class="fa-solid fa-eraser"></i> Apagar</button>
        `
        //Adicionando no HTML
        listaPosts.append(cardPost);
    })
}

//UPDATE

function editarPost(index){
    const novoTexto = prompt('Edite o conteúdo do post', posts[index].text);
    posts[index].text = novoTexto;

    salvarPosts();
    mostrarPost();
}

//DELETE
function apagarPost(index){
    const confirmar = confirm("Você deseja realmente excluir?");

    if(confirmar){
        posts.splice(index, 1);
    }
    
    salvarPosts();
    mostrarPost()
}

// Local e Section Storage

function salvarPosts(){
    localStorage.setItem("posts", JSON.stringify(posts));
}

function carregarPosts(){
    const postsGuardados = localStorage.getItem("posts")

    if(postsGuardados){
        posts = JSON.parse(postsGuardados);
    }
}