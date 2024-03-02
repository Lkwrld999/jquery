$(document).ready(function(){
            
    function adicionarTarefa() {
        var tarefa = $('#tarefa').val();
        if (tarefa !== "") {
            $('#lista-tarefas').append('<li>' + tarefa + '</li>');
            $('#tarefa').val("");
        }
    }

    function aplicarEstilo() {
        $(this).toggleClass('concluida');
    }

    $('#cadastrar').on('click', adicionarTarefa);

    $(document).on('click', '#lista-tarefas li', aplicarEstilo);
});