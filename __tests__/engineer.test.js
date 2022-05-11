
const Engineer = require('../lib/Engineer');

// creates object
test('create an engineer object', () => {
    const engineer = new Engineer('Adam', 100, 'mclanea92@gmail.com', 'mclanea92');
    expect(engineer.github).toEqual(expect.any(String));
});

// gets github info
test('get github from data of engineer', () => {
    const engineer = new Engineer('Adam', 100, 'mclanea92@gmail.com', 'mclanea92');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('get role of employee', () => {
    const engineer = new Engineer('Adam', 100, 'mclanea92@gmail.com', 'mclanea92');

    expect(engineer.getRole()).toEqual('Engineer');
});