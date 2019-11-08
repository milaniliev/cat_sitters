Feature: Cat Sitter API

  As a cat app developer, 
  I want to see a list of cat sitters
  So that I can use them in my app

  Scenario: I have one cat sitter
    Given a cat sitter named Katie
    When fetch cat sitters
    Then I should see Katie in the list of cat sitters