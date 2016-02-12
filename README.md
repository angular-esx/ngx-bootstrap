-----Dev-----
- Copy and rename index.local.html to index.html


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

- For inheritable class in angular 2, you should code like this:
EX:
...
 ngxBootstrap.ngxClass.ngxExampleClass = ngxExample;

 ngxBootstrap.ngxComponents.ngExampleComponent = ng.core.Directive({
    selector: 'ngx-my-component',
  })
  .Class(new ngxExample());

  function ngxExample(){ ... }

In angular 2, in order to inherit a component, actually, you'll inherit the class used to create a component, not component.
In my code above, if you want to inherit ngExampleComponent, actually, you need to inherit ngxExampleClass, not ngExampleComponent.
Because of that, we must declare our class and assign it to ngxBootstrap.ngxClass before use it to create our component.

ngxBootstrap.ngxClass namespace is created to hold & share classes which are used for inheritance & unit test.

- There're rules we should follow to code inheritable class in angular 2:

1. Must follow OOP principles. Ecapsulate things which you don't want to publish them. Don't assign everything to `this` !!!
EX: 
We don't need to publish ng.core.ElementRef.nativeElement, so we assign it to private property _nativeElement

function ngxLabel() {
    var _nativeElement;

    this.constructor = [ng.core.ElementRef, function (elementRef) {
      this.onConstructing(elementRef);
    }];

	this.onConstructing = function (elementRef) {
      _nativeElement = elementRef.nativeElement;
    };
}

2. You need to implement onConstructing in your class(See above example). ngxBootstrap.inherit only work correctly if onConstructing is implemented

3. When you inherit a class, you must implement getBaseInstance to return base class. If not, when other classes inherit your class, they can't override your class
EX: 
function ngxLabelPillPrimary() {
	var _ngxLabelPill = new ngxLabelPill();
	ngxBootstrap.getRootInstance(_ngxLabelPill).getClassName = function () {
		return 'label label-pill label-primary';
	};

	this.getBaseInstance = function () {
		return _ngxLabelPill;
	};

	ngxBootstrap.inherit(this, _ngxLabelPill, true);
};

4. If you want to override base class, make sure that you use ngxBootstrap.getRootInstance to get base class(See above example)

5. Use ngxBootstrap.inherit for inheritance. Don't try to code inheritance yourself lol
