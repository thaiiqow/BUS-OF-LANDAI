// ВСЕ МАРШРУТЫ ДОБАВЛЯЮТСЯ ТОЛЬКО ЗДЕСЬ, В КОДЕ.
// Каждая остановка: id (имя аудиофайла audio/<id>.mp3, только латиница/цифры/_ без пробелов),
// название на русском (ru) и ландайском (ld), координаты (lat, lng) и радиус срабатывания в метрах (radius).
const ROUTES = {
  "212": {
    number: "212",
    stops: [
      { id: "av_landay",     ru: "Автовокзал г.Ландай",          ld: "Aòđonh",                               lat: 55.7512, lng: 37.6184, radius: 40 },
      { id: "peresvetskaja", ru: "ул.Пересветская",              ld: "Cơu̇ Pẹ̉rẹ̉xvẹ̉txcaă",                    lat: 46.720833, lng: 142.577627, radius: 40 },
      { id: "shkola_7",      ru: "Школа №7",                     ld: "Dil №7",                               lat: 55.7610, lng: 37.6330, radius: 40 },
      { id: "skver_russkiy", ru: "Сквер Русский",                ld: "Nhả ƀay ọt Kan khỏ",                   lat: 55.7617, lng: 37.0929, radius: 40 },
      { id: "tc_ayisip",     ru: "ТЦ Айисип",                    ld: "Calan Aĭxịp",                          lat: 55.6720, lng: 37.0920, radius: 40 },
      { id: "ys_vokzal",     ru: "Ж/д Вокзал г.Южно-Сахалинск",  ld: "Kơrão ọt Aòđonh tói Ŭdcno-Xakhalinxc", lat: 46.957181, lng: 142.726734, radius: 40 }
    ]
  },
  "7": {
    number: "7",
    stops: [
      { id: "market",   ru: "Рынок",               ld: "Рынок (ld)",               lat: 55.7400, lng: 37.6000, radius: 40 },
      { id: "hospital", ru: "Больница",            ld: "Больница (ld)",            lat: 55.7450, lng: 37.6100, radius: 40 },
      { id: "central",  ru: "Центральная площадь", ld: "Центральная площадь (ld)", lat: 55.7512, lng: 37.6184, radius: 40 }
    ]
  }
};
