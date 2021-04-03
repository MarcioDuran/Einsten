function calculaVelocidade() {
      //Velocidade da Luz constante !!!

      //Video

      //

      var VL = "299.792.458";
      var MS = parseFloat(VL);
      var DP;
      DP = document.getElementById("Distancia").value;
      DP = parseFloat(DP);

      var MS = (DP / MS) * 1000;
      var MS = parseFloat(MS);
      var MS = MS.toFixed(4);
      let titulo = document.querySelector("h2");
      titulo.textContent = "Velocidade da Luz = " + MS + "  Time Seconds   ";
}