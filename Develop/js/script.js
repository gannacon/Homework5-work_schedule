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

//------------------------------------------------------------------------------------------------------------
// CHANGE COLOR OF BLOCK IS PAST PRESENT OR FUTURE USING COLORS NOT CLASSES

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


init();
