//copyToClipBoard
  document.querySelector("#copyButton").onclick = function() {
  document.querySelector("#copyResult").select();
  document.execCommand('copy');
  $(".copyStatus").html("resultado copiado");
};
//copyToClipBoard
  document.querySelector("#copyButton").onclick = function() {
  document.querySelector(".card-result").select();
  document.execCommand('copy');
  $(".copyStatus").html("resultado copiado");
};
