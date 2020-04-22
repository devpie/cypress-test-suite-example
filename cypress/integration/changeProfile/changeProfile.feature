Feature: Change User Profile

  Scenario:
    Given a user is logged in
    When he goes to his account settings
    And changes his settings successfully to the following:
      | Setting URL           | Input type | New value id | New value  | Back button name |
      | /settings/screen_name | text       |              | devpie1234 |                  |
      | /settings/screen_name | text       |              | devpie4321 |                  |
      | /settings/language    | select     | de           | Deutsch    | Zurück           |
      | /settings/language    | select     | en           | English    | Back             |
