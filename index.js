function displaySession(id){
    var section = document.getElementById(id);

    if (section) {
        // Obtém todas as seções com classes específicas
        var sections = document.querySelectorAll('.home, .conhecimentos, .projetos, .framaworks'); // Adicione outras classes, se necessário

        // Oculta todas as seções
        sections.forEach(function (s) {
            s.style.display = 'none';
        });

        // Exibe a seção clicada
        section.style.display = 'block';
    } else {
        console.log("Elemento não encontrado com o ID:", id);
    }
}