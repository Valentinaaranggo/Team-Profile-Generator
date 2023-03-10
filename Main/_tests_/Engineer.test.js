const Engineer = require("../lib/Engineer");

test("can set github account via constructor", () => {
    const testGithub = "valentinaaranggo";
    const employeeInstance = new Engineer("Valentina", 8, "valea28@gmail.com", testGithub);
    expect(employeeInstance.gitHub).toBe(testGithub);
});

test("can get github via getGithub ", () => {
    const testGithub = "valentinaaranggo";
    const employeeInstance = new Engineer("Valentina", 8, "valea28@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});

test("getRole() should return \"Engineer\"", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Valentina", 8, "valea28@gmail.com", "valentinaaranggo");
    expect(employeeInstance.getRole()).toBe(returnValue);
});