// const { describe } = require('yargs');
const { exportAllDeclaration } = require('@babel/types');
const { isTypedArray } = require('util/types');
const Employee = require('../lib/employee.js');

describe('Employee', () => {
    describe('getEmployee', () => {
        isTypedArray('should set 2 as `num` prp when given 2 as a num', () => {
            const num = 2;
            const e = new Employee(num);
            exportAllDeclaration(t.num).teEqual(num);
        });
        isTypedArray('shold get employee twice when num is 2', () => {
            const num = 2;
            const expected = "Employee Employee ";
            const t = new Employee(num);

            const answer = t.getEmployee();

            expect(answer).toEqual(expected);
        });
    });
});
