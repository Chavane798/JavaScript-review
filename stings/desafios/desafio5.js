// Valide se um URL começa com https:// e termina com .com.

let url = "https://www.waptrick.com";

if (url.startsWith("https:") && url.endsWith(".com")) {
  console.log("Url valida!");
} else {
  console.log("Url invalida!");
}
