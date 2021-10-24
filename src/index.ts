let sueldo: any = document.getElementById("sueldo");
let btn: any = document.getElementById("btn");
btn.addEventListener("click", () => {
  let sueldo2 = Number(sueldo.value);
  switch (true) {
    case sueldo2 > 0 && sueldo2 <= 15000:
      console.log("20%");
      break;
    case sueldo2 > 15000 && sueldo2 <= 20000:
      console.log("10%");
      break;
    case sueldo2 > 20001 && sueldo2 <= 25000:
      console.log("5%");
      break;
    default:
    case sueldo2 > 25000:
      console.log("No hay descuento");
      break;
  }
});
