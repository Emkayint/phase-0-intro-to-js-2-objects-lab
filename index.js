// Write your solution in this file!
const employee = {
    name : "Sam",
}

function updateEmployeeWithKeyAndValue(employee,  keys, value){
    let work = {...employee}
    work[keys] = value;
    return work
}

console.log(updateEmployeeWithKeyAndValue(employee, "John", "Doe"))