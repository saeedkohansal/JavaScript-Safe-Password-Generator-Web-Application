// Generate Random String From Pattern & Length
const password_maker = (
  length = 6,
  chars = "0123456789"
) => Array
.from(crypto.getRandomValues(new Uint32Array(length)))
.map((x) => chars[x % chars.length])
.join('')

password_maker()
