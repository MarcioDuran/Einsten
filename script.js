function calculaVelocidade() {
      var VL = "299.792.458";
      var MS = parseFloat(VL);
      var DP;
      DP = document.getElementById("Distancia").value;

      var MS = (DP / MS) * 0.000001;
      var MS = MS.toFixed(3);
      let titulo = document.querySelector("h2");
      titulo.textContent = "Velocidade da Luz = " + MS + "  Time Seconds   ";
}