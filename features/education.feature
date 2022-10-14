Feature: Education

    Scenario: Should sucsess education
        Given go to the page "http://qamid.tmweb.ru/client/hall.php"
        When choose date by selector ".page-nav > a:nth-child(1)" #Empty
        Then ticket received "Сегодня"

