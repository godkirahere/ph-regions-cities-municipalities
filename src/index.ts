export interface City {
  id: number;
  name: string;
}

export interface State {
  iso2: string;
  name: string;
  id: number;
}

export interface Locations {
  statesMap: Record<string, City[]>;
  states: State[];
}

const locations: Locations = {
  statesMap: {
    PH104200000: [
      {
        id: 0,
        name: "Ozamis City",
      },
      {
        id: 2050,
        name: "Jimenez",
      },
      {
        id: 2440,
        name: "Sapang Dalaga",
      },
      {
        id: 6110,
        name: "Lopez Jaena",
      },
      {
        id: 14230,
        name: "Oroquieta City",
      },
      {
        id: 14680,
        name: "Tangub City",
      },
      {
        id: 20820,
        name: "Bonifacio",
      },
      {
        id: 20970,
        name: "Panaon",
      },
      {
        id: 22860,
        name: "Don Victoriano Chiongbian",
      },
      {
        id: 29930,
        name: "Aloran",
      },
      {
        id: 31020,
        name: "Tudela",
      },
      {
        id: 81570,
        name: "Calamba",
      },
      {
        id: 102330,
        name: "Sinacaban",
      },
      {
        id: 143900,
        name: "Baliangao",
      },
    ],
    PH082600000: [
      {
        id: 10,
        name: "Sulat",
      },
      {
        id: 700,
        name: "Salcedo",
      },
      {
        id: 3710,
        name: "Oras",
      },
      {
        id: 3730,
        name: "Jipapad",
      },
      {
        id: 4220,
        name: "Arteche",
      },
      {
        id: 4230,
        name: "General Macarthur",
      },
      {
        id: 5160,
        name: "City of Borongan",
      },
      {
        id: 5190,
        name: "Quinapondan",
      },
      {
        id: 7000,
        name: "Guiuan",
      },
      {
        id: 8060,
        name: "San Policarpo",
      },
      {
        id: 13320,
        name: "Llorente",
      },
      {
        id: 13770,
        name: "Mercedes",
      },
      {
        id: 19100,
        name: "Balangiga",
      },
      {
        id: 27050,
        name: "Can Avid",
      },
      {
        id: 30830,
        name: "Balangkayan",
      },
      {
        id: 38530,
        name: "Giporlos",
      },
      {
        id: 38540,
        name: "Hernani",
      },
      {
        id: 38570,
        name: "Maslog",
      },
      {
        id: 61380,
        name: "San Julian",
      },
      {
        id: 61620,
        name: "Lawaan",
      },
      {
        id: 61630,
        name: "Maydolong",
      },
      {
        id: 66640,
        name: "Taft",
      },
    ],
    PH160200000: [
      {
        id: 20,
        name: "Jabonga",
      },
      {
        id: 890,
        name: "Buenavista",
      },
      {
        id: 1660,
        name: "Nasipit",
      },
      {
        id: 2400,
        name: "Butuan City",
      },
      {
        id: 8880,
        name: "Las Nieves",
      },
      {
        id: 13650,
        name: "City of Cabadbaran",
      },
      {
        id: 27430,
        name: "Remedios T Romualdez",
      },
      {
        id: 34680,
        name: "Kitcharao",
      },
      {
        id: 76840,
        name: "Tubay",
      },
    ],
    PH034900000: [
      {
        id: 30,
        name: "Llanera",
      },
      {
        id: 100,
        name: "San Jose City",
      },
      {
        id: 2100,
        name: "Cabanatuan City",
      },
      {
        id: 2770,
        name: "Guimba",
      },
      {
        id: 4190,
        name: "Santa Rosa",
      },
      {
        id: 4440,
        name: "Lupao",
      },
      {
        id: 6310,
        name: "Nampicuan",
      },
      {
        id: 8080,
        name: "Talugtug",
      },
      {
        id: 10940,
        name: "Talavera",
      },
      {
        id: 13120,
        name: "Bongabon",
      },
      {
        id: 14650,
        name: "Licab",
      },
      {
        id: 16550,
        name: "Palayan City",
      },
      {
        id: 22150,
        name: "General Tinio",
      },
      {
        id: 22770,
        name: "Cabiao",
      },
      {
        id: 23380,
        name: "Gabaldon",
      },
      {
        id: 23390,
        name: "Science City of Muñoz",
      },
      {
        id: 27480,
        name: "General Mamerto Natividad",
      },
      {
        id: 27640,
        name: "City of Gapan",
      },
      {
        id: 31190,
        name: "Cuyapo",
      },
      {
        id: 37390,
        name: "Carranglan",
      },
      {
        id: 59430,
        name: "Laur",
      },
      {
        id: 66740,
        name: "Zaragoza",
      },
      {
        id: 71640,
        name: "Aliaga",
      },
      {
        id: 81700,
        name: "San Leonardo",
      },
      {
        id: 101040,
        name: "Pantabangan",
      },
      {
        id: 104180,
        name: "Jaen",
      },
      {
        id: 107830,
        name: "Peñaranda",
      },
    ],
    PH056200000: [
      {
        id: 40,
        name: "Bulan",
      },
      {
        id: 580,
        name: "Pilar",
      },
      {
        id: 1430,
        name: "City of Sorsogon",
      },
      {
        id: 2060,
        name: "Casiguran",
      },
      {
        id: 4020,
        name: "Magallanes",
      },
      {
        id: 5880,
        name: "Barcelona",
      },
      {
        id: 6920,
        name: "Donsol",
      },
      {
        id: 9700,
        name: "Castilla",
      },
      {
        id: 12510,
        name: "Juban",
      },
      {
        id: 15330,
        name: "Gubat",
      },
      {
        id: 19550,
        name: "Irosin",
      },
      {
        id: 21100,
        name: "Bulusan",
      },
      {
        id: 30700,
        name: "Matnog",
      },
      {
        id: 61870,
        name: "Santa Magdalena",
      },
      {
        id: 82860,
        name: "Prieto Diaz",
      },
    ],
    PH083700000: [
      {
        id: 50,
        name: "Mayorga",
      },
      {
        id: 200,
        name: "Dagami",
      },
      {
        id: 470,
        name: "Barugo",
      },
      {
        id: 480,
        name: "Calubian",
      },
      {
        id: 860,
        name: "Villaba",
      },
      {
        id: 1440,
        name: "Javier",
      },
      {
        id: 1450,
        name: "Burauen",
      },
      {
        id: 1780,
        name: "Tanauan",
      },
      {
        id: 2620,
        name: "Matalom",
      },
      {
        id: 4410,
        name: "Kananga",
      },
      {
        id: 4600,
        name: "Hilongos",
      },
      {
        id: 4660,
        name: "Ormoc City",
      },
      {
        id: 5030,
        name: "Jaro",
      },
      {
        id: 5300,
        name: "Abuyog",
      },
      {
        id: 5850,
        name: "Dulag",
      },
      {
        id: 6000,
        name: "Julita",
      },
      {
        id: 7880,
        name: "City of Baybay",
      },
      {
        id: 8580,
        name: "Tabontabon",
      },
      {
        id: 10460,
        name: "Hindang",
      },
      {
        id: 10570,
        name: "Palo",
      },
      {
        id: 12230,
        name: "Isabel",
      },
      {
        id: 13330,
        name: "Albuera",
      },
      {
        id: 14220,
        name: "Inopacan",
      },
      {
        id: 14770,
        name: "Pastrana",
      },
      {
        id: 16160,
        name: "Alangalang",
      },
      {
        id: 16310,
        name: "Tunga",
      },
      {
        id: 19020,
        name: "Leyte",
      },
      {
        id: 19680,
        name: "Babatngon",
      },
      {
        id: 22960,
        name: "Carigara",
      },
      {
        id: 24640,
        name: "Palompon",
      },
      {
        id: 27090,
        name: "Matag Ob",
      },
      {
        id: 31430,
        name: "Capoocan",
      },
      {
        id: 39110,
        name: "Tacloban City",
      },
      {
        id: 67740,
        name: "Macarthur",
      },
      {
        id: 75130,
        name: "Merida",
      },
      {
        id: 92170,
        name: "Tolosa",
      },
      {
        id: 93830,
        name: "Tabango",
      },
      {
        id: 112660,
        name: "Mahaplag",
      },
    ],
    PH141100000: [
      {
        id: 60,
        name: "Baguio City",
      },
      {
        id: 600,
        name: "Buguias",
      },
      {
        id: 800,
        name: "Atok",
      },
      {
        id: 1820,
        name: "Kabayan",
      },
      {
        id: 5440,
        name: "La Trinidad",
      },
      {
        id: 9070,
        name: "Tublay",
      },
      {
        id: 9270,
        name: "Bokod",
      },
      {
        id: 10060,
        name: "Itogon",
      },
      {
        id: 10070,
        name: "Bakun",
      },
      {
        id: 13000,
        name: "Tuba",
      },
      {
        id: 20430,
        name: "Kibungan",
      },
      {
        id: 22540,
        name: "Sablan",
      },
      {
        id: 27230,
        name: "Kapangan",
      },
      {
        id: 29370,
        name: "Mankayan",
      },
    ],
    PH042100000: [
      {
        id: 70,
        name: "General Emilio Aguinaldo",
      },
      {
        id: 1490,
        name: "Silang",
      },
      {
        id: 4060,
        name: "Trece Martires City",
      },
      {
        id: 4470,
        name: "Indang",
      },
      {
        id: 5390,
        name: "Imus City",
      },
      {
        id: 5810,
        name: "Gen Mariano Alvarez",
      },
      {
        id: 6800,
        name: "Bacoor City",
      },
      {
        id: 6990,
        name: "City of General Trias",
      },
      {
        id: 8740,
        name: "Tanza",
      },
      {
        id: 10190,
        name: "Alfonso",
      },
      {
        id: 13700,
        name: "Mendez",
      },
      {
        id: 16120,
        name: "Tagaytay City",
      },
      {
        id: 22930,
        name: "Naic",
      },
      {
        id: 31230,
        name: "Kawit",
      },
      {
        id: 33440,
        name: "Amadeo",
      },
      {
        id: 33850,
        name: "Carmona",
      },
      {
        id: 38260,
        name: "Cavite City",
      },
      {
        id: 84450,
        name: "Maragondon",
      },
      {
        id: 84600,
        name: "Ternate",
      },
      {
        id: 93020,
        name: "City of Dasmariñas",
      },
      {
        id: 223780,
        name: "Noveleta",
      },
    ],
    PH045600000: [
      {
        id: 80,
        name: "Guinayangan",
      },
      {
        id: 380,
        name: "Lucban",
      },
      {
        id: 810,
        name: "Infanta",
      },
      {
        id: 1060,
        name: "Mauban",
      },
      {
        id: 1460,
        name: "San Narciso",
      },
      {
        id: 1960,
        name: "Gumaca",
      },
      {
        id: 3400,
        name: "Calauag",
      },
      {
        id: 4710,
        name: "Catanauan",
      },
      {
        id: 4720,
        name: "Mulanay",
      },
      {
        id: 5780,
        name: "Tagkawayan",
      },
      {
        id: 7180,
        name: "City of Tayabas",
      },
      {
        id: 7450,
        name: "Unisan",
      },
      {
        id: 8180,
        name: "Sampaloc",
      },
      {
        id: 8200,
        name: "Pagbilao",
      },
      {
        id: 8230,
        name: "Burdeos",
      },
      {
        id: 8350,
        name: "Patnanungan",
      },
      {
        id: 9720,
        name: "Macalelon",
      },
      {
        id: 9730,
        name: "Pitogo",
      },
      {
        id: 10840,
        name: "Tiaong",
      },
      {
        id: 10870,
        name: "Polillo",
      },
      {
        id: 11400,
        name: "Alabat",
      },
      {
        id: 11410,
        name: "Atimonan",
      },
      {
        id: 12540,
        name: "General Nakar",
      },
      {
        id: 13180,
        name: "Sariaya",
      },
      {
        id: 13610,
        name: "Dolores",
      },
      {
        id: 13850,
        name: "Jomalig",
      },
      {
        id: 20170,
        name: "Lopez",
      },
      {
        id: 23190,
        name: "Perez",
      },
      {
        id: 23650,
        name: "Real",
      },
      {
        id: 31940,
        name: "Panukulan",
      },
      {
        id: 38450,
        name: "Lucena City",
      },
      {
        id: 65620,
        name: "Padre Burgos",
      },
      {
        id: 75200,
        name: "Agdangan",
      },
    ],
    PH112300000: [
      {
        id: 90,
        name: "City of Panabo",
      },
      {
        id: 1890,
        name: "Island Garden City of Samal",
      },
      {
        id: 14410,
        name: "City of Tagum",
      },
      {
        id: 75580,
        name: "Asuncion",
      },
      {
        id: 97550,
        name: "Braulio E Dujali",
      },
      {
        id: 98210,
        name: "New Corella",
      },
      {
        id: 119400,
        name: "Kapalong",
      },
      {
        id: 136400,
        name: "Talaingod",
      },
    ],
    PH030800000: [
      {
        id: 110,
        name: "Hermosa",
      },
      {
        id: 5260,
        name: "Limay",
      },
      {
        id: 5490,
        name: "Mariveles",
      },
      {
        id: 14420,
        name: "Orani",
      },
      {
        id: 14640,
        name: "Dinalupihan",
      },
      {
        id: 15190,
        name: "Orion",
      },
      {
        id: 16590,
        name: "Bagac",
      },
      {
        id: 23510,
        name: "City of Balanga",
      },
      {
        id: 35130,
        name: "Abucay",
      },
      {
        id: 75870,
        name: "Morong",
      },
      {
        id: 153360,
        name: "Samal",
      },
    ],
    PH012800000: [
      {
        id: 120,
        name: "Piddig",
      },
      {
        id: 140,
        name: "Bangui",
      },
      {
        id: 960,
        name: "Vintar",
      },
      {
        id: 970,
        name: "City of Batac",
      },
      {
        id: 980,
        name: "Burgos",
      },
      {
        id: 1710,
        name: "Nueva Era",
      },
      {
        id: 1790,
        name: "Adams",
      },
      {
        id: 2950,
        name: "Pagudpud",
      },
      {
        id: 3160,
        name: "Pinili",
      },
      {
        id: 4400,
        name: "Solsona",
      },
      {
        id: 5570,
        name: "Badoc",
      },
      {
        id: 5640,
        name: "Dingras",
      },
      {
        id: 11510,
        name: "Currimao",
      },
      {
        id: 11650,
        name: "Carasi",
      },
      {
        id: 19920,
        name: "Paoay",
      },
      {
        id: 29940,
        name: "Banna",
      },
      {
        id: 35760,
        name: "Bacarra",
      },
      {
        id: 67830,
        name: "Pasuquin",
      },
      {
        id: 72610,
        name: "Laoag City",
      },
      {
        id: 100680,
        name: "Marcos",
      },
      {
        id: 152280,
        name: "Dumalneg",
      },
      {
        id: 327980,
        name: "Sarrat",
      },
    ],
    PH143200000: [
      {
        id: 130,
        name: "Balbalan",
      },
      {
        id: 1020,
        name: "Pasil",
      },
      {
        id: 1650,
        name: "Pinukpuk",
      },
      {
        id: 2640,
        name: "City of Tabuk",
      },
      {
        id: 9090,
        name: "Tinglayan",
      },
      {
        id: 11490,
        name: "Tanudan",
      },
      {
        id: 13640,
        name: "Lubuagan",
      },
    ],
    PH025000000: [
      {
        id: 150,
        name: "Dupax del Sur",
      },
      {
        id: 790,
        name: "Bambang",
      },
      {
        id: 1420,
        name: "Alfonso Castaneda",
      },
      {
        id: 1480,
        name: "Kayapa",
      },
      {
        id: 2990,
        name: "Solano",
      },
      {
        id: 6860,
        name: "Kasibu",
      },
      {
        id: 9620,
        name: "Ambaguio",
      },
      {
        id: 9860,
        name: "Diadi",
      },
      {
        id: 10900,
        name: "Aritao",
      },
      {
        id: 26390,
        name: "Bagabag",
      },
      {
        id: 36540,
        name: "Bayombong",
      },
      {
        id: 70530,
        name: "Dupax del Norte",
      },
      {
        id: 76730,
        name: "Villaverde",
      },
    ],
    PH054100000: [
      {
        id: 160,
        name: "Cataingan",
      },
      {
        id: 3410,
        name: "Esperanza",
      },
      {
        id: 3980,
        name: "Placer",
      },
      {
        id: 5460,
        name: "Mandaon",
      },
      {
        id: 5650,
        name: "Claveria",
      },
      {
        id: 5870,
        name: "Pio V Corpuz",
      },
      {
        id: 7560,
        name: "San Jacinto",
      },
      {
        id: 9190,
        name: "Aroroy",
      },
      {
        id: 10810,
        name: "City of Masbate",
      },
      {
        id: 13260,
        name: "Palanas",
      },
      {
        id: 14800,
        name: "Uson",
      },
      {
        id: 18130,
        name: "Mobo",
      },
      {
        id: 18160,
        name: "Baleno",
      },
      {
        id: 19430,
        name: "Milagros",
      },
      {
        id: 27630,
        name: "Dimasalang",
      },
      {
        id: 69410,
        name: "Balud",
      },
      {
        id: 70390,
        name: "Cawayan",
      },
      {
        id: 117660,
        name: "Monreal",
      },
    ],
    PH060600000: [
      {
        id: 170,
        name: "Tobias Fornier",
      },
      {
        id: 820,
        name: "Sebaste",
      },
      {
        id: 3630,
        name: "San Remigio",
      },
      {
        id: 5270,
        name: "Sibalom",
      },
      {
        id: 5830,
        name: "Tibiao",
      },
      {
        id: 5900,
        name: "Caluya",
      },
      {
        id: 7690,
        name: "Culasi",
      },
      {
        id: 7730,
        name: "Valderrama",
      },
      {
        id: 8240,
        name: "Patnongon",
      },
      {
        id: 12090,
        name: "Bugasong",
      },
      {
        id: 14160,
        name: "Hamtic",
      },
      {
        id: 14790,
        name: "Pandan",
      },
      {
        id: 22060,
        name: "Barbaza",
      },
      {
        id: 24070,
        name: "Laua An",
      },
      {
        id: 64860,
        name: "Libertad",
      },
      {
        id: 69800,
        name: "Anini Y",
      },
      {
        id: 82200,
        name: "Belison",
      },
    ],
    PH063000000: [
      {
        id: 180,
        name: "San Enrique",
      },
      {
        id: 400,
        name: "Alimodian",
      },
      {
        id: 440,
        name: "Dingle",
      },
      {
        id: 450,
        name: "Janiuay",
      },
      {
        id: 460,
        name: "Pototan",
      },
      {
        id: 590,
        name: "Mina",
      },
      {
        id: 640,
        name: "Maasin",
      },
      {
        id: 750,
        name: "Iloilo City",
      },
      {
        id: 910,
        name: "Oton",
      },
      {
        id: 1120,
        name: "Carles",
      },
      {
        id: 1550,
        name: "Cabatuan",
      },
      {
        id: 1760,
        name: "Barotac Nuevo",
      },
      {
        id: 1850,
        name: "Ajuy",
      },
      {
        id: 1930,
        name: "Tubungan",
      },
      {
        id: 2370,
        name: "Pavia",
      },
      {
        id: 2510,
        name: "Bingawan",
      },
      {
        id: 2670,
        name: "Anilao",
      },
      {
        id: 2700,
        name: "Leon",
      },
      {
        id: 2760,
        name: "Calinog",
      },
      {
        id: 2840,
        name: "City of Passi",
      },
      {
        id: 2860,
        name: "San Dionisio",
      },
      {
        id: 2940,
        name: "Miagao",
      },
      {
        id: 3220,
        name: "Concepcion",
      },
      {
        id: 3600,
        name: "Lemery",
      },
      {
        id: 3790,
        name: "Lambunao",
      },
      {
        id: 4360,
        name: "Sara",
      },
      {
        id: 4520,
        name: "Badiangan",
      },
      {
        id: 4530,
        name: "Santa Barbara",
      },
      {
        id: 4580,
        name: "Dueñas",
      },
      {
        id: 4930,
        name: "Banate",
      },
      {
        id: 5120,
        name: "Igbaras",
      },
      {
        id: 5450,
        name: "Batad",
      },
      {
        id: 8210,
        name: "Tigbauan",
      },
      {
        id: 9240,
        name: "San Joaquin",
      },
      {
        id: 12890,
        name: "Guimbal",
      },
      {
        id: 14990,
        name: "Balasan",
      },
      {
        id: 15400,
        name: "San Rafael",
      },
      {
        id: 17110,
        name: "Dumangas",
      },
      {
        id: 19230,
        name: "New Lucena",
      },
      {
        id: 31640,
        name: "Zarraga",
      },
      {
        id: 69140,
        name: "Estancia",
      },
      {
        id: 74470,
        name: "Leganes",
      },
      {
        id: 87340,
        name: "Barotac Viejo",
      },
    ],
    PH071200000: [
      {
        id: 190,
        name: "Mabini",
      },
      {
        id: 230,
        name: "Sierra Bullones",
      },
      {
        id: 690,
        name: "San Isidro",
      },
      {
        id: 840,
        name: "Dimiao",
      },
      {
        id: 850,
        name: "Candijay",
      },
      {
        id: 870,
        name: "Garcia Hernandez",
      },
      {
        id: 1250,
        name: "Sikatuna",
      },
      {
        id: 1290,
        name: "Calape",
      },
      {
        id: 1640,
        name: "Ubay",
      },
      {
        id: 2020,
        name: "Valencia",
      },
      {
        id: 2300,
        name: "Maribojoc",
      },
      {
        id: 2410,
        name: "Loay",
      },
      {
        id: 2420,
        name: "Loboc",
      },
      {
        id: 3800,
        name: "Loon",
      },
      {
        id: 4330,
        name: "Pres Carlos P Garcia",
      },
      {
        id: 5940,
        name: "Carmen",
      },
      {
        id: 5950,
        name: "Catigbian",
      },
      {
        id: 6260,
        name: "Duero",
      },
      {
        id: 6270,
        name: "Jagna",
      },
      {
        id: 7500,
        name: "Anda",
      },
      {
        id: 7680,
        name: "Batuan",
      },
      {
        id: 8110,
        name: "Getafe",
      },
      {
        id: 11530,
        name: "Antequera",
      },
      {
        id: 12190,
        name: "Corella",
      },
      {
        id: 12710,
        name: "Inabanga",
      },
      {
        id: 18240,
        name: "Dagohoy",
      },
      {
        id: 18720,
        name: "Clarin",
      },
      {
        id: 21220,
        name: "Talibon",
      },
      {
        id: 24050,
        name: "Tubigon",
      },
      {
        id: 25810,
        name: "Alburquerque",
      },
      {
        id: 33580,
        name: "Lila",
      },
      {
        id: 36170,
        name: "Trinidad",
      },
      {
        id: 65460,
        name: "Guindulman",
      },
      {
        id: 67920,
        name: "Balilihan",
      },
      {
        id: 69190,
        name: "Sevilla",
      },
      {
        id: 74610,
        name: "Dauis",
      },
      {
        id: 74620,
        name: "Panglao",
      },
      {
        id: 74720,
        name: "Bien Unido",
      },
      {
        id: 81510,
        name: "Bilar",
      },
      {
        id: 82010,
        name: "Tagbilaran City",
      },
      {
        id: 85360,
        name: "Baclayon",
      },
      {
        id: 97430,
        name: "Danao",
      },
      {
        id: 105180,
        name: "Sagbayan",
      },
    ],
    PH064500000: [
      {
        id: 210,
        name: "Cauayan",
      },
      {
        id: 1080,
        name: "Murcia",
      },
      {
        id: 1210,
        name: "Bago City",
      },
      {
        id: 2690,
        name: "Candoni",
      },
      {
        id: 3570,
        name: "Calatrava",
      },
      {
        id: 4370,
        name: "City of Himamaylan",
      },
      {
        id: 4940,
        name: "Enrique B Magalona",
      },
      {
        id: 5320,
        name: "Bacolod City",
      },
      {
        id: 6740,
        name: "Valladolid",
      },
      {
        id: 6790,
        name: "Hinoba An",
      },
      {
        id: 6820,
        name: "City of Escalante",
      },
      {
        id: 9500,
        name: "Isabela",
      },
      {
        id: 9770,
        name: "Binalbagan",
      },
      {
        id: 10480,
        name: "Hinigaran",
      },
      {
        id: 11150,
        name: "Cadiz City",
      },
      {
        id: 11160,
        name: "Sagay City",
      },
      {
        id: 11210,
        name: "Ilog",
      },
      {
        id: 14740,
        name: "La Carlota City",
      },
      {
        id: 22230,
        name: "Salvador Benedicto",
      },
      {
        id: 24360,
        name: "Silay City",
      },
      {
        id: 34110,
        name: "Toboso",
      },
      {
        id: 36880,
        name: "City of Kabankalan",
      },
      {
        id: 38760,
        name: "Moises Padilla",
      },
      {
        id: 38770,
        name: "City of Sipalay",
      },
      {
        id: 59340,
        name: "Manapla",
      },
      {
        id: 59830,
        name: "City of Victorias",
      },
      {
        id: 62780,
        name: "Pulupandan",
      },
      {
        id: 73480,
        name: "La Castellana",
      },
    ],
    PH012900000: [
      {
        id: 220,
        name: "Sigay",
      },
      {
        id: 650,
        name: "Galimuyod",
      },
      {
        id: 1390,
        name: "Narvacan",
      },
      {
        id: 2230,
        name: "Tagudin",
      },
      {
        id: 2970,
        name: "Bantay",
      },
      {
        id: 4300,
        name: "Sinait",
      },
      {
        id: 4780,
        name: "Santiago",
      },
      {
        id: 5250,
        name: "Magsingal",
      },
      {
        id: 6350,
        name: "Gregorio del Pilar",
      },
      {
        id: 6760,
        name: "Alilem",
      },
      {
        id: 6930,
        name: "Cabugao",
      },
      {
        id: 6970,
        name: "Santa Lucia",
      },
      {
        id: 7340,
        name: "City of Candon",
      },
      {
        id: 8090,
        name: "Cervantes",
      },
      {
        id: 9880,
        name: "Santa",
      },
      {
        id: 12800,
        name: "Caoayan",
      },
      {
        id: 12990,
        name: "San Esteban",
      },
      {
        id: 17790,
        name: "City of Vigan",
      },
      {
        id: 21990,
        name: "Banayoyo",
      },
      {
        id: 28310,
        name: "Nagbukel",
      },
      {
        id: 28580,
        name: "Sugpon",
      },
      {
        id: 36340,
        name: "Quirino",
      },
      {
        id: 37640,
        name: "Lidlidda",
      },
      {
        id: 64060,
        name: "Suyo",
      },
      {
        id: 96770,
        name: "San Emilio",
      },
    ],
    PH166700000: [
      {
        id: 260,
        name: "Santa Monica",
      },
      {
        id: 5100,
        name: "Gigaquit",
      },
      {
        id: 5230,
        name: "Surigao City",
      },
      {
        id: 5680,
        name: "Socorro",
      },
      {
        id: 7100,
        name: "Alegria",
      },
      {
        id: 10600,
        name: "General Luna",
      },
      {
        id: 13370,
        name: "Del Carmen",
      },
      {
        id: 17120,
        name: "Tagana An",
      },
      {
        id: 21560,
        name: "Dapa",
      },
      {
        id: 21580,
        name: "Claver",
      },
      {
        id: 76090,
        name: "Mainit",
      },
      {
        id: 81190,
        name: "San Benito",
      },
      {
        id: 91780,
        name: "Malimono",
      },
      {
        id: 99480,
        name: "Bacuag",
      },
    ],
    PH103500000: [
      {
        id: 270,
        name: "Baloi",
      },
      {
        id: 280,
        name: "Lala",
      },
      {
        id: 290,
        name: "Nunungan",
      },
      {
        id: 1380,
        name: "Iligan City",
      },
      {
        id: 6100,
        name: "Bacolod",
      },
      {
        id: 7780,
        name: "Pantao Ragat",
      },
      {
        id: 7800,
        name: "Poona Piagapo",
      },
      {
        id: 11070,
        name: "Baroy",
      },
      {
        id: 17190,
        name: "Kolambugan",
      },
      {
        id: 18920,
        name: "Munai",
      },
      {
        id: 22590,
        name: "Kapatagan",
      },
      {
        id: 25350,
        name: "Kauswagan",
      },
      {
        id: 26950,
        name: "Maigo",
      },
      {
        id: 34340,
        name: "Sultan Naga Dimaporo",
      },
      {
        id: 34830,
        name: "Pantar",
      },
      {
        id: 34930,
        name: "Matungao",
      },
      {
        id: 36020,
        name: "Sapad",
      },
      {
        id: 38120,
        name: "Tubod",
      },
      {
        id: 38180,
        name: "Salvador",
      },
      {
        id: 68400,
        name: "Tangcal",
      },
      {
        id: 93600,
        name: "Linamon",
      },
    ],
    PH124700000: [
      {
        id: 300,
        name: "Libungan",
      },
      {
        id: 3640,
        name: "Midsayap",
      },
      {
        id: 6130,
        name: "President Roxas",
      },
      {
        id: 6570,
        name: "Magpet",
      },
      {
        id: 7270,
        name: "Arakan",
      },
      {
        id: 8700,
        name: "City of Kidapawan",
      },
      {
        id: 12000,
        name: "Pigkawayan",
      },
      {
        id: 14880,
        name: "Matalam",
      },
      {
        id: 15360,
        name: "Kabacan",
      },
      {
        id: 17920,
        name: "Antipas",
      },
      {
        id: 19710,
        name: "Tulunan",
      },
      {
        id: 22430,
        name: "Pikit",
      },
      {
        id: 22500,
        name: "Aleosan",
      },
      {
        id: 24170,
        name: "M'Lang",
      },
      {
        id: 36030,
        name: "Banisilan",
      },
      {
        id: 37800,
        name: "Alamada",
      },
      {
        id: 66370,
        name: "Makilala",
      },
    ],
    PH153600000: [
      {
        id: 310,
        name: "Balindong",
      },
      {
        id: 320,
        name: "Madalum",
      },
      {
        id: 680,
        name: "Masiu",
      },
      {
        id: 2290,
        name: "Maguing",
      },
      {
        id: 7030,
        name: "Saguiaran",
      },
      {
        id: 7650,
        name: "Lumbatan",
      },
      {
        id: 7660,
        name: "Tubaran",
      },
      {
        id: 9210,
        name: "Marawi City",
      },
      {
        id: 9850,
        name: "Wao",
      },
      {
        id: 9890,
        name: "Bacolod Kalawi",
      },
      {
        id: 10830,
        name: "Picong",
      },
      {
        id: 14540,
        name: "Piagapo",
      },
      {
        id: 16540,
        name: "Poona Bayabao",
      },
      {
        id: 17660,
        name: "Pagayawan",
      },
      {
        id: 18460,
        name: "Kapai",
      },
      {
        id: 18940,
        name: "Malabang",
      },
      {
        id: 18950,
        name: "Marantao",
      },
      {
        id: 18960,
        name: "Sultan Dumalondong",
      },
      {
        id: 19270,
        name: "Ditsaan Ramain",
      },
      {
        id: 19510,
        name: "Bubong",
      },
      {
        id: 19520,
        name: "Buadiposo Buntong",
      },
      {
        id: 19570,
        name: "Lumba Bayabao",
      },
      {
        id: 20320,
        name: "Binidayan",
      },
      {
        id: 20330,
        name: "Pualas",
      },
      {
        id: 22300,
        name: "Balabagan",
      },
      {
        id: 22310,
        name: "Bayang",
      },
      {
        id: 22330,
        name: "Ganassi",
      },
      {
        id: 22360,
        name: "Mulondo",
      },
      {
        id: 22400,
        name: "Tugaya",
      },
      {
        id: 22410,
        name: "Lumbayanague",
      },
      {
        id: 22420,
        name: "Tagoloan II",
      },
      {
        id: 25230,
        name: "Marogong",
      },
      {
        id: 25240,
        name: "Bumbaran",
      },
      {
        id: 27180,
        name: "Madamba",
      },
      {
        id: 32200,
        name: "Tamparan",
      },
      {
        id: 34080,
        name: "Taraka",
      },
      {
        id: 35580,
        name: "Lumbaca Unayan",
      },
      {
        id: 68420,
        name: "Butig",
      },
      {
        id: 84180,
        name: "Calanogas",
      },
    ],
    PH021500000: [
      {
        id: 330,
        name: "Camalaniugan",
      },
      {
        id: 340,
        name: "Lal Lo",
      },
      {
        id: 500,
        name: "Pamplona",
      },
      {
        id: 550,
        name: "Santo Niño",
      },
      {
        id: 670,
        name: "Alcala",
      },
      {
        id: 1100,
        name: "Amulung",
      },
      {
        id: 1170,
        name: "Gattaran",
      },
      {
        id: 1580,
        name: "Tuao",
      },
      {
        id: 1810,
        name: "Baggao",
      },
      {
        id: 3000,
        name: "Peñablanca",
      },
      {
        id: 3020,
        name: "Lasam",
      },
      {
        id: 4690,
        name: "Iguig",
      },
      {
        id: 6510,
        name: "Enrile",
      },
      {
        id: 7040,
        name: "Abulug",
      },
      {
        id: 8020,
        name: "Santa Teresita",
      },
      {
        id: 8030,
        name: "Buguey",
      },
      {
        id: 9610,
        name: "Ballesteros",
      },
      {
        id: 10160,
        name: "Gonzaga",
      },
      {
        id: 11040,
        name: "Solana",
      },
      {
        id: 12440,
        name: "Tuguegarao City",
      },
      {
        id: 14150,
        name: "Piat",
      },
      {
        id: 18570,
        name: "Calayan",
      },
      {
        id: 19150,
        name: "Aparri",
      },
      {
        id: 34520,
        name: "Sanchez Mira",
      },
      {
        id: 71540,
        name: "Allacapan",
      },
      {
        id: 101750,
        name: "Santa Praxedes",
      },
    ],
    PH175300000: [
      {
        id: 350,
        name: "Agutaya",
      },
      {
        id: 570,
        name: "Roxas",
      },
      {
        id: 740,
        name: "El Nido",
      },
      {
        id: 1070,
        name: "Sofronio Española",
      },
      {
        id: 1150,
        name: "Taytay",
      },
      {
        id: 4620,
        name: "Balabac",
      },
      {
        id: 6830,
        name: "San Vicente",
      },
      {
        id: 8710,
        name: "Brooke's Point",
      },
      {
        id: 13510,
        name: "Narra",
      },
      {
        id: 14370,
        name: "Aborlan",
      },
      {
        id: 18560,
        name: "Puerto Princesa City",
      },
      {
        id: 18750,
        name: "Dumaran",
      },
      {
        id: 26880,
        name: "Cuyo",
      },
      {
        id: 27250,
        name: "Culion",
      },
      {
        id: 30890,
        name: "Araceli",
      },
      {
        id: 36900,
        name: "Cagayancillo",
      },
      {
        id: 37560,
        name: "Coron",
      },
      {
        id: 63290,
        name: "Linapacan",
      },
      {
        id: 79050,
        name: "Busuanga",
      },
      {
        id: 81790,
        name: "Bataraza",
      },
    ],
    PH036900000: [
      {
        id: 360,
        name: "Gerona",
      },
      {
        id: 990,
        name: "Moncada",
      },
      {
        id: 1090,
        name: "Paniqui",
      },
      {
        id: 4540,
        name: "City of Tarlac",
      },
      {
        id: 8960,
        name: "Mayantoc",
      },
      {
        id: 12580,
        name: "Camiling",
      },
      {
        id: 13760,
        name: "Bamban",
      },
      {
        id: 14980,
        name: "Capas",
      },
      {
        id: 24660,
        name: "Anao",
      },
      {
        id: 28680,
        name: "Santa Ignacia",
      },
      {
        id: 30090,
        name: "Pura",
      },
      {
        id: 30580,
        name: "San Clemente",
      },
      {
        id: 132060,
        name: "Ramos",
      },
    ],
    PH140100000: [
      {
        id: 390,
        name: "Bucay",
      },
      {
        id: 520,
        name: "Danglas",
      },
      {
        id: 1010,
        name: "Daguioman",
      },
      {
        id: 1200,
        name: "San Juan",
      },
      {
        id: 3870,
        name: "Bangued",
      },
      {
        id: 4080,
        name: "Lagangilang",
      },
      {
        id: 5350,
        name: "Tubo",
      },
      {
        id: 5380,
        name: "Tineg",
      },
      {
        id: 6960,
        name: "Pidigan",
      },
      {
        id: 9870,
        name: "Luba",
      },
      {
        id: 10100,
        name: "Boliney",
      },
      {
        id: 13820,
        name: "Villaviciosa",
      },
      {
        id: 17830,
        name: "Manabo",
      },
      {
        id: 18030,
        name: "Lagayan",
      },
      {
        id: 18070,
        name: "Langiden",
      },
      {
        id: 18610,
        name: "Lacub",
      },
      {
        id: 21600,
        name: "Tayum",
      },
      {
        id: 68550,
        name: "Malibcong",
      },
      {
        id: 70210,
        name: "Sallapadan",
      },
      {
        id: 81250,
        name: "Licuan Baay",
      },
      {
        id: 151210,
        name: "Bucloc",
      },
      {
        id: 152440,
        name: "Peñarrubia",
      },
    ],
    PH031400000: [
      {
        id: 410,
        name: "Marilao",
      },
      {
        id: 1320,
        name: "Hagonoy",
      },
      {
        id: 3350,
        name: "Plaridel",
      },
      {
        id: 4740,
        name: "San Ildefonso",
      },
      {
        id: 12010,
        name: "City of Malolos",
      },
      {
        id: 13490,
        name: "Bocaue",
      },
      {
        id: 16240,
        name: "City of San Jose del Monte",
      },
      {
        id: 22000,
        name: "City of Meycauayan",
      },
      {
        id: 22010,
        name: "Pandi",
      },
      {
        id: 23050,
        name: "Baliuag",
      },
      {
        id: 24840,
        name: "Bulacan",
      },
      {
        id: 28190,
        name: "Pulilan",
      },
      {
        id: 30050,
        name: "Calumpit",
      },
      {
        id: 32770,
        name: "Angat",
      },
      {
        id: 35150,
        name: "Norzagaray",
      },
      {
        id: 68440,
        name: "Doña Remedios Trinidad",
      },
      {
        id: 75340,
        name: "Paombong",
      },
      {
        id: 76790,
        name: "Obando",
      },
      {
        id: 80810,
        name: "Bustos",
      },
      {
        id: 82240,
        name: "Balagtas",
      },
      {
        id: 134930,
        name: "Guiguinto",
      },
    ],
    PH061900000: [
      {
        id: 430,
        name: "Tapaz",
      },
      {
        id: 1570,
        name: "Sigma",
      },
      {
        id: 2010,
        name: "Roxas City",
      },
      {
        id: 2340,
        name: "Jamindan",
      },
      {
        id: 2360,
        name: "Dao",
      },
      {
        id: 2520,
        name: "Panitan",
      },
      {
        id: 2550,
        name: "Panay",
      },
      {
        id: 2650,
        name: "Pontevedra",
      },
      {
        id: 2660,
        name: "Dumarao",
      },
      {
        id: 2740,
        name: "Cuartero",
      },
      {
        id: 3140,
        name: "Ma Ayon",
      },
      {
        id: 3270,
        name: "Ivisan",
      },
      {
        id: 3760,
        name: "Sapi An",
      },
      {
        id: 16630,
        name: "Mambusao",
      },
      {
        id: 130960,
        name: "Dumalag",
      },
    ],
    PH015500000: [
      {
        id: 490,
        name: "San Carlos City",
      },
      {
        id: 1110,
        name: "Malasiqui",
      },
      {
        id: 1160,
        name: "Umingan",
      },
      {
        id: 1730,
        name: "Rosales",
      },
      {
        id: 2460,
        name: "Sison",
      },
      {
        id: 3370,
        name: "Tayug",
      },
      {
        id: 4880,
        name: "San Quintin",
      },
      {
        id: 4920,
        name: "San Fabian",
      },
      {
        id: 6750,
        name: "Dasol",
      },
      {
        id: 7010,
        name: "Bayambang",
      },
      {
        id: 7090,
        name: "Pozorrubio",
      },
      {
        id: 7210,
        name: "Mangaldan",
      },
      {
        id: 7250,
        name: "Lingayen",
      },
      {
        id: 7280,
        name: "Agno",
      },
      {
        id: 7790,
        name: "City of Alaminos",
      },
      {
        id: 8530,
        name: "Villasis",
      },
      {
        id: 8550,
        name: "Binmaley",
      },
      {
        id: 8630,
        name: "Mapandan",
      },
      {
        id: 8840,
        name: "Bani",
      },
      {
        id: 9220,
        name: "Calasiao",
      },
      {
        id: 10650,
        name: "Basista",
      },
      {
        id: 10990,
        name: "Mangatarem",
      },
      {
        id: 11300,
        name: "Bugallon",
      },
      {
        id: 11350,
        name: "Urbiztondo",
      },
      {
        id: 11360,
        name: "Balungao",
      },
      {
        id: 12170,
        name: "Laoac",
      },
      {
        id: 12850,
        name: "City of Urdaneta",
      },
      {
        id: 15410,
        name: "Asingan",
      },
      {
        id: 15520,
        name: "Bolinao",
      },
      {
        id: 15670,
        name: "Bautista",
      },
      {
        id: 18430,
        name: "Manaoag",
      },
      {
        id: 18880,
        name: "Dagupan City",
      },
      {
        id: 27520,
        name: "Binalonan",
      },
      {
        id: 37930,
        name: "Sual",
      },
      {
        id: 63250,
        name: "Natividad",
      },
      {
        id: 69100,
        name: "Aguilar",
      },
      {
        id: 79800,
        name: "Labrador",
      },
    ],
    PH074600000: [
      {
        id: 950,
        name: "Mabinay",
      },
      {
        id: 1750,
        name: "Basay",
      },
      {
        id: 2350,
        name: "Sibulan",
      },
      {
        id: 3050,
        name: "Jimalalud",
      },
      {
        id: 5330,
        name: "Santa Catalina",
      },
      {
        id: 5340,
        name: "Manjuyod",
      },
      {
        id: 5670,
        name: "Siaton",
      },
      {
        id: 6420,
        name: "City of Bayawan",
      },
      {
        id: 9390,
        name: "Ayungon",
      },
      {
        id: 10560,
        name: "Dauin",
      },
      {
        id: 12130,
        name: "La Libertad",
      },
      {
        id: 16770,
        name: "Bindoy",
      },
      {
        id: 17840,
        name: "City of Tanjay",
      },
      {
        id: 19730,
        name: "Tayasan",
      },
      {
        id: 21400,
        name: "Dumaguete City",
      },
      {
        id: 21860,
        name: "Vallehermoso",
      },
      {
        id: 26310,
        name: "City of Guihulngan",
      },
      {
        id: 28350,
        name: "Bacong",
      },
      {
        id: 59840,
        name: "Bais City",
      },
      {
        id: 64980,
        name: "Zamboanguita",
      },
      {
        id: 69910,
        name: "Canlaon City",
      },
      {
        id: 77030,
        name: "Amlan",
      },
    ],
    PH142700000: [
      {
        id: 610,
        name: "Hungduan",
      },
      {
        id: 940,
        name: "Lagawe",
      },
      {
        id: 2130,
        name: "Mayoyao",
      },
      {
        id: 4650,
        name: "Tinoc",
      },
      {
        id: 8850,
        name: "Kiangan",
      },
      {
        id: 9040,
        name: "Lamut",
      },
      {
        id: 9380,
        name: "Asipulo",
      },
      {
        id: 9440,
        name: "Banaue",
      },
      {
        id: 10730,
        name: "Hingyon",
      },
      {
        id: 17420,
        name: "Aguinaldo",
      },
      {
        id: 34640,
        name: "Alfonso Lista",
      },
    ],
    PH144400000: [
      {
        id: 620,
        name: "Bauko",
      },
      {
        id: 2470,
        name: "Besao",
      },
      {
        id: 4120,
        name: "Sagada",
      },
      {
        id: 4810,
        name: "Bontoc",
      },
      {
        id: 8160,
        name: "Natonin",
      },
      {
        id: 10250,
        name: "Sadanga",
      },
      {
        id: 12860,
        name: "Paracelis",
      },
      {
        id: 27760,
        name: "Tadian",
      },
      {
        id: 37810,
        name: "Sabangan",
      },
      {
        id: 128440,
        name: "Barlig",
      },
    ],
    PH084800000: [
      {
        id: 630,
        name: "Laoang",
      },
      {
        id: 1520,
        name: "Catarman",
      },
      {
        id: 1590,
        name: "Victoria",
      },
      {
        id: 1610,
        name: "Bobon",
      },
      {
        id: 3990,
        name: "Rosario",
      },
      {
        id: 4170,
        name: "Capul",
      },
      {
        id: 5200,
        name: "Lapinig",
      },
      {
        id: 6250,
        name: "Allen",
      },
      {
        id: 12360,
        name: "Gamay",
      },
      {
        id: 12880,
        name: "Catubig",
      },
      {
        id: 16350,
        name: "Palapag",
      },
      {
        id: 21800,
        name: "Mondragon",
      },
      {
        id: 29170,
        name: "Lavezares",
      },
      {
        id: 30630,
        name: "San Roque",
      },
      {
        id: 31580,
        name: "Silvino Lobos",
      },
      {
        id: 31740,
        name: "Las Navas",
      },
      {
        id: 69720,
        name: "Lope de Vega",
      },
      {
        id: 92510,
        name: "Mapanas",
      },
      {
        id: 94840,
        name: "Pambujan",
      },
      {
        id: 186360,
        name: "Biri",
      },
    ],
    PH025700000: [
      {
        id: 660,
        name: "Maddela",
      },
      {
        id: 4730,
        name: "Diffun",
      },
      {
        id: 6660,
        name: "Aglipay",
      },
      {
        id: 10610,
        name: "Nagtipunan",
      },
      {
        id: 37610,
        name: "Cabarroguis",
      },
      {
        id: 120320,
        name: "Saguday",
      },
    ],
    PH050500000: [
      {
        id: 710,
        name: "City of Ligao",
      },
      {
        id: 3330,
        name: "City of Tabaco",
      },
      {
        id: 3460,
        name: "Pio Duran",
      },
      {
        id: 3480,
        name: "Polangui",
      },
      {
        id: 3590,
        name: "Guinobatan",
      },
      {
        id: 5720,
        name: "Daraga",
      },
      {
        id: 6910,
        name: "Santo Domingo",
      },
      {
        id: 7770,
        name: "Libon",
      },
      {
        id: 12550,
        name: "Camalig",
      },
      {
        id: 17170,
        name: "Jovellar",
      },
      {
        id: 17300,
        name: "Malinao",
      },
      {
        id: 19290,
        name: "Bacacay",
      },
      {
        id: 20390,
        name: "Oas",
      },
      {
        id: 21760,
        name: "Rapu Rapu",
      },
      {
        id: 24940,
        name: "Tiwi",
      },
      {
        id: 26750,
        name: "Manito",
      },
      {
        id: 59610,
        name: "Malilipot",
      },
      {
        id: 71750,
        name: "Legazpi City",
      },
    ],
    PH051700000: [
      {
        id: 720,
        name: "Naga City",
      },
      {
        id: 1050,
        name: "Tigaon",
      },
      {
        id: 1270,
        name: "Goa",
      },
      {
        id: 1970,
        name: "San Jose",
      },
      {
        id: 2270,
        name: "Caramoan",
      },
      {
        id: 2390,
        name: "Ragay",
      },
      {
        id: 2500,
        name: "Tinambac",
      },
      {
        id: 2870,
        name: "Baao",
      },
      {
        id: 3490,
        name: "Bato",
      },
      {
        id: 3520,
        name: "Lagonoy",
      },
      {
        id: 5800,
        name: "Sipocot",
      },
      {
        id: 6850,
        name: "Milaor",
      },
      {
        id: 7370,
        name: "Lupi",
      },
      {
        id: 9590,
        name: "Buhi",
      },
      {
        id: 10880,
        name: "Pili",
      },
      {
        id: 11670,
        name: "Nabua",
      },
      {
        id: 12160,
        name: "Sagñay",
      },
      {
        id: 13210,
        name: "Iriga City",
      },
      {
        id: 13220,
        name: "Minalabac",
      },
      {
        id: 13230,
        name: "Pasacao",
      },
      {
        id: 16140,
        name: "Libmanan",
      },
      {
        id: 16220,
        name: "Garchitorena",
      },
      {
        id: 17720,
        name: "Ocampo",
      },
      {
        id: 17730,
        name: "Presentacion",
      },
      {
        id: 22470,
        name: "Bula",
      },
      {
        id: 23670,
        name: "Del Gallego",
      },
      {
        id: 23970,
        name: "Siruma",
      },
      {
        id: 28080,
        name: "Calabanga",
      },
      {
        id: 63530,
        name: "Canaman",
      },
      {
        id: 63840,
        name: "Cabusao",
      },
      {
        id: 64320,
        name: "Magarao",
      },
      {
        id: 95810,
        name: "Balatan",
      },
      {
        id: 102620,
        name: "Gainza",
      },
      {
        id: 151300,
        name: "Camaligan",
      },
      {
        id: 272740,
        name: "Bombon",
      },
    ],
    PH041000000: [
      {
        id: 730,
        name: "San Nicolas",
      },
      {
        id: 780,
        name: "San Luis",
      },
      {
        id: 1670,
        name: "Tuy",
      },
      {
        id: 1940,
        name: "Agoncillo",
      },
      {
        id: 2140,
        name: "Lipa City",
      },
      {
        id: 2250,
        name: "Nasugbu",
      },
      {
        id: 4990,
        name: "Bauan",
      },
      {
        id: 5070,
        name: "San Pascual",
      },
      {
        id: 5280,
        name: "Balete",
      },
      {
        id: 5290,
        name: "Batangas City",
      },
      {
        id: 7910,
        name: "City of Tanauan",
      },
      {
        id: 13840,
        name: "Taal",
      },
      {
        id: 14020,
        name: "Lobo",
      },
      {
        id: 15790,
        name: "Laurel",
      },
      {
        id: 17500,
        name: "Talisay",
      },
      {
        id: 18730,
        name: "Taysan",
      },
      {
        id: 19170,
        name: "Balayan",
      },
      {
        id: 19210,
        name: "Calaca",
      },
      {
        id: 22160,
        name: "Ibaan",
      },
      {
        id: 23230,
        name: "Lian",
      },
      {
        id: 23250,
        name: "Malvar",
      },
      {
        id: 23570,
        name: "Calatagan",
      },
      {
        id: 26980,
        name: "Alitagtag",
      },
      {
        id: 26990,
        name: "Cuenca",
      },
      {
        id: 32620,
        name: "Padre Garcia",
      },
      {
        id: 40610,
        name: "Tingloy",
      },
      {
        id: 59860,
        name: "Mataasnakahoy",
      },
    ],
    PH086400000: [
      {
        id: 760,
        name: "Malitbog",
      },
      {
        id: 770,
        name: "City of Maasin",
      },
      {
        id: 4250,
        name: "Macrohon",
      },
      {
        id: 8370,
        name: "Hinundayan",
      },
      {
        id: 8380,
        name: "Liloan",
      },
      {
        id: 8440,
        name: "Anahawan",
      },
      {
        id: 8870,
        name: "Hinunangan",
      },
      {
        id: 10540,
        name: "Tomas Oppus",
      },
      {
        id: 16870,
        name: "Saint Bernard",
      },
      {
        id: 20550,
        name: "Pintuyan",
      },
      {
        id: 26960,
        name: "Silago",
      },
      {
        id: 71000,
        name: "San Ricardo",
      },
      {
        id: 73690,
        name: "Libagon",
      },
      {
        id: 99860,
        name: "Limasawa",
      },
    ],
    PH052000000: [
      {
        id: 830,
        name: "Baras",
      },
      {
        id: 3430,
        name: "San Andres",
      },
      {
        id: 6950,
        name: "Panganiban",
      },
      {
        id: 7570,
        name: "Viga",
      },
      {
        id: 13250,
        name: "Bagamanoc",
      },
      {
        id: 13440,
        name: "Virac",
      },
      {
        id: 16780,
        name: "San Miguel",
      },
      {
        id: 69420,
        name: "Caramoran",
      },
      {
        id: 77050,
        name: "Gigmoto",
      },
    ],
    PH112500000: [
      {
        id: 880,
        name: "Cateel",
      },
      {
        id: 8250,
        name: "Caraga",
      },
      {
        id: 12320,
        name: "Governor Generoso",
      },
      {
        id: 20030,
        name: "Baganga",
      },
      {
        id: 20370,
        name: "City of Mati",
      },
      {
        id: 25160,
        name: "Lupon",
      },
      {
        id: 94780,
        name: "Boston",
      },
      {
        id: 95250,
        name: "Tarragona",
      },
      {
        id: 96170,
        name: "Banaybanay",
      },
      {
        id: 118570,
        name: "Manay",
      },
    ],
    PH072200000: [
      {
        id: 1000,
        name: "Dalaguete",
      },
      {
        id: 1280,
        name: "Balamban",
      },
      {
        id: 1310,
        name: "Sibonga",
      },
      {
        id: 1900,
        name: "Poro",
      },
      {
        id: 1990,
        name: "Cebu City",
      },
      {
        id: 2540,
        name: "Moalboal",
      },
      {
        id: 2610,
        name: "Asturias",
      },
      {
        id: 3820,
        name: "Catmon",
      },
      {
        id: 4090,
        name: "Daanbantayan",
      },
      {
        id: 4460,
        name: "Lapu Lapu City",
      },
      {
        id: 5090,
        name: "Argao",
      },
      {
        id: 5140,
        name: "Mandaue City",
      },
      {
        id: 5150,
        name: "Tabogon",
      },
      {
        id: 5560,
        name: "Badian",
      },
      {
        id: 5970,
        name: "Cordova",
      },
      {
        id: 5980,
        name: "Tuburan",
      },
      {
        id: 6330,
        name: "City of Naga",
      },
      {
        id: 7600,
        name: "Oslob",
      },
      {
        id: 10030,
        name: "Sogod",
      },
      {
        id: 10720,
        name: "Ginatilan",
      },
      {
        id: 11550,
        name: "Aloguinsan",
      },
      {
        id: 12210,
        name: "Pinamungahan",
      },
      {
        id: 12820,
        name: "City of Bogo",
      },
      {
        id: 13300,
        name: "Medellin",
      },
      {
        id: 15100,
        name: "Boljoon",
      },
      {
        id: 15460,
        name: "Malabuyoc",
      },
      {
        id: 16480,
        name: "Alcoy",
      },
      {
        id: 16760,
        name: "Bantayan",
      },
      {
        id: 17430,
        name: "Toledo City",
      },
      {
        id: 17880,
        name: "Barili",
      },
      {
        id: 21230,
        name: "Borbon",
      },
      {
        id: 28420,
        name: "Dumanjug",
      },
      {
        id: 28970,
        name: "Danao City",
      },
      {
        id: 65120,
        name: "Samboan",
      },
      {
        id: 73630,
        name: "City of Talisay",
      },
      {
        id: 79650,
        name: "City of Carcar",
      },
      {
        id: 81330,
        name: "Tabuelan",
      },
      {
        id: 90660,
        name: "Madridejos",
      },
      {
        id: 91430,
        name: "Santander",
      },
      {
        id: 94090,
        name: "Ronda",
      },
      {
        id: 95980,
        name: "Consolacion",
      },
      {
        id: 101850,
        name: "Minglanilla",
      },
    ],
    PH112400000: [
      {
        id: 1030,
        name: "Kiblawan",
      },
      {
        id: 1500,
        name: "Davao City",
      },
      {
        id: 5860,
        name: "Bansalan",
      },
      {
        id: 7530,
        name: "Padada",
      },
      {
        id: 14330,
        name: "City of Digos",
      },
      {
        id: 15850,
        name: "Matanao",
      },
      {
        id: 25140,
        name: "Malalag",
      },
      {
        id: 27990,
        name: "Sulop",
      },
    ],
    PH043400000: [
      {
        id: 1040,
        name: "Nagcarlan",
      },
      {
        id: 1620,
        name: "Siniloan",
      },
      {
        id: 1950,
        name: "Santa Maria",
      },
      {
        id: 7140,
        name: "Magdalena",
      },
      {
        id: 9710,
        name: "Majayjay",
      },
      {
        id: 10200,
        name: "Mabitac",
      },
      {
        id: 11620,
        name: "Cavinti",
      },
      {
        id: 11850,
        name: "Pagsanjan",
      },
      {
        id: 12930,
        name: "Los Baños",
      },
      {
        id: 14300,
        name: "Pila",
      },
      {
        id: 14310,
        name: "City of Santa Rosa",
      },
      {
        id: 15830,
        name: "Famy",
      },
      {
        id: 16690,
        name: "San Pablo City",
      },
      {
        id: 19180,
        name: "Cabuyao City",
      },
      {
        id: 22560,
        name: "Liliw",
      },
      {
        id: 22920,
        name: "City of Calamba",
      },
      {
        id: 23590,
        name: "Lumban",
      },
      {
        id: 23600,
        name: "City of San Pedro",
      },
      {
        id: 25330,
        name: "Paete",
      },
      {
        id: 28430,
        name: "Calauan",
      },
      {
        id: 28950,
        name: "Pangil",
      },
      {
        id: 36010,
        name: "Pakil",
      },
      {
        id: 59540,
        name: "Alaminos",
      },
      {
        id: 62910,
        name: "Luisiana",
      },
      {
        id: 75560,
        name: "City of Biñan",
      },
      {
        id: 77690,
        name: "Bay",
      },
      {
        id: 209180,
        name: "Kalayaan",
      },
    ],
    PH097300000: [
      {
        id: 1130,
        name: "Tabina",
      },
      {
        id: 1530,
        name: "Aurora",
      },
      {
        id: 5220,
        name: "Tambulig",
      },
      {
        id: 6080,
        name: "Pagadian City",
      },
      {
        id: 6670,
        name: "Molave",
      },
      {
        id: 6980,
        name: "Tukuran",
      },
      {
        id: 9310,
        name: "Vincenzo A Sagun",
      },
      {
        id: 12750,
        name: "Dumalinao",
      },
      {
        id: 15210,
        name: "Zamboanga City",
      },
      {
        id: 18630,
        name: "Midsalip",
      },
      {
        id: 18820,
        name: "Dinas",
      },
      {
        id: 18910,
        name: "Dimataling",
      },
      {
        id: 20830,
        name: "Mahayag",
      },
      {
        id: 20840,
        name: "Sominot",
      },
      {
        id: 20930,
        name: "Dumingag",
      },
      {
        id: 21630,
        name: "Labangan",
      },
      {
        id: 22910,
        name: "Lakewood",
      },
      {
        id: 23100,
        name: "Ramon Magsaysay",
      },
      {
        id: 23110,
        name: "Guipos",
      },
      {
        id: 26360,
        name: "Bayog",
      },
      {
        id: 29870,
        name: "Margosatubig",
      },
      {
        id: 70400,
        name: "Tigbao",
      },
      {
        id: 78900,
        name: "Kumalarang",
      },
      {
        id: 79000,
        name: "Josefina",
      },
      {
        id: 89420,
        name: "Lapuyan",
      },
    ],
    PH150700000: [
      {
        id: 1140,
        name: "Maluso",
      },
      {
        id: 8480,
        name: "Ungkaya Pukan",
      },
      {
        id: 14240,
        name: "Al Barka",
      },
      {
        id: 15120,
        name: "City of Lamitan",
      },
      {
        id: 16750,
        name: "Lantawan",
      },
      {
        id: 18290,
        name: "Tabuan Lasa",
      },
      {
        id: 20160,
        name: "Sumisip",
      },
      {
        id: 20700,
        name: "Tipo Tipo",
      },
      {
        id: 31850,
        name: "Hadji Muhtamad",
      },
      {
        id: 65360,
        name: "Hadji Mohammad Ajul",
      },
      {
        id: 101470,
        name: "Akbar",
      },
    ],
    PH023100000: [
      {
        id: 1180,
        name: "City of Santiago",
      },
      {
        id: 1330,
        name: "Jones",
      },
      {
        id: 1410,
        name: "Quezon",
      },
      {
        id: 2240,
        name: "Delfin Albano",
      },
      {
        id: 2960,
        name: "Ilagan City",
      },
      {
        id: 2980,
        name: "Cabagan",
      },
      {
        id: 3110,
        name: "San Manuel",
      },
      {
        id: 4180,
        name: "Naguilian",
      },
      {
        id: 4290,
        name: "Cordon",
      },
      {
        id: 6490,
        name: "San Mariano",
      },
      {
        id: 6650,
        name: "City of Cauayan",
      },
      {
        id: 7320,
        name: "Angadanan",
      },
      {
        id: 7710,
        name: "Palanan",
      },
      {
        id: 9080,
        name: "Ramon",
      },
      {
        id: 10920,
        name: "Benito Soliven",
      },
      {
        id: 11640,
        name: "Echague",
      },
      {
        id: 12430,
        name: "Tumauini",
      },
      {
        id: 12470,
        name: "San Pablo",
      },
      {
        id: 12660,
        name: "San Guillermo",
      },
      {
        id: 14270,
        name: "Maconacon",
      },
      {
        id: 17640,
        name: "Dinapigue",
      },
      {
        id: 36450,
        name: "Reina Mercedes",
      },
      {
        id: 63860,
        name: "Gamu",
      },
      {
        id: 73980,
        name: "Divilacan",
      },
      {
        id: 76300,
        name: "Mallig",
      },
    ],
    PH037700000: [
      {
        id: 1340,
        name: "Dinalungan",
      },
      {
        id: 5710,
        name: "Maria Aurora",
      },
      {
        id: 14280,
        name: "Dingalan",
      },
      {
        id: 59450,
        name: "Baler",
      },
      {
        id: 68450,
        name: "Dipaculao",
      },
      {
        id: 144960,
        name: "Dilasag",
      },
    ],
    PH098300000: [
      {
        id: 1350,
        name: "Mabuhay",
      },
      {
        id: 1630,
        name: "Titay",
      },
      {
        id: 4260,
        name: "Naga",
      },
      {
        id: 4610,
        name: "Buug",
      },
      {
        id: 6090,
        name: "Alicia",
      },
      {
        id: 6430,
        name: "Roseller Lim",
      },
      {
        id: 17030,
        name: "Talusan",
      },
      {
        id: 18660,
        name: "Ipil",
      },
      {
        id: 18740,
        name: "Malangas",
      },
      {
        id: 23750,
        name: "Siay",
      },
      {
        id: 27390,
        name: "Diplahan",
      },
      {
        id: 28960,
        name: "Payao",
      },
      {
        id: 31770,
        name: "Imelda",
      },
      {
        id: 32080,
        name: "Tungawan",
      },
      {
        id: 36100,
        name: "Kabasalan",
      },
      {
        id: 66550,
        name: "Olutanga",
      },
    ],
    PH104300000: [
      {
        id: 1360,
        name: "Magsaysay",
      },
      {
        id: 2490,
        name: "Gingoog City",
      },
      {
        id: 4480,
        name: "Cagayan de Oro City",
      },
      {
        id: 6690,
        name: "Sugbongcogon",
      },
      {
        id: 7160,
        name: "Salay",
      },
      {
        id: 8140,
        name: "Initao",
      },
      {
        id: 9810,
        name: "City of El Salvador",
      },
      {
        id: 14320,
        name: "Jasaan",
      },
      {
        id: 15270,
        name: "Manticao",
      },
      {
        id: 15570,
        name: "Laguindingan",
      },
      {
        id: 17330,
        name: "Opol",
      },
      {
        id: 17520,
        name: "Lugait",
      },
      {
        id: 26810,
        name: "Villanueva",
      },
      {
        id: 27030,
        name: "Balingasag",
      },
      {
        id: 31310,
        name: "Tagoloan",
      },
      {
        id: 34710,
        name: "Medina",
      },
      {
        id: 35380,
        name: "Lagonglong",
      },
      {
        id: 68020,
        name: "Balingoan",
      },
      {
        id: 69360,
        name: "Alubijid",
      },
      {
        id: 71280,
        name: "Kinoguitan",
      },
      {
        id: 87160,
        name: "Talisayan",
      },
      {
        id: 92960,
        name: "Gitagum",
      },
      {
        id: 138980,
        name: "Binuangan",
      },
      {
        id: 150040,
        name: "Naawan",
      },
    ],
    PH013300000: [
      {
        id: 1400,
        name: "City of San Fernando",
      },
      {
        id: 1540,
        name: "Bauang",
      },
      {
        id: 2920,
        name: "Bangar",
      },
      {
        id: 3920,
        name: "Bacnotan",
      },
      {
        id: 5520,
        name: "Aringay",
      },
      {
        id: 5730,
        name: "Luna",
      },
      {
        id: 6550,
        name: "Bagulin",
      },
      {
        id: 7550,
        name: "Balaoan",
      },
      {
        id: 8470,
        name: "Tubao",
      },
      {
        id: 8970,
        name: "Pugo",
      },
      {
        id: 9160,
        name: "Agoo",
      },
      {
        id: 9170,
        name: "Santo Tomas",
      },
      {
        id: 9780,
        name: "San Gabriel",
      },
      {
        id: 68090,
        name: "Caba",
      },
      {
        id: 74440,
        name: "Sudipen",
      },
      {
        id: 132480,
        name: "Santol",
      },
    ],
    PH087800000: [
      {
        id: 1470,
        name: "Culaba",
      },
      {
        id: 3560,
        name: "Naval",
      },
      {
        id: 4560,
        name: "Maripipi",
      },
      {
        id: 6050,
        name: "Caibiran",
      },
      {
        id: 21750,
        name: "Kawayan",
      },
      {
        id: 27830,
        name: "Cabucgayan",
      },
      {
        id: 66990,
        name: "Biliran",
      },
      {
        id: 125000,
        name: "Almeria",
      },
    ],
    PH086000000: [
      {
        id: 1600,
        name: "Calbayog City",
      },
      {
        id: 1920,
        name: "Gandara",
      },
      {
        id: 3670,
        name: "Santa Margarita",
      },
      {
        id: 4320,
        name: "San Jose de Buan",
      },
      {
        id: 5630,
        name: "City of Catbalogan",
      },
      {
        id: 5760,
        name: "Tarangnan",
      },
      {
        id: 6030,
        name: "Santa Rita",
      },
      {
        id: 6040,
        name: "Zumarraga",
      },
      {
        id: 8500,
        name: "Marabut",
      },
      {
        id: 8590,
        name: "Basey",
      },
      {
        id: 10400,
        name: "Paranas",
      },
      {
        id: 11720,
        name: "Matuguinao",
      },
      {
        id: 11730,
        name: "Motiong",
      },
      {
        id: 12970,
        name: "San Jorge",
      },
      {
        id: 13530,
        name: "Calbiga",
      },
      {
        id: 15080,
        name: "Daram",
      },
      {
        id: 19110,
        name: "Almagro",
      },
      {
        id: 21330,
        name: "Hinabangan",
      },
      {
        id: 24740,
        name: "Tagapul An",
      },
      {
        id: 30840,
        name: "San Sebastian",
      },
      {
        id: 35500,
        name: "Pinabacdao",
      },
      {
        id: 35510,
        name: "Pagsanghan",
      },
      {
        id: 36470,
        name: "Villareal",
      },
      {
        id: 61370,
        name: "Jiabong",
      },
      {
        id: 78170,
        name: "Talalora",
      },
    ],
    PH035400000: [
      {
        id: 1680,
        name: "Mexico",
      },
      {
        id: 2430,
        name: "Angeles City",
      },
      {
        id: 5540,
        name: "Masantol",
      },
      {
        id: 12640,
        name: "Floridablanca",
      },
      {
        id: 15220,
        name: "Arayat",
      },
      {
        id: 15860,
        name: "Guagua",
      },
      {
        id: 16720,
        name: "Mabalacat City",
      },
      {
        id: 17560,
        name: "Magalang",
      },
      {
        id: 18500,
        name: "Porac",
      },
      {
        id: 25760,
        name: "Candaba",
      },
      {
        id: 27600,
        name: "Lubao",
      },
      {
        id: 27880,
        name: "Bacolor",
      },
      {
        id: 31470,
        name: "Apalit",
      },
      {
        id: 66180,
        name: "Sasmuan",
      },
      {
        id: 66360,
        name: "Macabebe",
      },
      {
        id: 88460,
        name: "Minalin",
      },
      {
        id: 130820,
        name: "San Simon",
      },
    ],
    PH126300000: [
      {
        id: 1700,
        name: "Tupi",
      },
      {
        id: 2170,
        name: "T'Boli",
      },
      {
        id: 5620,
        name: "Tampakan",
      },
      {
        id: 14490,
        name: "General Santos City",
      },
      {
        id: 16250,
        name: "City of Koronadal",
      },
      {
        id: 19000,
        name: "Lake Sebu",
      },
      {
        id: 70940,
        name: "Norala",
      },
      {
        id: 71220,
        name: "Polomolok",
      },
      {
        id: 86210,
        name: "Surallah",
      },
      {
        id: 88260,
        name: "Tantangan",
      },
    ],
    PH097200000: [
      {
        id: 1800,
        name: "Piñan",
      },
      {
        id: 6060,
        name: "Baliguian",
      },
      {
        id: 6710,
        name: "Dapitan City",
      },
      {
        id: 8260,
        name: "Mutia",
      },
      {
        id: 10850,
        name: "Polanco",
      },
      {
        id: 11200,
        name: "Siocon",
      },
      {
        id: 12870,
        name: "Sibuco",
      },
      {
        id: 13580,
        name: "Sergio Osmeña Sr",
      },
      {
        id: 13630,
        name: "Labason",
      },
      {
        id: 19690,
        name: "Salug",
      },
      {
        id: 19700,
        name: "Gutalac",
      },
      {
        id: 20230,
        name: "Bacungan",
      },
      {
        id: 21340,
        name: "Sibutad",
      },
      {
        id: 22210,
        name: "Sindangan",
      },
      {
        id: 26830,
        name: "Tampilisan",
      },
      {
        id: 28040,
        name: "Sirawai",
      },
      {
        id: 28050,
        name: "Jose Dalman",
      },
      {
        id: 30950,
        name: "Katipunan",
      },
      {
        id: 30960,
        name: "Siayan",
      },
      {
        id: 31390,
        name: "Pres Manuel A Roxas",
      },
      {
        id: 31990,
        name: "Godod",
      },
      {
        id: 35890,
        name: "Liloy",
      },
      {
        id: 64550,
        name: "Dipolog City",
      },
      {
        id: 66440,
        name: "Kalawit",
      },
      {
        id: 147350,
        name: "Manukan",
      },
    ],
    PH153800000: [
      {
        id: 1830,
        name: "Datu Anggal Midtimbang",
      },
      {
        id: 4640,
        name: "Guindulungan",
      },
      {
        id: 5080,
        name: "Sultan Kudarat",
      },
      {
        id: 7060,
        name: "Datu Paglas",
      },
      {
        id: 7750,
        name: "Datu Piang",
      },
      {
        id: 7760,
        name: "Datu Salibo",
      },
      {
        id: 9180,
        name: "Datu Odin Sinsuat",
      },
      {
        id: 10050,
        name: "Buldon",
      },
      {
        id: 11590,
        name: "Sultan Sa Barongis",
      },
      {
        id: 20350,
        name: "Gen SK Pendatun",
      },
      {
        id: 22460,
        name: "Pagalungan",
      },
      {
        id: 22550,
        name: "Shariff Aguak",
      },
      {
        id: 25250,
        name: "Kabuntalan",
      },
      {
        id: 25480,
        name: "Mamasapano",
      },
      {
        id: 26050,
        name: "Rajah Buayan",
      },
      {
        id: 26220,
        name: "Shariff Saydona Mustapha",
      },
      {
        id: 28260,
        name: "Pagagawan",
      },
      {
        id: 31080,
        name: "Northern Kabuntalan",
      },
      {
        id: 32130,
        name: "Sultan Mastura",
      },
      {
        id: 32660,
        name: "Datu Abdullah Sangki",
      },
      {
        id: 36950,
        name: "Upi",
      },
      {
        id: 64110,
        name: "Barira",
      },
      {
        id: 68960,
        name: "Matanog",
      },
      {
        id: 73580,
        name: "South Upi",
      },
      {
        id: 75640,
        name: "Talayan",
      },
      {
        id: 76700,
        name: "Talitay",
      },
      {
        id: 89520,
        name: "Datu Unsay",
      },
      {
        id: 112750,
        name: "Paglat",
      },
      {
        id: 137140,
        name: "Mangudadatu",
      },
      {
        id: 140980,
        name: "Datu Saudi Ampatuan",
      },
      {
        id: 145530,
        name: "Ampatuan",
      },
      {
        id: 145820,
        name: "Buluan",
      },
      {
        id: 181730,
        name: "Pandag",
      },
      {
        id: 189000,
        name: "Datu Blah T Sinsuat",
      },
      {
        id: 189960,
        name: "Datu Hoffer Ampatuan",
      },
    ],
    PH175100000: [
      {
        id: 1910,
        name: "Rizal",
      },
      {
        id: 3030,
        name: "Looc",
      },
      {
        id: 4890,
        name: "Santa Cruz",
      },
      {
        id: 7110,
        name: "Paluan",
      },
      {
        id: 15060,
        name: "Lubang",
      },
      {
        id: 15450,
        name: "Abra de Ilog",
      },
      {
        id: 27590,
        name: "Mamburao",
      },
      {
        id: 67390,
        name: "Sablayan",
      },
      {
        id: 131230,
        name: "Calintaan",
      },
    ],
    PH156600000: [
      {
        id: 1980,
        name: "Indanan",
      },
      {
        id: 5530,
        name: "Jolo",
      },
      {
        id: 7940,
        name: "Lugus",
      },
      {
        id: 7950,
        name: "Tapul",
      },
      {
        id: 7960,
        name: "Pangutaran",
      },
      {
        id: 7980,
        name: "Parang",
      },
      {
        id: 10630,
        name: "Maimbung",
      },
      {
        id: 10950,
        name: "Pata",
      },
      {
        id: 10960,
        name: "Talipao",
      },
      {
        id: 10970,
        name: "Omar",
      },
      {
        id: 13690,
        name: "Patikul",
      },
      {
        id: 15970,
        name: "Old Panamao",
      },
      {
        id: 26420,
        name: "Tongkil",
      },
      {
        id: 26480,
        name: "Siasi",
      },
      {
        id: 29270,
        name: "Pandami",
      },
      {
        id: 34650,
        name: "Hadji Panglima Tahil",
      },
      {
        id: 83290,
        name: "Luuk",
      },
      {
        id: 158590,
        name: "Panglima Estino",
      },
      {
        id: 183640,
        name: "Kalingalan Caluang",
      },
    ],
    PH166800000: [
      {
        id: 2030,
        name: "Carrascal",
      },
      {
        id: 3720,
        name: "Lanuza",
      },
      {
        id: 5610,
        name: "Tago",
      },
      {
        id: 6180,
        name: "Marihatag",
      },
      {
        id: 8340,
        name: "Bayabas",
      },
      {
        id: 8390,
        name: "Barobo",
      },
      {
        id: 11980,
        name: "Lianga",
      },
      {
        id: 11990,
        name: "Lingig",
      },
      {
        id: 15040,
        name: "Cagwait",
      },
      {
        id: 17390,
        name: "City of Tandag",
      },
      {
        id: 20040,
        name: "Hinatuan",
      },
      {
        id: 24230,
        name: "Madrid",
      },
      {
        id: 28990,
        name: "Cortes",
      },
      {
        id: 67840,
        name: "Tagbina",
      },
      {
        id: 84900,
        name: "City of Bislig",
      },
      {
        id: 87450,
        name: "Cantilan",
      },
    ],
    PH157000000: [
      {
        id: 2040,
        name: "Languyan",
      },
      {
        id: 9370,
        name: "Sibutu",
      },
      {
        id: 18300,
        name: "South Ubian",
      },
      {
        id: 22080,
        name: "Simunul",
      },
      {
        id: 28670,
        name: "Sapa Sapa",
      },
      {
        id: 29470,
        name: "Panglima Sugala",
      },
      {
        id: 30330,
        name: "Tandubas",
      },
      {
        id: 79310,
        name: "Mapun",
      },
      {
        id: 80950,
        name: "Bongao",
      },
      {
        id: 141990,
        name: "Sitangkai",
      },
      {
        id: 204320,
        name: "Turtle Islands",
      },
    ],
    PH175200000: [
      {
        id: 2070,
        name: "Naujan",
      },
      {
        id: 3500,
        name: "Gloria",
      },
      {
        id: 4970,
        name: "Baco",
      },
      {
        id: 5700,
        name: "Bansud",
      },
      {
        id: 12050,
        name: "Bongabong",
      },
      {
        id: 12140,
        name: "Puerto Galera",
      },
      {
        id: 12570,
        name: "Pinamalayan",
      },
      {
        id: 17930,
        name: "Mansalay",
      },
      {
        id: 18830,
        name: "Pola",
      },
      {
        id: 23460,
        name: "Bulalacao",
      },
      {
        id: 29680,
        name: "City of Calapan",
      },
      {
        id: 74350,
        name: "San Teodoro",
      },
    ],
    PH101300000: [
      {
        id: 2080,
        name: "Pangantucan",
      },
      {
        id: 3100,
        name: "City of Malaybalay",
      },
      {
        id: 4490,
        name: "Manolo Fortich",
      },
      {
        id: 5360,
        name: "Lantapan",
      },
      {
        id: 8050,
        name: "Damulog",
      },
      {
        id: 10580,
        name: "Maramag",
      },
      {
        id: 12390,
        name: "Cabanglasan",
      },
      {
        id: 18520,
        name: "Kalilangan",
      },
      {
        id: 24080,
        name: "Kadingilan",
      },
      {
        id: 24160,
        name: "City of Valencia",
      },
      {
        id: 27470,
        name: "Kitaotao",
      },
      {
        id: 29760,
        name: "Baungon",
      },
      {
        id: 29890,
        name: "Kibawe",
      },
      {
        id: 38640,
        name: "Talakag",
      },
      {
        id: 64400,
        name: "Dangcagan",
      },
      {
        id: 77270,
        name: "Don Carlos",
      },
      {
        id: 81930,
        name: "Impasug Ong",
      },
      {
        id: 118760,
        name: "Libona",
      },
      {
        id: 133920,
        name: "Sumilao",
      },
    ],
    PH060400000: [
      {
        id: 2150,
        name: "Tangalan",
      },
      {
        id: 2530,
        name: "Ibajay",
      },
      {
        id: 2560,
        name: "Makato",
      },
      {
        id: 2590,
        name: "Banga",
      },
      {
        id: 2790,
        name: "Lezo",
      },
      {
        id: 3260,
        name: "Libacao",
      },
      {
        id: 5130,
        name: "Madalag",
      },
      {
        id: 5660,
        name: "Numancia",
      },
      {
        id: 5890,
        name: "Buruanga",
      },
      {
        id: 6840,
        name: "Nabas",
      },
      {
        id: 9200,
        name: "Batan",
      },
      {
        id: 10930,
        name: "Kalibo",
      },
      {
        id: 15240,
        name: "Malay",
      },
      {
        id: 96180,
        name: "Altavas",
      },
      {
        id: 114830,
        name: "New Washington",
      },
    ],
    PH160300000: [
      {
        id: 2160,
        name: "Sibagat",
      },
      {
        id: 6150,
        name: "San Francisco",
      },
      {
        id: 11330,
        name: "Santa Josefa",
      },
      {
        id: 11430,
        name: "La Paz",
      },
      {
        id: 12340,
        name: "Veruela",
      },
      {
        id: 17070,
        name: "Prosperidad",
      },
      {
        id: 64930,
        name: "Trento",
      },
      {
        id: 67700,
        name: "Talacogon",
      },
      {
        id: 71420,
        name: "City of Bayugan",
      },
      {
        id: 76880,
        name: "Loreto",
      },
      {
        id: 90750,
        name: "Bunawan",
      },
    ],
    PH148100000: [
      {
        id: 2260,
        name: "Pudtol",
      },
      {
        id: 7330,
        name: "Conner",
      },
      {
        id: 7380,
        name: "Flora",
      },
      {
        id: 20420,
        name: "Kabugao",
      },
      {
        id: 64370,
        name: "Santa Marcela",
      },
      {
        id: 93810,
        name: "Calanasan",
      },
    ],
    PH175900000: [
      {
        id: 2570,
        name: "Romblon",
      },
      {
        id: 3290,
        name: "Santa Fe",
      },
      {
        id: 3380,
        name: "Ferrol",
      },
      {
        id: 3750,
        name: "Magdiwang",
      },
      {
        id: 3930,
        name: "San Fernando",
      },
      {
        id: 6190,
        name: "Corcuera",
      },
      {
        id: 6530,
        name: "Cajidiocan",
      },
      {
        id: 8720,
        name: "Odiongan",
      },
      {
        id: 19090,
        name: "San Agustin",
      },
      {
        id: 24280,
        name: "Alcantara",
      },
      {
        id: 30900,
        name: "Banton",
      },
    ],
    PH037100000: [
      {
        id: 3090,
        name: "San Marcelino",
      },
      {
        id: 8280,
        name: "Palauig",
      },
      {
        id: 8420,
        name: "San Felipe",
      },
      {
        id: 10150,
        name: "Iba",
      },
      {
        id: 11390,
        name: "San Antonio",
      },
      {
        id: 12120,
        name: "Subic",
      },
      {
        id: 12670,
        name: "Cabangan",
      },
      {
        id: 16020,
        name: "Olongapo City",
      },
      {
        id: 18370,
        name: "Candelaria",
      },
      {
        id: 28400,
        name: "Castillejos",
      },
      {
        id: 30780,
        name: "Masinloc",
      },
      {
        id: 33840,
        name: "Botolan",
      },
    ],
    PH101800000: [
      {
        id: 3420,
        name: "Mambajao",
      },
      {
        id: 5310,
        name: "Sagay",
      },
      {
        id: 71120,
        name: "Mahinog",
      },
      {
        id: 93860,
        name: "Guinsiliban",
      },
    ],
    PH174000000: [
      {
        id: 3530,
        name: "Boac",
      },
      {
        id: 10780,
        name: "Mogpog",
      },
      {
        id: 13390,
        name: "Gasan",
      },
      {
        id: 35710,
        name: "Torrijos",
      },
    ],
    PH067900000: [
      {
        id: 4160,
        name: "San Lorenzo",
      },
      {
        id: 5020,
        name: "Jordan",
      },
      {
        id: 5930,
        name: "Sibunag",
      },
      {
        id: 95400,
        name: "Nueva Valencia",
      },
    ],
    PH099700000: [
      {
        id: 4000,
        name: "City of Isabela",
      },
    ],
    PH118200000: [
      {
        id: 4270,
        name: "Laak",
      },
      {
        id: 11010,
        name: "New Bataan",
      },
      {
        id: 11090,
        name: "Mawab",
      },
      {
        id: 11960,
        name: "Maco",
      },
      {
        id: 12280,
        name: "Nabunturan",
      },
      {
        id: 14870,
        name: "Pantukan",
      },
      {
        id: 17040,
        name: "Compostela",
      },
      {
        id: 17370,
        name: "Monkayo",
      },
      {
        id: 23810,
        name: "Maragusan",
      },
      {
        id: 32890,
        name: "Montevista",
      },
    ],
    PH051600000: [
      {
        id: 4380,
        name: "Vinzons",
      },
      {
        id: 5550,
        name: "Daet",
      },
      {
        id: 5580,
        name: "Capalonga",
      },
      {
        id: 10490,
        name: "Labo",
      },
      {
        id: 11310,
        name: "Basud",
      },
      {
        id: 17480,
        name: "Paracale",
      },
      {
        id: 22660,
        name: "Jose Panganiban",
      },
      {
        id: 65540,
        name: "Santa Elena",
      },
      {
        id: 135780,
        name: "San Lorenzo Ruiz",
      },
    ],
    PH126500000: [
      {
        id: 4750,
        name: "Palimbang",
      },
      {
        id: 13550,
        name: "Lutayan",
      },
      {
        id: 16950,
        name: "Lebak",
      },
      {
        id: 25190,
        name: "President Quirino",
      },
      {
        id: 25930,
        name: "Bagumbayan",
      },
      {
        id: 32280,
        name: "Isulan",
      },
      {
        id: 33050,
        name: "Sen Ninoy Aquino",
      },
      {
        id: 36660,
        name: "Columbio",
      },
      {
        id: 37210,
        name: "Kalamansig",
      },
      {
        id: 63470,
        name: "City of Tacurong",
      },
      {
        id: 120590,
        name: "Lambayong",
      },
    ],
    PH168500000: [
      {
        id: 5690,
        name: "Libjo",
      },
      {
        id: 25260,
        name: "Dinagat",
      },
      {
        id: 70880,
        name: "Basilisa",
      },
      {
        id: 78190,
        name: "Cagdianao",
      },
      {
        id: 145270,
        name: "Tubajon",
      },
    ],
    PH128000000: [
      {
        id: 6140,
        name: "Alabel",
      },
      {
        id: 7260,
        name: "Malungon",
      },
      {
        id: 10090,
        name: "Maasim",
      },
      {
        id: 20760,
        name: "Kiamba",
      },
      {
        id: 30290,
        name: "Glan",
      },
      {
        id: 66570,
        name: "Maitum",
      },
      {
        id: 135310,
        name: "Malapatan",
      },
    ],
    PH045800000: [
      {
        id: 9990,
        name: "San Mateo",
      },
      {
        id: 23060,
        name: "City of Antipolo",
      },
      {
        id: 24880,
        name: "Angono",
      },
      {
        id: 24890,
        name: "Teresa",
      },
      {
        id: 25340,
        name: "Pililla",
      },
      {
        id: 25470,
        name: "Jala Jala",
      },
      {
        id: 29110,
        name: "Cardona",
      },
      {
        id: 30210,
        name: "Rodriguez",
      },
      {
        id: 34400,
        name: "Binangonan",
      },
      {
        id: 126100,
        name: "Tanay",
      },
      {
        id: 328640,
        name: "Cainta",
      },
    ],
    PH076100000: [
      {
        id: 21250,
        name: "Larena",
      },
      {
        id: 31000,
        name: "Enrique Villanueva",
      },
      {
        id: 33610,
        name: "Siquijor",
      },
      {
        id: 78960,
        name: "Maria",
      },
      {
        id: 112440,
        name: "Lazi",
      },
    ],
    PH129800000: [
      {
        id: 24510,
        name: "Cotabato City",
      },
    ],
    PH118600000: [
      {
        id: 27550,
        name: "Jose Abad Santos",
      },
      {
        id: 32070,
        name: "Don Marcelino",
      },
      {
        id: 67750,
        name: "Sarangani",
      },
      {
        id: 77710,
        name: "Malita",
      },
    ],
    PH020900000: [
      {
        id: 128280,
        name: "Basco",
      },
      {
        id: 128310,
        name: "Sabtang",
      },
      {
        id: 168490,
        name: "Mahatao",
      },
      {
        id: 175570,
        name: "Uyugan",
      },
      {
        id: 314680,
        name: "Ivana",
      },
      {
        id: 314690,
        name: "Itbayat",
      },
    ],
    PH694200000: [
      {
        id: 1510,
        name: "Malabon City",
      },
      {
        id: 15440,
        name: "Valenzuela City",
      },
      {
        id: 25410,
        name: "Navotas City",
      },
      {
        id: 38230,
        name: "Caloocan City",
      },
      {
        id: 1870,
        name: "Mandaluyong City",
      },
      {
        id: 1880,
        name: "San Juan City",
      },
      {
        id: 6680,
        name: "Quezon City",
      },
      {
        id: 22900,
        name: "Pasig City",
      },
      {
        id: 63180,
        name: "Marikina City",
      },
      {
        id: 4100,
        name: "Pateros",
      },
      {
        id: 4830,
        name: "Muntinlupa City",
      },
      {
        id: 7480,
        name: "Las Piñas City",
      },
      {
        id: 17940,
        name: "Parañaque City",
      },
      {
        id: 25210,
        name: "Taguig City",
      },
      {
        id: 35190,
        name: "Makati City",
      },
      {
        id: 38240,
        name: "Pasay City",
      },
    ],
  },
  states: [
    {
      iso2: "PH104200000",
      name: "Misamis Occidental",
      id: 0,
    },
    {
      iso2: "PH082600000",
      name: "Eastern Samar",
      id: 1,
    },
    {
      iso2: "PH160200000",
      name: "Agusan del Norte",
      id: 2,
    },
    {
      iso2: "PH034900000",
      name: "Nueva Ecija",
      id: 3,
    },
    {
      iso2: "PH056200000",
      name: "Sorsogon",
      id: 4,
    },
    {
      iso2: "PH083700000",
      name: "Leyte",
      id: 5,
    },
    {
      iso2: "PH141100000",
      name: "Benguet",
      id: 6,
    },
    {
      iso2: "PH042100000",
      name: "Cavite",
      id: 7,
    },
    {
      iso2: "PH045600000",
      name: "Quezon",
      id: 8,
    },
    {
      iso2: "PH112300000",
      name: "Davao del Norte",
      id: 9,
    },
    {
      iso2: "PH030800000",
      name: "Bataan",
      id: 11,
    },
    {
      iso2: "PH012800000",
      name: "Ilocos Norte",
      id: 12,
    },
    {
      iso2: "PH143200000",
      name: "Kalinga",
      id: 13,
    },
    {
      iso2: "PH025000000",
      name: "Nueva Vizcaya",
      id: 15,
    },
    {
      iso2: "PH054100000",
      name: "Masbate",
      id: 16,
    },
    {
      iso2: "PH060600000",
      name: "Antique",
      id: 17,
    },
    {
      iso2: "PH063000000",
      name: "Iloilo",
      id: 18,
    },
    {
      iso2: "PH071200000",
      name: "Bohol",
      id: 19,
    },
    {
      iso2: "PH064500000",
      name: "Negros Occidental",
      id: 21,
    },
    {
      iso2: "PH012900000",
      name: "Ilocos Sur",
      id: 22,
    },
    {
      iso2: "PH166700000",
      name: "Surigao del Norte",
      id: 26,
    },
    {
      iso2: "PH103500000",
      name: "Lanao del Norte",
      id: 27,
    },
    {
      iso2: "PH124700000",
      name: "Cotabato",
      id: 30,
    },
    {
      iso2: "PH153600000",
      name: "Lanao del Sur",
      id: 31,
    },
    {
      iso2: "PH021500000",
      name: "Cagayan",
      id: 33,
    },
    {
      iso2: "PH175300000",
      name: "Palawan",
      id: 35,
    },
    {
      iso2: "PH036900000",
      name: "Tarlac",
      id: 36,
    },
    {
      iso2: "PH140100000",
      name: "Abra",
      id: 39,
    },
    {
      iso2: "PH031400000",
      name: "Bulacan",
      id: 41,
    },
    {
      iso2: "PH061900000",
      name: "Capiz",
      id: 43,
    },
    {
      iso2: "PH015500000",
      name: "Pangasinan",
      id: 49,
    },
    {
      iso2: "PH074600000",
      name: "Negros Oriental",
      id: 51,
    },
    {
      iso2: "PH142700000",
      name: "Ifugao",
      id: 61,
    },
    {
      iso2: "PH144400000",
      name: "Mountain Province",
      id: 62,
    },
    {
      iso2: "PH084800000",
      name: "Northern Samar",
      id: 63,
    },
    {
      iso2: "PH025700000",
      name: "Quirino",
      id: 66,
    },
    {
      iso2: "PH050500000",
      name: "Albay",
      id: 71,
    },
    {
      iso2: "PH051700000",
      name: "Camarines Sur",
      id: 72,
    },
    {
      iso2: "PH041000000",
      name: "Batangas",
      id: 73,
    },
    {
      iso2: "PH086400000",
      name: "Southern Leyte",
      id: 76,
    },
    {
      iso2: "PH052000000",
      name: "Catanduanes",
      id: 83,
    },
    {
      iso2: "PH112500000",
      name: "Davao Oriental",
      id: 88,
    },
    {
      iso2: "PH072200000",
      name: "Cebu",
      id: 100,
    },
    {
      iso2: "PH112400000",
      name: "Davao del Sur",
      id: 103,
    },
    {
      iso2: "PH043400000",
      name: "Laguna",
      id: 104,
    },
    {
      iso2: "PH097300000",
      name: "Zamboanga del Sur",
      id: 113,
    },
    {
      iso2: "PH150700000",
      name: "Basilan",
      id: 114,
    },
    {
      iso2: "PH023100000",
      name: "Isabela",
      id: 118,
    },
    {
      iso2: "PH037700000",
      name: "Aurora",
      id: 134,
    },
    {
      iso2: "PH098300000",
      name: "Zamboanga Sibugay",
      id: 135,
    },
    {
      iso2: "PH104300000",
      name: "Misamis Oriental",
      id: 136,
    },
    {
      iso2: "PH013300000",
      name: "La Union",
      id: 140,
    },
    {
      iso2: "PH087800000",
      name: "Biliran",
      id: 147,
    },
    {
      iso2: "PH086000000",
      name: "Samar",
      id: 160,
    },
    {
      iso2: "PH035400000",
      name: "Pampanga",
      id: 168,
    },
    {
      iso2: "PH126300000",
      name: "South Cotabato",
      id: 170,
    },
    {
      iso2: "PH097200000",
      name: "Zamboanga del Norte",
      id: 180,
    },
    {
      iso2: "PH153800000",
      name: "Maguindanao",
      id: 183,
    },
    {
      iso2: "PH175100000",
      name: "Occidental Mindoro",
      id: 191,
    },
    {
      iso2: "PH156600000",
      name: "Sulu",
      id: 198,
    },
    {
      iso2: "PH166800000",
      name: "Surigao del Sur",
      id: 203,
    },
    {
      iso2: "PH157000000",
      name: "Tawi Tawi",
      id: 204,
    },
    {
      iso2: "PH175200000",
      name: "Oriental Mindoro",
      id: 207,
    },
    {
      iso2: "PH101300000",
      name: "Bukidnon",
      id: 208,
    },
    {
      iso2: "PH060400000",
      name: "Aklan",
      id: 215,
    },
    {
      iso2: "PH160300000",
      name: "Agusan del Sur",
      id: 216,
    },
    {
      iso2: "PH148100000",
      name: "Apayao",
      id: 226,
    },
    {
      iso2: "PH175900000",
      name: "Romblon",
      id: 257,
    },
    {
      iso2: "PH037100000",
      name: "Zambales",
      id: 309,
    },
    {
      iso2: "PH101800000",
      name: "Camiguin",
      id: 342,
    },
    {
      iso2: "PH174000000",
      name: "Marinduque",
      id: 353,
    },
    {
      iso2: "PH067900000",
      name: "Guimaras",
      id: 374,
    },
    {
      iso2: "PH099700000",
      name: "City of Isabela",
      id: 400,
    },
    {
      iso2: "PH118200000",
      name: "Compostela Valley",
      id: 427,
    },
    {
      iso2: "PH051600000",
      name: "Camarines Norte",
      id: 438,
    },
    {
      iso2: "PH126500000",
      name: "Sultan Kudarat",
      id: 475,
    },
    {
      iso2: "PH168500000",
      name: "Dinagat Islands",
      id: 569,
    },
    {
      iso2: "PH128000000",
      name: "Sarangani",
      id: 614,
    },
    {
      iso2: "PH045800000",
      name: "Rizal",
      id: 999,
    },
    {
      iso2: "PH076100000",
      name: "Siquijor",
      id: 2125,
    },
    {
      iso2: "PH129800000",
      name: "Cotabato City",
      id: 2451,
    },
    {
      iso2: "PH118600000",
      name: "Davao Occidental",
      id: 2755,
    },
    {
      iso2: "PH020900000",
      name: "Batanes",
      id: 12828,
    },
    {
      iso2: "PH694200000",
      name: "Metro Manila",
      id: 69420,
    },
  ],
};

export default locations;
