var current_data;

function renderCustom(which_data){
  // console.log('renderCustom in index.js');
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

var top_set = {
  'A' : new Array(100), 
  'B' : new Array(100),
  'C' : new Array(100),
  'D' : new Array(100), 
  'E' : new Array(100),
  'F' : new Array(100),
  'G' : new Array(100),
  'H' : new Array(100),
  'I' : new Array(100),
  'J' : new Array(100)

};
top_set['A'].fill(0,0,100)
    
top_set['B'].fill(0,0,100)

top_set['C'].fill(0,0,100)

top_set['D'].fill(0,0,94)

top_set['E'].fill(0,0,83)

top_set['F'].fill(0,0,54)

top_set['G'].fill(0,0,37)

top_set['H'].fill(0,0,29)

top_set['I'].fill(0,0,22)

top_set['J'].fill(0,0,19)



function edit_top_data() {

  var given_year = document.querySelector('output').innerHTML;

  if (given_year == 2010) {
    return top_set.A;
  }
  else if(given_year == 2011) {
    return top_set.B;
  }
  else if(given_year == 2012) {
    return top_set.C;
  }
  else if(given_year == 2013) {
    return top_set.D;
  }
  else if(given_year == 2014) {
    return top_set.E;
  }
  else if(given_year == 2015) {
    return top_set.F;
  }
  else if(given_year == 2016) {
    return top_set.G;
  }
  else if(given_year == 2017) {
    return top_set.H;
  }
  else if(given_year == 2018) {
    return top_set.I;
  }
  else if(given_year == 2019) {
    return top_set.J;
  }



  // console.log(top_set.year_pair[given_year]);

  // return top_set[year_pair[given_year]];
}

function getNum() {

  var given_year = document.querySelector('output').innerHTML;

  if (given_year == 2010) {
    return 28;
  }
  else if(given_year == 2011) {
    return 29;
  }
  else if(given_year == 2012) {
    return 29;
  }
  else if(given_year == 2013) {
    return 33;
  }
  else if(given_year == 2014) {
    return 37;
  }
  else if(given_year == 2015) {
    return 50;
  }
  else if(given_year == 2016) {
    return 70;
  }
  else if(given_year == 2017) {
    return 84;
  }
  else if(given_year == 2018) {
    return 95;
  }
  else if(given_year == 2019) {
    return 100;
  }



  // console.log(top_set.year_pair[given_year]);

  // return top_set[year_pair[given_year]];
}



function initialRenderTop(){
  var personIconBefore_top = document.getElementById('personIconBefore_top').innerHTML;
  var personIconAfter_top = document.getElementById('personIconAfter_top').innerHTML;

  // console.log('hello');

  document.getElementById('populationBlock_top').innerHTML = "";
  for (i = 0; i < 28; i++){

    if(top_set.A[i] == 0){
      document.getElementById('populationBlock_top').innerHTML += personIconBefore_top
    }
    else{
      document.getElementById('populationBlock_top').innerHTML += personIconAfter_top
    }
  }
}


function renderTop(){
  var personIconBefore_top = document.getElementById('personIconBefore_top').innerHTML;
  var personIconAfter_top = document.getElementById('personIconAfter_top').innerHTML;
  // console.log('hi');
  // console.log(top_set.A);

  document.getElementById('populationBlock_top').innerHTML = "";

  var num_people = getNum();

  for (i = 0; i < num_people; i++){
    var pulled_data = edit_top_data();
    // pulled_data = top_set.A
    // console.log(pulled_data);

    if(pulled_data == undefined) {
      pulled_data = top_set.A;
    }

    if(pulled_data[i] == 0){
      document.getElementById('populationBlock_top').innerHTML += personIconBefore_top
    }
    else{
      document.getElementById('populationBlock_top').innerHTML += personIconAfter_top
    }
  }
}




// TODO: Update people through scroll
// 0: Green (Employed)
function findData(which_data){
  // console.log('findData');
  var d_set = {
    'cs1' : new Array(100), 
    'cs2' : new Array(100),
    'cs3' : new Array(100),
    'cs4' : new Array(100), 
    // 'cs5' : new Array(100),
    // 'cs6' : new Array(100)

  }
    d_set['cs1'].fill(0,0,100)
    
    d_set['cs2'].fill(0,0,98)
    
    d_set['cs3'].fill(0,0,95)

    d_set['cs4'].fill(0,0,65)

    // d_set['cs5'].fill(0,0,90)

    // d_set['cs6'].fill(0,0,65)

  return d_set[which_data]
}


// TODO: Update Text through scroll
function findText(which_data){
  // console.log('findText');
  var d_set = {
    'event1' : 'Natural Unemployment Rate', 
    'event2' : 'One driver can operating multiple trucks trailing behind. <br>Result: 75% of the 3.5 million truck drivers without work.', 
    'event3' : 'Trucking companies are the first to incorporate level 5 autonomous driving. Truck drivers are completely out of work.', 
    'event4' : '370,000 personal drivers are out of work. Only a few premium chauffeur services remain.', 
    // 'event5' : 'Fully autonomous vehicles penetrate consumer market. Fewer people choose to own personal vehicles.', 
    // 'event6' : 'Data shows higher risk of accident with humans behind the wheel. Certain states take actions to ban driving.', 
  }

  return d_set[which_data]
}

function findPrice(which_data){
  // console.log('findPrice');
  var d_set = {
    'event1' : '$650,000', 
    'event2' : '$900,000 <span style="font-size: 13px; color:green;"> (+$350,000)</span>', 
    'event3' : '$910,000 <span style="font-size: 13px; color:green;"> (+$10,000)</span>', 
    'event4' : '$136,000 <span style="font-size: 13px; color:red;"> (-$774,000)</span>', 
    // 'event5' : 'Fully autonomous vehicles penetrate consumer market. Fewer people choose to own personal vehicles.', 
    // 'event6' : 'Data shows higher risk of accident with humans behind the wheel. Certain states take actions to ban driving.', 
  }

  return d_set[which_data]
}

  function findYear(which_data){
    // console.log('findText');
    var d_set = {
      'event1' : ' (2011)', 
      'event2' : ' (2013)', 
      'event3' : ' (2014)', 
      'event4' : ' (2019)', 
      // 'event5' : 'Fully autonomous vehicles penetrate consumer market. Fewer people choose to own personal vehicles.', 
      // 'event6' : 'Data shows higher risk of accident with humans behind the wheel. Certain states take actions to ban driving.', 
    }

  return d_set[which_data]
}

