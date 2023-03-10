const Employee = require("../lib/Employee");

test("Can instantiate Employee instance", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Can set name via constructor arguments", () => {
    const name = "Valentina";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("can set id via constructor argument", () => {
    const id = 8;
    const employeeInstance = new Employee("Valentina", id);
    expect(employeeInstance.id).toBe(id);
})

test("can set email via constructor argument", () => {
    const email = "valea28@gmail.com";
    const employeeInstance = new Employee("Valentina", 8, email);
    expect(employeeInstance.email).toBe(email);
})



test("can get name via getName()", () => {
    const testName = "Valentina";
    const employeeInstance = new Employee(testName);
    expect(employeeInstance.getName()).toBe(testName);
})

test("can get id via getId().", () => {
    const testID = 8;
    const employeeInstance = new Employee("Valentina", testID);
    expect(employeeInstance.getId()).toBe(testID);
})

test("can get email via getEmail()", () => {
    const testEmail = "valea28@gmail.com";
    const employeeInstance = new Employee("Valentina", 8, testEmail);
    expect(employeeInstance.getEmail()).toBe(testEmail);
})

test("get role should return employee", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Valentina", 8, "valea28@gmail.com");
    expect(employeeInstance.getRole()).toBe(returnValue);
})