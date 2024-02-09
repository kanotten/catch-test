// catch testing
try {
  // Code that may throw an exception
  throw new Error("This is an example error");
} catch (error) {
  // Handle the exception
  console.error("Caught an error:", error.message);
} finally {
  // Optional: Code that will always be executed, whether there is an exception or not
  console.log("This will always be executed");
}

// another form of testing

try {
  const url = "someurl.com";
  url = "";
  new date("2014-25-23").toISOString();
  cnsole.log("finished no errors");
} catch (error) {
  console.log("something went wrong");
}

// try testing step in sources, this shows how it goes thru the code
