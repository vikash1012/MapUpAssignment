const randomline=require("../Data/line.json")
const findIntersectionOfTwolineSegment=require("../utilities/IntersectionOfTwoSegment.js");

// this is call back funcion that return intersecting line(LineId alog with intersecting point)
function calculateIntersectionPoint(req,res){
let longline=req.body.coordinates;
let intersectingLine=[];
for(let i=0;i<randomline.length;i++){

    let id=(i+1)<=9?"0"+(i+1):(i+1);
    let pointofIntersection=[];

    for(let j=0;j<longline.length-1;j++){
        line1=[];
        line1.push(longline[j]);
        line1.push(longline[j+1]);
        line2=randomline[i].line.coordinates;

        //fucntion that find intersection of two line segment:
        let point=findIntersectionOfTwolineSegment(line1,line2);
        if(point.length){
            pointofIntersection.push(point);
        }  
    }
    if(pointofIntersection.length){
        let intersectingPoint={
            lineId:"L"+id,
            point:pointofIntersection
        }
        intersectingLine.push(intersectingPoint);
    }
}
res.send(intersectingLine);  
}

module.exports=calculateIntersectionPoint;