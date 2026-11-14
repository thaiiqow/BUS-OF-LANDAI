// ГОРОДА. Для каждого города: свои маршруты и своя папка озвучки audio/<id города>/
//   audio/<id города>/phrases/stop.mp3, phrases/next.mp3 — фразы «Остановка» / «Следующая остановка»
//   audio/<id города>/<id остановки>.mp3                 — названия остановок
// Маршруты города лежат в отдельном файле (routes.js — Ландай, формат тот же: const ROUTES = {...}).
// Чтобы добавить город: создайте routes_<город>.js с const ROUTES_<ГОРОД> = {...},
// подключите его в index.html перед cities.js и добавьте строку ниже.
const CITIES = {
  const CITIES = {
  landay: { ru: "Ландай", ld: "Lanđai", routes: ROUTES },
  yuzhno: { ru: "Южно-Сахалинск", ld: "Ŭdcno-Xakhalinxc", routes: ROUTES_YUZHNO }
  // example: { ru: "Название", ld: "Название (ld)", routes: ROUTES_EXAMPLE }
};
