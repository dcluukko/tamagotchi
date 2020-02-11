import { Student } from './../src/student.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

$(document).ready(function() {
  function displayToGameScreen(student){
    $('#studentName').html(student.name);
    $('#level').html(student.level);

  }

  let student;
  $('#start').submit(function(event) {
    event.preventDefault();
    const name = $('#name').val();
    student = new Student(name);
    
    student.life();
    student.leveling();
    displayToGameScreen(student);
    $('.gamescreen').show();
    $('.startscreen').hide();

    console.log(student);
    $('button#coffee').click(function() {
      student.coffeeBreak();
    })
    $('button#study').click(function() {
      student.study();
    })
    $('button#network').click(function() {
      student.meetUp();
    })
  });
});