//------------------------------------------------------------------------------------------------------------
// SET VARIABLES
var colorCode = document.querySelector('div input id');
//------------------------------------------------------------------------------------------------------------
// CURRENT DAY ON THE HEADER
var today = dayjs();
$('#currentDay').text(today.format('MMM Do, YYYY'));

//------------------------------------------------------------------------------------------------------------
// CURRENT TIME ON THE HEADER
var currentTime = dayjs().format(
  'H'
);
$('#currentTime').text(currentTime);

//------------------------------------------------------------------------------------------------------------
// SAVE BUTTON FUNCTION TO GET INPUT DATA
$('button').on('click', function(event){
  event.preventDefault();

  $('input[type="text"]').each(function(){    
      var id = $(this).attr('id');
      var value = $(this).val();
     localStorage.setItem(id, value);

  });   
});

//------------------------------------------------------------------------------------------------------------
// RETRIEVE DATA FROM PREVIOUS INPUT
// This function is being called below and will run when the page loads.
function init() {

  var nineInput = localStorage.getItem('9');
  var tenInput = localStorage.getItem('10');
  var elevenInput = localStorage.getItem('11');
  var twelveInput = localStorage.getItem('12');
  var oneInput = localStorage.getItem('13');
  var twoInput = localStorage.getItem('14');
  var threeInput = localStorage.getItem('15');
  var fourInput = localStorage.getItem('16');


  document.getElementById('9').value = nineInput;
  document.getElementById('10').value = tenInput;
  document.getElementById('11').value = elevenInput;
  document.getElementById('12').value = twelveInput;
  document.getElementById('13').value = oneInput;
  document.getElementById('14').value = twoInput;
  document.getElementById('15').value = threeInput;
  document.getElementById('16').value = fourInput;

}



const rows = document.getElementsByClassName("row");
let currentHour = parseInt(moment().format('H'));

Array.from(rows).forEach(row => {
  let
    rowIdString = row.id,
    rowHour;
  if (rowIdString) {
    rowHour = parseInt(rowIdString);
  }
  if (rowHour) {
    // Compares row id to current hour and sets color accordingly
    if (currentHour === rowHour) {
      setColor(row, "red");
    } else if ((currentHour < rowHour) && (currentHour > rowHour - 6)) {
      setColor(row, "green");
    } else if ((currentHour > rowHour) && (currentHour < rowHour + 6)) {
      setColor(row, "lightgrey");
    } else {
      setColor(row, "white");
    }
  }
});

function setColor(element, color) {
  element.style.backgroundColor = color;
}

//------------------------------------------------------------------------------------------------------------
// CHANGE COLOR OF BLOCK IS PAST PRESENT OR FUTURE


init();

//------------------------------------------------------------------------------------------------------------
// COPIED CODE FROM ACTIVITIES FOR REF


// // 2. What is the day of the week today?
// var dayWeek = today.format('[Today is] dddd');
// $('#2a').text(dayWeek);

// // 3. Parse the following date, 11/3/2020, and convert it into the following format: Sunday, February 14th 2010, 3:25:50 pm.
// var reformatDate = dayjs('11/3/20', 'MM-DD-YY').format(
//   'dddd, MMMM Do YYYY, h:mm:ss a'
// );
// $('#3a').text(reformatDate);

// // 4. I need to place my recycling bin on the curb on every odd week of the year for collection. Do I need to put out my recycling bin out this week?
// var weekNum = today.week();
// var takeOut;
// // Check odd, then assign boolean
// if (weekNum % 2) {
//   takeOut = true;
// } else {
//   takeOut = false;
// }

// $('#4a').text(`${takeOut}, because it's currently week ${weekNum}`);
