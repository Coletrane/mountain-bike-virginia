package util

import groovy.io.FileType
import org.json.JSONArray
import org.json.JSONObject

import static Constants.*

@Singleton
class Posts {

    static final ArrayList<JSONArray> pages = {
        def pages = new ArrayList<JSONArray>()
        def files = new File("${BASE_PATH}/json/routes/")
        files.eachFile(FileType.FILES) {file ->
            pages.add(new JSONArray(file.text))
        }
        return pages
    }()

    static final ArrayList<JSONObject> posts = {
        def posts = new ArrayList<JSONObject>()
        def files = new File("${BASE_PATH}/json/posts/")
        files.eachFileRecurse(FileType.FILES) {file ->
            posts.add(new JSONObject(file.text))
        }
        return posts
    }()
}
