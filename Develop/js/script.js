//------------------------------------------------------------------------------------------------------------
//CURRENT DAY ON THE HEADER
var today = dayjs();
$('#currentDay').text(today.format('MMM Do, YYYY'));

//------------------------------------------------------------------------------------------------------------
// CURRENT TIME ON THE HEADER
var currentTime = dayjs().format(
  'h:mm:ss a'
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
function renderLastInput() {
  // Use JSON.parse() to convert text to JavaScript object
  var value = JSON.parse(localStorage.getItem("input"));
  // Check if data is returned, if not exit out of the function
  if (value !== null) {
  $("input").id;
  } else {
    return;
  }
}

// The init() function fires when the page is loaded 
function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderLastInput();
}
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
