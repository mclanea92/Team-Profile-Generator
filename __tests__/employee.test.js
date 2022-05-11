
const Employee = require('../lib/Employee');

// creates employee object
test('creates am employee object', () => {
    const employee = new Employee('Adam', 100, 'mclanea92@gmail.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.emal).toEqual(expect.any(String));
});

// gets namefrom employee data
test('get employee name', () => {
    const employee = new Employee('Adam', 100, 'mclanea92@gmail.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

// get id from employee data
test('get employee id', () => {
    const employee = new Employee('Adam', 100, 'mclanea92@gmail.com');
    expect(employee.getID()).toEqual(expect.any(Number));
});

// get email from employee data
test('get employee email', () => {
    const employee = new Employee('Adam', 100, 'mclanea92@gmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
    // expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString());)
});

// get role of employee
test('get role of employee', () => {
    const employee = new Employee('Adam', 100, 'mclanea92@gmail.com');

    expect(employee.getRole()).toEqual('Employee');
});

