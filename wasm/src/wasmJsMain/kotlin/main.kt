fun main() {
    println("Hello from Kotlin/Wasm")
}

@OptIn(ExperimentalJsExport::class)
@JsExport
fun add(a: Int, b: Int): Int {
    return a + b
}

@OptIn(ExperimentalJsExport::class)
@JsExport
fun ping(): String {
    return "pong"
}
