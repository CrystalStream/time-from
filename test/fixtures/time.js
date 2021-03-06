'use strict'

const timings = [
  { fn: 'toMilis', value: '2 years', return: 63072000000 },
  { fn: 'toSec', value: '1 year', return: 31536000 }
]

module.exports = {
  toMilis: timings.find(t => t.fn === 'toMilis'),
  toSec: timings.find(t => t.fn === 'toSec')
}
