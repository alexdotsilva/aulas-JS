document.addEventListener("DOMContentLoaded", function(){
    const camposForm = document.querySelectorAll("[required]")
    camposForm.forEach((campo) => {
        campo.addEventListener("blur", () => {
            validarCampo(campo);
        });
    });
});

function validarCampo(campo){
    const valorCampo = campo.value;
    const erroElement = document.getElementById(`erro${
        campo.id.charAt(0).toUpperCase()+ campo.id.slice(1)
    }`);
    if(valorCampo.trim()===' '){
        erroElement.innerHTML = `<p>tá esquecendo nada não?</p>`;
    }
    else if(campo.id === "nome" && valorCampo.lenght < 3){
        erroElement.innerHTML = `<p>precisa ser maior!</p>`;
    }
    else if(campo.id === "sobrenome" && valorCampo.lenght < 3){
        erroElement.innerHTML = `<p>precisa ser maior!</p>`;
    }
    else {
        erroElement.innerHTML=``
    };
}