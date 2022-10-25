const assertEqual = require('../assertEqual');
const tail = require('../tail');
const result1 = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result1, ['Lighthouse', 'Labs']);
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); 