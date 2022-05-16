
const Intern = require('../lib/Intern');

describe('create a object', () => {
    const intern = new Intern('Adam', 100, 'mclanea92@gmail.com', 'UPenn');
    expect(intern.school).toEqual(expect.any(String));
});

// gets school from data
describe('get school info', () => {
    const intern = new Intern('Adam', 100, 'mclanea92@gmail.com', 'UPenn');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role of intern
describe('gets role of intern', () => {
    const intern = new Intern('Adam', 100, 'mclanea92@gmail.com', 'UPenn')
    expect(intern.getRole()).toEqual('Intern');
});