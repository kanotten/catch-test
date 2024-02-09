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
  let url = "someurl.com"; // Use 'let' if you intend to reassign the variable
  url = "";
  new Date("2014-25-23").toISOString(); // Correct the 'Date' object creation
  console.log("finished, no errors");
} catch (error) {
  console.log("something went wrong:", error);
}

// Debugging/testing step in sources
// To step through code using browser developer tools:
// 1. Open your browser's developer tools (usually F12 or right-click and "Inspect").
// 2. Go to the "Sources" or "Debugger" tab.
// 3. Locate your JavaScript file.
// 4. Set breakpoints by clicking on the line number where you want to pause.
// 5. Reload the page or trigger the code execution.
// 6. The debugger will pause at the breakpoints, and you can step through the code using controls.
