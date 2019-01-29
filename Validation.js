var Ajv = require('ajv')
var ajv = Ajv({ allErrors: true })
var valid = ajv.validate('/home/lisa/Projects/JSON-Schema-test/product example without reference/schema-example1.json', '/home/lisa/Projects/JSON-Schema-test/product example without reference/product2.json')
if (valid) {
  console.log('User data is valid')
} else {
  console.log('User data is INVALID!')
  console.log(ajv.errors)
}
