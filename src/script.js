function calculaVelocidade() {
      var DP, TG, VM;
      DP = document.getElementById("Distancia").value;
      TG = document.getElementById("TempoGasto").value;

      var VM = (DP / TG).toFixed(2);
      let titulo = document.querySelector("h2");
      titulo.textContent = VM;
}
