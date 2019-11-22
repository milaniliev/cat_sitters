Feature: Cat Sitter API
  As a cat app developer, 
  I want to see a list of cat sitters
  So that I can use them in my app

  Background:
    Given there are no prior cat sitters

  Scenario: I have one cat sitter
    Given the following cat sitters:
      | name           | photo | location        | rating | rates | available_from | available_to |
      | Katherine Catt | 2.jpg | Westchester, NY | 5.00   | 20.00 | 2019-11-01     | 2019-11-31   |
    When I fetch cat sitters
    Then I should see a cat sitter named "Katherine Catt"
