// login e cadastro
var nomeLogin = "klebinho";
var senhaLogin = "teste123";
var nomeUser = "Kleber Tester";
var emailUser = "klebinho123@hotmail.com";
var endeUser = "rua klebinho,123";
var userLogin = nomeLogin;
var sexoUser = "Homem";


function loadP() {
//é carregado em algumas paginas para esconder o alerta
    document.getElementById("btnComprar").style.display = 'none';
}
function loadL() {
    //é carregado em algumas paginas para esconder o alerta
    document.getElementById("alertaLogin").style.display = 'none';
}

function verificarL() {

    //validação dos campos de login
    if (document.getElementById('loginreg').value == nomeLogin && document.getElementById('passreg').value == senhaLogin) {
        window.location.href = "dash.html";
    } else if (document.getElementById('loginreg').value != nomeLogin) {
        document.getElementById('loginreg').focus();
        document.getElementById("alertaLogin").style.display = 'block';
        document.getElementById('errou').innerHTML = "Login ou senha incorretos!"
    } else if (document.getElementById('passreg').value != senhaLogin) {
        document.getElementById('passreg').focus();
        document.getElementById('errou').innerHTML = "Login ou senha incorretos!"
    } else {
        document.getElementById('loginreg').focus();
    }
}


function verificarR(button) {

    //validação dos campos de registro
    if (document.getElementById('textinput1').value == "" || document.getElementById('textinput1').value == null) {
        document.getElementById('textinput1').focus();
    } else if (document.getElementById('textinput2').value == "" || document.getElementById('textinput2').value == null) {
        document.getElementById('textinput2').focus();
    } else if (document.getElementById('textinput3').value == "" || document.getElementById('textinput3').value == null) {
        document.getElementById('textinput3').focus();
    } else if (document.getElementById('textinput4').value == "" || document.getElementById('textinput4').value == null) {
        document.getElementById('textinput4').focus();
    } else if (document.getElementById('passwordinput1').value == "" || document.getElementById('passwordinput1').value == null) {
        document.getElementById('passwordinput1').focus();
    } else if (document.getElementById('passwordinput2').value == "" || document.getElementById('passwordinput2').value == null) {
        document.getElementById('passwordinput2').focus();
    } else if (document.getElementById('selectbasic').value == "escolha" || document.getElementById('selectbasic').value == null) {
        document.getElementById('selectbasic').focus();
    } else if (document.getElementById('concordo').checked == false) {
        document.getElementById('concordo').focus();
        alert("É preciso concordar com os termos da Game Gear!");
    } else {
        if (document.getElementById('passwordinput1').value != document.getElementById('passwordinput2').value) {
            document.getElementById('passwordinput2').focus();
        } else {

            nomeUser = document.getElementById('textinput1').value;
            emailUser = document.getElementById('textinput2').value;
            endeUser = document.getElementById('textinput3').value;
            userLogin = document.getElementById('textinput4').value;
            sexoUser = document.getElementById('passwordinput2').value;
            nomeLogin = document.getElementById('textinput4').value;
            senhaLogin = document.getElementById('passwordinput1').value;
            button.setAttribute('data-dismiss', "modal");

        }

    }

}



function cadastrado(button) {

    //faz o login da pagina "PC1.html", usuario e senha determinados abaixo
    if (document.getElementById('loginreg').value == nomeLogin && document.getElementById('passreg').value == senhaLogin) {

        document.getElementById("btnComprar").style.display = 'block';
        document.getElementById("btnlogin").style.display = 'none';
        button.setAttribute('data-dismiss', "modal");
    } else {
        alert("Login ou senha incorretos");

    }
}

function dash() {
    //carrega os campos da dash com o valor das variaveis do codigo
    //Menu
    document.getElementById('loginbutton').value = nomeUser;
    //Cabeçalho
    document.getElementById('loginWellcome').innerHTML = "Bem vindo: " + nomeUser;
    //Cadastro
    document.getElementById('nomeCompleto').value = nomeUser;
    document.getElementById('email').value = emailUser;
    document.getElementById('endereco').value = endeUser;
    document.getElementById('nomeUser').value = userLogin;
    document.getElementById('sexo').value = sexoUser;


    document.getElementById('getnomeCompleto').value = nomeUser;
    document.getElementById('getemail').value = emailUser;
    document.getElementById('getendereco').value = endeUser;
    document.getElementById('getnomeUser').value = userLogin;
    document.getElementById('getsexo').value = sexoUser;


}

function atualizaDados(button) {
    //Atualiza os dados do campo Dados Cadastrais
    nomeUser = document.getElementById('getnomeCompleto').value;
    emailUser = document.getElementById('getemail').value;
    endeUser = document.getElementById('getendereco').value;
    userLogin = document.getElementById('getnomeUser').value;
    sexoUser = document.getElementById('getsexo').value;
    button.setAttribute('data-dismiss', "modal");

    alert(nomeUser + " Seus dados foram atualizados!");
    dash();

}

function verificaSenha(button) {

//modal primario para senha, verifica a senha que esta no sitema
    if (document.getElementById('AcessoModal').value == senhaLogin) {
        $('#modalNovaSenha').modal('show')
        button.setAttribute('data-dismiss', "modal");

    } else {

        alert("Senha incorreta");
    }


}

function alteraSenha(button) {

    //Verifica se os campos não estão vazios caso não verifica se os dois campos de senha e resenha são iguais
    if (document.getElementById('novaSenha').value != "" && document.getElementById('reNovaSenha').value != "") {

        if (document.getElementById('novaSenha').value == document.getElementById('reNovaSenha').value) {
            alert("Sua senha foi atualizada!");
            senhaLogin = document.getElementById('novaSenha').value;
            button.setAttribute('data-dismiss', "modal");
        } else {
            alert("as senhas não conferem");

        }


    } else {

        alert("Sertifique-se de que não existem campos vazios");

    }

    document.getElementById('novaSenha').value = "";
    document.getElementById('reNovaSenha').value = "";
}

function pushData() {
    // Pega os dados do campo Dados do cartão e joga para o modal.
    document.getElementById('getselectbasic').value = document.getElementById('selectbasic').value;
    document.getElementById('gettextinput').value = document.getElementById('textinput').value;
    document.getElementById('getnamecard').value = document.getElementById('namecard').value;
    document.getElementById('getval').value = document.getElementById('val').value;


}

function addCard(button) {

//pega os dados do modal e transfere para o campo Dados do cartão.
    if (document.getElementById('getselectbasic').value != 0 &&
        document.getElementById('gettextinput').value != "" &&
        document.getElementById('getnamecard').value != "" &&
        document.getElementById('getval').value != "") {
        document.getElementById('selectbasic').value = document.getElementById('getselectbasic').value;
        document.getElementById('textinput').value = document.getElementById('gettextinput').value;
        document.getElementById('namecard').value = document.getElementById('getnamecard').value;
        document.getElementById('val').value = document.getElementById('getval').value;
        alert("Dads do cartão alterados");
        button.setAttribute('data-dismiss', "modal");
    } else {
        alert("Certifique-se de que não tem nem um campo vazio");
    }

}


function confirmarCompra(button) {
	

    if (document.getElementById('selectbasic').value == "0" || document.getElementById('selectbasic').value == null) {
        document.getElementById('selectbasic').focus();
    } else if (document.getElementById('textinput').value == "" || document.getElementById('textinput').value == null) {
        document.getElementById('textinput').focus();
    } else if (document.getElementById('namecard').value == "" || document.getElementById('namecard').value == null) {
        document.getElementById('namecard').focus();
    } else if (document.getElementById('val').value == "" || document.getElementById('val').value == null) {
        document.getElementById('val').focus();
    } else if (document.getElementById('secode').value == "" || document.getElementById('secode').value == null) {
        document.getElementById('secode').focus();
    } else if (document.getElementById('concordoC').checked == false) {
        document.getElementById('concordoC').focus();
    } else {
		var codigoCompra = Math.floor(Math.random() * 800000) + 100000;
		alert("Compra realizada com sucesso " + "\n" + document.getElementById('priceTag').innerHTML + "\n" +
            "Protocolo: GG17-" + codigoCompra);			
        button.setAttribute('data-dismiss', "modal");
       


    }
}