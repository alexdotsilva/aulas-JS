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
    const errorElement = document.getElementById(`erro${campo.id.charAt(0).toUpperCase()+ campo.id.slice(1)}`);

    if(valorCampo.trim()=== ''){
        errorElement.innerHTML = `<p>Campo Inválido</p>`;
    }

 else if(campo.id === "nome" && valorCampo.lenght < 3){
        errorElement.innerHTML = `<p>Campo Inválido</p>`;
 }
 else if(campo.id === "sobrenome" && valorCampo.lenght < 3){
    errorElement.innerHTML = `<p>Campo Inválido</p>`;
 }
 else {errorElement.innerHTML=``
};
}