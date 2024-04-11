let search_result = document.getElementsByTagName('search_result')[0];

songs.forEach(element => {
    const{id, songName, coverPath} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;
    card.innerHTML = `
    <img src="${coverPath}" alt="">
    <div class="content">
        ${songName}
    <div class="subtitle">Neffex</div>
    `;
    search_result.appendChild(card);
});

let input =  document.getElementsByTagName('input')[0];

input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');

    for(let i = 0; i < items.length; i++){
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerHTML;

        if(text_value.toUpperCase().indexOf(input_value) > -1){
            items[i].style.display = 'flex';
        }
        else{
            items[i].style.display = 'none';
        }

        if(input_value == 0){
            search_result.style.display = 'none';
        }
        else{
            search_result.style.display = '';
        }
    }
});