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

top_set['A'].fill(0,0,28)
    
top_set['B'].fill(0,0,29)

top_set['C'].fill(0,0,29)

top_set['D'].fill(0,0,31)

top_set['E'].fill(0,0,31)

top_set['F'].fill(0,0,27)

top_set['G'].fill(0,0,26)

top_set['H'].fill(0,0,24)

top_set['I'].fill(0,0,22)

top_set['J'].fill(0,0,20)



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

  // document.getElementById('BurgerKing').innerHTML = "BurgerKing";
  carCountRender();

}

function growthRate(year_val){
  



  
  
  
  var d_set = {
    '2010' : 'Slide bar to see change over time',
    '2011' : ' <span style="color: green;">+3.3%</span>', 
    '2012' : ' <span style="color: green;">+5.0%</span>', 
    '2013' : ' <span style="color: green;">+20.0%</span>', 
    '2014' : ' <span style="color: green;">+33.3%</span>', 
    '2015' : ' <span style="color: green;">+80.8%</span>', 
    '2016' : ' <span style="color: green;">+155.0%</span>', 
    '2017' : ' <span style="color: green;">+203.3%</span>', 
    '2018' : ' <span style="color: green;">+243.3%</span>', 
    '2019' : ' <span style="color: green; font-weight: 900;">+262.3%</span>', 
  };

  console.log(d_set[year_val]);

  document.getElementById('growthrate2').innerHTML = d_set[year_val]

  if (year_val == 2010) {
    document.getElementById('descriptionGrowth').innerHTML = '<span style="color: white;">blank</span>'
  }
  else {
    document.getElementById('descriptionGrowth').innerHTML = "Industry growth since 2010";
  }

}



function carCountRender() {

  var given_year = document.querySelector('output').innerHTML;

  if (given_year == 2010) {
    document.getElementById('YC').innerHTML = "Yellow Cab: 30,000";
    document.getElementById('UL').innerHTML = "Uber & Lyft: 0";
    document.getElementById('TotalCars').innerHTML = "Total Drivers: 30,000";
  }
  else if(given_year == 2011) {
    document.getElementById('YC').innerHTML = 'Yellow Cab: 31,000<br><span style="font-size: 12px; color:green;"> +1,000</span>';
    document.getElementById('UL').innerHTML = 'Uber & Lyft: 0<br><span style="font-size: 12px; color:green;"> 0</span>';
    document.getElementById('TotalCars').innerHTML = 'Total Drivers: 31,000<br><span style="font-size: 12px; color:green;"> +1,000</span>';
  }
  else if(given_year == 2012) {
    document.getElementById('YC').innerHTML = 'Yellow Cab: 31,500<br><span style="font-size: 12px; color:green;"> +1,500</span>';
    document.getElementById('UL').innerHTML = 'Uber & Lyft: 0<br><span style="font-size: 12px; color:green;"> 0</span>';
    document.getElementById('TotalCars').innerHTML = 'Total Drivers: 31,500<br><span style="font-size: 12px; color:green;"> +1,500</span>';
  }
  else if(given_year == 2013) {
    document.getElementById('YC').innerHTML = 'Yellow Cab: 34,000<br><span style="font-size: 12px; color:green;"> +4,000</span>';
    document.getElementById('UL').innerHTML = 'Uber & Lyft: 2,000<br><span style="font-size: 12px; color:green;"> +2,000</span>';
    document.getElementById('TotalCars').innerHTML = 'Total Drivers: 36,000<br><span style="font-size: 12px; color:green;"> +6,000</span>';
  }
  else if(given_year == 2014) {
    document.getElementById('YC').innerHTML = 'Yellow Cab: 33,000<br><span style="font-size: 12px; color:green;"> +3,000</span>';
    document.getElementById('UL').innerHTML = 'Uber & Lyft: 7,000<br><span style="font-size: 12px; color:green;"> +7,000</span>';
    document.getElementById('TotalCars').innerHTML = 'Total Drivers: 40,000<br><span style="font-size: 12px; color:green;"> +10,000</span>';
  }
  else if(given_year == 2015) {
    document.getElementById('YC').innerHTML = 'Yellow Cab: 29,000<br><span style="font-size: 12px; color:red;"> -1,000</span>';
    document.getElementById('UL').innerHTML = 'Uber & Lyft: 25,000<br><span style="font-size: 12px; color:green;"> +25,000</span>';
    document.getElementById('TotalCars').innerHTML = 'Total Drivers: 54,000<br><span style="font-size: 12px; color:green;"> +24,000</span>';
  }
  else if(given_year == 2016) {
    document.getElementById('YC').innerHTML = 'Yellow Cab: 28,500<br><span style="font-size: 12px; color:red;"> -1,500</span>';
    document.getElementById('UL').innerHTML = 'Uber & Lyft: 48,000<br><span style="font-size: 12px; color:green;"> +48,000</span>';
    document.getElementById('TotalCars').innerHTML = 'Total Drivers: 76,500<br><span style="font-size: 12px; color:green;"> +46,500</span>';
  }
  else if(given_year == 2017) {
    document.getElementById('YC').innerHTML = 'Yellow Cab: 26,000<br><span style="font-size: 12px; color:red;"> -4,000</span>';
    document.getElementById('UL').innerHTML = 'Uber & Lyft: 65,000<br><span style="font-size: 12px; color:green;"> +65,000</span>';
    document.getElementById('TotalCars').innerHTML = 'Total Drivers: 91,000<br><span style="font-size: 12px; color:green;"> +61,000</span>';
  }
  else if(given_year == 2018) {
    document.getElementById('YC').innerHTML = 'Yellow Cab: 23,000<br><span style="font-size: 12px; color:red;"> -7,000</span>';
    document.getElementById('UL').innerHTML = 'Uber & Lyft: 80,000<br><span style="font-size: 12px; color:green;"> +80,000</span>';
    document.getElementById('TotalCars').innerHTML = 'Total Drivers: 103,000<br><span style="font-size: 12px; color:green;"> +73,000</span>';
  }
  else if(given_year == 2019) {
    document.getElementById('YC').innerHTML = 'Yellow Cab: 21,000<br><span style="font-size: 12px; color:red;"> -9,000</span>';
    document.getElementById('UL').innerHTML = 'Uber & Lyft: 87,700<br><span style="font-size: 12px; color:green;"> +87,700</span>';
    document.getElementById('TotalCars').innerHTML = 'Total Drivers: 108,700<br><span style="font-size: 12px; color:green;"> +78,700</span>';
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
    'event1' : 'Active Drivers: 31,259', 
    'event2' : 'Active Drivers: 30,633 <span style="font-size: 13px; color:red;"> (-626)</span>', 
    'event3' : 'Active Drivers: 29,696 <span style="font-size: 13px; color:red;"> (-937)</span>', 
    'event4' : 'Active Drivers: 20,318 <span style="font-size: 13px; color:red;"> (-9,378)</span>', 
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

