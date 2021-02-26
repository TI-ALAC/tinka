var content = document.getElementById('contenido');
var content2 = document.getElementById('contenido2');
async function init() {
  await getUser();
  content.style.display = "block";
  setTimeout(() => {
    content2.style.display = "none";
  }, 0);
  setTimeout(() => {
    content.style.display = "none";
    content2.style.display = "block";
  }, 4000);
}

init();


async function getUser() {
  try {
    const response = await axios.get('https://creativo.alacoutdoor.pe/api/tinka');
    const text_monto = response.data.data.premios.text;
    localStorage.setItem('montoFinal', JSON.stringify(text_monto));
    const montoFinal = JSON.parse(localStorage.getItem('montoFinal'));
    innerHTML(montoFinal);
  } catch (error) {
    const montoFinal = JSON.parse(localStorage.getItem('montoFinal'));
    innerHTML(montoFinal);
  }
}

function innerHTML(text_monto){
  const pozoMid = document.getElementById('monto');
  const millonesId = document.getElementById('millones');
  const millones = "";
  const mm = text_monto.split("'");
  const monto = (mm[1].charAt(0) === '0') ? `${mm[0]}` : `${mm[0]}.${mm[1].charAt(0)}`;
  pozoMid.innerHTML = monto;
  millonesId.innerHTML = millones + " MILLONES";
  pozoMid.className = (mm[1].charAt(0) === '0') ? 'pozoUnidad' : 'pozo2digitos';
  
}

