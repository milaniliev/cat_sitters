Feature: Listing all cat sitters
  As a cat owner, 
  I want to see a list of cat sitters
  So that I can approve some of them
  
  Background:
    Given the following cat sitters:
      | name           | photo | location        | rating | rates | available_from | available_to |
      | Katie Catt     | 1.jpg | New York, NY    | 4.00   | 10.00 | 2018-01-01     | 2020-01-01   |
      | Katherine Catt | 2.jpg | Westchester, NY | 5.00   | 20.00 | 2019-11-01     | 2019-11-31   |

  Scenario: I have one cat sitter
    When I log in
     And I look at cat sitters
    Then I should see a cat sitter named "Katie Catt"
