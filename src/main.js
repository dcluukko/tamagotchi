import { Student } from './../src/student.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


$(document).ready(function () {
  let level = $('#level');
  function displayToGameScreen(student) {
    $('#studentName').html(student.name);
    level.html(student.level);
  }
  function meterBar(student) {
    let drain = setInterval(() => {
    // setInterval(() => {
      // $("#coffeeBar").text(student.energyLevel + "0%");
      console.log(student.energyLevel + "0%");
      // $("#studyBar").text(student.studyLevel + "0%");
      // $("#networkBar").text(student.networkLevel + "0%");
      $('#coffeeBar').css("width", student.energyLevel + "0%");
      $('#studyBar').css("width", student.studyLevel + "0%");
      $('#networkBar').css("width", student.networkLevel + "0%");
      level.html(student.level);
      if (student.networkLevel <= 0 || student.studyLevel <= 0 || student.energyLevel <= 0) {
        $('#happy').hide();
        $('#lonely').hide();
        $('#dumb').hide();
        $('#tired').hide();
        $('#grad').hide();
        $('#dead').show();
      } else if (student.energyLevel <= student.max / 2) {
        $('#happy').hide();
        $('#lonely').hide();
        $('#dumb').hide();
        $('#tired').show();
        $('#grad').hide();
        $('#dead').hide();
      } else if (student.studyLevel <= student.max / 2) {
        $('#happy').hide();
        $('#lonely').hide();
        $('#dumb').show();
        $('#tired').hide();
        $('#grad').hide();
        $('#dead').hide();
      } else if (student.networkLevel <= student.max / 2) {
        $('#happy').hide();
        $('#lonely').show();
        $('#dumb').hide();
        $('#tired').hide();
        $('#grad').hide();
        $('#dead').hide();
      } else if (student.level >= 7) {
        $('#happy').hide();
        $('#lonely').hide();
        $('#dumb').hide();
        $('#tired').hide();
        $('#grad').show();
        $('#dead').hide(); 
        clearInterval(drain);
      } else if (student.energyLevel > student.max / 2 && student.studyLevel > student.max / 2 && student.studyLevel > student.max / 2) {
        $('#happy').show();
        $('#lonely').hide();
        $('#dumb').hide();
        $('#tired').hide();
        $('#grad').hide();
        $('#dead').hide(); 
      }  
    }, 1000);
  }
  let student;
  $('#start').submit(function (event) {
    event.preventDefault();
    const name = $('#name').val();
    student = new Student(name);

    student.life();
    student.leveling();
    meterBar(student);
    displayToGameScreen(student);
    $('.gamescreen').show();
    $('.startscreen').hide();

    console.log(student);
    $('button#coffee').click(function () {
      student.coffeeBreak();
    })
    $('button#study').click(function () {
      student.study();
    })
    $('button#network').click(function () {
      student.meetUp();
    })
  });
});