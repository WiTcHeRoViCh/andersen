function html(literals, value1, value2) {
  return escapeHTML(literals[0] +value1+literals[1]+value2 + literals[2]);
}

const mustEscape = '<>&"'
console.log(html`You should escape the ${mustEscape.length} characters “${mustEscape}” in HTML`)

function escapeHTML(string) {
  return String(string).replace(/"/g, "&quot;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/&/g, "&amp;")
}