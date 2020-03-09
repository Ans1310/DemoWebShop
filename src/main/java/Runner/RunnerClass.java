package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(
		format = {"pretty","html:report/html","json:report/json/cucumber.json"},
		//tags = {"@positiveScenario, @positiveScenario01"}, //both the secnarios will execute
		//tags = {"@positiveScenario", "@positiveScenario01"}, 
		features = "src/main/java/MyPackage",
		glue = {"StepDefinition"} //Package name
		)


public class RunnerClass extends AbstractTestNGCucumberTests{

}
