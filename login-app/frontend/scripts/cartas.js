document.addEventListener("DOMContentLoaded", () => {
  const cartas = document.querySelectorAll('.cartas');
  let indice = 0;

  function mostrarCartas() {
    cartas.forEach(carta => {
      carta.style.display = 'none';
    });

    for (let i = indice; i < indice + 2 && i < cartas.length; i++) {
      cartas[i].style.display = 'block';
    }
  }

  cartas.forEach(carta => {
    carta.addEventListener('click', () => {
      indice += 2;
      if (indice < cartas.length) {
        mostrarCartas();
      } else {
        document.querySelector('.card').innerHTML = '<p style="font-size: 24px;">Muy buenas elecciones!</p>';
      }
    });
  });

  mostrarCartas(); // Mostrar las 2 primeras al inicio
});
