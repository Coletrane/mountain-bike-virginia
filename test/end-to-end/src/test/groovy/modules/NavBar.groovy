package modules

import geb.Module

class NavBar extends Module {
    static base = {$("nav")}
    static content = {
        mtbvaHomeLink {$("mtbva-home-link")}
        xxcvaHomeLink {$("xxcva-home-link")}
        weatherRoanoke {$("weather-roanoke")}
        weatherHarrisonburg{$("weather-harrisonburg")}
        weatherRichmond {$("weather-richmond")}
        menuLink {$("mtbva-menu-link")}
    }
}
