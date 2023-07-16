const apiKey="0824785216da64a03208bdf0a81195a52f7eef0082e67da1ef96b118a5e615f3";

function requestFilter(req,res,next){
    console.log(req.headers.authorization);
    if(req.headers.authorization!=apiKey){
        return res.status(401).json({errorMessage:"Unauthorize Request"})

    }
    if(req.body.coordinates==undefined||req.body.coordinates.length<2){
        return res.status(400).json({errorMessage:"Bad Request"})
    }
    next();
}
module.exports=requestFilter;