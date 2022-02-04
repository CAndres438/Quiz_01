const $select = document.getElementById("Cream");  //Referencia a sabores de helado

let mostrar = document.getElementById("mostrar");   //imagenes de los sabores

let formulario = document.getElementById("formulario"); //formulario de facturación
let boton = document.getElementById("boton"); //división del boton
let factura = document.getElementById("factura");


// reconoce el cambio e intercambia la imagen después de vaciar.
const opcionCambiada = () => { 
  switch ($select.value) {
    case "Durazno":
      mostrar.innerHTML = "";
      mostrar.innerHTML += `<img id="image" src="./Images/Durazno.png" width="110" height="150"/>`;
      break;

    case "Kiwi":
      mostrar.innerHTML = "";
      mostrar.innerHTML += `<img id="image" src="./Images/Kiwi.png" width="110" height="150"/>`;
      break;

    case "Parchita":
      mostrar.innerHTML = "";
      mostrar.innerHTML += `<img id="image" src="./Images/Parchita.png" width="110" height="150"/>`;
      break;

    case "Sandía":
      mostrar.innerHTML = "";
      mostrar.innerHTML += `<img id="image" src="./Images/Sandia.png" width="110" height="150"/>`;
      break;

    default:
      mostrar.innerHTML = "";
      mostrar.innerHTML += `<img id="image" src="./Images/fondo.png" width="110" height="150"/>`;
  }
};

//recarga de página ya que no se trabaja con bd
const back = () => {
  document.location.reload();
};

// variables de la factura
const capturarVariables = () => {
  let n1 = document.getElementById("n1").value;
  let n2 = document.getElementById("n2").value;
  let n3 = document.getElementById("n3").value;
  let n4 = document.getElementById("n4").value;
  let n5 = $select.value;

  let n6 = [n1 + " " + n2, n3, n4, n5];

  formulario.innerHTML = "";
  factura.innerHTML = `<div="factura"><ul><li>Nombre Completo: ${
    n1 + " " + n2
  }</li><li>Dirección de Facturación:${n3}</li><li>Contacto: ${n4}</li><li>Sabor: ${n5}</li></ul></div>`;
  boton.innerHTML = `<button onclick="back()" id="btn" >Atrás</button>`;
  console.log(n6);
};

//Escucha el evento de cambio
$select.addEventListener("change", opcionCambiada);
