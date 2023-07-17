$(document).ready(function() {
  $("#formOne").submit(function(event) {
    $(".new").click(function() {
      $("#formOne").toggle();
      $("#story").toggle();
    });
    const person1Input = $("#person1").val();
    const person2Input = $("#person2").val();
    const animalInput = $("#animal").val();
    const exclamationInput = $("#exclamation").val();
    const verbInput = $("#verb").val();
    const nounInput = $("#noun").val();
    const mailInput = $("#mail").val();
    const nationInput = $("#nation").val();
    const dateInput = $("#date").val();
    

    $(".person1").text(person1Input);
    $(".person2").text(person2Input);
    $(".animal").text(animalInput);
    $(".exclamation").text(exclamationInput);
    $(".verb").text(verbInput);
    $(".noun").text(nounInput);
    $(".mail").text(mailInput);
    $(".nation").text(nationInput);
    $(".date").text(dateInput);


    $("#story").show();

    event.preventDefault();
  });
});