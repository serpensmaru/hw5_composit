import logo from './logo.png';
import cloud from './cloud.png';
const logoUrl = "https://avatars.dzeninfra.ru/get-zen_doc/4080538/pub_63cad6a58238741554b8e2a6_63cada94287071113ee8bb55/scale_1200"

export const news = {
  "uniqId": "news",
  "interval": 8000,
  "firstInterval": 20000,
  "favoriteIcon": "dot",
  "showIcons": true,
  "newTabLinks": true,
  "data": {
    "region": {
      "showIcons": true,
      "newTabLinks": true,
      "statid": "news.region",
      "name": "region",
      "news": [{
        "full": "На Земле вечером 5 ноября прошла мощная магнитная буря уровня G3",
        "ishot": null,
        "href": "https://dzen.ru/news/story/NaZemle_vecherom_5_noyabrya_proshla_moshhnaya_magnitnaya_burya_urovnya_G3--3ca179132e28b795d19fac77e0b29d33?lang=ru&rubric=index&fan=1&stid=rQp59T46sW6a0J_QFmWw&t=1699262388&tt=true&persistent_id=2760605973&story=59e1dabf-36d2-575f-894e-7beb6fe662ff&issue_tld=ru",
        "agency_logo": logoUrl,
        "agency_name": "Lenta.ru"
      }, {
        "full": "Причиной стрельбы с пострадавшими в центре Москвы стала просьба закурить",
        "ishot": null,
        "href": "https://dzen.ru/news/story/Prichinoj_strelby_spostradavshimi_vcentre_Moskvy_stala_prosba_zakurit--4275232a329538d9c42af2b03f78723b?lang=ru&rubric=personal_feed&fan=1&stid=uapD1e3_amyDiAcs&t=1699262648&tt=true&persistent_id=2760616013&story=749ee135-2d18-5fac-b00c-a79e161153ce&issue_tld=ru",
        "agency_logo": logoUrl,
        "agency_name": "РБК"
      }, {
        "full": "Герой России Сайфуллин, тяжело раненный в ходе спецоперации, вернулся на фронт",
        "ishot": null,
        "href": "https://dzen.ru/news/story/Geroj_Rossii_Sajfullin_tyazhelo_ranennyj_vkhode_specoperacii_vernulsya_nafront--ca20f32a136f7ad622c60d6cda0d4258?lang=ru&rubric=index&fan=1&stid=rjPZwsKkYWr_zMEouw4r&t=1699262648&tt=true&persistent_id=2760610352&story=e9af9bb0-1222-5c4f-b64e-82a09d3c148a&issue_tld=ru",
        "agency_logo": logoUrl,
        "agency_name": "Российская газета"
      }, {
        "full": "Илон Маск запустил свой собственный искусственный интеллект",
        "ishot": null,
        "href": "https://dzen.ru/news/story/Ilon_Mask_zapustil_svoj_sobstvennyj_iskusstvennyj_intellekt--0bbe97121f0f8eedfe56772691c6fb37?lang=ru&rubric=personal_feed&fan=1&stid=_dmAtzMWGSVqZ5Lj96Ob&t=1699262648&persistent_id=2759824753&story=e4dc6760-4ebe-5d42-89be-48b8b61fff2d&issue_tld=ru",
        "agency_logo": logoUrl,
        "agency_name": "Первый женский"
      }, {
        "full": "У тюменцев остается меньше месяца, чтобы оплатить имущественные налоги",
        "ishot": null,
        "href": "https://dzen.ru/news/story/Utyumencev_ostaetsya_menshe_mesyaca_chtoby_oplatit_imushhestvennye_nalogi--53718215a80ba6993d86f61bcbb5ad4d?lang=ru&rubric=Tyumen&fan=1&stid=aw3FX7qaOM5NyYM-&t=1699262648&persistent_id=2760611717&story=d5b02f1e-1fe9-521b-b499-5519f0b8ad26&issue_tld=ru",
        "agency_logo": logoUrl,
        "agency_name": "Вслух.Ру"
      }, ]
    }
  },
  "header": [{
    "title": "Новсти",
    "link": "https://dzen.ru/news?issue_tld=ru",
  }, {
    "title": "Новости Тюмени",
    "link": "https://dzen.ru/news/region/tyumen?issue_tld=ru",
  }, {
    "title": "Интересное",
    "link": "https://dzen.ru/news/rubric/personal_feed?issue_tld=ru&utm_medium=topnews_personal&utm_source=morda_desktop",
  }],
};

export const stocks = [{
    "title": "USD",
    "value": "93,04",
    "value_change": "+0,12",
  }, {
    "title": "EUR",
    "value": "99,01",
    "value_change": "+0,05",
  },
  {
    "title": "Нефть",
    "value": "86,63",
    "value_change": "−0,25%",
  }
];

export const search = {
  "menu": [
    "Видео",
    "Картинки",
    "Новости",
    "Карты",
    "Маркет",
    "Переводчик",
    "Эфир",
    "еще",
  ],
  logo,
  "searchIdea": "Гектар земли даром",
};

export const banner = {
  "src": "https://placehold.it/918x114",
  "alt": "Banner"
};

export const weather = {
  icon: cloud,
  temp: '+2',
  morning: '-1',
  day: '+3',
};

export const broadcast = [{
    text: 'Терминатор 2',
    channel: ' СТС',
  },
  {
    text: "Простоквашино",
    channel: ' НТН',
  },
  {
    text: 'Нетология',
    channel: ' It-везде',
  },
];

export const mostVisited = [{
    category: 'Недвижимость',
    description: ' неторопитесь с покупкой недвижимости',
  },
  {
    category: 'Мегамаркет',
    description: 'горячая пятница',
  },
  {
    category: 'Авто',
    description: 'авито - лучшие предложения',
  },
];