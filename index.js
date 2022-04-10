// Write your solution in this file!
let employee = {
    name : "Sam",
}

function updateEmployeeWithKeyAndValue(employee,  keys, value){
    let work = {...employee}
    work[keys] = value;
    return work
}


function destructivelyUpdateEmployeeWithKeyAndValue(employ, key, value){
     employ[key] = value;
     return employee;
}


function deleteFromEmployeeByKey(employ, key){
    employ[key] = undefined; 
    return employee;
}

console.log(deleteFromEmployeeByKey(employee, "name"))