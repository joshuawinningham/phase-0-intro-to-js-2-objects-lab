// Write your solution in this file!
const employee = {
    name: "Chris",
    streetAddress: "123 Main St",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

const updateEmployee = updateEmployeeWithKeyAndValue(
    employee,
    "name",
    "Rick"
);

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; 

    return employee;
}

const updateEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Ryan");

function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee[key] };
    delete newEmployee[key];
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}










