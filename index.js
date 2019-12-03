function renderPeople(which_data){
    var personIconBefore = document.getElementById('personIconBefore').innerHTML
    var personIconAfter = document.getElementById('personIconAfter').innerHTML

    document.getElementById('populationBlock').innerHTML = ""

    console.log('doing this')

    var current_data
    current_data = findData(which_data)

  
   /*
    for (i = 1; i < 100; ++i) {
      setDelay(i);
    }
    
    function setDelay(i) {
      setTimeout(function(){
        document.getElementById('populationBlock').innerHTML += personIconAfter
      }, 50);
    }*/

    for (i = 0; i < 100; i++){
      console.log('going thru l00p')
      if(current_data[i] == 0){
        document.getElementById('populationBlock').innerHTML += personIconBefore
      }
      else{
        document.getElementById('populationBlock').innerHTML += personIconAfter
      }

    }
    
}



function findData(which_data){
  var d_set = {
    'cs1' : new Array(100), 
    'cs2' : new Array(100),
    'cs3' : new Array(100)
  
  }
  
    d_set['cs1'].fill(0,0,99)
    
    d_set['cs2'].fill(0,0,48)
    d_set['cs2'].fill(1,49,99)
    
    d_set['cs3'].fill(0,0,60)
    d_set['cs3'].fill(1,61,99)
  

  return d_set[which_data]
  
}


function ready(fn) {
    if (document.readyState != 'loading'){
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }
  
ready(function() {
   // document.getElementById('submit-button').addEventListener('click',renderPeople('cs1'))
    
})