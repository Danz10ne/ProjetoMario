const fecharModal = document.querySelector('.fecharmodal');

const botao = document.querySelector('.botao-trailer');

const modal = document.querySelector('.modal');

const video = document.getElementById('video');

const linkVideo = video.src;

function alterModal (){
    modal.classList.toggle("aberto")
}

console.log(document.querySelector('.botao-trailer'));

botao.addEventListener("click", () => {
    alterModal();
    video.setAttribute("src", linkVideo)
});

fecharModal.addEventListener("click", () => {
    alterModal();
    video.setAttribute("src", "")
});

