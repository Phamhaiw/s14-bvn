let original = {
    name: "Bob",
    age: 30
};


let copy = { ...original }; 


copy.name = "Charlie";


console.log("Original:", original);
console.log("Copy:", copy);

alert("Original: " + JSON.stringify(original));
alert("Copy: " + JSON.stringify(copy));