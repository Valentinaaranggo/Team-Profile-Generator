const Engineer = require("../lib/Engineer");

test("can set github account via constructor", () => {
    const testGithub = "valentinaaranggo";
    const employeeInstance = new Engineer("Valentina", 8, "valea28@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});

test("can get github via getGithub ", () => {
    const testGithub = "JamesLJenks";
    const employeeInstance = new Engineer("Valentina", 8, "valea28@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("getRole() should return \"engineer\"", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Valentina", 8, "valea28@gmail.com", testGithub);
    expect(employeeInstance.getRole()).toBe(returnValue);
});