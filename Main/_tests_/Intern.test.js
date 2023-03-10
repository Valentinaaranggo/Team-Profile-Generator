const Intern = require("../lib/Intern");

test("can set school via constructor", () => {
    const testSchool = "Georgia State";
    const employeeInstance = new Intern("Valentina", 8, "valea28@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});

test("can get school via getSchool()", () => {
    const testSchool = "Georgia State";
    const employeeInstance = new Intern("Valentina", 8, "valea28@gmail.com", testSchool);
    expect(employeeInstance.getSchool()).toBe(testSchool);
});

test("getRole() should return \"Intern\"", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Valentina", 8, "valea28@gmail.com", "Georgia State");
    expect(employeeInstance.getRole()).toBe(returnValue);
});