const Blog = require("../../models/blog.js");

module.exports = async (req, res) => {
    try {
        const fetchedBlogs = await Blog.find({trending: true})

        if (fetchedBlogs.length === 0) {
            return res.status(200).json({
                success: true,
                message: 'no blogs are trending.'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'blogs fetched successfully',
            data: fetchedBlogs
        })
    }
    catch (e) {
        console.log(e.message)
        return res.status(500).json({
            success: false,
            message: `error: ${e.message}`
        })
    }
}
