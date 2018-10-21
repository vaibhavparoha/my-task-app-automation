Feature: User adds a new task

    User opens My Task App and Adds a new task

    Scenario: Add a new task
        Given User go to my task app
        And User enter "My New Task 1" in text box
        When User clicks of Add button
        Then New Task "My New Task 1" should be added in task list