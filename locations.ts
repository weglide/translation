import { useI18nStore } from '../store/i18n.store'
import { LocationTranslations } from './translation.types'

const locations: LocationTranslations = {
  MA: {
    name: [
      'Morocco',
      'Marokko',
      'Maroc',
      'Marokko',
      'Maroko',
      'Marocco',
      'Maroko',
      '',
      ''
    ]
  },
  NA: {
    name: [
      'Namibia',
      'Namibia',
      'Namibie',
      'Namibië',
      'Namibie',
      'Namibia',
      'Namibia',
      '',
      ''
    ]
  },
  ZA: {
    name: [
      'South Africa',
      'Südafrika',
      'Afrique du Sud',
      'Zuid-Afrika',
      'Jižní Afrika',
      'Sud Africa',
      'Afryka Południowa',
      '',
      ''
    ]
  },
  CN: {
    name: [
      'China',
      'China',
      'Chine',
      'China',
      'Čína',
      'Cina',
      'Chiny',
      '',
      ''
    ]
  },
  IL: {
    name: [
      'Israel',
      'Israel',
      'Israël',
      'Israël',
      'Izrael',
      'Israele',
      'Izrael',
      '',
      ''
    ]
  },
  JP: {
    name: [
      'Japan',
      'Japan',
      'Japon',
      'Japan',
      'Japonsko',
      'Giappone',
      'Japonia',
      '',
      ''
    ]
  },
  TR: {
    name: [
      'Turkey',
      'Türkei',
      'Turquie',
      'Kalkoen',
      'Turecko',
      'Tacchino',
      'Turcja',
      '',
      ''
    ]
  },
  AT: {
    name: [
      'Austria',
      'Österreich',
      "L'Autriche",
      'Oostenrijk',
      'Rakousko',
      'Austria',
      'Austria',
      '',
      ''
    ],
    regions: {
      'AT-1': {
        name: [
          'Burgenland',
          'Burgenland',
          'Burgenland',
          'Burgenland',
          'Burgenland',
          'Burgenland',
          'Burgenland',
          '',
          ''
        ]
      },
      'AT-2': {
        name: [
          'Carinthia',
          'Kärnten',
          'Carinthie',
          'Karinthië',
          'Korutany',
          'Carinzia',
          'Karyntia',
          '',
          ''
        ]
      },
      'AT-3': {
        name: [
          'Lower Austria',
          'Niederösterreich',
          'Basse-Autriche',
          'Neder-Oostenrijk',
          'Dolní Rakousko',
          'Bassa Austria',
          'Dolna Austria',
          '',
          ''
        ]
      },
      'AT-4': {
        name: [
          'Upper Austria',
          'Oberösterreich',
          'Haute-Autriche',
          'Opper-Oostenrijk',
          'Horní Rakousko',
          'Alta Austria',
          'Górna Austria',
          '',
          ''
        ]
      },
      'AT-5': {
        name: [
          'Salzburg',
          'Salzburg',
          'Salzbourg',
          'Salzburg',
          'Salzburg',
          'Salisburgo',
          'Salzburg',
          '',
          ''
        ]
      },
      'AT-6': {
        name: [
          'Styria',
          'Steiermark',
          'Styrie',
          'Stiermarken',
          'Štýrsko',
          'Stiria',
          'Styria',
          '',
          ''
        ]
      },
      'AT-7': {
        name: [
          'Tirol',
          'Tirol',
          'Tyrol',
          'Tirol',
          'Tyrolsko',
          'Tirol',
          'Tirol',
          '',
          ''
        ]
      },
      'AT-8': {
        name: [
          'Vorarlberg',
          'Vorarlberg',
          'Vorarlberg',
          'Vorarlberg',
          'Vorarlberg',
          'Vorarlberg',
          'Vorarlberg',
          '',
          ''
        ]
      },
      'AT-9': {
        name: [
          'Vienna',
          'Wien',
          'Vienne',
          'Wenen',
          'Vídeň',
          'Vienna',
          'Wiedeń',
          '',
          ''
        ]
      }
    }
  },
  BA: {
    name: [
      'Bosnia and Herzegovina',
      'Bosnien-Herzegowina',
      'Bosnie Herzégovine',
      'Bosnië-Herzegovina',
      'Bosna a Hercegovina',
      'Bosnia Erzegovina',
      'Bośnia i Hercegowina',
      '',
      ''
    ]
  },
  BE: {
    name: [
      'Belgium',
      'Belgien',
      'Belgique',
      'Belgie',
      'Belgie',
      'Belgio',
      'Belgia',
      '',
      ''
    ]
  },
  BG: {
    name: [
      'Bulgaria',
      'Bulgarien',
      'Bulgarie',
      'Bulgarije ',
      'Bulharsko',
      'Bulgaria',
      'Bułgaria',
      '',
      ''
    ]
  },
  CH: {
    name: [
      'Switzerland',
      'Schweiz',
      'la Suisse',
      'Zwitserland',
      'Švýcarsko',
      'Svizzera',
      'Szwajcaria',
      '',
      ''
    ]
  },
  CZ: {
    name: [
      'Czech Republic',
      'Tschechien',
      'République Tchèque',
      'Tsjechië',
      'Česká republika',
      'Repubblica Ceca',
      'Republika Czeska',
      '',
      ''
    ]
  },
  DK: {
    name: [
      'Denmark',
      'Dänemark',
      'Danemark',
      'Denemarken',
      'Dánsko',
      'Danimarca',
      'Dania',
      '',
      ''
    ]
  },
  DE: {
    name: [
      'Germany',
      'Deutschland',
      'Allemagne',
      'Duitsland',
      'Německo',
      'Germania',
      'Niemcy',
      'Alemania',
      'Німеччина'
    ],
    regions: {
      'DE-BW': {
        name: [
          'Baden-Württemberg',
          'Baden-Württemberg',
          'Bade-Wurtemberg',
          'Baden-Württemberg',
          'Bádensko-Württembersko',
          'Baden-Württemberg',
          'Badenia-Wirtembergia',
          '',
          ''
        ]
      },
      'DE-BY': {
        name: [
          'Bavaria',
          'Bayern',
          'Bavière',
          'Beieren',
          'Bavorsko',
          'Baviera',
          'Bawaria',
          '',
          ''
        ]
      },
      'DE-BE': {
        name: [
          'Berlin',
          'Berlin',
          'Berlin',
          'Berlijn',
          'Berlín',
          'Berlino',
          'Berlin',
          '',
          ''
        ]
      },
      'DE-BB': {
        name: [
          'Brandenburg',
          'Brandenburg',
          'Brandebourg',
          'Brandenburg',
          'Brandenburg',
          'Brandeburgo',
          'Brandenburgia',
          '',
          ''
        ]
      },
      'DE-HB': {
        name: [
          'Bremen',
          'Bremen',
          'Brême',
          'Bremen',
          'Brémy',
          'Brema',
          'Brema',
          '',
          ''
        ]
      },
      'DE-HH': {
        name: [
          'Hamburg',
          'Hamburg',
          'Hambourg',
          'Hamburg',
          'Hamburg',
          'Amburgo',
          'Hamburg',
          '',
          ''
        ]
      },
      'DE-HE': {
        name: [
          'Hesse',
          'Hessen',
          'Hesse',
          'Hessen',
          'Hesse',
          'Assia',
          'Hesja',
          '',
          ''
        ]
      },
      'DE-MV': {
        name: [
          'Mecklenburg Western Pomerania',
          'Mecklenburg-Vorpommern',
          'Mecklembourg Poméranie occidentale',
          'Mecklenburg Voor-Pommeren',
          'Meklenbursko-Přední Pomořansko',
          'Meclemburgo-Pomerania occidentale',
          'Meklemburgia Pomorze Przednie',
          '',
          ''
        ]
      },
      'DE-NI': {
        name: [
          'Lower Saxony',
          'Niedersachsen',
          'Basse-Saxe',
          'Nedersaksen',
          'Dolní Sasko',
          'Bassa Sassonia',
          'Dolna Saksonia',
          '',
          ''
        ]
      },
      'DE-NW': {
        name: [
          'North Rhine-Westphalia',
          'Nordrhein-Westfalen',
          'Rhénanie du Nord-Westphalie',
          'Noordrijn-Westfalen',
          'Severní Porýní-Vestfálsko',
          'Renania settentrionale-Vestfalia',
          'Nadrenia Północna-Westfalia',
          '',
          ''
        ]
      },
      'DE-RP': {
        name: [
          'Rhineland-Palatinate',
          'Rheinland-Pfalz',
          'Rhénanie-Palatinat',
          'Rijnland-Palts',
          'Porýní-Falc',
          'Renania-Palatinato',
          'Nadrenia-Palatynat',
          '',
          ''
        ]
      },
      'DE-SL': {
        name: [
          'Saarland',
          'Saarland',
          'Sarre',
          'Saarland',
          'Sársko',
          'Saarland',
          'Saarland',
          '',
          ''
        ]
      },
      'DE-SN': {
        name: [
          'Saxony',
          'Sachsen',
          'Saxe',
          'Saksen',
          'Sasko',
          'Sassonia',
          'Saksonia',
          '',
          ''
        ]
      },
      'DE-ST': {
        name: [
          'Saxony-Anhalt',
          'Sachsen-Anhalt',
          'Saxe-Anhalt',
          'Saksen-Anhalt',
          'Sasko-Anhaltsko',
          'Sassonia-Anhalt',
          'Saksonia-Anhalt',
          '',
          ''
        ]
      },
      'DE-SH': {
        name: [
          'Schleswig-Holstein',
          'Schleswig-Holstein',
          'Schleswig-Holstein',
          'Sleeswijk-Holstein',
          'Schleswig-Holstein',
          'Schleswig-Holstein',
          'Szlezwik-Holsztyn',
          '',
          ''
        ]
      },
      'DE-TH': {
        name: [
          'Thuringa',
          'Thüringen',
          'Thuringe',
          'Thüringen',
          'Durynsko',
          'Turingia',
          'Turyngia',
          '',
          ''
        ]
      }
    }
  },
  ES: {
    name: [
      'Spain',
      'Spanien',
      'Espagne',
      'Spanje',
      'Španělsko',
      'Spagna',
      'Hiszpania',
      'España',
      'Іспанія'
    ]
  },
  FI: {
    name: [
      'Finland',
      'Finnland',
      'Finlande',
      'Finland',
      'Finsko',
      'Finlandia',
      'Finlandia',
      '',
      ''
    ]
  },
  FR: {
    name: [
      'France',
      'Frankreich',
      'France',
      'Frankrijk',
      'Francie',
      'Francia',
      'Francja',
      '',
      ''
    ],
    regions: {
      'FR-ARA': {
        name: [
          'Auvergne-Rhône-Alpes',
          'Auvergne-Rhône-Alpes',
          'Auvergne-Rhône-Alpes',
          'Auvergne-Rhône-Alpes',
          'Auvergne-Rhône-Alpes',
          'Auvergne-Rhône-Alpes',
          'Auvergne-Rhône-Alpes',
          '',
          ''
        ]
      },
      'FR-BFC': {
        name: [
          'Bourgogne-Franche-Comté',
          'Bourgogne-Franche-Comté',
          'Bourgogne-Franche-Comté',
          'Bourgogne-Franche-Comté',
          'Bourgogne-Franche-Comté',
          'Bourgogne-Franche-Comté',
          'Bourgogne-Franche-Comté',
          '',
          ''
        ]
      },
      'FR-BRE': {
        name: [
          'Brittany',
          'Bretagne',
          'Bretagne',
          'Bretagne',
          'Bretaň',
          'Bretagna',
          'Bretania',
          '',
          ''
        ]
      },
      'FR-CVL': {
        name: [
          'Centre-Val de Loire',
          'Centre-Val de Loire',
          'Centre-Val de Loire',
          'Centre-Val de Loire',
          'Centre-Val de Loire',
          'Centre-Val de Loire',
          'Centre-Val de Loire',
          '',
          ''
        ]
      },
      'FR-20R': {
        name: [
          'Corsica',
          'Korsika',
          'Corse',
          'Corsica',
          'Korsika',
          'Corsica',
          'Korsyka',
          '',
          ''
        ]
      },
      'FR-GES': {
        name: [
          'Grand-Est',
          'Grand-Est',
          'Grand-Est',
          'Grand-Est',
          'Grand-Est',
          'Grand-Est',
          'Grand-Est',
          '',
          ''
        ]
      },
      'FR-HDF': {
        name: [
          'Hauts-de-France',
          'Hauts-de-France',
          'Hauts-de-France',
          'Hauts-de-France',
          'Hauts-de-France',
          'Hauts-de-France',
          'Hauts-de-France',
          '',
          ''
        ]
      },
      'FR-IDF': {
        name: [
          'Île-de-France',
          'Île-de-France',
          'Île-de-France',
          'Île-de-France',
          'Île-de-France',
          'Île-de-France',
          'Île-de-France',
          '',
          ''
        ]
      },
      'FR-NOR': {
        name: [
          'Normandy',
          'Normandie',
          'Normandie',
          'Normandië',
          'Normandie',
          'Normandia',
          'Normandia',
          '',
          ''
        ]
      },
      'FR-NAQ': {
        name: [
          'New Aquitaine',
          'Neu-Aquitanien',
          'Nouvelle-Aquitaine',
          'Nieuw Aquitanië',
          'Nová Akvitánie',
          'Nuova Aquitania',
          'Nowa Akwitania',
          '',
          ''
        ]
      },
      'FR-OCC': {
        name: [
          'Occitania',
          'Okzitanien',
          'Occitanie',
          'Occitanië',
          'Okcitánie',
          'Occitania',
          'Oksytania',
          '',
          ''
        ]
      },
      'FR-PDL': {
        name: [
          'Pays-de-la-Loire',
          'Pays-de-la-Loire',
          'Pays-de-la-Loire',
          'Pays-de-la-Loire',
          'Pays-de-la-Loire',
          'Pays-de-la-Loire',
          'Pays-de-la-Loire',
          '',
          ''
        ]
      },
      'FR-PAC': {
        name: [
          'Provence-Alpes-Côte-d’Azur',
          'Provence-Alpes-Côte-d’Azur',
          'Provence-Alpes-Côte-d’Azur',
          'Provence-Alpes-Côte-d’Azur',
          'Provence-Alpes-Côte-d’Azur',
          'Provence-Alpes-Côte-d’Azur',
          'Provence-Alpes-Côte-d’Azur',
          '',
          ''
        ]
      }
    }
  },
  GB: {
    name: [
      'United Kingdom',
      'Vereinigtes Königreich',
      'Royaume-Uni',
      'Verenigd Koningkrijk',
      'Spojené království',
      'Regno Unito ',
      'Zjednoczone Królestwo',
      '',
      ''
    ]
  },
  GR: {
    name: [
      'Greece',
      'Griechenland',
      'Grèce',
      'Griekenland',
      'Řecko',
      'Grecia',
      'Grecja',
      '',
      ''
    ]
  },
  HR: {
    name: [
      'Croatia',
      'Kroatien',
      'Croatie',
      'Kroatië',
      'Chorvatsko',
      'Croazia',
      'Chorwacja',
      '',
      ''
    ]
  },
  HU: {
    name: [
      'Hungary',
      'Ungarn',
      'Hongrie',
      'Hongarije',
      'Maďarsko',
      'Ungheria',
      'Węgry',
      '',
      ''
    ]
  },
  IE: {
    name: [
      'Ireland',
      'Irland',
      'Irlande',
      'Ierland',
      'Irsko',
      'Irlanda',
      'Irlandia',
      '',
      ''
    ]
  },
  IS: {
    name: [
      'Iceland',
      'Island',
      'Islande',
      'IJsland',
      'Island',
      'Islanda',
      'Islandia',
      '',
      ''
    ]
  },
  IT: {
    name: [
      'Italy',
      'Italien',
      'Italie',
      'Italië',
      'Itálie',
      'Italia',
      'Włochy',
      '',
      ''
    ]
  },
  LT: {
    name: [
      'Lithuania',
      'Litauen',
      'Lituanie',
      'Litouwen',
      'Litva',
      'Lituania',
      'Litwa',
      '',
      ''
    ]
  },
  LU: {
    name: [
      'Luxembourg',
      'Luxemburg',
      'Luxembourg',
      'Luxemburg',
      'Lucembursko',
      'Lussemburgo',
      'Luksemburg',
      '',
      ''
    ]
  },
  ME: {
    name: [
      'Montenegro',
      'Montenegro',
      'Monténégro',
      'Montenegro',
      'Černá Hora',
      'Montenegro',
      'Czarnogóra',
      '',
      ''
    ]
  },
  MK: {
    name: [
      'North Macedonia',
      'Nordmazedonien',
      'Macédoine du Nord',
      'Noord-Macedonië',
      'Severní Makedonie',
      'Macedonia del Nord',
      'Macedonia Północna',
      '',
      ''
    ]
  },
  NL: {
    name: [
      'Netherlands',
      'Niederlande',
      'Pays-Bas',
      'Nederland',
      'Holandsko',
      'Olanda',
      'Holandia',
      '',
      ''
    ]
  },
  NO: {
    name: [
      'Norway',
      'Norwegen',
      'Norvège',
      'Noorwegen',
      'Norsko',
      'Norvegia',
      'Norwegia',
      '',
      ''
    ]
  },
  PL: {
    name: [
      'Poland',
      'Polen',
      'Pologne',
      'Polen',
      'Polsko',
      'Polonia',
      'Polska',
      '',
      ''
    ]
  },
  PT: {
    name: [
      'Portugal',
      'Portugal',
      'le Portugal',
      'Portugal',
      'Portugalsko',
      'Portogallo',
      'Portugalia',
      '',
      ''
    ]
  },
  RO: {
    name: [
      'Rumania',
      'Rumänien',
      'La Roumanie',
      'Roemenië',
      'Rumunsko',
      'Romania',
      'Rumunia',
      '',
      ''
    ]
  },
  RS: {
    name: [
      'Serbia',
      'Serbien',
      'Serbie',
      'Servië',
      'Srbsko',
      'Serbia',
      'Serbia',
      '',
      ''
    ]
  },
  RU: {
    name: [
      'Russia',
      'Russland',
      'Russie',
      'Rusland',
      'Rusko',
      'Russia',
      'Rosja',
      '',
      ''
    ]
  },
  SE: {
    name: [
      'Sweden',
      'Schweden',
      'Suède',
      'Zweden',
      'Švédsko',
      'Svezia',
      'Szwecja',
      '',
      ''
    ]
  },
  SK: {
    name: [
      'Slovakia',
      'Slowakei',
      'Slovaquie',
      'Slowakije',
      'Slovensko',
      'Slovacchia',
      'Słowacja',
      '',
      ''
    ]
  },
  SI: {
    name: [
      'Slovenia',
      'Slovenien',
      'Slovénie',
      'Slovenië',
      'Slovinsko',
      'Slovenia',
      'Słowenia',
      'Eslovenia',
      'Словенія'
    ]
  },
  UA: {
    name: [
      'Ukraine',
      'Ukraine',
      'Ukraine',
      'Oekraïne',
      'Ukrajina',
      'Ucraina',
      'Ukraina',
      'Ucrania',
      'Україна'
    ]
  },
  AU: {
    name: [
      'Australia',
      'Australien',
      'Australie',
      'Australië',
      'Austrálie',
      'Australia',
      'Australia',
      '',
      ''
    ],
    regions: {
      'AU-NSW': {
        name: [
          'New South Wales',
          'New South Wales',
          'Nouvelle Galles du Sud',
          'Nieuw Zuid-Wales',
          'Nový Jížní Wales',
          'Nuovo Galles del Sud',
          'Nowa Południowa Walia',
          '',
          ''
        ]
      },
      'AU-NT': {
        name: [
          'Northern Territory',
          'Northern Territory',
          'Territoire du Nord',
          'Noordelijk Territorium',
          'Severní území',
          'Territori del Nord',
          'Północne terytorium',
          '',
          ''
        ]
      },
      'AU-QLD': {
        name: [
          'Queensland',
          'Queensland',
          'Queensland',
          'Queensland',
          'Queensland',
          'Queensland',
          'Queensland',
          '',
          ''
        ]
      },
      'AU-SA': {
        name: [
          'South Australia',
          'Südaustralien',
          'Australie du Sud',
          'Zuid Australië',
          'jižní Austrálie',
          "sud dell'Australia",
          'Południowa Australia',
          '',
          ''
        ]
      },
      'AU-TAS': {
        name: [
          'Tasmania',
          'Tasmanien',
          'Tasmanie',
          'Tasmanië',
          'Tasmánie',
          'Tasmania',
          'Tasmania',
          '',
          ''
        ]
      },
      'AU-VIC': {
        name: [
          'Victoria',
          'Victoria',
          'Victoria',
          'Victoria',
          'Victoria',
          'Victoria',
          'Wiktoria',
          '',
          ''
        ]
      },
      'AU-WA': {
        name: [
          'Western Australia',
          'Westaustralien',
          'Australie occidentale',
          'West Australië',
          'západní Austrálie',
          'Australia Occidentale',
          'Zachodnia australia',
          '',
          ''
        ]
      }
    }
  },
  NZ: {
    name: [
      'New Zealand',
      'Neuseeland',
      'Nouvelle-Zélande',
      'Nieuw-Zeeland',
      'Nový Zéland',
      'Nuova Zelanda',
      'Nowa Zelandia',
      '',
      ''
    ],
    regions: {
      'NZ-N': {
        name: [
          'North Island',
          'Nordinsel',
          'île du Nord',
          'Noord eiland',
          'Severní ostrov',
          'Isola del nord',
          'Północna Wyspa',
          '',
          ''
        ]
      },
      'NZ-S': {
        name: [
          'South Island',
          'Südinsel',
          'île du sud',
          'zuidelijk eiland',
          'Jižní ostrov',
          'Isola del Sud',
          'Południowa Wyspa',
          '',
          ''
        ]
      }
    }
  },
  CA: {
    name: [
      'Canada',
      'Kanada',
      'Canada',
      'Canada',
      'Kanada',
      'Canada',
      'Kanada',
      '',
      ''
    ],
    regions: {
      'CA-AB': {
        name: [
          'Alberta',
          'Alberta',
          'Alberta',
          'Alberta',
          'Alberta',
          'Alberta',
          'Alberta',
          '',
          ''
        ]
      },
      'CA-BC': {
        name: [
          'British Colombia',
          'British Colombia',
          'Colombie britannique',
          'Brits Columbia',
          'Britská Kolumbie',
          'British Columbia',
          'Brytyjska Kolumbia',
          '',
          ''
        ]
      },
      'CA-MB': {
        name: [
          'Manitoba',
          'Manitoba',
          'Manitoba',
          'Manitoba',
          'Manitoba',
          'Manitoba',
          'Manitoba',
          '',
          ''
        ]
      },
      'CA-ON': {
        name: [
          'Ontario',
          'Ontario',
          'Ontario',
          'Ontario',
          'Ontario',
          'Ontario',
          'Ontario',
          '',
          ''
        ]
      },
      'CA-QC': {
        name: [
          'Québec',
          'Québec',
          'Québec',
          'Québec',
          'Québec',
          'Québec',
          'Québec',
          '',
          ''
        ]
      },
      'CA-SK': {
        name: [
          'Saskatchewan',
          'Saskatchewan',
          'Saskatchewan',
          'Saskatchewan',
          'Saskatchewan',
          'Saskatchewan',
          'Saskatchewan',
          '',
          ''
        ]
      }
    }
  },
  MX: {
    name: [
      'Mexico',
      'Mexiko',
      'Mexique',
      'Mexico',
      'Mexiko',
      'Messico',
      'Meksyk',
      '',
      ''
    ]
  },
  US: {
    name: [
      'United States',
      'Vereinigte Staaten',
      'États-Unis',
      'Verenigde Staten',
      'Spojené státy',
      'stati Uniti',
      'Stany Zjednoczone',
      '',
      ''
    ],
    regions: {
      'US-AL': {
        name: [
          'Alabama',
          'Alabama',
          'Alabama',
          'Alabama',
          'Alabama',
          'Alabama',
          'Alabama',
          '',
          ''
        ]
      },
      'US-AK': {
        name: [
          'Alaska',
          'Alaska',
          'Alaska',
          'Alaska',
          'Aljaška',
          'Alaska',
          'Alaska',
          '',
          ''
        ]
      },
      'US-AZ': {
        name: [
          'Arizona',
          'Arizona',
          'Arizona',
          'Arizona',
          'Arizona',
          'Arizona',
          'Arizona',
          '',
          ''
        ]
      },
      'US-AR': {
        name: [
          'Arkansas',
          'Arkansas',
          'Arkansas',
          'Arkansas',
          'Arkansas',
          'Arkansas',
          'Arkansas',
          '',
          ''
        ]
      },
      'US-CA': {
        name: [
          'California',
          'California',
          'Californie',
          'Californië',
          'Kalifornie',
          'California',
          'Kalifornia',
          '',
          ''
        ]
      },
      'US-CO': {
        name: [
          'Colorado',
          'Colorado',
          'Colorado',
          'Colorado',
          'Colorado',
          'Colorado',
          'Kolorado',
          '',
          ''
        ]
      },
      'US-CT': {
        name: [
          'Connecticut',
          'Connecticut',
          'Connecticut',
          'Connecticut',
          'Connecticut',
          'Connecticut',
          'Connecticut',
          '',
          ''
        ]
      },
      'US-DE': {
        name: [
          'Delaware',
          'Delaware',
          'Delaware',
          'Delaware',
          'Delaware',
          'Delaware',
          'Delaware',
          '',
          ''
        ]
      },
      'US-FL': {
        name: [
          'Florida',
          'Florida',
          'Floride',
          'Florida',
          'Florida',
          'Florida',
          'Floryda',
          '',
          ''
        ]
      },
      'US-GA': {
        name: [
          'Georgia',
          'Georgia',
          'Géorgie',
          'Georgië',
          'Gruzie',
          'Georgia',
          'Gruzja',
          '',
          ''
        ]
      },
      'US-HI': {
        name: [
          'Hawaii',
          'Hawaii',
          'Hawaii',
          'Hawaii',
          'Havaj',
          'Hawaii',
          'Hawaje',
          '',
          ''
        ]
      },
      'US-ID': {
        name: [
          'Idaho',
          'Idaho',
          'Idaho',
          'Idaho',
          'Idaho',
          'Idaho',
          'Idaho',
          '',
          ''
        ]
      },
      'US-IL': {
        name: [
          'Illinois',
          'Illinois',
          'Illinois',
          'Illinois',
          'Illinois',
          'Illinois',
          'Illinois',
          '',
          ''
        ]
      },
      'US-IN': {
        name: [
          'Indiana',
          'Indiana',
          'Indiana',
          'Indiana',
          'Indiana',
          'Indiana',
          'Indiana',
          '',
          ''
        ]
      },
      'US-IA': {
        name: [
          'Iowa',
          'Iowa',
          'Iowa',
          'Iowa',
          'Iowo',
          'Iowa',
          'Iowa',
          '',
          ''
        ]
      },
      'US-KS': {
        name: [
          'Kansas',
          'Kansas',
          'Kansas',
          'Kansas',
          'Kansas',
          'Kansas',
          'Kansas',
          '',
          ''
        ]
      },
      'US-KY': {
        name: [
          'Kentucky',
          'Kentucky',
          'Kentucky',
          'Kentucky',
          'Kentucky',
          'Kentucky',
          'Kentucky',
          '',
          ''
        ]
      },
      'US-LA': {
        name: [
          'Louisiana',
          'Louisiana',
          'Louisiane',
          'Louisiana',
          'Louisiana',
          'Louisiana',
          'Luizjana',
          '',
          ''
        ]
      },
      'US-ME': {
        name: [
          'Maine',
          'Maine',
          'Maine',
          'Maine',
          'Maine',
          'Maine',
          'Maine',
          '',
          ''
        ]
      },
      'US-MD': {
        name: [
          'Maryland',
          'Maryland',
          'Maryland',
          'Maryland',
          'Maryland',
          'Maryland',
          'Maryland',
          '',
          ''
        ]
      },
      'US-MA': {
        name: [
          'Massachusetts',
          'Massachusetts',
          'Massachusetts',
          'Massachusetts',
          'Massachusetts',
          'Massachusetts',
          'Massachusetts',
          '',
          ''
        ]
      },
      'US-MI': {
        name: [
          'Michigan',
          'Michigan',
          'Michigan',
          'Michigan',
          'Michigan',
          'Michigan',
          'Michigan',
          '',
          ''
        ]
      },
      'US-MN': {
        name: [
          'Minnesota',
          'Minnesota',
          'Minnesota',
          'Minnesota',
          'Minnesota',
          'Minnesota',
          'Minnesota',
          '',
          ''
        ]
      },
      'US-MS': {
        name: [
          'Mississippi',
          'Mississippi',
          'Mississippi',
          'Mississippi',
          'Mississippi',
          'Mississippi',
          'Mississippi',
          '',
          ''
        ]
      },
      'US-MO': {
        name: [
          'Missouri',
          'Missouri',
          'Missouri',
          'Missouri',
          'Missouri',
          'Missouri',
          'Missouri',
          '',
          ''
        ]
      },
      'US-MT': {
        name: [
          'Montana',
          'Montana',
          'Montana',
          'Montana',
          'Montana',
          'Montana',
          'Montana',
          '',
          ''
        ]
      },
      'US-NE': {
        name: [
          'Nebraska',
          'Nebraska',
          'Nebraska',
          'Nebraska',
          'Nebraska',
          'Nebraska',
          'Nebraska',
          '',
          ''
        ]
      },
      'US-NV': {
        name: [
          'Nevada',
          'Nevada',
          'Nevada',
          'Nevada',
          'Nevada',
          'Nevada',
          'Nevada',
          '',
          ''
        ]
      },
      'US-NH': {
        name: [
          'New Hampshire',
          'New Hampshire',
          'New Hampshire',
          'New Hampshire',
          'New Hampshire',
          'New Hampshire',
          'New Hampshire',
          '',
          ''
        ]
      },
      'US-NJ': {
        name: [
          'New Jersey',
          'New Jersey',
          'New Jersey',
          'New Jersey',
          'New Jersey',
          'New Jersey',
          'New Jersey',
          '',
          ''
        ]
      },
      'US-NM': {
        name: [
          'New Mexico',
          'New Mexico',
          'Nouveau Mexique',
          'New Mexico',
          'Nové Mexiko',
          'Nuovo Messico',
          'Nowy Meksyk',
          '',
          ''
        ]
      },
      'US-NY': {
        name: [
          'New York',
          'New York',
          'New York',
          'New York',
          'New York',
          'New York',
          'Nowy Jork',
          '',
          ''
        ]
      },
      'US-NC': {
        name: [
          'North Carolina',
          'North Carolina',
          'Caroline du Nord',
          'Noord Carolina',
          'Severní Karolina',
          'Carolina del Nord',
          'Karolina Północna',
          '',
          ''
        ]
      },
      'US-ND': {
        name: [
          'North Dakota',
          'North Dakota',
          'Dakota du nord',
          'Noord-Dakota',
          'Severní Dakota',
          'Nord Dakota',
          'Północna Dakota',
          '',
          ''
        ]
      },
      'US-OH': {
        name: [
          'Ohio',
          'Ohio',
          'Ohio',
          'Ohio',
          'Ohio',
          'Ohio',
          'Ohio',
          '',
          ''
        ]
      },
      'US-OK': {
        name: [
          'Oklahoma',
          'Oklahoma',
          'Oklahoma',
          'Oklahoma',
          'Oklahoma',
          'Oklahoma',
          'Oklahoma',
          '',
          ''
        ]
      },
      'US-OR': {
        name: [
          'Oregon',
          'Oregon',
          'Oregon',
          'Oregon',
          'Oregon',
          'Oregon',
          'Oregon',
          '',
          ''
        ]
      },
      'US-PA': {
        name: [
          'Pennsylvania',
          'Pennsylvania',
          'Pennsylvanie',
          'Pennsylvania',
          'Pensylvánie',
          'Pennsylvania',
          'Pensylwania',
          '',
          ''
        ]
      },
      'US-RI': {
        name: [
          'Rhode Island',
          'Rhode Island',
          'Rhode Island',
          'Rhode Island',
          'Rhode Island',
          'Rhode Island',
          'Rhode Island',
          '',
          ''
        ]
      },
      'US-SC': {
        name: [
          'South Carolina',
          'South Carolina',
          'Caroline du Sud',
          'zuid Carolina',
          'Jižní Karolína',
          'Carolina del Sud',
          'Karolina Południowa',
          '',
          ''
        ]
      },
      'US-SD': {
        name: [
          'South Dakota',
          'South Dakota',
          'Dakota du Sud',
          'zuid Dakota',
          'Jižní Dakota',
          'Sud Dakota',
          'Południowa Dakota',
          '',
          ''
        ]
      },
      'US-TN': {
        name: [
          'Tennessee',
          'Tennessee',
          'Tennessee',
          'Tennessee',
          'Tennessee',
          'Tennessee',
          'Tennessee',
          '',
          ''
        ]
      },
      'US-TX': {
        name: [
          'Texas',
          'Texas',
          'Texas',
          'Texas',
          'Texas',
          'Texas',
          'Teksas',
          '',
          ''
        ]
      },
      'US-UT': {
        name: [
          'Utah',
          'Utah',
          'Utah',
          'Utah',
          'Utah',
          'Utah',
          'Utah',
          '',
          ''
        ]
      },
      'US-VT': {
        name: [
          'Vermont',
          'Vermont',
          'Vermont',
          'Vermont',
          'Vermont',
          'Vermont',
          'Vermont',
          '',
          ''
        ]
      },
      'US-VA': {
        name: [
          'Virginia',
          'Virginia',
          'Virginie',
          'Virginia',
          'Virginie',
          'Virginia',
          'Virginia',
          '',
          ''
        ]
      },
      'US-WA': {
        name: [
          'Washington',
          'Washington',
          'Washington',
          'Washington',
          'Washington',
          'Washington',
          'Washington',
          '',
          ''
        ]
      },
      'US-WV': {
        name: [
          'West Virginia',
          'West Virginia',
          'Virginie-Occidentale',
          'Virginia Occidentale',
          'západní Virginie',
          "Virginia dell'ovest",
          'Wirginia Zachodnia',
          '',
          ''
        ]
      },
      'US-WI': {
        name: [
          'Wisconsin',
          'Wisconsin',
          'Wisconsin',
          'Wisconsin',
          'Wisconsin',
          'Wisconsin',
          'Wisconsin',
          '',
          ''
        ]
      },
      'US-WY': {
        name: [
          'Wyoming',
          'Wyoming',
          'Wyoming',
          'Wyoming',
          'Wyoming',
          'Wyoming',
          'Wyoming',
          '',
          ''
        ]
      }
    }
  },
  AR: {
    name: [
      'Argentinia',
      'Argentinien',
      'Argentine',
      'Argentinië',
      'Argentina',
      'Argentina',
      'Argentyna',
      '',
      ''
    ]
  },
  BR: {
    name: [
      'Brazil',
      'Brasilien',
      'Brésil',
      'Brazilië',
      'Brazílie',
      'Brasile',
      'Brazylia',
      '',
      ''
    ]
  },
  CL: {
    name: [
      'Chile',
      'Chile',
      'Chili',
      'Chili',
      'Chile',
      'Chile',
      'Chile',
      '',
      ''
    ]
  },
  CO: {
    name: [
      'Colombia',
      'Kolumbien',
      'Colombie',
      'Colombia',
      'Kolumbie',
      'Colombia',
      'Kolumbia',
      '',
      ''
    ]
  },
  EC: {
    name: [
      'Ecuador',
      'Ecuador',
      'Equateur',
      'Ecuador',
      'Ekvádor',
      'Ecuador',
      'Ekwador',
      '',
      ''
    ]
  }
}

export function i18nLocation (locationString: string): { country?: string, region?: string } {
  const i18nStore = useI18nStore()
  const arr = locationString.split('-')
  const countryString = arr[0]
  const location: { country?: string, region?: string } = {}

  const country = locations[countryString]
  if (country) {
    if (country.name[i18nStore.languageIndex] === '') {
      // english
      location.country = country.name[0]
    } else {
      location.country = country.name[i18nStore.languageIndex]
    }

    if (country.regions && country.regions[locationString]) {
      const region = country.regions[locationString]
      if (region.name[i18nStore.languageIndex] === '') {
        // english
        location.region = region.name[0]
      } else {
        location.region = region.name[i18nStore.languageIndex]
      }
    }
  }

  return location
}
