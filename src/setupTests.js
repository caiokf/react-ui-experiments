import { JSDOM } from 'jsdom'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'

// JSDOM for react enzyme tests
const exposedProperties = ['window', 'navigator', 'document']
global.window = new JSDOM('<!DOCTYPE html><div id="root"/>').window
global.document = global.window.document
global.navigator = { userAgent: 'node.js' }

Object.keys(global.document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property)
    global[property] = global.document.defaultView[property]
  }
})

// CHAI assertions
// Make sure chai and jasmine ".not" play nice together
chai.use(chaiImmutable)

const originalNot = Object.getOwnPropertyDescriptor(chai.Assertion.prototype, 'not').get
Object.defineProperty(chai.Assertion.prototype, 'not', {
  get() {
    Object.assign(this, this.assignedNot)
    return originalNot.apply(this)
  },
  set(newNot) {
    this.assignedNot = newNot
    return newNot
  },
})

// Combine both jest and chai matchers on expect
const originalExpect = global.expect

global.expect = (actual) => {
  const originalMatchers = originalExpect(actual)
  const chaiMatchers = chai.expect(actual)
  const combinedMatchers = Object.assign(chaiMatchers, originalMatchers)
  return combinedMatchers
}
