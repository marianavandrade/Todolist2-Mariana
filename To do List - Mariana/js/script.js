function criaTarefa() {
    let nomeTarefa = document.getElementById('inputNovaTarefa').value;
    let li = document.createElement('li');

    let btnCheck = document.createElement('button');
    btnCheck.classList.add('btnCheck');

    let span = document.createElement('span');
    span.classList.add('textoTarefa');
    span.innerHTML = nomeTarefa;
    
    let btnExcluir  = document.createElement('button');
    btnExcluir.classList.add('btnAcao');

    li.appendChild(btnCheck);
    li.appendChild(span);
    li.appendChild(btnExcluir);

    document.getElementById('listaTarefas').appendChild(li);
    document.getElementById('inputNovaTarefa').value = "";

    btnExcluir.addEventListener('click', function () {
        li.remove()
    })

    btnCheck.addEventListener('click', function () {
        if (btnCheck.classList.length == 2) {
            btnCheck.classList.remove('btnChecked');
            span.style.textDecoration = 'none';
            span.style.color = '#ffffff'
        } else {
            btnCheck.classList.add('btnChecked');
            span.style.textDecoration = 'line-through';
            span.style.color = '#ffffffad'
        }
    })
}