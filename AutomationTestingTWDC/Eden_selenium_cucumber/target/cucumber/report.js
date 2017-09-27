$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EdenLogin.feature");
formatter.feature({
  "line": 1,
  "name": "Eden login",
  "description": "",
  "id": "eden-login",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Successful Login with Valid Credentials",
  "description": "",
  "id": "eden-login;successful-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@test"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user is on Eden login screen",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user types in correct username and password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user clicks on Sign in button",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user is displayed Eden homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "EdenLoginSD.user_is_on_Eden_login_screen()"
});
formatter.result({
  "duration": 48628214492,
  "error_message": "org.openqa.selenium.WebDriverException: Failed to connect to binary FirefoxBinary(C:\\Program Files (x86)\\Mozilla Firefox\\firefox.exe) on port 7055; process output follows: \nla.org in app-system-defaults\r\n1506424485385\taddons.xpi\tDEBUG\tExisting add-on e10srollout@mozilla.org in app-system-defaults\r\n1506424485386\taddons.xpi\tDEBUG\tExisting add-on firefox@getpocket.com in app-system-defaults\r\n1506424485386\taddons.xpi\tDEBUG\tExisting add-on followonsearch@mozilla.com in app-system-defaults\r\n1506424485386\taddons.xpi\tDEBUG\tExisting add-on screenshots@mozilla.org in app-system-defaults\r\n1506424485387\taddons.xpi\tDEBUG\tExisting add-on shield-recipe-client@mozilla.org in app-system-defaults\r\n1506424485387\taddons.xpi\tDEBUG\tExisting add-on webcompat@mozilla.org in app-system-defaults\r\n1506424485388\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files (x86)\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}.xpi\r\n1506424485388\taddons.xpi\tDEBUG\tExisting add-on {972ce4c6-7e08-4474-a285-3208198ce6fd} in app-global\r\n1506424485388\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {}\r\n1506424485476\taddons.productaddons\tINFO\tsending request to: https://aus5.mozilla.org/update/3/GMP/55.0.3/20170824053622/WINNT_x86-msvc-x64/en-GB/release/Windows_NT%2010.0.0.0%20(x64)/default/default/update.xml\r\n1506424486151\taddons.productaddons\tINFO\tCompleted downloading document\r\n1506424486852\taddons.productaddons\tINFO\tdownloadXHR File download. status\u003d200\r\n1506424486855\taddons.productaddons\tINFO\tDownloaded file will be saved to C:\\Users\\nkypr\\AppData\\Local\\Temp\\tmpaddon\r\n1506424490363\taddons.productaddons\tINFO\tdownloadXHR File download. status\u003d200\r\n1506424490366\taddons.productaddons\tINFO\tDownloaded file will be saved to C:\\Users\\nkypr\\AppData\\Local\\Temp\\tmpaddon\r\n1506424494165\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on webcompat@mozilla.org version 1.1\r\n1506424494166\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on shield-recipe-client@mozilla.org version 55.1\r\n1506424494170\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on screenshots@mozilla.org version 10.12.0\r\n1506424494170\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on followonsearch@mozilla.com version 0.9.1\r\n1506424494171\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on firefox@getpocket.com version 1.0.5\r\n1506424494171\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on e10srollout@mozilla.org version 2.0\r\n1506424494172\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on clicktoplay-rollout@mozilla.org version 1.2\r\n1506424494172\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on aushelper@mozilla.org version 2.0\r\n[GPU 4060] WARNING: pipe error: 109: file c:/builds/moz2_slave/m-rel-w32-00000000000000000000/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 346\r\n[GPU 4060] WARNING: pipe error: 109: file c:/builds/moz2_slave/m-rel-w32-00000000000000000000/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 346\r\n[Parent 4948] WARNING: pipe error: 109: file c:/builds/moz2_slave/m-rel-w32-00000000000000000000/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 346\r\n[Child 6504] WARNING: pipe error: 109: file c:/builds/moz2_slave/m-rel-w32-00000000000000000000/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 346\r\n1506424494439\taddons.manager\tDEBUG\tshutdown\r\n1506424494440\taddons.manager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1506424494440\taddons.xpi\tDEBUG\tshutdown\r\n1506424494440\taddons.xpi-utils\tDEBUG\tshutdown\r\n1506424494441\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1506424494441\taddons.manager\tDEBUG\tCalling shutdown blocker for GMPProvider\r\n1506424494442\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1506424494443\taddons.manager\tDEBUG\tCalling shutdown blocker for PreviousExperimentProvider\r\n1506424494443\taddons.manager\tDEBUG\tCalling shutdown blocker for \u003cunnamed-provider\u003e\r\n1506424494446\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1506424494452\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n[GPU 4060] WARNING: pipe error: 109: file c:/builds/moz2_slave/m-rel-w32-00000000000000000000/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 346\r\n\nBuild info: version: \u00272.53.0\u0027, revision: \u002735ae25b1534ae328c771e0856c93e187490ca824\u0027, time: \u00272016-03-15 10:43:46\u0027\nSystem info: host: \u0027Dell-XPS14\u0027, ip: \u0027169.254.129.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_141\u0027\nDriver info: driver.version: FirefoxDriver\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:125)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:271)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:119)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:211)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:207)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat appModules.EdenLogin.startWebDriver(EdenLogin.java:20)\r\n\tat StepDefinitions.EdenLoginSD.user_is_on_Eden_login_screen(EdenLoginSD.java:16)\r\n\tat ✽.When user is on Eden login screen(EdenLogin.feature:5)\r\nCaused by: org.openqa.selenium.firefox.NotConnectedException: Unable to connect to host 127.0.0.1 on port 7055 after 45000 ms. Firefox console output:\nla.org in app-system-defaults\r\n1506424485385\taddons.xpi\tDEBUG\tExisting add-on e10srollout@mozilla.org in app-system-defaults\r\n1506424485386\taddons.xpi\tDEBUG\tExisting add-on firefox@getpocket.com in app-system-defaults\r\n1506424485386\taddons.xpi\tDEBUG\tExisting add-on followonsearch@mozilla.com in app-system-defaults\r\n1506424485386\taddons.xpi\tDEBUG\tExisting add-on screenshots@mozilla.org in app-system-defaults\r\n1506424485387\taddons.xpi\tDEBUG\tExisting add-on shield-recipe-client@mozilla.org in app-system-defaults\r\n1506424485387\taddons.xpi\tDEBUG\tExisting add-on webcompat@mozilla.org in app-system-defaults\r\n1506424485388\taddons.xpi\tINFO\tMapping {972ce4c6-7e08-4474-a285-3208198ce6fd} to C:\\Program Files (x86)\\Mozilla Firefox\\browser\\extensions\\{972ce4c6-7e08-4474-a285-3208198ce6fd}.xpi\r\n1506424485388\taddons.xpi\tDEBUG\tExisting add-on {972ce4c6-7e08-4474-a285-3208198ce6fd} in app-global\r\n1506424485388\taddons.xpi\tDEBUG\tgetInstallState changed: false, state: {}\r\n1506424485476\taddons.productaddons\tINFO\tsending request to: https://aus5.mozilla.org/update/3/GMP/55.0.3/20170824053622/WINNT_x86-msvc-x64/en-GB/release/Windows_NT%2010.0.0.0%20(x64)/default/default/update.xml\r\n1506424486151\taddons.productaddons\tINFO\tCompleted downloading document\r\n1506424486852\taddons.productaddons\tINFO\tdownloadXHR File download. status\u003d200\r\n1506424486855\taddons.productaddons\tINFO\tDownloaded file will be saved to C:\\Users\\nkypr\\AppData\\Local\\Temp\\tmpaddon\r\n1506424490363\taddons.productaddons\tINFO\tdownloadXHR File download. status\u003d200\r\n1506424490366\taddons.productaddons\tINFO\tDownloaded file will be saved to C:\\Users\\nkypr\\AppData\\Local\\Temp\\tmpaddon\r\n1506424494165\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on webcompat@mozilla.org version 1.1\r\n1506424494166\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on shield-recipe-client@mozilla.org version 55.1\r\n1506424494170\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on screenshots@mozilla.org version 10.12.0\r\n1506424494170\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on followonsearch@mozilla.com version 0.9.1\r\n1506424494171\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on firefox@getpocket.com version 1.0.5\r\n1506424494171\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on e10srollout@mozilla.org version 2.0\r\n1506424494172\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on clicktoplay-rollout@mozilla.org version 1.2\r\n1506424494172\taddons.xpi\tDEBUG\tCalling bootstrap method shutdown on aushelper@mozilla.org version 2.0\r\n[GPU 4060] WARNING: pipe error: 109: file c:/builds/moz2_slave/m-rel-w32-00000000000000000000/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 346\r\n[GPU 4060] WARNING: pipe error: 109: file c:/builds/moz2_slave/m-rel-w32-00000000000000000000/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 346\r\n[Parent 4948] WARNING: pipe error: 109: file c:/builds/moz2_slave/m-rel-w32-00000000000000000000/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 346\r\n[Child 6504] WARNING: pipe error: 109: file c:/builds/moz2_slave/m-rel-w32-00000000000000000000/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 346\r\n1506424494439\taddons.manager\tDEBUG\tshutdown\r\n1506424494440\taddons.manager\tDEBUG\tCalling shutdown blocker for XPIProvider\r\n1506424494440\taddons.xpi\tDEBUG\tshutdown\r\n1506424494440\taddons.xpi-utils\tDEBUG\tshutdown\r\n1506424494441\taddons.manager\tDEBUG\tCalling shutdown blocker for LightweightThemeManager\r\n1506424494441\taddons.manager\tDEBUG\tCalling shutdown blocker for GMPProvider\r\n1506424494442\taddons.manager\tDEBUG\tCalling shutdown blocker for PluginProvider\r\n1506424494443\taddons.manager\tDEBUG\tCalling shutdown blocker for PreviousExperimentProvider\r\n1506424494443\taddons.manager\tDEBUG\tCalling shutdown blocker for \u003cunnamed-provider\u003e\r\n1506424494446\taddons.xpi\tDEBUG\tNotifying XPI shutdown observers\r\n1506424494452\taddons.manager\tDEBUG\tAsync provider shutdown done\r\n[GPU 4060] WARNING: pipe error: 109: file c:/builds/moz2_slave/m-rel-w32-00000000000000000000/build/src/ipc/chromium/src/chrome/common/ipc_channel_win.cc, line 346\r\n\r\n\tat org.openqa.selenium.firefox.internal.NewProfileExtensionConnection.start(NewProfileExtensionConnection.java:113)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.startClient(FirefoxDriver.java:271)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:119)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:216)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:211)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:207)\r\n\tat org.openqa.selenium.firefox.FirefoxDriver.\u003cinit\u003e(FirefoxDriver.java:120)\r\n\tat appModules.EdenLogin.startWebDriver(EdenLogin.java:20)\r\n\tat StepDefinitions.EdenLoginSD.user_is_on_Eden_login_screen(EdenLoginSD.java:16)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:37)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:298)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:48)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:86)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:38)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:459)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:678)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:382)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:192)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "EdenLoginSD.user_types_in_correct_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EdenLoginSD.user_clicks_on_Sign_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "EdenLoginSD.user_is_displayed_Eden_homepage()"
});
formatter.result({
  "status": "skipped"
});
});