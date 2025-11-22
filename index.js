// Simple Node.js application for GitHub Actions training

function greet(name) {
  return `Hello, ${name}! Welcome to GitHub Actions training!`;
}

function main() {
  console.log(greet('Developer'));
  console.log('🎯 This is a training repository for GitHub Actions');
  console.log('📚 Check out the workflows in .github/workflows/');
}

// Run if this is the main module
if (require.main === module) {
  main();
}

module.exports = { greet, main };
