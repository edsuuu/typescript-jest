describe('Valores Primitivos / Primitive Values', () => {
  it('shold test jest', () => {
    const number = 10;

    //espero q o valor seja 10
    expect(number).toBe(10);
    expect(number).toEqual(10);
  });
});

describe('Objetos / Objects', () => {
  it('shold test jest with objects', () => {
    const person = { name: 'John', age: 30 };
    const anotherPerson = { ...person };

    expect(person).toEqual(anotherPerson);
    expect(person).toHaveProperty('age');
    expect(person).not.toHaveProperty('firstName');
    expect(person).toHaveProperty('age', 30);

    expect(person.name).toBe('John');
  });
});
