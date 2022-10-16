Feature: Education

    Scenario: Should sucsess education
        Given go to the page "http://qamid.tmweb.ru/client/hall.php"
        When choose date by selector ".page-nav > a:nth-child(2) > span"
        When choose time by selector ".movie div:nth-child(3) > ul > li"
        When choose chair by selector ".buying-scheme__wrapper > div:nth-child(2) > span:nth-child(2)"
        When confirm booking ".acceptin-button"
        When getting booking code ".acceptin-button"
        Then ticket received "Электронный билет"

