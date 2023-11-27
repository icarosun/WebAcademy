const { firstName } = require("../validations.js");

describe("firstName()", () => {
  it("should return the first name when the full name is given", () => {
    const fullName = "John Doe Etc";
    const result = firstName(fullName);
    expect(result).toBe("John");
  });

  it("should return the same name when no blank space is found", () => {
    const name = "Alice";
    const result = firstName(name);
    expect(result).toBe(name);
  });

  it("should return the first name correctly when theres blank space in the start", () => {
    const name = " Alice Test";
    const result = firstName(name);
    expect(result).toBe("Alice");
  });

  it("should return the first name correctly when theres blank space in the end", () => {
    const name = "Alice Test ";
    const result = firstName(name);
    expect(result).toBe("Alice");
  });

  it("should return null when the full name is only blank space", () => {
    const name = "               "; 
    const result = firstName(name);
    expect(result).toBeNull();
  });

  it("should return null when the full name is empty, undefined or null", () => {
    const result = firstName();
    expect(result).toBeNull();
  })
});
