import { Student } from './../src/student.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

$(document).ready(function () {
  function displayToGameScreen(student) {
    $('#studentName').html(student.name);
    $('#level').html(student.level);
  }
  function meterBar(student) {
    // let drain = setInterval(() => {
    setInterval(() => {
      // $("#coffeeBar").text(student.energyLevel + "0%");
      console.log(student.energyLevel + "0%");
      // $("#studyBar").text(student.studyLevel + "0%");
      // $("#networkBar").text(student.networkLevel + "0%");
      $('#coffeeBar').css("width", student.energyLevel + "0%");
      $('#studyBar').css("width", student.studyLevel + "0%");
      $('#networkBar').css("width", student.networkLevel + "0%");

      // clearInterval(drain);
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