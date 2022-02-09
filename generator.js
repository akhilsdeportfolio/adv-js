function* sample()
{
          yield 1;
          yield 2;
          yield 3;
          return 5;
}

let gen = sample();

console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())