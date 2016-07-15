-----Workflow-----

This is a spreadsheet file used to track ngxBootstrap development
https://docs.google.com/spreadsheets/d/1WoEvfDijiWrZ_un6Up3IKj9-7PDWHXFYhRDvgd7wkj0/edit#gid=0

- When you pick a component to develop, you need to fill info into a row of "Picked by" & "Status" columns of "Estimate" sheet.
You also need to fill info into a row of "Component", "Developer", "Start Date", "End Date" columns of "Progess" sheet.

- You can change estimate for component development, if it's necessary for you.

- When you finish development, you should create a PR, paste PR's link to Gitter and ping other people review it.
You also need to update info for "Pull Request" column of "Progess" sheet.

- When your PR is approved by all people, it's being merged to Integration branch at Saturday every week
Minh's checking and merging approved PRs for you, then he's deleting your branch in Github

- Minh's doing test case with your components after they have been merged to Integration branch.

- After your components pass all Minh's test cases, it's being merged to Master branch.




-----Development-----

This is Integration branch: develop

- When you pick a component for development, you should branch off Integration branch with branch name as: 
feature/(componentName)
Ex: feature/ngxDropdownComponent

- When someone notify bugs about your component, you should branch off Integration branch with branch name as:
bugfix/(componentName)_(issue)
Ex: bugfix/ngxDropdownComponent_ngxDropdownService-not-working




-----Test UI-----

You can create some test cases for your component in /component/(componentName)/tests/ui

- Default test cases is "isolated-components"

- Run this command for test ui:
gulp test-ui --component (component-folder) --testcase (testcase-folder)
*NOTICE* If you want to test "isolated-components" test case, you don't need to type --testcase option in the command

Ex: gulp test-ui --component dropdown --testcase my-testcase



-----Conventions-----

We should follow Jhon PaPa style. But we have some modifications.

- For all private variable & function, we should start with undercore(_)
EX: function A(){
	var _prop = 'something';

	funtion _doSomething(){}
}

- For constants variable, we should use uppercase & undercore for naming
EX: function A(){
	var _MY_CONSTANT = 'my-constant';
}
