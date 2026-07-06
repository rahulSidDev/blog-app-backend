const Blog = require("../../models/blog.js");

module.exports = async(req, res) => {
    try {
        const allblogs = await Blog.find().sort({
            createdAt: -1
        })

        if (allblogs.length === 0) {
            return res.status(200).json({
                success: true,
                message: "no blogs exist",
            });
        }

        return res.status(200).json({
            success: true,
            message: "all blogs fetched successfully",
            data: allblogs
        })
    }
    catch (e) {
        console.log(e.message)
        return res.status(500).json({
            message: `error: ${e.message}`,
            success: false
        })
    }
}
