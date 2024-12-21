const { characters } = require('../../src/js-foundation/02-destructuring')

describe("02-destructuring", () => {
  test("charter should contain Flash, Superman", () => {
    expect(characters).toContain('Flash');
    expect(characters).toContain('Superman');
  })

  test("first charter should be Flash", ()=>{
    const [flash, superman] = characters;
    expect(flash).toBe("Flash");
    expect(superman).toBe("Superman");

  })
})