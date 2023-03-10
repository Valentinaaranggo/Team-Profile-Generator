const Manager = require("../lib/Manager");

test("can set office number via constructor argument", () => {
    const testOfficeNumber = 8;
    const employeeInstance = new Manager("Valentina", 8, "valea28@gmail.com", testOfficeNumber);
    expect(employeeInstance.officeNumber).toBe(testOfficeNumber);
});

test("can get office number via getOfficeNumber", () => {
    const testOfficeNumber = 8;
    const employeeInstance = new Manager("Valentina", 8, "valea28@gmail.com", testOfficeNumber);
    expect(employeeInstance.getOfficeNumber()).toBe(testOfficeNumber);
});

test("getRole() should return \"Manager\"", () => {
    const returnValue = "Manager";
    const employeeInstance = new Manager("Valentina", 8, "valea28@gmail.com", 8);
    expect(employeeInstance.getRole()).toBe(returnValue);
});