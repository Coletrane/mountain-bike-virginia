package util

@Singleton
class Constants {
    static final BASE_PATH = new File("./").getAbsolutePath()
            .replace("/test/end-to-end/", "")
            .replace("mountain-bike-virginia.", "mountain-bike-virginia")
}
