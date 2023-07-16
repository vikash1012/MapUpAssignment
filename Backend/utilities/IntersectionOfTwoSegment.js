//this function return point of intersection of two line segment
function findIntersectionOfTwolineSegment(line1,line2){
    let intersectingPoint=[];
    let  slope1=findSlope(line1);
    let slope2=findSlope(line2);
    if(slope1==slope2){
      return intersectingPoint;
    }
    let point=findIntersection(slope1,slope2,line1[0],line2[0]);
    if(isPointWithinLineSegment(point,line1)){
        intersectingPoint.push(point[0]);
        intersectingPoint.push(point[1]);
    }
    return intersectingPoint;
}

//this function return slope of a line
function findSlope(line){
    let line_start_x=line[0][0];
    let line_start_y=line[0][1];
    let line_end_x=line[1][0];
    let line_end_y=line[1][1];
    
    return (line_end_y-line_start_y)/(line_end_x-line_start_x);
}

//this function return intersection of two line
function findIntersection(slope1,slope2,point1,point2){
    let line1_x=point1[0];
    let line1_y=point1[1];
    let line2_x=point2[0];
    let line2_y=point2[1];

    let intersection_x=((line2_y-line1_y)+(slope1*line1_x)-(slope2*line2_x))/(slope1-slope2);
    let intersection_y=(slope1*intersection_x)-(slope1*line1_x)+line1_y;

    return [intersection_x,intersection_y];
}
//this function check whether a point is within line segment or not
function isPointWithinLineSegment(point,line){
    let min_x=Math.min(line[0][0],line[1][0]);
    let max_x=Math.max(line[0][0],line[1][0])
    let min_y=Math.min(line[0][1],line[1][1])
    let max_y=Math.max(line[0][1],line[1][1])

    if(point[0]>=min_x&&point[0]<=max_x&&point[1]>=min_y&&point[1]<=max_y){
        return true;
    }
    return false;
}

module.exports=findIntersectionOfTwolineSegment;