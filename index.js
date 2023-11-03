// Write your solution in this file!

const employee = {
    name: "Sponge Bob",
    streetAddress: "pineapple under the sea",
  };
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObject = {...employee};

    newObject[key] = value;
    return newObject;

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;

}

function deleteFromEmployeeByKey(employee, key) {
    const delEmployee = { ...employee };
    delete delEmployee.name;
    return delEmployee;
}
    

function destructivelyDeleteFromEmployeeByKey(employee, key)
{
    delete employee.name;
    return employee;
}