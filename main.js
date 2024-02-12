const form = document.getElementById('registros');

let contatos   = '';
let lstNumeros = [];

function adicionaContato(){
    const nome = document.getElementById('nome');
    const telefone = document.getElementById('telefone');

    if (lstNumeros.includes(telefone.value)){
        alert(`O telefone ${telefone.value} já consta na agenda.`)
    } else {
        lstNumeros.push(telefone.value);

        let contato = `<tr>`;
        contato += `<td>${nome.value}</td>`;
        contato += `<td>${telefone.value}</td>`;
        contato += `</tr>`;

        contatos += contato;
    }

    nome.value = null;
    telefone.value = null;
};

function atualizaContatos(){
    return document.querySelector('.tabela-registros').innerHTML = contatos;
};

form.addEventListener('submit', function(e){
    e.preventDefault();
    adicionaContato();
    atualizaContatos();
});
