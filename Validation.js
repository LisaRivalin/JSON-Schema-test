const UserSchema = require('/home/lisa/Projects/JSON-Schema-test/product example with reference/schema-example1.json')
const UserData = require('/home/lisa/Projects/JSON-Schema-test/product example with reference/product1.json')
const reference = require('/home/lisa/Projects/JSON-Schema-test/product example with reference/geographical-location-schema.json')

var Ajv = require('ajv')
var ajv = Ajv({ allErrors: true })

var validate = ajv.addSchema(reference).compile(UserSchema)

var valid = validate(UserData)

if (valid) {
  console.log('User data is valid')
} else {
  console.log('User data is INVALID!')
  console.log(ajv.errors)
}
