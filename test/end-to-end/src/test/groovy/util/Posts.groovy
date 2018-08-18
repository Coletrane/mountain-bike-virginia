package util

import groovy.io.FileType
import org.json.JSONArray
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
}
