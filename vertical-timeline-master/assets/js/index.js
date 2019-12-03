var current_data;

function renderCustom(which_data){
  var personIconBefore = document.getElementById('personIconBefore').innerHTML;
  var personIconAfter = document.getElementById('personIconAfter').innerHTML;

  document.getElementById('populationBlock').innerHTML = "";
  for (i = 0; i < 100; i++){
    if(current_data[i] == 0){
      document.getElementById('populationBlock').innerHTML += personIconBefore
    }
    else{
      document.getElementById('populationBlock').innerHTML += personIconAfter
    }
  }
}



// TODO: Update people through scroll
// 0: Green (Employed)
function findData(which_data){
  console.log('findData');
  var d_set = {
    'cs1' : new Array(100), 
    'cs2' : new Array(100),
    'cs3' : new Array(100),
    'cs4' : new Array(100), 
    'cs5' : new Array(100),
    'cs6' : new Array(100)

  }
    d_set['cs1'].fill(0,0,96)
    
    d_set['cs2'].fill(0,0,65)
    
    d_set['cs3'].fill(0,0,47)

    d_set['cs4'].fill(0,0,8)

    d_set['cs5'].fill(0,0,2)

    d_set['cs6'].fill(0,0,0)

  return d_set[which_data]
}


// TODO: Update Text through scroll
function findText(which_data){
  console.log('findText');
  var d_set = {
    'event1' : 'Natural Unemployment Rate', 
    'event2' : 'One driver can operating multiple trucks trailing behind. <br>Result: 75% of the 3.5 million truck drivers without work.', 
    'event3' : 'Trucking companies are the first to incorporate level 5 autonomous driving. Truck drivers are completely out of work.', 
    'event4' : '370,000 personal drivers are out of work. Only a few premium chauffeur services remain.', 
    'event5' : 'Fully autonomous vehicles penetrate consumer market. Fewer people choose to own personal vehicles.', 
    'event6' : 'Data shows higher risk of accident with humans behind the wheel. Certain states take actions to ban driving.', 
  }

  return d_set[which_data]
}