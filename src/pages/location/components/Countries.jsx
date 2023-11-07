import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, InputLabel } from "@mui/material";
import { useState } from "react";
import "../Location.scss";
import { Add } from "@mui/icons-material";

export default function Countries({ setCountry, continent }) {
  const getContinent = (id) => {
    switch (id) {
      case 1:
        return "Asia";
      case 2:
        return "Africa";
      case 3:
        return "Europe";
      case 4:
        return "North America";
      case 5:
        return "South America";
      case 6:
        return "Oceania";
      case 7:
        return "Antarctica";
      default:
        return "Europe";
    }
  };
  return (
    <Box sx={{ width: "100%", mb: 3 }}>
      <InputLabel id="select-country" sx={{ mb: 2 }}>
        Country
      </InputLabel>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ width: "100%" }}>
          <Autocomplete
            onChange={(e) => {
              setCountry(
                e.target.innerHTML.toString().split('alt="">')[1].split(" (")[0]
              );
            }}
            id="country-select-demo"
            options={countries.filter((c) => {
              if (continent) {
                return c?.continent === getContinent(continent);
              }
              return true;
            })}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(props, option) => (
              <Box
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  alt=""
                />
                {option.label} ({option.code})
              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Choose a country"
                helperText="start typing for suggestions"
                color="warning"
                variant="outlined"
                value={params}
                sx={{ width: "100%" }}
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
        </Box>
      </Box>
    </Box>
  );
}
const countries = [
  { code: "AD", label: "Andorra", phone: "376", continent: "Europe" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
    continent: "Asia",
  },
  { code: "AF", label: "Afghanistan", phone: "93", continent: "Asia" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
    continent: "North America",
  },
  { code: "AI", label: "Anguilla", phone: "1-264", continent: "North America" },
  { code: "AL", label: "Albania", phone: "355", continent: "Europe" },
  { code: "AM", label: "Armenia", phone: "374", continent: "Asia" },
  { code: "AO", label: "Angola", phone: "244", continent: "Africa" },
  { code: "AQ", label: "Antarctica", phone: "672", continent: "Antarctica" },
  { code: "AR", label: "Argentina", phone: "54", continent: "South America" },
  { code: "AS", label: "American Samoa", phone: "1-684", continent: "Oceania" },
  { code: "AT", label: "Austria", phone: "43", continent: "Europe" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
    continent: "Oceania",
  },
  { code: "AW", label: "Aruba", phone: "297", continent: "North America" },
  { code: "AX", label: "Alland Islands", phone: "358", continent: "Europe" },
  { code: "AZ", label: "Azerbaijan", phone: "994", continent: "Asia" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
    continent: "Europe",
  },
  { code: "BB", label: "Barbados", phone: "1-246", continent: "North America" },
  { code: "BD", label: "Bangladesh", phone: "880", continent: "Asia" },
  { code: "BE", label: "Belgium", phone: "32", continent: "Europe" },
  { code: "BF", label: "Burkina Faso", phone: "226", continent: "Africa" },
  { code: "BG", label: "Bulgaria", phone: "359", continent: "Europe" },
  { code: "BH", label: "Bahrain", phone: "973", continent: "Asia" },
  { code: "BI", label: "Burundi", phone: "257", continent: "Africa" },
  { code: "BJ", label: "Benin", phone: "229", continent: "Africa" },
  {
    code: "BL",
    label: "Saint Barthelemy",
    phone: "590",
    continent: "North America",
  },
  { code: "BM", label: "Bermuda", phone: "1-441", continent: "North America" },
  { code: "BN", label: "Brunei Darussalam", phone: "673", continent: "Asia" },
  { code: "BO", label: "Bolivia", phone: "591", continent: "South America" },
  { code: "BR", label: "Brazil", phone: "55", continent: "South America" },
  { code: "BS", label: "Bahamas", phone: "1-242", continent: "North America" },
  { code: "BT", label: "Bhutan", phone: "975", continent: "Asia" },
  { code: "BV", label: "Bouvet Island", phone: "47", continent: "Antarctica" },
  { code: "BW", label: "Botswana", phone: "267", continent: "Africa" },
  { code: "BY", label: "Belarus", phone: "375", continent: "Europe" },
  { code: "BZ", label: "Belize", phone: "501", continent: "North America" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
    continent: "North America",
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
    continent: "Asia",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
    continent: "Africa",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
    continent: "Africa",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
    continent: "Africa",
  },
  { code: "CH", label: "Switzerland", phone: "41", continent: "Europe" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225", continent: "Africa" },
  { code: "CK", label: "Cook Islands", phone: "682", continent: "Oceania" },
  { code: "CL", label: "Chile", phone: "56", continent: "South America" },
  { code: "CM", label: "Cameroon", phone: "237", continent: "Africa" },
  { code: "CN", label: "China", phone: "86", continent: "Asia" },
  { code: "CO", label: "Colombia", phone: "57", continent: "South America" },
  { code: "CR", label: "Costa Rica", phone: "506", continent: "North America" },
  { code: "CU", label: "Cuba", phone: "53", continent: "North America" },
  { code: "CV", label: "Cape Verde", phone: "238", continent: "Africa" },
  { code: "CW", label: "Curacao", phone: "599", continent: "North America" },
  { code: "CX", label: "Christmas Island", phone: "61", continent: "Asia" },
  { code: "CY", label: "Cyprus", phone: "357", continent: "Europe" },
  { code: "CZ", label: "Czech Republic", phone: "420", continent: "Europe" },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
    continent: "Europe",
  },
  { code: "DJ", label: "Djibouti", phone: "253", continent: "Africa" },
  { code: "DK", label: "Denmark", phone: "45", continent: "Europe" },
  { code: "DM", label: "Dominica", phone: "1-767", continent: "North America" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "1-809",
    continent: "North America",
  },
  { code: "DZ", label: "Algeria", phone: "213", continent: "Africa" },
  { code: "EC", label: "Ecuador", phone: "593", continent: "South America" },
  { code: "EE", label: "Estonia", phone: "372", continent: "Europe" },
  { code: "EG", label: "Egypt", phone: "20", continent: "Africa" },
  { code: "EH", label: "Western Sahara", phone: "212", continent: "Africa" },
  { code: "ER", label: "Eritrea", phone: "291", continent: "Africa" },
  { code: "ES", label: "Spain", phone: "34", continent: "Europe" },
  { code: "ET", label: "Ethiopia", phone: "251", continent: "Africa" },
  { code: "FI", label: "Finland", phone: "358", continent: "Europe" },
  { code: "FJ", label: "Fiji", phone: "679", continent: "Oceania" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
    continent: "South America",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
    continent: "Oceania",
  },
  { code: "FO", label: "Faroe Islands", phone: "298", continent: "Europe" },
  {
    code: "FR",
    label: "France",
    phone: "33",
    suggested: true,
    continent: "Europe",
  },
  { code: "GA", label: "Gabon", phone: "241", continent: "Africa" },
  { code: "GB", label: "United Kingdom", phone: "44", continent: "Europe" },
  { code: "GD", label: "Grenada", phone: "1-473", continent: "North America" },
  { code: "GE", label: "Georgia", phone: "995", continent: "Asia" },
  {
    code: "GF",
    label: "French Guiana",
    phone: "594",
    continent: "South America",
  },
  { code: "GG", label: "Guernsey", phone: "44", continent: "Europe" },
  { code: "GH", label: "Ghana", phone: "233", continent: "Africa" },
  { code: "GI", label: "Gibraltar", phone: "350", continent: "Europe" },
  { code: "GL", label: "Greenland", phone: "299", continent: "North America" },
  { code: "GM", label: "Gambia", phone: "220", continent: "Africa" },
  { code: "GN", label: "Guinea", phone: "224", continent: "Africa" },
  { code: "GP", label: "Guadeloupe", phone: "590", continent: "North America" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240", continent: "Africa" },
  { code: "GR", label: "Greece", phone: "30", continent: "Europe" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
    continent: "Antarctica",
  },
  { code: "GT", label: "Guatemala", phone: "502", continent: "North America" },
  { code: "GU", label: "Guam", phone: "1-671", continent: "Oceania" },
  { code: "GW", label: "Guinea-Bissau", phone: "245", continent: "Africa" },
  { code: "GY", label: "Guyana", phone: "592", continent: "South America" },
  { code: "HK", label: "Hong Kong", phone: "852", continent: "Asia" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
    continent: "Antarctica",
  },
  { code: "HN", label: "Honduras", phone: "504", continent: "North America" },
  { code: "HR", label: "Croatia", phone: "385", continent: "Europe" },
  { code: "HT", label: "Haiti", phone: "509", continent: "North America" },
  { code: "HU", label: "Hungary", phone: "36", continent: "Europe" },
  { code: "ID", label: "Indonesia", phone: "62", continent: "Asia" },
  { code: "IE", label: "Ireland", phone: "353", continent: "Europe" },
  { code: "IL", label: "Israel", phone: "972", continent: "Asia" },
  { code: "IM", label: "Isle of Man", phone: "44", continent: "Europe" },
  { code: "IN", label: "India", phone: "91", continent: "Asia" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
    continent: "Asia",
  },
  { code: "IQ", label: "Iraq", phone: "964", continent: "Asia" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
    continent: "Asia",
  },
  { code: "IS", label: "Iceland", phone: "354", continent: "Europe" },
  { code: "IT", label: "Italy", phone: "39", continent: "Europe" },
  { code: "JE", label: "Jersey", phone: "44", continent: "Europe" },
  { code: "JM", label: "Jamaica", phone: "1-876", continent: "North America" },
  { code: "JO", label: "Jordan", phone: "962", continent: "Asia" },
  {
    code: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
    continent: "Asia",
  },
  { code: "KE", label: "Kenya", phone: "254", continent: "Africa" },
  { code: "KG", label: "Kyrgyzstan", phone: "996", continent: "Asia" },
  { code: "KH", label: "Cambodia", phone: "855", continent: "Asia" },
  { code: "KI", label: "Kiribati", phone: "686", continent: "Oceania" },
  { code: "KM", label: "Comoros", phone: "269", continent: "Africa" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
    continent: "North America",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
    continent: "Asia",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82", continent: "Asia" },
  { code: "KW", label: "Kuwait", phone: "965", continent: "Asia" },
  {
    code: "KY",
    label: "Cayman Islands",
    phone: "1-345",
    continent: "North America",
  },
  { code: "KZ", label: "Kazakhstan", phone: "7", continent: "Asia" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
    continent: "Asia",
  },
  { code: "LB", label: "Lebanon", phone: "961", continent: "Asia" },
  {
    code: "LC",
    label: "Saint Lucia",
    phone: "1-758",
    continent: "North America",
  },
  { code: "LI", label: "Liechtenstein", phone: "423", continent: "Europe" },
  { code: "LK", label: "Sri Lanka", phone: "94", continent: "Asia" },
  { code: "LR", label: "Liberia", phone: "231", continent: "Africa" },
  { code: "LS", label: "Lesotho", phone: "266", continent: "Africa" },
  { code: "LT", label: "Lithuania", phone: "370", continent: "Europe" },
  { code: "LU", label: "Luxembourg", phone: "352", continent: "Europe" },
  { code: "LV", label: "Latvia", phone: "371", continent: "Europe" },
  { code: "LY", label: "Libya", phone: "218", continent: "Africa" },
  { code: "MA", label: "Morocco", phone: "212", continent: "Africa" },
  { code: "MC", label: "Monaco", phone: "377", continent: "Europe" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
    continent: "Europe",
  },
  { code: "ME", label: "Montenegro", phone: "382", continent: "Europe" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
    continent: "North America",
  },
  { code: "MG", label: "Madagascar", phone: "261", continent: "Africa" },
  { code: "MH", label: "Marshall Islands", phone: "692", continent: "Oceania" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
    continent: "Europe",
  },
  { code: "ML", label: "Mali", phone: "223", continent: "Africa" },
  { code: "MM", label: "Myanmar", phone: "95", continent: "Asia" },
  { code: "MN", label: "Mongolia", phone: "976", continent: "Asia" },
  { code: "MO", label: "Macao", phone: "853", continent: "Asia" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
    continent: "Oceania",
  },
  { code: "MQ", label: "Martinique", phone: "596", continent: "North America" },
  { code: "MR", label: "Mauritania", phone: "222", continent: "Africa" },
  {
    code: "MS",
    label: "Montserrat",
    phone: "1-664",
    continent: "North America",
  },
  { code: "MT", label: "Malta", phone: "356", continent: "Europe" },
  { code: "MU", label: "Mauritius", phone: "230", continent: "Africa" },
  { code: "MV", label: "Maldives", phone: "960", continent: "Asia" },
  { code: "MW", label: "Malawi", phone: "265", continent: "Africa" },
  { code: "MX", label: "Mexico", phone: "52", continent: "North America" },
  { code: "MY", label: "Malaysia", phone: "60", continent: "Asia" },
  { code: "MZ", label: "Mozambique", phone: "258", continent: "Africa" },
  { code: "NA", label: "Namibia", phone: "264", continent: "Africa" },
  { code: "NC", label: "New Caledonia", phone: "687", continent: "Oceania" },
  { code: "NE", label: "Niger", phone: "227", continent: "Africa" },
  { code: "NF", label: "Norfolk Island", phone: "672", continent: "Oceania" },
  { code: "NG", label: "Nigeria", phone: "234", continent: "Africa" },
  { code: "NI", label: "Nicaragua", phone: "505", continent: "North America" },
  { code: "NL", label: "Netherlands", phone: "31", continent: "Europe" },
  { code: "NO", label: "Norway", phone: "47", continent: "Europe" },
  { code: "NP", label: "Nepal", phone: "977", continent: "Asia" },
  { code: "NR", label: "Nauru", phone: "674", continent: "Oceania" },
  { code: "NU", label: "Niue", phone: "683", continent: "Oceania" },
  { code: "NZ", label: "New Zealand", phone: "64", continent: "Oceania" },
  { code: "OM", label: "Oman", phone: "968", continent: "Asia" },
  { code: "PA", label: "Panama", phone: "507", continent: "North America" },
  { code: "PE", label: "Peru", phone: "51", continent: "South America" },
  { code: "PF", label: "French Polynesia", phone: "689", continent: "Oceania" },
  { code: "PG", label: "Papua New Guinea", phone: "675", continent: "Oceania" },
  { code: "PH", label: "Philippines", phone: "63", continent: "Asia" },
  { code: "PK", label: "Pakistan", phone: "92", continent: "Asia" },
  { code: "PL", label: "Poland", phone: "48", continent: "Europe" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
    continent: "North America",
  },
  { code: "PN", label: "Pitcairn", phone: "870", continent: "Oceania" },
  { code: "PR", label: "Puerto Rico", phone: "1", continent: "North America" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "970",
    continent: "Asia",
  },
  { code: "PT", label: "Portugal", phone: "351", continent: "Europe" },
  { code: "PW", label: "Palau", phone: "680", continent: "Oceania" },
  { code: "PY", label: "Paraguay", phone: "595", continent: "South America" },
  { code: "QA", label: "Qatar", phone: "974", continent: "Asia" },
  { code: "RE", label: "Reunion", phone: "262", continent: "Africa" },
  { code: "RO", label: "Romania", phone: "40", continent: "Europe" },
  { code: "RS", label: "Serbia", phone: "381", continent: "Europe" },
  { code: "RU", label: "Russian Federation", phone: "7", continent: "Europe" },
  { code: "RW", label: "Rwanda", phone: "250", continent: "Africa" },
  { code: "SA", label: "Saudi Arabia", phone: "966", continent: "Asia" },
  { code: "SB", label: "Solomon Islands", phone: "677", continent: "Oceania" },
  { code: "SC", label: "Seychelles", phone: "248", continent: "Africa" },
  { code: "SD", label: "Sudan", phone: "249", continent: "Africa" },
  { code: "SE", label: "Sweden", phone: "46", continent: "Europe" },
  { code: "SG", label: "Singapore", phone: "65", continent: "Asia" },
  { code: "SH", label: "Saint Helena", phone: "290", continent: "Africa" },
  { code: "SI", label: "Slovenia", phone: "386", continent: "Europe" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
    continent: "Europe",
  },
  { code: "SK", label: "Slovakia", phone: "421", continent: "Europe" },
  { code: "SL", label: "Sierra Leone", phone: "232", continent: "Africa" },
  { code: "SM", label: "San Marino", phone: "378", continent: "Europe" },
  { code: "SN", label: "Senegal", phone: "221", continent: "Africa" },
  { code: "SO", label: "Somalia", phone: "252", continent: "Africa" },
  { code: "SR", label: "Suriname", phone: "597", continent: "South America" },
  { code: "SS", label: "South Sudan", phone: "211", continent: "Africa" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
    continent: "Africa",
  },
  {
    code: "SV",
    label: "El Salvador",
    phone: "503",
    continent: "North America",
  },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
    continent: "North America",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
    continent: "Asia",
  },
  { code: "SZ", label: "Swaziland", phone: "268", continent: "Africa" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
    continent: "North America",
  },
  { code: "TD", label: "Chad", phone: "235", continent: "Africa" },
  {
    code: "TF",
    label: "French Southern Territories",
    phone: "262",
    continent: "Antarctica",
  },
  { code: "TG", label: "Togo", phone: "228", continent: "Africa" },
  { code: "TH", label: "Thailand", phone: "66", continent: "Asia" },
  { code: "TJ", label: "Tajikistan", phone: "992", continent: "Asia" },
  { code: "TK", label: "Tokelau", phone: "690", continent: "Oceania" },
  { code: "TL", label: "Timor-Leste", phone: "670", continent: "Asia" },
  { code: "TM", label: "Turkmenistan", phone: "993", continent: "Asia" },
  { code: "TN", label: "Tunisia", phone: "216", continent: "Africa" },
  { code: "TO", label: "Tonga", phone: "676", continent: "Oceania" },
  { code: "TR", label: "Turkey", phone: "90", continent: "Asia" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
    continent: "North America",
  },
  { code: "TV", label: "Tuvalu", phone: "688", continent: "Oceania" },
  {
    code: "TW",
    label: "Taiwan, Republic of China",
    phone: "886",
    continent: "Asia",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
    continent: "Africa",
  },
  { code: "UA", label: "Ukraine", phone: "380", continent: "Europe" },
  { code: "UG", label: "Uganda", phone: "256", continent: "Africa" },
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
    continent: "North America",
  },
  { code: "UY", label: "Uruguay", phone: "598", continent: "South America" },
  { code: "UZ", label: "Uzbekistan", phone: "998", continent: "Asia" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
    continent: "Europe",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
    continent: "North America",
  },
  { code: "VE", label: "Venezuela", phone: "58", continent: "South America" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "1-284",
    continent: "North America",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "1-340",
    continent: "North America",
  },
  { code: "VN", label: "Vietnam", phone: "84", continent: "Asia" },
  { code: "VU", label: "Vanuatu", phone: "678", continent: "Oceania" },
  {
    code: "WF",
    label: "Wallis and Futuna",
    phone: "681",
    continent: "Oceania",
  },
  { code: "WS", label: "Samoa", phone: "685", continent: "Oceania" },
  { code: "XK", label: "Kosovo", phone: "383", continent: "Europe" },
  { code: "YE", label: "Yemen", phone: "967", continent: "Asia" },
  { code: "YT", label: "Mayotte", phone: "262", continent: "Africa" },
  { code: "ZA", label: "South Africa", phone: "27", continent: "Africa" },
  { code: "ZM", label: "Zambia", phone: "260", continent: "Africa" },
  { code: "ZW", label: "Zimbabwe", phone: "263", continent: "Africa" },
];
