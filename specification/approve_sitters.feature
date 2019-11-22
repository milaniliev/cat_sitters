Feature: Approving cat sitters
  As a cat owner, 
  I want to approve some cat sitters
  So that I can check their availability
  
  Background:
    Given there are no prior cat sitters
      And the following cat sitters:
      | name           | photo | location        | rating | rates | available_from | available_to |
      | Katie Catt     | 1.jpg | New York, NY    | 4.00   | 10.00 | 2018-01-01     | 2020-01-01   |
      | Katherine Catt | 2.jpg | Westchester, NY | 5.00   | 20.00 | 2019-11-01     | 2019-11-31   |

  Scenario: I approve two sitters
    When I log in
     And I look at cat sitters
     And I approve the following cat sitters:
          | name           | 
          | Katie Catt     |
          | Katherine Catt |

    Then I should see an approved cat sitter named "Katie Catt" 
     And I should see an approved cat sitter named "Katherine Catt"

  Scenario: I approve two sitters and move to availability
    When I log in
     And I look at cat sitters
     And I approve the following cat sitters:
          | name           | 
          | Katie Catt     |
          | Katherine Catt |
     And I move on to the Availability View
    Then I should see an approved cat sitter named "Katie Catt" 
