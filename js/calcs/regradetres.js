$("input[type='radio']").on('change', function() {
  const isChecked = $( "input:checked").val();
  if (isChecked) {
    $("input[type='text']").removeClass("card-result");
    $(this).next("input[type='text']").addClass("card-result");
  }
});

$(".regraSimples input").on('input', function() {
  this.value = this.value.replace(/,/g, '.');
  const calcOneA = $(".inp1").val();
  const calcOneB = $(".inp2").val();
  const calcOneC = $(".inp3").val();
  const calcOneD = $(".inp4").val();

  const isChecked = $("input[type='radio']:checked").val();

  if (isChecked == 1) {
    const resultR3s = calcOneC*calcOneD/calcOneD;
    $(".card-result").val(parseFloat(resultR3s.toFixed(2)));
    console.log("1");
  } else if (isChecked == 2) {
    const resultR3s = calcOneD*calcOneA/calcOneC;
    $(".card-result").val(parseFloat(resultR3s.toFixed(2)));
    console.log("2");
  } else if (isChecked == 3) {
    const resultR3s = calcOneD*calcOneA/calcOneB;
    $(".card-result").val(parseFloat(resultR3s.toFixed(2)));
    console.log("3");
  } else if (isChecked == 4) {
    const resultR3s = calcOneC*calcOneB/calcOneA;
    $(".card-result").val(parseFloat(resultR3s.toFixed(2)));
    console.log("4");
  }
});
