const countriesApi = [
    {
      country_id: "1",
      sortname: "AF",
      country_name: "Afghanistan"
    },
    {
      country_id: "2",
      sortname: "AL",
      country_name: "Albania"
    },
    {
      country_id: "3",
      sortname: "DZ",
      country_name: "Algeria"
    },
    {
      country_id: "4",
      sortname: "AS",
      country_name: "American Samoa"
    },
    {
      country_id: "5",
      sortname: "AD",
      country_name: "Andorra"
    },
    {
      country_id: "6",
      sortname: "AO",
      country_name: "Angola"
    },
    {
      country_id: "7",
      sortname: "AI",
      country_name: "Anguilla"
    },
    {
      country_id: "8",
      sortname: "AQ",
      country_name: "Antarctica"
    },
    {
      country_id: "9",
      sortname: "AG",
      country_name: "Antigua And Barbuda"
    },
    {
      country_id: "10",
      sortname: "AR",
      country_name: "Argentina"
    },
    {
      country_id: "11",
      sortname: "AM",
      country_name: "Armenia"
    },
    {
      country_id: "12",
      sortname: "AW",
      country_name: "Aruba"
    },
    {
      country_id: "13",
      sortname: "AU",
      country_name: "Australia"
    },
    {
      country_id: "14",
      sortname: "AT",
      country_name: "Austria"
    },
    {
      country_id: "15",
      sortname: "AZ",
      country_name: "Azerbaijan"
    },
    {
      country_id: "16",
      sortname: "BS",
      country_name: "Bahamas The"
    },
    {
      country_id: "17",
      sortname: "BH",
      country_name: "Bahrain"
    },
    {
      country_id: "18",
      sortname: "BD",
      country_name: "Bangladesh"
    },
    {
      country_id: "19",
      sortname: "BB",
      country_name: "Barbados"
    },
    {
      country_id: "20",
      sortname: "BY",
      country_name: "Belarus"
    },
    {
      country_id: "21",
      sortname: "BE",
      country_name: "Belgium"
    },
    {
      country_id: "22",
      sortname: "BZ",
      country_name: "Belize"
    },
    {
      country_id: "23",
      sortname: "BJ",
      country_name: "Benin"
    },
    {
      country_id: "24",
      sortname: "BM",
      country_name: "Bermuda"
    },
    {
      country_id: "25",
      sortname: "BT",
      country_name: "Bhutan"
    },
    {
      country_id: "26",
      sortname: "BO",
      country_name: "Bolivia"
    },
    {
      country_id: "27",
      sortname: "BA",
      country_name: "Bosnia and Herzegovina"
    },
    {
      country_id: "28",
      sortname: "BW",
      country_name: "Botswana"
    },
    {
      country_id: "29",
      sortname: "BV",
      country_name: "Bouvet Island"
    },
    {
      country_id: "30",
      sortname: "BR",
      country_name: "Brazil"
    },
    {
      country_id: "31",
      sortname: "IO",
      country_name: "British Indian Ocean Territory"
    },
    {
      country_id: "32",
      sortname: "BN",
      country_name: "Brunei"
    },
    {
      country_id: "33",
      sortname: "BG",
      country_name: "Bulgaria"
    },
    {
      country_id: "34",
      sortname: "BF",
      country_name: "Burkina Faso"
    },
    {
      country_id: "35",
      sortname: "BI",
      country_name: "Burundi"
    },
    {
      country_id: "36",
      sortname: "KH",
      country_name: "Cambodia"
    },
    {
      country_id: "37",
      sortname: "CM",
      country_name: "Cameroon"
    },
    {
      country_id: "38",
      sortname: "CA",
      country_name: "Canada"
    },
    {
      country_id: "39",
      sortname: "CV",
      country_name: "Cape Verde"
    },
    {
      country_id: "40",
      sortname: "KY",
      country_name: "Cayman Islands"
    },
    {
      country_id: "41",
      sortname: "CF",
      country_name: "Central African Republic"
    },
    {
      country_id: "42",
      sortname: "TD",
      country_name: "Chad"
    },
    {
      country_id: "43",
      sortname: "CL",
      country_name: "Chile"
    },
    {
      country_id: "44",
      sortname: "CN",
      country_name: "China"
    },
    {
      country_id: "45",
      sortname: "CX",
      country_name: "Christmas Island"
    },
    {
      country_id: "46",
      sortname: "CC",
      country_name: "Cocos (Keeling) Islands"
    },
    {
      country_id: "47",
      sortname: "CO",
      country_name: "Colombia"
    },
    {
      country_id: "48",
      sortname: "KM",
      country_name: "Comoros"
    },
    {
      country_id: "49",
      sortname: "CG",
      country_name: "Congo"
    },
    {
      country_id: "50",
      sortname: "CD",
      country_name: "Congo The Democratic Republic Of The"
    },
    {
      country_id: "51",
      sortname: "CK",
      country_name: "Cook Islands"
    },
    {
      country_id: "52",
      sortname: "CR",
      country_name: "Costa Rica"
    },
    {
      country_id: "53",
      sortname: "CI",
      country_name: "Cote D'Ivoire (Ivory Coast)"
    },
    {
      country_id: "54",
      sortname: "HR",
      country_name: "Croatia (Hrvatska)"
    },
    {
      country_id: "55",
      sortname: "CU",
      country_name: "Cuba"
    },
    {
      country_id: "56",
      sortname: "CY",
      country_name: "Cyprus"
    },
    {
      country_id: "57",
      sortname: "CZ",
      country_name: "Czech Republic"
    },
    {
      country_id: "58",
      sortname: "DK",
      country_name: "Denmark"
    },
    {
      country_id: "59",
      sortname: "DJ",
      country_name: "Djibouti"
    },
    {
      country_id: "60",
      sortname: "DM",
      country_name: "Dominica"
    },
    {
      country_id: "61",
      sortname: "DO",
      country_name: "Dominican Republic"
    },
    {
      country_id: "62",
      sortname: "TP",
      country_name: "East Timor"
    },
    {
      country_id: "63",
      sortname: "EC",
      country_name: "Ecuador"
    },
    {
      country_id: "64",
      sortname: "EG",
      country_name: "Egypt"
    },
    {
      country_id: "65",
      sortname: "SV",
      country_name: "El Salvador"
    },
    {
      country_id: "66",
      sortname: "GQ",
      country_name: "Equatorial Guinea"
    },
    {
      country_id: "67",
      sortname: "ER",
      country_name: "Eritrea"
    },
    {
      country_id: "68",
      sortname: "EE",
      country_name: "Estonia"
    },
    {
      country_id: "69",
      sortname: "ET",
      country_name: "Ethiopia"
    },
    {
      country_id: "70",
      sortname: "XA",
      country_name: "External Territories of Australia"
    },
    {
      country_id: "71",
      sortname: "FK",
      country_name: "Falkland Islands"
    },
    {
      country_id: "72",
      sortname: "FO",
      country_name: "Faroe Islands"
    },
    {
      country_id: "73",
      sortname: "FJ",
      country_name: "Fiji Islands"
    },
    {
      country_id: "74",
      sortname: "FI",
      country_name: "Finland"
    },
    {
      country_id: "75",
      sortname: "FR",
      country_name: "France"
    },
    {
      country_id: "76",
      sortname: "GF",
      country_name: "French Guiana"
    },
    {
      country_id: "77",
      sortname: "PF",
      country_name: "French Polynesia"
    },
    {
      country_id: "78",
      sortname: "TF",
      country_name: "French Southern Territories"
    },
    {
      country_id: "79",
      sortname: "GA",
      country_name: "Gabon"
    },
    {
      country_id: "80",
      sortname: "GM",
      country_name: "Gambia The"
    },
    {
      country_id: "81",
      sortname: "GE",
      country_name: "Georgia"
    },
    {
      country_id: "82",
      sortname: "DE",
      country_name: "Germany"
    },
    {
      country_id: "83",
      sortname: "GH",
      country_name: "Ghana"
    },
    {
      country_id: "84",
      sortname: "GI",
      country_name: "Gibraltar"
    },
    {
      country_id: "85",
      sortname: "GR",
      country_name: "Greece"
    },
    {
      country_id: "86",
      sortname: "GL",
      country_name: "Greenland"
    },
    {
      country_id: "87",
      sortname: "GD",
      country_name: "Grenada"
    },
    {
      country_id: "88",
      sortname: "GP",
      country_name: "Guadeloupe"
    },
    {
      country_id: "89",
      sortname: "GU",
      country_name: "Guam"
    },
    {
      country_id: "90",
      sortname: "GT",
      country_name: "Guatemala"
    },
    {
      country_id: "91",
      sortname: "XU",
      country_name: "Guernsey and Alderney"
    },
    {
      country_id: "92",
      sortname: "GN",
      country_name: "Guinea"
    },
    {
      country_id: "93",
      sortname: "GW",
      country_name: "Guinea-Bissau"
    },
    {
      country_id: "94",
      sortname: "GY",
      country_name: "Guyana"
    },
    {
      country_id: "95",
      sortname: "HT",
      country_name: "Haiti"
    },
    {
      country_id: "96",
      sortname: "HM",
      country_name: "Heard and McDonald Islands"
    },
    {
      country_id: "97",
      sortname: "HN",
      country_name: "Honduras"
    },
    {
      country_id: "98",
      sortname: "HK",
      country_name: "Hong Kong S.A.R."
    },
    {
      country_id: "99",
      sortname: "HU",
      country_name: "Hungary"
    },
    {
      country_id: "100",
      sortname: "IS",
      country_name: "Iceland"
    },
    {
      country_id: "101",
      sortname: "IN",
      country_name: "India"
    },
    {
      country_id: "102",
      sortname: "ID",
      country_name: "Indonesia"
    },
    {
      country_id: "103",
      sortname: "IR",
      country_name: "Iran"
    },
    {
      country_id: "104",
      sortname: "IQ",
      country_name: "Iraq"
    },
    {
      country_id: "105",
      sortname: "IE",
      country_name: "Ireland"
    },
    {
      country_id: "106",
      sortname: "IL",
      country_name: "Israel"
    },
    {
      country_id: "107",
      sortname: "IT",
      country_name: "Italy"
    },
    {
      country_id: "108",
      sortname: "JM",
      country_name: "Jamaica"
    },
    {
      country_id: "109",
      sortname: "JP",
      country_name: "Japan"
    },
    {
      country_id: "110",
      sortname: "XJ",
      country_name: "Jersey"
    },
    {
      country_id: "111",
      sortname: "JO",
      country_name: "Jordan"
    },
    {
      country_id: "112",
      sortname: "KZ",
      country_name: "Kazakhstan"
    },
    {
      country_id: "113",
      sortname: "KE",
      country_name: "Kenya"
    },
    {
      country_id: "114",
      sortname: "KI",
      country_name: "Kiribati"
    },
    {
      country_id: "115",
      sortname: "KP",
      country_name: "Korea North"
    },
    {
      country_id: "116",
      sortname: "KR",
      country_name: "Korea South"
    },
    {
      country_id: "117",
      sortname: "KW",
      country_name: "Kuwait"
    },
    {
      country_id: "118",
      sortname: "KG",
      country_name: "Kyrgyzstan"
    },
    {
      country_id: "119",
      sortname: "LA",
      country_name: "Laos"
    },
    {
      country_id: "120",
      sortname: "LV",
      country_name: "Latvia"
    },
    {
      country_id: "121",
      sortname: "LB",
      country_name: "Lebanon"
    },
    {
      country_id: "122",
      sortname: "LS",
      country_name: "Lesotho"
    },
    {
      country_id: "123",
      sortname: "LR",
      country_name: "Liberia"
    },
    {
      country_id: "124",
      sortname: "LY",
      country_name: "Libya"
    },
    {
      country_id: "125",
      sortname: "LI",
      country_name: "Liechtenstein"
    },
    {
      country_id: "126",
      sortname: "LT",
      country_name: "Lithuania"
    },
    {
      country_id: "127",
      sortname: "LU",
      country_name: "Luxembourg"
    },
    {
      country_id: "128",
      sortname: "MO",
      country_name: "Macau S.A.R."
    },
    {
      country_id: "129",
      sortname: "MK",
      country_name: "Macedonia"
    },
    {
      country_id: "130",
      sortname: "MG",
      country_name: "Madagascar"
    },
    {
      country_id: "131",
      sortname: "MW",
      country_name: "Malawi"
    },
    {
      country_id: "132",
      sortname: "MY",
      country_name: "Malaysia"
    },
    {
      country_id: "133",
      sortname: "MV",
      country_name: "Maldives"
    },
    {
      country_id: "134",
      sortname: "ML",
      country_name: "Mali"
    },
    {
      country_id: "135",
      sortname: "MT",
      country_name: "Malta"
    },
    {
      country_id: "136",
      sortname: "XM",
      country_name: "Man (Isle of)"
    },
    {
      country_id: "137",
      sortname: "MH",
      country_name: "Marshall Islands"
    },
    {
      country_id: "138",
      sortname: "MQ",
      country_name: "Martinique"
    },
    {
      country_id: "139",
      sortname: "MR",
      country_name: "Mauritania"
    },
    {
      country_id: "140",
      sortname: "MU",
      country_name: "Mauritius"
    },
    {
      country_id: "141",
      sortname: "YT",
      country_name: "Mayotte"
    },
    {
      country_id: "142",
      sortname: "MX",
      country_name: "Mexico"
    },
    {
      country_id: "143",
      sortname: "FM",
      country_name: "Micronesia"
    },
    {
      country_id: "144",
      sortname: "MD",
      country_name: "Moldova"
    },
    {
      country_id: "145",
      sortname: "MC",
      country_name: "Monaco"
    },
    {
      country_id: "146",
      sortname: "MN",
      country_name: "Mongolia"
    },
    {
      country_id: "147",
      sortname: "MS",
      country_name: "Montserrat"
    },
    {
      country_id: "148",
      sortname: "MA",
      country_name: "Morocco"
    },
    {
      country_id: "149",
      sortname: "MZ",
      country_name: "Mozambique"
    },
    {
      country_id: "150",
      sortname: "MM",
      country_name: "Myanmar"
    },
    {
      country_id: "151",
      sortname: "NA",
      country_name: "Namibia"
    },
    {
      country_id: "152",
      sortname: "NR",
      country_name: "Nauru"
    },
    {
      country_id: "153",
      sortname: "NP",
      country_name: "Nepal"
    },
    {
      country_id: "154",
      sortname: "AN",
      country_name: "Netherlands Antilles"
    },
    {
      country_id: "155",
      sortname: "NL",
      country_name: "Netherlands The"
    },
    {
      country_id: "156",
      sortname: "NC",
      country_name: "New Caledonia"
    },
    {
      country_id: "157",
      sortname: "NZ",
      country_name: "New Zealand"
    },
    {
      country_id: "158",
      sortname: "NI",
      country_name: "Nicaragua"
    },
    {
      country_id: "159",
      sortname: "NE",
      country_name: "Niger"
    },
    {
      country_id: "160",
      sortname: "NG",
      country_name: "Nigeria"
    },
    {
      country_id: "161",
      sortname: "NU",
      country_name: "Niue"
    },
    {
      country_id: "162",
      sortname: "NF",
      country_name: "Norfolk Island"
    },
    {
      country_id: "163",
      sortname: "MP",
      country_name: "Northern Mariana Islands"
    },
    {
      country_id: "164",
      sortname: "NO",
      country_name: "Norway"
    },
    {
      country_id: "165",
      sortname: "OM",
      country_name: "Oman"
    },
    {
      country_id: "166",
      sortname: "PK",
      country_name: "Pakistan"
    },
    {
      country_id: "167",
      sortname: "PW",
      country_name: "Palau"
    },
    {
      country_id: "168",
      sortname: "PS",
      country_name: "Palestinian Territory Occupied"
    },
    {
      country_id: "169",
      sortname: "PA",
      country_name: "Panama"
    },
    {
      country_id: "170",
      sortname: "PG",
      country_name: "Papua new Guinea"
    },
    {
      country_id: "171",
      sortname: "PY",
      country_name: "Paraguay"
    },
    {
      country_id: "172",
      sortname: "PE",
      country_name: "Peru"
    },
    {
      country_id: "173",
      sortname: "PH",
      country_name: "Philippines"
    },
    {
      country_id: "174",
      sortname: "PN",
      country_name: "Pitcairn Island"
    },
    {
      country_id: "175",
      sortname: "PL",
      country_name: "Poland"
    },
    {
      country_id: "176",
      sortname: "PT",
      country_name: "Portugal"
    },
    {
      country_id: "177",
      sortname: "PR",
      country_name: "Puerto Rico"
    },
    {
      country_id: "178",
      sortname: "QA",
      country_name: "Qatar"
    },
    {
      country_id: "179",
      sortname: "RE",
      country_name: "Reunion"
    },
    {
      country_id: "180",
      sortname: "RO",
      country_name: "Romania"
    },
    {
      country_id: "181",
      sortname: "RU",
      country_name: "Russia"
    },
    {
      country_id: "182",
      sortname: "RW",
      country_name: "Rwanda"
    },
    {
      country_id: "183",
      sortname: "SH",
      country_name: "Saint Helena"
    },
    {
      country_id: "184",
      sortname: "KN",
      country_name: "Saint Kitts And Nevis"
    },
    {
      country_id: "185",
      sortname: "LC",
      country_name: "Saint Lucia"
    },
    {
      country_id: "186",
      sortname: "PM",
      country_name: "Saint Pierre and Miquelon"
    },
    {
      country_id: "187",
      sortname: "VC",
      country_name: "Saint Vincent And The Grenadines"
    },
    {
      country_id: "188",
      sortname: "WS",
      country_name: "Samoa"
    },
    {
      country_id: "189",
      sortname: "SM",
      country_name: "San Marino"
    },
    {
      country_id: "190",
      sortname: "ST",
      country_name: "Sao Tome and Principe"
    },
    {
      country_id: "191",
      sortname: "SA",
      country_name: "Saudi Arabia"
    },
    {
      country_id: "192",
      sortname: "SN",
      country_name: "Senegal"
    },
    {
      country_id: "193",
      sortname: "RS",
      country_name: "Serbia"
    },
    {
      country_id: "194",
      sortname: "SC",
      country_name: "Seychelles"
    },
    {
      country_id: "195",
      sortname: "SL",
      country_name: "Sierra Leone"
    },
    {
      country_id: "196",
      sortname: "SG",
      country_name: "Singapore"
    },
    {
      country_id: "197",
      sortname: "SK",
      country_name: "Slovakia"
    },
    {
      country_id: "198",
      sortname: "SI",
      country_name: "Slovenia"
    },
    {
      country_id: "199",
      sortname: "XG",
      country_name: "Smaller Territories of the UK"
    },
    {
      country_id: "200",
      sortname: "SB",
      country_name: "Solomon Islands"
    },
    {
      country_id: "201",
      sortname: "SO",
      country_name: "Somalia"
    },
    {
      country_id: "202",
      sortname: "ZA",
      country_name: "South Africa"
    },
    {
      country_id: "203",
      sortname: "GS",
      country_name: "South Georgia"
    },
    {
      country_id: "204",
      sortname: "SS",
      country_name: "South Sudan"
    },
    {
      country_id: "205",
      sortname: "ES",
      country_name: "Spain"
    },
    {
      country_id: "206",
      sortname: "LK",
      country_name: "Sri Lanka"
    },
    {
      country_id: "207",
      sortname: "SD",
      country_name: "Sudan"
    },
    {
      country_id: "208",
      sortname: "SR",
      country_name: "Suriname"
    },
    {
      country_id: "209",
      sortname: "SJ",
      country_name: "Svalbard And Jan Mayen Islands"
    },
    {
      country_id: "210",
      sortname: "SZ",
      country_name: "Swaziland"
    },
    {
      country_id: "211",
      sortname: "SE",
      country_name: "Sweden"
    },
    {
      country_id: "212",
      sortname: "CH",
      country_name: "Switzerland"
    },
    {
      country_id: "213",
      sortname: "SY",
      country_name: "Syria"
    },
    {
      country_id: "214",
      sortname: "TW",
      country_name: "Taiwan"
    },
    {
      country_id: "215",
      sortname: "TJ",
      country_name: "Tajikistan"
    },
    {
      country_id: "216",
      sortname: "TZ",
      country_name: "Tanzania"
    },
    {
      country_id: "217",
      sortname: "TH",
      country_name: "Thailand"
    },
    {
      country_id: "218",
      sortname: "TG",
      country_name: "Togo"
    },
    {
      country_id: "219",
      sortname: "TK",
      country_name: "Tokelau"
    },
    {
      country_id: "220",
      sortname: "TO",
      country_name: "Tonga"
    },
    {
      country_id: "221",
      sortname: "TT",
      country_name: "Trinidad And Tobago"
    },
    {
      country_id: "222",
      sortname: "TN",
      country_name: "Tunisia"
    },
    {
      country_id: "223",
      sortname: "TR",
      country_name: "Turkey"
    },
    {
      country_id: "224",
      sortname: "TM",
      country_name: "Turkmenistan"
    },
    {
      country_id: "225",
      sortname: "TC",
      country_name: "Turks And Caicos Islands"
    },
    {
      country_id: "226",
      sortname: "TV",
      country_name: "Tuvalu"
    },
    {
      country_id: "227",
      sortname: "UG",
      country_name: "Uganda"
    },
    {
      country_id: "228",
      sortname: "UA",
      country_name: "Ukraine"
    },
    {
      country_id: "229",
      sortname: "AE",
      country_name: "United Arab Emirates"
    },
    {
      country_id: "230",
      sortname: "GB",
      country_name: "United Kingdom"
    },
    {
      country_id: "231",
      sortname: "US",
      country_name: "United States"
    },
    {
      country_id: "232",
      sortname: "UM",
      country_name: "United States Minor Outlying Islands"
    },
    {
      country_id: "233",
      sortname: "UY",
      country_name: "Uruguay"
    },
    {
      country_id: "234",
      sortname: "UZ",
      country_name: "Uzbekistan"
    },
    {
      country_id: "235",
      sortname: "VU",
      country_name: "Vanuatu"
    },
    {
      country_id: "236",
      sortname: "VA",
      country_name: "Vatican City State (Holy See)"
    },
    {
      country_id: "237",
      sortname: "VE",
      country_name: "Venezuela"
    },
    {
      country_id: "238",
      sortname: "VN",
      country_name: "Vietnam"
    },
    {
      country_id: "239",
      sortname: "VG",
      country_name: "Virgin Islands (British)"
    },
    {
      country_id: "240",
      sortname: "VI",
      country_name: "Virgin Islands (US)"
    },
    {
      country_id: "241",
      sortname: "WF",
      country_name: "Wallis And Futuna Islands"
    },
    {
      country_id: "242",
      sortname: "EH",
      country_name: "Western Sahara"
    },
    {
      country_id: "243",
      sortname: "YE",
      country_name: "Yemen"
    },
    {
      country_id: "244",
      sortname: "YU",
      country_name: "Yugoslavia"
    },
    {
      country_id: "245",
      sortname: "ZM",
      country_name: "Zambia"
    },
    {
      country_id: "246",
      sortname: "ZW",
      country_name: "Zimbabwe"
    }
  ];

  export default countriesApi;