const yup=require('yup')

async function validate(req, res, next) {
    try {
        const Schema = yup.object().shape({
            username: yup.string().matches(/^[A-Z]/).required(),
            email: yup.string().email().matches(/@esprit.tn$/).required(),
            cin: yup.number().required(),
        });
        await Schema.validate(req.body);
        next(); // Ensure the request proceeds to the next middleware
    } catch (err) {
        res.status(400).json({ error: err.errors || "Validation failed" });
    }
}
module.exports=validate