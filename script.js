import { check } from "datenow-ts";
import { create } from "datenow-ts";
import { format } from "datenow-ts";

import * as math from "/modules/math.js";

console.log("Hello World");

check();

const date = create.dateNow();

console.log(format.toMilliseconds(date));

// hier brauchen wir die funktionen aus math.js

console.log(math.add(1, 2));
console.log(math.subtract(1, 2));
