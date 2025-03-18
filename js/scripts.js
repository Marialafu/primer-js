function getDivision(amountItems, amountGroups) {
  return amountItems / amountGroups;
}

//1️⃣ Camila atiende 120 llamadas en 4 horas. ¿Cuántas llamadas atiende por hora?

function callsInfo(calls, hours) {
  const totalCalls = getDivision(calls, hours);
  console.log(totalCalls + ' llamadas en 4 horas');
}
callsInfo(120, 4);

//5️⃣ Macarena cosechó 240 manzanas y las quiere repartir en 8 cajas. ¿Cuántas manzanas tendrá cada caja?

function totalApples(apples, box) {
  const totalApplesInBox = getDivision(apples, box);
  console.log(totalApplesInBox + ' manzanas tendrá cada caja');
}
totalApples(240, 8);

//1️⃣6️⃣ Macarena tiene 30000 euros y quiere repartirlos en 4 cuentas iguales. ¿Cuánto dinero recibirá cada cuenta?

function getMoneyInEachCount(euros, counts) {
  const moneyPerCount = getDivision(euros, counts);
  console.log(moneyPerCount + ' dinero en cada cuenta');
}
getMoneyInEachCount(30000, 4);

//2️⃣1️⃣ Macarena quiere repartir 72 galletas entre 9 perros. ¿Cuántas galletas recibirá cada perro?

function getCookiesPerDog(cookies, dog) {
  const cookiesPerDog = getDivision(cookies, dog);
  console.log(cookiesPerDog + ' galletas por perro');
}
getCookiesPerDog(72, 9);





const getMultiplication = (amountItems, amountGroups) =>
  amountItems * amountGroups;

//2️⃣ Bego compró 5 cajas de lápices. Cada caja tiene 12 lápices. ¿Cuántos lápices tiene en total?

const getAmountPencils = (pencils, box) => {
  const totalPencils = getMultiplication(pencils, box);
  console.log(totalPencils + ' lápices de begoña');
};
getAmountPencils(5, 12);

//7️⃣ Abby cobra 35 euros por misión. Si hizo 5 misiones en un día, ¿cuánto dinero ganó?

const getAmountMoneyEarned = (money, mision) => {
  const amountMoneyEarned = getMultiplication(money, mision);
  console.log(amountMoneyEarned + ' euros ganó');
};
getAmountMoneyEarned(35, 5);

//2️⃣2️⃣ Abby quiere comprar 5 cuchillos. Si cada uno cuesta 18 euros, ¿cuánto pagará en total?

const getKniveCost = (knive, euros) => {
  const kniveCost = getMultiplication(knive, euros);
  console.log(kniveCost + ' euro cuestan los cuchillos');
};
getKniveCost(5, 18);





const getRest = (amountItems, amountGroups) => amountItems % amountGroups;

//3️⃣0️⃣ Sabrina tiene 500 gramos de harina y quiere hacer porciones de 24 gramos cada una para preparar galletas. ¿Cuánta harina le sobrará después de hacer todas las porciones completas?

const getFlourG = (gramsPerService, gramsPerPortion) => {
  const amountPortions = getRest(gramsPerService, gramsPerPortion);
  console.log(amountPortions + ' g de harina sobrarán');
};
getFlourG(500, 24);

//3️⃣ Camila tiene 25 caramelos y quiere repartirlos en grupos de 4. ¿Cuántos caramelos le sobrarán después del reparto?

const getTotalSweets = (sweets, groups) => {
    const totalSweets = getRest(sweets, groups)
    console.log(totalSweets + ' caramelo le sobra a Camila');
}
getTotalSweets(25, 4);

//6️⃣ Bego tiene 57 tornillos y quiere guardarlos en cajitas de 10 tornillos cada una. ¿Cuántos tornillos quedarán fuera?

const getRestobject = (object, box) =>{
    const rest = getRest (object, box)
    console.log();
    
}








//4️⃣ Sabrina recorre 90 kilómetros en 3 horas. ¿Cuántos kilómetros recorre en 2 horas?

function kmPerHours(hours) {
  const kmPerHour = 90 / 3;
  const result = kmPerHour * hours;
  console.log(result + ' km en 2 horas');
}
kmPerHours(2);



//8️⃣ Sabrina horneó 92 galletas y las quiere empaquetar en bolsas de 8 galletas cada una. ¿Cuántas galletas sobrarán?

function ejercicio8(cookies, bags) {
  const result = cookies % bags;
  console.log(result + ' galletas sobrarán');
}
ejercicio8(92, 8);

//9️⃣ Camila tenía 45 libros y compró 23 más. ¿Cuántos libros tiene ahora?

function ejercicio9(booksHave, booksBuy) {
  const result = booksHave + booksBuy;
  console.log(result + ' libros en total');
}
ejercicio9(45, 23);

//🔟 Macarena tiene 123 monedas antiguas y quiere exhibirlas en vitrinas con capacidad para 5 monedas cada una. ¿Cuántas monedas no cabrán?

function numberCoins(ancientCoins, showcasesSpace) {
  const result = ancientCoins % showcasesSpace;
  console.log(result + ' monedas que no caben en la vitrina');
}
numberCoins(123, 5);

//1️⃣1️⃣ El coche de Bego consume 7 litros de gasolina por cada 100 kilómetros. Si el tanque tiene 42 litros, ¿cuántos kilómetros podrá recorrer?

function gasolineInRide(litersAvailable) {
  const gasolinePerKm = 7 / 100;
  const result = litersAvailable / gasolinePerKm;
  console.log(result + ' km recorrerá');
}
gasolineInRide(42);

//1️⃣2️⃣ Sabrina tiene 6 gallineros, y en cada gallinero hay 25 gallinas. ¿Cuántas gallinas tiene en total?

function totalChickens(chickens, chikenshouse) {
  const result = chickens * chikenshouse;
  console.log(result + ' gallinas en total');
}
totalChickens(25, 6);

//1️⃣3️⃣ Abby tiene 48 balas y cada cargador de su pistola tiene espacio para 7 balas. ¿Cuántas balas le sobrarán sin cargar?

function bulletsleft(bullets) {
  const gunCharger = 7;
  const result = bullets % gunCharger;
  console.log(result + ' balas sobran sin cargar');
}
bulletsleft(48);

//1️⃣4️⃣ Bego corrió 3 kilómetros por la mañana y 4 kilómetros por la tarde. ¿Cuántos kilómetros corrió en total?

function kmInTotal(morningKm, afternoonKm) {
  const result = morningKm + afternoonKm;
  console.log(result + ' km corrió Begoña');
}
kmInTotal(3, 4);

//1️⃣5️⃣ Camila tiene 100 hojas y quiere agruparlas en pilas de 6. ¿Cuántas hojas quedarán fuera?

function sheetsLeft(sheets) {
  const pilas = 6;
  const result = sheets % pilas;
  console.log(result + ' hojas quedarán fuera');
}
sheetsLeft(100);

//1️⃣7️⃣ Abby mata 5201 infectados cada semana. ¿Cuántos infectados mata al día?

function infectedPerDay(infectedPeople) {
  const days = 7;
  const result = infectedPeople / days;
  console.log(result + ' infectados mata al día');
}
infectedPerDay(5201);

//1️⃣8️⃣ Bego tiene 3 paquetes de canicas, cada paquete contiene 24 canicas. ¿Cuántas canicas tiene en total?

function canicasTotal(canicas, package) {
  const result = canicas * package;
  console.log(result + ' canicas tiene');
}
canicasTotal(3, 24);

//1️⃣9️⃣ Camila y su hermano juntaron 135 monedas. Si Camila aportó 78 monedas, ¿cuántas monedas puso su hermano?

function coinsCount(camilaCoins, totalCoins) {
  const result = totalCoins - camilaCoins;
  console.log(result + ' monedas puso el hermano');
}
coinsCount(78, 135);

//2️⃣0️⃣ Sabrina tiene 500 piezas de lego y quiere dividirlas en lotes de 80 para construir maquetas. ¿Cuántas piezas le quedarán fuera?

function legoPieces(pieces, lots) {
  const result = pieces % lots;
  console.log(result + ' piezas se quedan fuera');
}
legoPieces(500, 80);

//2️⃣3️⃣ Bego tiene 480 galletas y quiere ponerlas en bolsas de 40 galletas cada una. ¿Cuántas bolsas llenará?

function totalCookies(cookies) {
  const cookiesInBags = 40;
  const result = cookies / cookiesInBags;
  console.log(result + ' bolsas de galletas');
}
totalCookies(480);

//2️⃣4️⃣ Camila recorrió 1.200 km en un viaje de 4 días. ¿Cuántos kilómetros recorrió por día?

function kmPerDay(totalKm, days) {
  const result = totalKm / days;
  console.log(result + ' km al día');
}
kmPerDay(1200, 4);

//2️⃣5️⃣ Sabrina ahorró 120 euros en enero y 85 euros en febrero. ¿Cuánto dinero ha ahorrado en total?

function moneyEarned(january, february) {
  const result = january + february;
  console.log(result + ' euros ahorrados');
}
moneyEarned(120, 85);

//2️⃣6️⃣ Macarena tiene 73 caramelos y quiere repartirlos entre sus amigos en grupos de 6. ¿Cuántos caramelos le sobrarán?

function sweetsTotal(sweets, groups) {
  const result = sweets + groups;
  console.log(result + ' caramelos sobran');
}
moneyEarned(73, 6);

//2️⃣7️⃣ Abby registró 17 casas por la mañana y 8 por la tarde. ¿Cuántas casas registró en total?

function totalHouses(morningHouses, afternoonHouses) {
  const result = morningHouses + afternoonHouses;
  console.log(result + ' casas registradas');
}
totalHouses(17, 8);

//2️⃣8️⃣ Bego tiene 95 fotos y quiere hacer álbumes donde caben 12 fotos en cada uno. ¿Cuántas fotos no podrá guardar en los álbumes?

function albumPhotos(photos, albumes) {
  const result = photos % albumes;
  console.log(result + ' fotos no caben en los álbumes');
}
albumPhotos(95, 12);

//2️⃣9️⃣ Camila tiene un descuento de 15 euros en un producto que cuesta 120 euros. ¿Cuánto cuesta el producto después del descuento?

function priceWhitDiscount(price, discount) {
  const result = price - discount;
  console.log(result + ' euros en descuento');
}
priceWhitDiscount(120, 15);
