document.addEventListener("DOMContentLoaded",function(){
    const camposForm = document.querySelectorAll("[required]");
    camposForm.forEach((campo)=>{
        campo.addEventListener("blur",()=>{
            validarCampo(campo);
        //console.log("passou aqui")
        });
    });
});

function validarCampo(campo){
    const valorCampo = campo.value;
    const erroElement = document.getElementById(`erro${
        campo.id.charAt(0).toUpperCase()+ campo.id.slice(1)}`);

    if(valorCampo.trim()=== " " ){
        erroElement.innerHTML = `<p>tá esquecendo nada não?</p>`;
    }
    else if(campo.id === "nome" && valorCampo.length < 3){
        erroElement.innerHTML = `<p>precisa ser maior!</p>`;
    }
    else if(campo.id === "sobrenome" && valorCampo.length < 3){
        erroElement.innerHTML = `<p>precisa ser maior!</p>`;
    }
    else if (campo.id === "cpf" && !validarCpf (valorCampo)){
        erroElement.innerHTML=`<p>Cpf está inválido.Favor corrigir!</p>`;
    }
    else if (campo.id === "email" && !validarEmail (valorCampo)){
        erroElement.innerHTML=`<p>Insira um endereço de e-mail válido.</p>`;
    }
    else {
        erroElement.innerHTML=``;
    }

    function validarCpf(cpf){
    return /\d{3}\.\d{3}\.\d{3}-\d{2}/.test(cpf);
}
function validarEmail(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
};

/* codigo copiado do zap... testar como implementar

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, "");
    if (cpf == "") return false;
    // Elimina CPFs invalidos conhecidos
    if (
      cpf.length != 11 ||
      cpf == "00000000000" ||
      cpf == "11111111111" ||
      cpf == "22222222222" ||
      cpf == "33333333333" ||
      cpf == "44444444444" ||
      cpf == "55555555555" ||
      cpf == "66666666666" ||
      cpf == "77777777777" ||
      cpf == "88888888888" ||
      cpf == "99999999999"
    )
      return false;
    // Valida 1o digito
    add = 0;
    for (i = 0; i < 9; i++) add += parseInt(cpf.charAt(i)) * (10 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(9))) return false;
    // Valida 2o digito
    add = 0;
    for (i = 0; i < 10; i++) add += parseInt(cpf.charAt(i)) * (11 - i);
    rev = 11 - (add % 11);
    if (rev == 10 || rev == 11) rev = 0;
    if (rev != parseInt(cpf.charAt(10))) return false;
    return true;
  }
  
  function validarEmail(email) {
      var re = /\S+@\S+\.\S+/;
      return re.test(email);
  }
  
  function validardData(dateString) {
      let date = new Date(dateString);
      return !isNaN(date.getTime());
    }

  */