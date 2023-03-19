const Employee = require('../lib/Employee');
 
test("Can create Employee object", () => {
    const emp = new Employee();
    expect(typeof(emp)).toBe("object");
  });
  
  test("getRole() should return \"Employee\"", () => {
    const expValue = "Employee";
    const emp = new Employee("Mohamud", 1, "test@mail.com");
    expect(emp.getRole()).toBe(expValue);
  });