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
