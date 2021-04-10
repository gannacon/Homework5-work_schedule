# Homework 5


## Tasks

1. Set up Variables
    * JQuery select DOM Elements
1. Display Current Date in Header
    * Get Current Date
    * Formate Current Date
    * Update DOM with current Date
1. Render Timeblocks
    * Read from localstorage
    * Create input field
    * Create "Save" Button
    * Add CSS Classes for Style
        * determine if timeblock is `past`, `present`, or `future`
    * Add `value` from localstorage into input
    * Append to DOM
1. Event Handler for "SAVE"
    * When a user enters text into the field
    * Then user clicks **matching** save button
        * Save the Related input field into localstorage
    * Display Notification/toast when the save is complete


```js
    var schedule = {
        //setting items for each day
        '2021-04-10': {
            hour09: 'class begins'
            hour10: ''
            hour11: 'big picture'
            hour12: ''
            hour01: 'things'
            hour02: ''
            hour03: 'stuff'
            hour04: ''
        }
        }

    localStorage.setItem('schedule', JSON.stringify(schedule))

    ```