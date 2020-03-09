$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features.feature");
formatter.feature({
  "line": 1,
  "name": "Signup as a new user",
  "description": "",
  "id": "signup-as-a-new-user",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Launch the website and enter the details",
  "description": "",
  "id": "signup-as-a-new-user;launch-the-website-and-enter-the-details",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@positiveScenario"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "launch the website in \"chrome\"",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click the register link to signup",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "Select the Gender as \"Female\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "Enter the first name as \"Anitha\" and last name as \"Vivek\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "Enter the email address",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "Enter the Password as \"Sree@2008\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "Enter the Confirm password as \"Sree@2008\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click Register button to submit",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "valid the message \"Your registration completed\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 23
    }
  ],
  "location": "Definition.openurl(String)"
});
formatter.result({
  "duration": 11703104300,
  "status": "passed"
});
formatter.match({
  "location": "Definition.clickregister()"
});
formatter.result({
  "duration": 1066110900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 22
    }
  ],
  "location": "Definition.gender(String)"
});
formatter.result({
  "duration": 136210700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Anitha",
      "offset": 25
    },
    {
      "val": "Vivek",
      "offset": 51
    }
  ],
  "location": "Definition.firstlastname(String,String)"
});
formatter.result({
  "duration": 365442200,
  "status": "passed"
});
formatter.match({
  "location": "Definition.email()"
});
formatter.result({
  "duration": 234945000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sree@2008",
      "offset": 23
    }
  ],
  "location": "Definition.password(String)"
});
formatter.result({
  "duration": 152200200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sree@2008",
      "offset": 31
    }
  ],
  "location": "Definition.cpassword(String)"
});
formatter.result({
  "duration": 150987800,
  "status": "passed"
});
formatter.match({
  "location": "Definition.register()"
});
formatter.result({
  "duration": 4457180100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 19
    }
  ],
  "location": "Definition.validatemessage(String)"
});
formatter.result({
  "duration": 153873700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 17,
  "name": "Launch the website and pass the multiple user data",
  "description": "",
  "id": "signup-as-a-new-user;launch-the-website-and-pass-the-multiple-user-data",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@positiveScenario01"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "launch the website in \"\u003cbrowsertype\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "click the register link to signup",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Select the Gender as \"\u003cGender\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enter the first name as \"\u003cfirstname\u003e\" and last name as \"\u003clastname\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter the email address",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter the Password as \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter the Confirm password as \"\u003cConfirm_password\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "click Register button to submit",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "valid the message \"\u003cMessage\u003e\"",
  "keyword": "And "
});
formatter.examples({
  "line": 29,
  "name": "",
  "description": "",
  "id": "signup-as-a-new-user;launch-the-website-and-pass-the-multiple-user-data;",
  "rows": [
    {
      "cells": [
        "browsertype",
        "Gender",
        "firstname",
        "lastname",
        "password",
        "Confirm_password",
        "Message"
      ],
      "line": 30,
      "id": "signup-as-a-new-user;launch-the-website-and-pass-the-multiple-user-data;;1"
    },
    {
      "cells": [
        "chrome",
        "Male",
        "Sankar",
        "Dev",
        "test@123",
        "test@123",
        "Your registration completed"
      ],
      "line": 31,
      "id": "signup-as-a-new-user;launch-the-website-and-pass-the-multiple-user-data;;2"
    },
    {
      "cells": [
        "chrome",
        "Female",
        "Nithya",
        "Dev",
        "test@123",
        "test@123",
        "Your registration completed"
      ],
      "line": 32,
      "id": "signup-as-a-new-user;launch-the-website-and-pass-the-multiple-user-data;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 31,
  "name": "Launch the website and pass the multiple user data",
  "description": "",
  "id": "signup-as-a-new-user;launch-the-website-and-pass-the-multiple-user-data;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@positiveScenario01"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "launch the website in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "click the register link to signup",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Select the Gender as \"Male\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enter the first name as \"Sankar\" and last name as \"Dev\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter the email address",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter the Password as \"test@123\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter the Confirm password as \"test@123\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "click Register button to submit",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "valid the message \"Your registration completed\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 23
    }
  ],
  "location": "Definition.openurl(String)"
});
formatter.result({
  "duration": 10582028100,
  "status": "passed"
});
formatter.match({
  "location": "Definition.clickregister()"
});
formatter.result({
  "duration": 1079646700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Male",
      "offset": 22
    }
  ],
  "location": "Definition.gender(String)"
});
formatter.result({
  "duration": 100683000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sankar",
      "offset": 25
    },
    {
      "val": "Dev",
      "offset": 51
    }
  ],
  "location": "Definition.firstlastname(String,String)"
});
formatter.result({
  "duration": 241570900,
  "status": "passed"
});
formatter.match({
  "location": "Definition.email()"
});
formatter.result({
  "duration": 235362000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@123",
      "offset": 23
    }
  ],
  "location": "Definition.password(String)"
});
formatter.result({
  "duration": 161650000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@123",
      "offset": 31
    }
  ],
  "location": "Definition.cpassword(String)"
});
formatter.result({
  "duration": 164045800,
  "status": "passed"
});
formatter.match({
  "location": "Definition.register()"
});
formatter.result({
  "duration": 1396822600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 19
    }
  ],
  "location": "Definition.validatemessage(String)"
});
formatter.result({
  "duration": 62933400,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Launch the website and pass the multiple user data",
  "description": "",
  "id": "signup-as-a-new-user;launch-the-website-and-pass-the-multiple-user-data;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 16,
      "name": "@positiveScenario01"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "launch the website in \"chrome\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": "click the register link to signup",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": "Select the Gender as \"Female\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "Enter the first name as \"Nithya\" and last name as \"Dev\"",
  "matchedColumns": [
    2,
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "Enter the email address",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "Enter the Password as \"test@123\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "Enter the Confirm password as \"test@123\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "click Register button to submit",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "valid the message \"Your registration completed\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 23
    }
  ],
  "location": "Definition.openurl(String)"
});
formatter.result({
  "duration": 14832950700,
  "status": "passed"
});
formatter.match({
  "location": "Definition.clickregister()"
});
formatter.result({
  "duration": 1115162300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 22
    }
  ],
  "location": "Definition.gender(String)"
});
formatter.result({
  "duration": 187014600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Nithya",
      "offset": 25
    },
    {
      "val": "Dev",
      "offset": 51
    }
  ],
  "location": "Definition.firstlastname(String,String)"
});
formatter.result({
  "duration": 366139300,
  "status": "passed"
});
formatter.match({
  "location": "Definition.email()"
});
formatter.result({
  "duration": 192084900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@123",
      "offset": 23
    }
  ],
  "location": "Definition.password(String)"
});
formatter.result({
  "duration": 197717800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@123",
      "offset": 31
    }
  ],
  "location": "Definition.cpassword(String)"
});
formatter.result({
  "duration": 257475800,
  "status": "passed"
});
formatter.match({
  "location": "Definition.register()"
});
formatter.result({
  "duration": 1373217100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Your registration completed",
      "offset": 19
    }
  ],
  "location": "Definition.validatemessage(String)"
});
formatter.result({
  "duration": 89694000,
  "status": "passed"
});
});