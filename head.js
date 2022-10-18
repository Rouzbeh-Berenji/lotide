const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed:['+actual+'] === ['+expected+']');
  } else {
    console.log('❌❌❌ Assertion Failed: ['+actual+'] !== ['+expected+']');
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
const head = function (array) {
  return array[0];
}
assertEqual(head([]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");