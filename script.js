let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  //Write your code here , just console.log
  arr.map((arr) => {
    if (arr.marks > 50) {
      console.log(arr.id + " " + arr.name + " " + arr.age + " " + arr.marks);
    }
  });
}

function PrintStudentsbyForEach() {
  //Write your code here , just console.log
  arr.forEach((arr) => {
    if (arr.marks > 50) {
      console.log(arr.id + " " + arr.name + " " + arr.age + " " + arr.marks);
    }
  });
}

function addData(id, name, age, marks) {
  //Write your code here, just console.log
  let newData = {
    id: 4,
    name: "Parab",
    age: "26",
    marks: 90,
  };
  arr.push(newData);
  console.log(arr);
}

function removeFailedStudent() {
  //Write your code here, just console.log
  arr = arr.filter((arr) => arr.marks >= 50);
  console.log(arr);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [
    { id: 4, name: "Harris", age: "15", marks: 50 },
    { id: 5, name: "John", age: "23", marks: 75 },
    { id: 6, name: "Morris", age: "41", marks: 65 },
  ];
  let concatenate = arr.concat(newArr);
  console.log(concatenate);
}
