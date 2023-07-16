// this function return point of intersection of two line segment
function findIntersectionOfTwolineSegment (line1, line2) {
  const intersectingPoint = []
  const slope1 = findSlope(line1)
  const slope2 = findSlope(line2)
  if (slope1 === slope2) {
    return intersectingPoint
  }
  const point = findIntersection(slope1, slope2, line1[0], line2[0])
  if (isPointWithinLineSegment(point, line1)) {
    intersectingPoint.push(point[0])
    intersectingPoint.push(point[1])
  }
  return intersectingPoint
}

// this function return slope of a line
function findSlope (line) {
  const lineStartX = line[0][0]
  const lineStartY = line[0][1]
  const lineEndX = line[1][0]
  const lineEndY = line[1][1]

  return (lineEndY - lineStartY) / (lineEndX - lineStartX)
}

// this function return intersection of two line
function findIntersection (slope1, slope2, point1, point2) {
  const line1X = point1[0]
  const line1Y = point1[1]
  const line2X = point2[0]
  const line2Y = point2[1]

  const intersectionX = ((line2Y - line1Y) + (slope1 * line1X) - (slope2 * line2X)) / (slope1 - slope2)
  const intersectionY = (slope1 * intersectionX) - (slope1 * line1X) + line1Y

  return [intersectionX, intersectionY]
}
// this function check whether a point is within line segment or not
function isPointWithinLineSegment (point, line) {
  const minX = Math.min(line[0][0], line[1][0])
  const maxX = Math.max(line[0][0], line[1][0])
  const minY = Math.min(line[0][1], line[1][1])
  const maxY = Math.max(line[0][1], line[1][1])

  if (point[0] >= minX && point[0] <= maxX && point[1] >= minY && point[1] <= maxY) {
    return true
  }
  return false
}

module.exports = findIntersectionOfTwolineSegment
