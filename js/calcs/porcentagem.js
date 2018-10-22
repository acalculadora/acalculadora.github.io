$(".calcOneA, .calcOneB").on('input', function() {
  this.value = this.value.replace(/,/g, '.');
  const calcOneA = $(".calcOneA").val();
  const calcOneB = $(".calcOneB").val();
  const resultOne = calcOneA/100*calcOneB;
  $(".resultOne").html(parseFloat(resultOne.toFixed(2)));
});

$(".calcTwoA, .calcTwoB, .selectTwo").on('input', function() {
  this.value = this.value.replace(/,/g, '.');
  const selectTow = $('select[name=selectTwo]').val();
  const calcTwoA = $(".calcTwoA").val();
  const calcTwoB = $(".calcTwoB").val();
  const resultTwo1 = calcTwoA*(1+calcTwoB/100);
  const resultTwo2 = calcTwoA*(1-calcTwoB/100);
  const resultTwo3 = calcTwoB/(1+calcTwoA/100);
  const resultTwo4 = calcTwoB/(1-calcTwoA/100);
  let calcPhrase =  $(".calc-phrase")

  if (selectTow == '1') {
    $(".resultTwo").html(parseFloat(resultTwo1.toFixed(2)));
    calcPhrase.html("%, qual é o resultado?");
  } else if (selectTow == '2') {
    $(".resultTwo").html(parseFloat(resultTwo2.toFixed(2)));
    calcPhrase.html("%, qual é o resultado?");
  } else if (selectTow == '3') {
    $(".resultTwo").html(parseFloat(resultTwo3.toFixed(2)));
    calcPhrase.html(". Qual é o valor inicial?");
  } else if (selectTow == '4') {
    $(".resultTwo").html(parseFloat(resultTwo4.toFixed(2)));
    calcPhrase.html(". Qual é o valor inicial?");
  }
});

$(".calcThreeA, .calcThreeB").on('input', function() {
  this.value = this.value.replace(/,/g, '.');
  const calcOneA = 100*$(".calcThreeA").val();
  const calcOneB = $(".calcThreeB").val();
  const resultThree = calcOneA/calcOneB;
  $(".resultThree").html(parseFloat(resultThree.toFixed(2)));
});

$(".calcFourA, .calcFourB, .selectFour").on('input', function() {
  this.value = this.value.replace(/,/g, '.');
  const selectFour = $('select[name=selectFour]').val();
  const calcFourA = $(".calcFourA").val();
  const calcFourB = $(".calcFourB").val();
  const resultFour3 = (calcFourB/calcFourA-1)*100;
  const resultFour4 = -(calcFourB/calcFourA-1)*100;
  let calcPhrase =  $(".calc-phrase--Four");

  if (selectFour == '3') {
    $(".resultFour").html(parseFloat(resultFour3.toFixed(2)));
    calcPhrase.html("Qual foi o aumento percentual?");
  } else if (selectFour == '4') {
    $(".resultFour").html(resultFour4.toFixed(2));
    calcPhrase.html("Qual foi a diminuição percentual?");
  }
});

$(".calcFiveA, .calcFiveB, .selectFive").on('input', function() {
  this.value = this.value.replace(/,/g, '.');
  const selectFive = $('select[name=selectFive]').val();
  const calcFiveA = $(".calcFiveA").val();
  const calcFiveB = $(".calcFiveB").val();
  const resultFive1 = calcFiveB/(1+calcFiveA/100);
  const resultFive2 = calcFiveB/(1-calcFiveA/100);
  let calcPhrase =  $(".calc-phrase--Five");

  if (selectFive == '1') {
    $(".resultFive").html(parseFloat(resultFive1.toFixed(2)));
  } else if (selectFive == '2') {
    $(".resultFive").html(parseFloat(resultFive2.toFixed(3)));
  }
});
