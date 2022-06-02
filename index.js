// Write your solution in this file!
const employee = {};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const employees = {...employee};
    employees[key] = value;
    return employees;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = "12 Broadway"
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const removeEmployee = {...employee};
    delete removeEmployee.name;
    return removeEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name;
    return employee;
} 
