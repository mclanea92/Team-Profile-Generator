const { describe } = require('yargs');
const Manager = require('../lib/Manager');

// creates an object
describe('creates object for manager', () => {
    const manager = new Manager('Adam', 100, 'mclanea92@gmail.com', 2158289166);
    expect(manager.officeNumber()).toEqual(expect.any(Number)); // might need to take out () from office number
});

// gets role of manager
describe('gets manager role', () => {
    const manager = new Manager('Adam', 100, 'mclanea92@gmail.com', 2158289166);
    expect(manager.getRole()).toEqual('Manager');
})