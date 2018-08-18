package pages

import geb.Page
import modules.Header
import modules.NavBar

class IndexPage extends Page {
    static at = {title == "Mountain Bike Virginia"}
    static content = {
        navBar {module(NavBar)}
        header {module(Header)}
    }
}
