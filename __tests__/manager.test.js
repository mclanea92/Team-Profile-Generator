
const Manager = require('../lib/Manager');

// creates an object
describe('creates object for manager', () => {
    it('creates an object for manager fromd data', () => {
    const manager = new Manager('Adam', 100, 'mclanea92@gmail.com', 2158289166);
    expect(manager.officeNumber).toEqual(expect.any(Number)); // might need to take out () from office number
})});

// gets role of manager
describe('gets manager role', () => {
    it('gets the manager role from data', () => {
    const manager = new Manager('Adam', 100, 'mclanea92@gmail.com', 2158289166);
    expect(manager.getRole()).toEqual('Manager');
})});