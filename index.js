function renderPeople(){
    var personIcon = document.getElementById('personIcon').innerHTML
    console.log('doing this')
    var iconInfo = Array.from({length: 100}, () => Math.floor(Math.random() * 2));


    for (i = 0; i < iconInfo.length; i++){
        console.log(iconInfo[i])
        console.log(personIcon)
      

        document.getElementById('populationBlock').innerHTML += personIcon
        
    }

    
}



function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  
ready(function() {
    document.getElementById('submit-button').addEventListener('click',renderPeople)
})