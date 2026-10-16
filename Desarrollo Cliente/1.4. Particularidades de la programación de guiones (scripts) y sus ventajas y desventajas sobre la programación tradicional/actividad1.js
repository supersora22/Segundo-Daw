// Ejercicio 1 - Predicción de fechas construidas con distintos formatos

const fechaA = new Date(2026, 0, 10);
const fechaB = new Date(2026, 12, 1);
const fechaC = new Date(2026);
const fechaD = new Date("2026-02-28");
const fechaE = new Date("2026/02/28");


const casos = [
  ["fechaA", fechaA],
  ["fechaB", fechaB],
  ["fechaC", fechaC],
  ["fechaD", fechaD],
  ["fechaE", fechaE]
];

casos.forEach(([nombre, f]) => {
  console.log(
    `${nombre} | local: ${f.toString()} | ISO/UTC: ${f.toISOString()} | ms epoch: ${f.getTime()}`
  );
});

// Desbordamientos: mes 15 -> abril de 2027
console.log("Desbordamiento mes 15:", new Date(2026, 15, 20).toDateString());
// Desbordamientos: día 35 en junio -> 5 de julio
console.log("Desbordamiento día 35 en junio:", new Date(2026, 5, 35).toDateString());
// Desbordamientos: día 0 -> último día del mes anterior
console.log("Día 0 de febrero 2028:", new Date(2028, 2, 0).toDateString());
// Años de 1-2 dígitos -> siglo XX
console.log("new Date(95, 5, 15):", new Date(95, 5, 15).toDateString());