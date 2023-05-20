//botão tema
function tema1(){
    document.body.style.backgroundColor = "#c6c6c6";
}

function tema2(){
    document.body.style.backgroundColor = "#505050";
}

//calculo energia
function calcularConsumo() {
    var watts = parseFloat(document.getElementById("watts").value);
    var horas = parseFloat(document.getElementById("horas").value);
    var dias = parseFloat(document.getElementById("dias").value);
    var preco = parseFloat(document.getElementById("preco").value);

    var kwh = watts * horas * dias / 1000;
    var custo = kwh * preco;

    alert('Você vai gastar R$' + custo + ' por mês.')
}

var imagens=[
    'images/image3.jpg',
    'images/image2.jpg',
    'images/image1.jpg',
    'images/image4.jpg',
    'images/image5.jpg',
];

/*declarando variaveis */
var Index = 0;
var time = 2500;

/* criando uma função */

function slideShow(){
    document.getElementById('image').src =imagens[Index]; /* pega  id e o caminho da imagem*/
    Index++;/* incrementa */
    if (Index == imagens.length){Index =0;} /* verifica se tem imagens e conta */
    setTimeout("slideShow()",time);/* definindo o tempo de 2 milesegundos*/
}

slideShow();


function Formulario(){
    var nome = document.getElementById('nome_form').value;
    var Email = document.getElementById('email_form').value;
    var Telefone = document.getElementById('fone_form').value;
    var opiniao = document.getElementById('op_form').value;
    if (nome == "" || Email == "" || Telefone == "" || opiniao == ""){
        alert("Preencha todos os campos, por favor!");
    } else {
        alert("Formulário preenchido com sucesso!");
    }
}