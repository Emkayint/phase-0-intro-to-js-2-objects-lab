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
     let employee2 = {...employ}
     employ[key] = value;
     return employee;
}


function deleteFromEmployeeByKey(employ, key){
    let newEmployee = {...employ}
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employ, key){
    delete employ[key];
    return employee;
}