var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
var content3 = document.getElementById('contenido3');
function init() {
  setTimeout(() => {
    content.style.display = "block";
    content2.style.display = "none";
    content3.style.display = "none";
  }, 0);
  setTimeout(() => {
    content.style.display = "none";
    content2.style.display = "block";
    content3.style.display = "none";
  }, 2500);
  setTimeout(() => {
    content.style.display = "none";
    content2.style.display = "none";
    content3.style.display = "block";
  }, 5500);
}

init();


async function getUser() {
  try {
    const response = await axios.get('https://creativo.alacoutdoor.pe/api/tinka');
    const text_monto = response.data.data.premios.text;
    const mm = text_monto.split("'");
    const monto = (mm[1].charAt(0) === '0') ? `${mm[0]}` : `${mm[0]}.${mm[1].charAt(0)}`;
    const millones = "";
    const pozoMid = document.getElementById('monto');
    const millonesId = document.getElementById('millones');
    pozoMid.innerHTML = monto;
    millonesId.innerHTML = millones + " MILLONES";

    pozoMid.className = (mm[1].charAt(0) === '0') ? 'pozoUnidad' : 'pozo2digitos';
  } catch (error) {
    //console.error(error);
    document.getElementById('monto').innerHTML = "Error en la api";
  }
}
getUser();