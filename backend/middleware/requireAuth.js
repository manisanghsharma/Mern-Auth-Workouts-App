import jwt from "jsonwebtoken";
import {User} from "../models/userModel.js";

const requireAuth = async (req, res, next) => {
	const { authorization } = req.headers;

	if (!authorization) {
		return res.status(401).json({ error: "Authorization token required" });
	}

	const token = authorization.split(" ")[1];

	try {
		const { _id } = jwt.verify(token, process.env.SECRET);

        //Middleware is making this req.user property here, it can be called anything. Now when it will go to next middlewares, the req will contain a .user propety which will contain the id. So we know the user is authenticated
		req.user = await User.findOne({ _id }).select("_id");
		console.log(req.user);
		next();

	} catch (err) {
		console.log(err);
		res.status(401).json({ error: "Request is not authorized" });
	}
}

export default requireAuth
