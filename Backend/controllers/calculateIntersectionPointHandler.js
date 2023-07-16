const randomline = require('../Data/line.json')
const findIntersectionOfTwolineSegment = require('../utilities/IntersectionOfTwoSegment.js')

// this is call back funcion that return intersecting line(LineId alog with intersecting point) using constructive algorithm
function calculateIntersectionPoint (req, res) {
  const longline = req.body.coordinates
  const intersectingLine = []

  console.log('Incoming request:')
  console.log('Method:', req.method)
  console.log('URL:', `http://${req.headers.host}/intersection${req.url}`)

  console.log('Headers:', req.headers)
  for (let i = 0; i < randomline.length; i++) {
    const id = (i + 1) <= 9 ? '0' + (i + 1) : (i + 1)
    const pointofIntersection = []
    for (let j = 0; j < longline.length - 1; j++) {
      const line1 = []
      line1.push(longline[j])
      line1.push(longline[j + 1])
      const line2 = randomline[i].line.coordinates

      // fucntion that find intersection of two line segment:
      const point = findIntersectionOfTwolineSegment(line1, line2)
      if (point.length) {
        pointofIntersection.push(point)
      }
    }
    if (pointofIntersection.length) {
      const intersectingPoint = {
        lineId: 'L' + id,
        point: pointofIntersection
      }
      intersectingLine.push(intersectingPoint)
    }
  }
  res.send(intersectingLine)
}

module.exports = calculateIntersectionPoint
