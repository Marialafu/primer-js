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

//2️⃣3️⃣ Bego tiene 480 galletas y quiere ponerlas en bolsas de 40 galletas cada una. ¿Cuántas bolsas llenará?

function totalCookies(cookies) {
  const cookiesInBags = 40;
  const totalcookiesInBags = getDivision (cookies, cookiesInBags);
  console.log(totalcookiesInBags + ' bolsas de galletas');
}
totalCookies(480);

//2️⃣4️⃣ Camila recorrió 1.200 km en un viaje de 4 días. ¿Cuántos kilómetros recorrió por día?

function getkmPerDay(totalKm, days) {
  const kmPerDay = getDivision (totalKm, days);
  console.log(kmPerDay + ' km al día');
}
getkmPerDay(1200, 4);

//1️⃣7️⃣ Abby mata 5201 infectados cada semana. ¿Cuántos infectados mata al día?

function getInfectedPerDay(infectedPeople) {
  const days = 7;
  const infectedPerDay = getDivision (infectedPeople, days);
  console.log(infectedPerDay + ' infectados mata al día');
}
getInfectedPerDay(5201);






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

//1️⃣2️⃣ Sabrina tiene 6 gallineros, y en cada gallinero hay 25 gallinas. ¿Cuántas gallinas tiene en total?

const getTotalChickens = (chickens, chikenshouse) => {
  const totalChickens = getMultiplication (chickens, chikenshouse)
  console.log(totalChickens + ' gallinas en total');
}
getTotalChickens(25, 6);

//1️⃣8️⃣ Bego tiene 3 paquetes de canicas, cada paquete contiene 24 canicas. ¿Cuántas canicas tiene en total?

const getCanicasTotal = (canicas, package) => {
  const canicasTotal = getMultiplication(canicas,package);
  console.log(canicasTotal + ' canicas tiene');
}
getCanicasTotal(3, 24);







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

const getRestScrew = (object, box) =>{
    const restScrew = getRest (object, box)
    console.log(restScrew + ' tornillos quedarán fuera');
}
getRestScrew (57, 10)

//8️⃣ Sabrina horneó 92 galletas y las quiere empaquetar en bolsas de 8 galletas cada una. ¿Cuántas galletas sobrarán?

const getCookiesLeft = (cookies, box) => {
  const cookiesLeft = getRest (cookies, box)
  console.log(cookiesLeft + ' galletas sobrarán');
}
getCookiesLeft(92, 8);

//🔟 Macarena tiene 123 monedas antiguas y quiere exhibirlas en vitrinas con capacidad para 5 monedas cada una. ¿Cuántas monedas no cabrán?

const getAmountCoins = (ancientCoins, showcasesSpace) => {
  const amountCoins = getRest (ancientCoins, showcasesSpace)
  console.log(amountCoins + ' monedas no caben en la vitrina');
}
getAmountCoins(123, 5);

//2️⃣8️⃣ Bego tiene 95 fotos y quiere hacer álbumes donde caben 12 fotos en cada uno. ¿Cuántas fotos no podrá guardar en los álbumes?

const getAmountPhotos = (photos, albumes) => {
  const amountPhotos = getRest (photos, albumes)
  console.log(amountPhotos + ' fotos no caben en los álbumes');
}
getAmountPhotos(95, 12);

//2️⃣6️⃣ Macarena tiene 73 caramelos y quiere repartirlos entre sus amigos en grupos de 6. ¿Cuántos caramelos le sobrarán?

const getSweets = (sweets, groups) => {
  const totalSweets = getRest(sweets, groups);
  console.log(totalSweets + ' caramelo sobra');
}
getSweets(73, 6)

//2️⃣0️⃣ Sabrina tiene 500 piezas de lego y quiere dividirlas en lotes de 80 para construir maquetas. ¿Cuántas piezas le quedarán fuera?

const getLegoPieces = (pieces, lots) => {
  const LegoPiecesRest = getRest(pieces, lots);
  console.log(LegoPiecesRest + ' piezas sobran');
}
getLegoPieces(500, 80)

//1️⃣3️⃣ Abby tiene 48 balas y cada cargador de su pistola tiene espacio para 7 balas. ¿Cuántas balas le sobrarán sin cargar?

const getBulletsLeft = (bullets) => {
  const gunCharger = 7
  const bulletsLeft = getRest(bullets, gunCharger);
  console.log(bulletsLeft + ' balas que sobran sin cargar');
}
getBulletsLeft(48)

//1️⃣5️⃣ Camila tiene 100 hojas y quiere agruparlas en pilas de 6. ¿Cuántas hojas quedarán fuera?

const getSheetsLeft = (sheets) => {
  const heap = 6
  const sheetsLeft = getRest(sheets, heap);
  console.log(sheetsLeft + ' hojas que quedan fuera');
}
getSheetsLeft(100)







const getAddition = (amountItems, amountGroups) => amountItems + amountGroups;

//9️⃣ Camila tenía 45 libros y compró 23 más. ¿Cuántos libros tiene ahora?

const getAmountBooks = (booksHave, booksBuy) => {
  const amountBooks = getAddition (booksHave, booksBuy)
  console.log(amountBooks + ' libros en total');
}
getAmountBooks(45, 23);

//1️⃣4️⃣ Bego corrió 3 kilómetros por la mañana y 4 kilómetros por la tarde. ¿Cuántos kilómetros corrió en total?

const getkmInTotal = (morningKm, afternoonKm) => {
  const kmTotal = getAddition(morningKm, afternoonKm);
  console.log(kmTotal + ' km corrió Begoña');
}
getkmInTotal(3, 4);

//2️⃣7️⃣ Abby registró 17 casas por la mañana y 8 por la tarde. ¿Cuántas casas registró en total?

const getTotalHouses = (morningHouses, afternoonHouses) => {
  const totalHouses = getAddition(morningHouses, afternoonHouses);
  console.log(totalHouses + ' casas registradas');
}
getTotalHouses(17, 8);

//2️⃣5️⃣ Sabrina ahorró 120 euros en enero y 85 euros en febrero. ¿Cuánto dinero ha ahorrado en total?

const getMoneyEarned = (january, february) => {
  const moneyEarned = getAddition(january, february);
  console.log(moneyEarned + ' casas registradas');
}
getMoneyEarned(120, 85);







const getSubtract = (amountItems, total) => amountItems - total;

//1️⃣9️⃣ Camila y su hermano juntaron 135 monedas. Si Camila aportó 78 monedas, ¿cuántas monedas puso su hermano?

const getCoinsCount = (camilaCoins, totalCoins) => {
  const coinsCount = getSubtract (camilaCoins, totalCoins);
  console.log(coinsCount + ' monedas puso el hermano');
}
getCoinsCount(135, 78);

//2️⃣9️⃣ Camila tiene un descuento de 15 euros en un producto que cuesta 120 euros. ¿Cuánto cuesta el producto después del descuento?

const getPriceWithDiscount = (price, discount) => {
  const priceWithDiscount = getSubtract (price, discount,);
  console.log(priceWithDiscount + ' euros en descueto');
}
getPriceWithDiscount(120, 15);






//4️⃣ Sabrina recorre 90 kilómetros en 3 horas. ¿Cuántos kilómetros recorre en 2 horas?

const getKmInTime = (hours) => {
  const kmPerHour = getDivision (90, 3)
  const getKmInTime = getMultiplication (kmPerHour, hours)
  console.log(getKmInTime + ' km en 2 horas');
}
getKmInTime(2);

//1️⃣1️⃣ El coche de Bego consume 7 litros de gasolina por cada 100 kilómetros. Si el tanque tiene 42 litros, ¿cuántos kilómetros podrá recorrer?

const getAmountKmWithGasoline = (litersAvailable) => {
  const gasolinePerKm = getDivision (7,100)
  const amountKmWithGasoline = getMultiplication (litersAvailable, gasolinePerKm) 
  console.log(amountKmWithGasoline + ' km recorrerá el coche');
}
getAmountKmWithGasoline (42)
