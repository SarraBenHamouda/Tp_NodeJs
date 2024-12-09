const yup=require('yup')

async function validate(req,res,next){
try{
    const Schema=yup.object().shape({
        username:yup.string().matches(/^[A-Z]/).required(),
        email:yup.String().email().matches(/@esprit.tn$/).required(),
        cin:yup.number().required()
    })
    await Schema.validate(req.body);
    next()
}catch (err) {
    res.status(400).json(err);
}
}

module.exports=validate;