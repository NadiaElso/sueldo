let sueldo: number = document.getElementById("sueldo");

let btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  switch (sueldo) {
    case 1:
      sueldo = 15000 || sueldo < 15.0;
      console.log("20%");
      break;
    case 2:
      sueldo = 15.001 || sueldo < 20.0;
      console.log("10%");
      break;
    case 3:
      sueldo = 20.001 || sueldo < 25.0;
      console.log("5%");
      break;
    default:
    case 4:
      sueldo > 25.0;
      console.log("No hay descuento");
  }
});
