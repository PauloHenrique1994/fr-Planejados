var botao = document.querySelector("#enviar");

botao.addEventListener("click", function(event) {
    event.preventDefault();

    var form = document.querySelector("#form_contato");

    var ul = document.querySelector("#erros");

    var contato = {
        nome: form.nome.value,
        email: form.email.value,
        endereco: form.endereco.value,
        telefone: form.telefone.value,
        motivo: form.motivo.selectedIndex,
        mensagem: form.mensagem.value
    }
        
    var erros = [];

    if (contato.nome.length == 0)
    {
        erros.push("O campo nome não pode ser vázio");
    }
    
    if (contato.email.length < 13)
    {
        erros.push("Informe um e-mail valido");
    }

    if (contato.endereco.length == 0)
    {
        erros.push("O campo endereço não poder se vázio");
    }
    
    if (contato.telefone.length < 11 || contato.telefone.length > 12)
    {
        erros.push("Informe um telefone valido");
    }

    if (contato.motivo == 0)
    {
        erros.push("Informe o motivo do contato");
    }

    if (contato.mensagem.length == 0)
    {
        erros.push("O campo mensagem não poder ser vázio");
    }

    if (erros.length > 0)
    {
        ul.innerHTML = "";
    
        erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    })
        return;
    }
    else
    {
        ul.remove();
    }
    
    form.reset();
    form.submit();
})