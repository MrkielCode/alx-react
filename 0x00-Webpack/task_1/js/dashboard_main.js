import $ from 'jquery'

$(document).ready(function () {
    $('body').append('<p>Holberton Dashboard</p>');
    $('body').append('<p>Dashboard data for the students</p>');
    $('body').append('<button>Click here to get started</button>');
    $('body').append("<p id='count'></p>");
    $('body').append('<p>Copyright - Holberton Schoo</p>');

    let count = 0;

    $('button').click(function (e) { 
        e.preventDefault();
        $('#count').text(`${count = count + 1} clicks on the button`)
    });
});


