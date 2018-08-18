package modules

import geb.Module

class Header extends Module {
    static base = {$(".mtbva-header")}
    static content = {
        title {$(".mtbva-title")}
        subtitle {$("mtbva-subtitle")}
        eventsButton {$(".button-link")}
    }
}
