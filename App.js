function abc(first, second, ...args) {
  console.log(args);
  console.log(args.length);
}

abc(1, 2, "abc", "def", "ghi");
