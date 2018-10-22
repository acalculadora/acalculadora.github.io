$(".calcOneA, .calcOneB").on('input', function() {
  this.value = this.value.replace(/,/g, '.');
  const calcOneA = $(".calcOneA").val();
  const calcOneB = $(".calcOneB").val();
  const resultIMC = calcOneA/(calcOneB*calcOneB);
  $(".resultIMC").val(parseFloat(resultIMC.toFixed(2)));
  const infoIMC = $(".infoIMC");
  if (resultIMC <= "17") {
    infoIMC.html("Ops, você está muito abaixo do peso :/");
  } else if (resultIMC >= "17.1" && resultIMC <= "18.5") {
    infoIMC.html("humm, você está abaixo do peso");
  } else if (resultIMC >= "18.6" && resultIMC <= "24.9") {
    infoIMC.html("Oba, você está com seu peso normal");
  } else if (resultIMC >= "25" && resultIMC <= "29.9") {
    infoIMC.html("humm, você está acima de seu peso normal");
  } else if (resultIMC >= "30" && resultIMC <= "34.9") {
    infoIMC.html("Considerado pelo Ministério da Saúde como Obesidade I");
  } else if (resultIMC >= "35" && resultIMC <= "39.9") {
    infoIMC.html("Considerado pelo Ministério da Saúde como Obesidade II");
  } else if (resultIMC > "40") {
    infoIMC.html("Considerado pelo Ministério da Saúde como Obesidade II ou Obesidade Mórbida");
  }
});
