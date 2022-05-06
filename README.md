# QADemo

# Automated tests for https://app.sysdigcloud.com/#/login

# This project consists of 3 different set of tests for above web site:
# 1. Login Elements: Validate elements are present 
# NOTE: All tests successfully passed

# 2. Login Links Navigation: Validate Login page links redirect to expected pathname
# NOTE: All tests succesfully passed except for the last one, there is a known issue with Cypress redirecting to a new URL which I require more time to research

# 3. Login Negative Tests: Validate negative scenarios for login action
# NOTE: Tests are verified correct, however they are failing because I couldn't find the locator for the disappearing error message which I require more time to research

# INSTRUCTIONS TO RUN CYPRESS PROJECT:
# Download and Install required tools: Node.js, Visual Studio Code, Git Hub
# Clone git hub repo to your PC: https://github.com/calpizar/QADemo
# Open the project with Visual Studio
# On VS, open new terminal
# run command to install dependencies: npm install
# run command to run cypress: npx cypress open
# Cypress tests will open on a new window
# At the right top corner, locate "Running integration tests" link and click on it
# New window will open in a new tab and automated tests will be executed