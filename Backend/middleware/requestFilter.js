const apiKey="0824785216da64a03208bdf0a81195a52f7eef0082e67da1ef96b118a5e615f3";

//this function filter the request if it is okay then pass the request to next layer
function requestFilter(req,res,next){
    if(req.headers.authorization!=apiKey){
        return res.status(401).json({errorMessage:"Unauthorize Request"})

    }
    if(req.body.coordinates==undefined||req.body.coordinates.length<2){
        return res.status(400).json({errorMessage:"Bad Request"})
    }
    next();
}
module.exports=requestFilter;