"use strict";

var _currencies = require("currencies.js");

require("./styles.css");

var currencies = ["Bitcoin", "Ethereum", "Tether", "Solana"];
var html = (0, _currencies.getDropdown)(currencies);
var select = document.querySelector("#currency");
select.innerHTML = html;