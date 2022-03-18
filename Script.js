function init() {
  sum = document.getElementById("sum");
  sum.addEventListener("click", sumar, false);
  res = document.getElementById("res");
  res.addEventListener("click", restar, false);
  mul = document.getElementById("mul");
  mul.addEventListener("click", multiplicar, false);

  inicializarMatrices();
  resp = document.getElementById("resp");
  console.info(resp);
  for (let i = 0; i < m1.length; i++) {
    m1[i].onclick = () => {
      m1[i].value = "";
    };
    m1[i].onblur = () => {
      if (m1[i].value === "") m1[i].value = 0;
    };
  }
  for (let i = 0; i < m2.length; i++) {
    m2[i].onclick = () => {
      m2[i].value = "";
    };
    m2[i].onblur = () => {
      if (m2[i].value === "") m2[i].value = 0;
    };
  }
  var restart = document.getElementById("clear");
  restart.addEventListener("click", nuevo, false);
}
function inicializarMatrices() {
  m1 = document.querySelectorAll("#matriz_1 tr td input");
  m2 = document.querySelectorAll("#matriz_2 tr td input");
  mr = document.querySelectorAll("#matriz_r tr td input");
}
function sumar() {
  var nt = document.createTextNode("(A + B)");
  resp.appendChild(nt);
  inicializarMatrices();
  //uso del for each
  m1.forEach((element) => {
    console.log(element.value);
  });
  for (let i = 0; i < m1.length; i++) {
    mr[i].value = parseInt(m1[i].value) + parseInt(m2[i].value);
  }
  console.info(mr);
}
function restar() {
  document.getElementById("resp").textContent = "Matrix resultantes(A - B)";
  inicializarMatrices();
  for (let i = 0; i < m1.length; i++) {
    mr[i].value = parseInt(m1[i].value) - parseInt(m2[i].value);
  }
}
function multiplicar() {
  inicializarMatrices();
  document.getElementById("resp").textContent = "Matrix resultantes(A x B)";
  //convertimos el arreglo en matriz

  //uso del delete
  //el delete se puede para usar propiedades definidas por el usuario
  //pero solo las varibales globales que son declaradas con o sin new.
  let ma1 = [],
    ma2 = [],
    mar = [];
  for (let i = 0; i < 3; i++) {
    ma1[i] = new Array(3);
    ma2[i] = new Array(3);
    mar[i] = new Array(3);
  }
  let a1 = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      ma1[i][j] = m1[a1];
      ma2[i][j] = m2[a1];
      a1++;
    }
  }
  for (let a = 0; a < ma1.length; a++) {
    // Dentro recorremos las filas de la primera (A)
    for (let i = 0; i < ma1.length; i++) {
      let suma = 0;
      // Y cada columna de la primera (A)
      for (let j = 0; j < ma2.length; j++) {
        // Multiplicamos y sumamos resultado
        suma += parseInt(ma1[i][j].value) * parseInt(ma2[j][a].value);
      }
      // Lo acomodamos dentro del producto
      mar[i][a] = suma;
    }
  }
  a1 = 0;
  for (let i = 0; i < mar.length; i++) {
    for (let j = 0; j < mar.length; j++) {
      mr[a1].value = mar[i][j];
      a1++;
    }
  }
}
function nuevo() {
  document.getElementById("resp").textContent = "Matrix resultantes";
  for (let i = 0; i < m1.length; i++) {
    m1[i].value = 0;
  }
  for (let i = 0; i < m2.length; i++) {
    m2[i].value = 0;
  }
  for (let i = 0; i < m1.length; i++) {
    mr[i].value = "";
  }
}
window.addEventListener("load", init, false);
