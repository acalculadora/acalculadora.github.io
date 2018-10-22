$(".calcAltura").on('input', function() {
  // this.value = this.value.replace(/,/g, '.');
  const calcOneA = $(".calcAltura").val().replace(',','.');
  const resultPesoIdeal = (21.75*calcOneA*calcOneA);
  const resultPesoA = (18.5*calcOneA*calcOneA);
  const resultPesoB = (25*calcOneA*calcOneA);
  $(".resultPesoIdeal").val(parseFloat(resultPesoIdeal.toFixed(1)));
  $(".resultPesoA").html(parseFloat(resultPesoA.toFixed(1)));
  $(".resultPesoB").html(parseFloat(resultPesoB.toFixed(1)));
});
