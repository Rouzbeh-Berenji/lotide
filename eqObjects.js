const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log('✅✅✅ Assertion Passed:['+actual+'] === ['+expected+']');
  } else {
    console.log('❌❌❌ Assertion Failed: ['+actual+'] !== ['+expected+']');
  }
};
const eqArrays = (actual, expected) => {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
}
const eqObjects = function(object1, object2) {
  //check for length 
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false
  } // checking the same keys in each object 
  for (let item of Object.keys(object1)){
    if (Array.isArray(object1[item]) && Array.isArray(object2[item])){
      let result = eqArrays (object1[item], object2[item]);
      if (!result){
        return false
      }
    }
    else if (object1[item] !== object2[item]){
      return false
    }
  }
  return true
};
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" };
console.log(eqObjects(ab, abc)); // => false
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log(eqObjects(cd, dc)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(eqObjects(cd, cd2)); // => false