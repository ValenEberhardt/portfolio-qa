function showTab(tabId){
    //Esconder todas las secciones
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(contents => contents.classList.remove('active'));

    //Mostar la seccion eleccionada
    const target = document.getElementById(tabId);
    target.classList.add('active');
}

function toggleBug(bugId){
    const bugRow = document.getElementById(bugId);
    if (bugRow.style.display === "none") {
        bugRow.style.display = "table-row";
    } else {
        bugRow.style.display = "none";
    }
}


function focusProject(card){
    //primero verifica si la tarjeta está o no expandida
    const isExpanded = card.classList.contains('expanded');

    //despues cierra las demas
    const allCards = document.querySelectorAll('.project-card'); 
    allCards.forEach(c => c.classList.remove('expanded'))

    //SI no estaba expandida, expandirla

    if (!isExpanded) {
        card.classList.add('expanded');

        card.scrollIntoView({ behavior: 'smooth', block: 'center' })
    }
}