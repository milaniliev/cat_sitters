# Comment
@tag
Feature: Listing all cat sitters

  As a cat owner, 
  I want to see a list of cat sitters
  So that I can approve some of them

  Scenario: I have one cat sitter
    Given a cat sitter named Katie
    When I log in
    Then I should see Katie in the list of cat sitters