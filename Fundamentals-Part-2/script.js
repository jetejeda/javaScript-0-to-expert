"use strict";
let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true; //Should be hasDriversLicense (missing an s)
if (hasDriversLicense) console.log("I can drive :)");
const interface = "This should fail thanks to the strict mode";