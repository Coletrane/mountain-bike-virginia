package modules

import geb.Module

class Footer extends Module {
    static base = {$(".mtbva-footer")}
    static content = {
        github {$(".github")}
    }
}
