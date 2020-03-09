Feature: Signup as a new user

@positiveScenario 
Scenario: Launch the website and enter the details

Given launch the website in "chrome"
When click the register link to signup
And Select the Gender as "Female" 
And Enter the first name as "Anitha" and last name as "Vivek"
And Enter the email address
And Enter the Password as "Sree@2008"
And Enter the Confirm password as "Sree@2008"
Then click Register button to submit
And valid the message "Your registration completed"
 
@positiveScenario01
Scenario Outline: Launch the website and pass the multiple user data

Given launch the website in "<browsertype>"
When click the register link to signup
And Select the Gender as "<Gender>"
And Enter the first name as "<firstname>" and last name as "<lastname>"
And Enter the email address
And Enter the Password as "<password>"
And Enter the Confirm password as "<Confirm_password>"
Then click Register button to submit
And valid the message "<Message>"

Examples:
|browsertype |Gender|firstname|lastname|password|Confirm_password|Message|
|chrome      |Male  |Sankar   |Dev     |test@123|test@123        |Your registration completed|
|chrome      |Female|Nithya   |Dev     |test@123|test@123        |Your registration completed|
