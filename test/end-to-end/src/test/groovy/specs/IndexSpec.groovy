package specs

import geb.spock.GebSpec
import pages.IndexPage
import util.Posts

class IndexSpec extends GebSpec {
    // Geb hooks

    // Tests
    def "should have posts "() {
        when:
        to IndexPage
        scrollAllPosts()

        then:
        true
    }

    // Helpers
    def scrollAllPosts() {
        js.exec("window.scroll(0,${Posts.pages.size() * 20000});")
        // TODO wait for all images to load
        waitFor {}
    }
}
