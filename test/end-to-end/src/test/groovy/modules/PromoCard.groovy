package modules

import geb.Module

class PromoCard extends Module {
    static content = {
        headline {$(".headline")}
        subheading {$(".subheading")}
        date {$(".post-date")}
        location {$(".post-location")}
    }
}
