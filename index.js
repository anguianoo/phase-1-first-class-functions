function receivesAFunction(cb) {
  return cb();
}

function returnsANamedFunction() {
  return function nameFunction() {
    console.log("named function");
  };
}

function returnsAnAnonymousFunction() {
  return () => console.log("anonymous function");
}
