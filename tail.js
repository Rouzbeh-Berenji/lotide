const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed:['+actual+'] === ['+expected+']');
  } else {
    console.log('❌❌❌ Assertion Failed: ['+actual+'] !== ['+expected+']');
  }
};

// TEST CODE
const tail = function (array) {
  const tailArray = array.slice(1);
  return tailArray;  
}
const resul = tail(['Hello', 'Lighthouse', 'Labs']);
console.log(resul);
assertEqual(resul, ['Lighthouse', 'Labs']);
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); 
