// class for all employees, grabs data and returns the correct per person and is the main class for all 

class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName () {
        return this.name;
    }
    
    getID () {
        return this.id;
    }

    getEmail () {
        return this.email;
    }

    getRole () {
        return 'Employee';
    }
};
// exports this page so other sub classes can connect to it.
module.exports = Employee;