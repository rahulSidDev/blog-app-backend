const Blog = require("../../models/blog.js");

module.exports = async (req, res) => {
    try {
        const {category} = req.params

        if (!category) {
            return res.status.json({
                success: false,
                message: 'category is required.'
            })
        }

        const fetchedBlogs = await Blog.find({category})

        if (fetchedBlogs.length === 0) {
            return res.status(200).json({
                success: true,
                message: 'no blogs were found for this category.'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'blogs found successfully.',
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
