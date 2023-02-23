const Manager = require("../lib/Manager");

describe('Manager class', () => { 
    const eName = 'Ben Scheetz';
    const eId = '0001';
    const eMail = 'bscheetz@fakeemail.com';
    const eOfficeNumber = '001';
    
    it("New Intern returns a role of Intern", () =>{
        expect(new Manager(eName, eId, eMail, eOfficeNumber).getRole()).toBe('Manager')
    });
    it("New Employee returns a name in all uppercase", () => {
        expect(new Manager(eName, eId, eMail, eOfficeNumber).getName()).toBe(eName.toUpperCase())
    });
    it("Gives employee ID matching input", () => {
        expect(new Manager(eName, eId, eMail, eOfficeNumber).getId()).toBe(eId)
    });
    it("Populates email address as passed to function", () =>{
        expect(new Manager(eName, eId, eMail, eOfficeNumber).getEmail()).toBe(eMail)
    });
    it("Returns office number via getOffice method", () =>{
        expect(new Manager(eName, eId, eMail, eOfficeNumber).getOffice()).toBe(eOfficeNumber)
    });
})
