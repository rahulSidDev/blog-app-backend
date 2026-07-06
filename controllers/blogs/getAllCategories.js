const Blog = require("../../models/blog.js");

module.exports = async (req, res) => {
    try {
        const fetchedCategories = await Blog.distinct('category')

        if (!fetchedCategories) {
            return res.status(404).json({
                success: false,
                message: 'categories not found.'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'categories fetched successfully.',
            data: fetchedCategories
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