/*******************STUDENTS SHOULD NOT MODIFY THIS FILE***************/

var tryRequire = require("../utils/try_require.js");
var assert = require("assert");

var peakFinder = tryRequire("../problems/1_peak_finder.js");
var divisibleByThreePairSum = tryRequire(
  "../problems/2_divisible_by_three_pair_sum.js"
);
var zipArray = tryRequire("../problems/3_zip_array.js");
var twoDimensionalTotal = tryRequire("../problems/4_two_dimensional_total.js");
var countInnerElement = tryRequire("../problems/5_count_inner_element.js");
var twoDiff = tryRequire("../problems/6_two_diff.js");
var arrayDiff = tryRequire("../problems/7_array_diff.js");
var valueCounter = tryRequire("../problems/8_value_counter.js");

describe("peakFinder()", function() {
  it("should return array of the index of each peak", function() {
    var arr1 = peakFinder([1, 2, 3, 2, 1]);
    var arr2 = peakFinder([2, 1, 2, 3, 4, 5]);
    var arr3 = peakFinder([4, 6, 9, 4, 2, -7, 2, -4, 5]);

    assert.deepEqual(arr1, [2]);
    assert.deepEqual(arr2, [0, 5]);
    assert.deepEqual(arr3, [2, 6, 8]);
  });
});

describe("divisibleByThreePairSum()", function() {
  it("should return a two dimensional array of index pairs", function() {
    var arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
    var result1 = [
      [0, 4],
      [1, 2],
      [1, 5],
      [2, 5],
      [3, 4]
    ];

    var arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
    var result2 = [[1, 3]];

    assert.deepEqual(arr1, result1);
    assert.deepEqual(arr2, result2);
  });
});

describe("zipArray()", function() {
  it("should return a two dimensional array zipping the two given arrays", function() {
    var a1 = ["a", "b", "c", "d"];
    var a2 = [10, 20, 30, 40];
    var result = [
      ["a", 10],
      ["b", 20],
      ["c", 30],
      ["d", 40]
    ];

    assert.deepEqual(zipArray(a1, a2), result);
  });
});

describe("twoDimensionalTotal()", function() {
  it("should return number that is the sum of all numbers in the two dimensional array", function() {
    var arr1 = [
      [5, 2, 5, 3],
      [12, 13]
    ];

    var arr2 = [[2], [1, 9], [1, 1, 1]];

    assert.equal(twoDimensionalTotal(arr1), 40);
    assert.equal(twoDimensionalTotal(arr2), 15);
  });
});

describe("countInnerElement()", function() {
  it("should return an object with each key as the element of the inner array and how many times it repeats", function() {
    var arr1 = [
      [1, 2, 4, 5],
      [2, 7, 4],
      [1, 4, 5, 2, 7]
    ];
    var result1 = { 1: 2, 2: 3, 4: 3, 5: 2, 7: 2 };

    var arr2 = [
      ["a", "b", "c", "d"],
      ["a", "b"],
      ["a", "c", "d", "a"]
    ];
    var result2 = { a: 4, b: 2, c: 2, d: 2 };

    assert.deepEqual(countInnerElement(arr1), result1);
    assert.deepEqual(countInnerElement(arr2), result2);
  });

  it("should return an empty object when the input array is empty", function() {
    var arr3 = [[]];
    var result3 = {};

    assert.deepEqual(countInnerElement(arr3), result3);
  });
});

describe("twoDiff()", function() {
  it("should return a 2-D array of indices where the indices' numbers' difference equates to 2", function() {
    var arr1 = [2, 3, 4, 6, 1, 7];
    var result1 = [
      [0, 2],
      [1, 4],
      [2, 3]
    ];

    var arr2 = [0, 2, 4, 3, 5];
    var result2 = [
      [0, 1],
      [1, 2],
      [3, 4]
    ];

    assert.deepEqual(twoDiff(arr1), result1);
    assert.deepEqual(twoDiff(arr2), result2);
  });

  it("should return an empty array when the input array is empty", function() {
    var arr3 = [];
    var result3 = [];

    assert.deepEqual(twoDiff(arr3), result3);
  });
});

describe("arrayDiff()", function() {
  it("should return an array of array1 where the elements were removed if they were the same as array2", function() {
    var array1 = [1, 23, 2, 43, 3, 4];
    var array2 = [3, 23];
    var result1 = [1, 2, 43, 4];

    var array3 = ["a", "ab", "c", "d", "c"];
    var array4 = ["d"];
    var result2 = ["a", "ab", "c", "c"];

    assert.deepEqual(arrayDiff(array1, array2), result1);
    assert.deepEqual(arrayDiff(array3, array4), result2);
  });
});

describe("valueCounter()", function() {
  it("should return a count of how many times the value repeats in the object", function() {
    obj1 = { 1: "Anne", 2: "Alvin", 3: "Anne", 4: "Anne" };
    result1 = 3;

    obj2 = { Anne: 50, Alvin: 1, JJ: 100, Roman: 100 };
    result2 = 0;

    pairs = {Anne: 'Roman', Alvin: 'Roman', JJ: 'Anne', Roman: 'Anne'}
    result3 = 2;

    assert.equal(valueCounter(obj1, "Anne"), result1);
    assert.equal(valueCounter(obj2, 90), result2);
    assert.equal(valueCounter(pairs, 'Roman'), result3);
  });
});
