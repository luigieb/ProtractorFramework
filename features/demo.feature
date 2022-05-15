Feature: Testing Showcase

    @calculatortesting
    Scenario: Calculator Add functionality testing

        Given I will navigate to Calc Site
        When I add two numbers "3" and "5"
        Then the output displayed should be "7"

    @calculatortesting
    Scenario: Calculator Add functionality testing no 2

        Given I will navigate to "calc" page
        When I add two numbers "2" and "7"
        Then the output displayed should be "9"

    @AngularTesting
    Scenario Outline:  Angualar validations

        Given I will navigate to "AngularJs" page
        When I clicked on header link
        And you will navigate to angular page
        Then you will enter "<key>" in search box

        Examples:
            | key   |
            | hello |
            | hey   |

    @Banking
    Scenario Outline: Add customer through bank manager login option
        Given I launch the url "http://way2automation.com/angularjs-protractor/banking/#/login"
        When I click on Bank Manager Login
        And I click on Add customer
        And I give the customer details "<FirstName>", "<LastName>","<PostCode>"
        And I click on Add customer button
        Then I should get the popup

        Examples:
            | FirstName | LastName | PostCode |
            | Luigi     | Badin    | 1234     |
