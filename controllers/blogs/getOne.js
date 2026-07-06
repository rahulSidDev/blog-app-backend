const Blog = require("../../models/blog.js");

module.exports = async (req, res) => {
    try {
        const {slug} = req.params

        if (!slug) {
            return res.status(404).json({
                success: false,
                message: 'slug is required.'
            })
        }

        const fetchedBlog = await Blog.findOne({slug})
        
        if (!fetchedBlog) {
            return res.status(400).json({
                success: false,
                message: 'blog does not exist.'
            })
        }

        return res.status(200).json({
            success: true,
            message: 'blog found.',
            data: fetchedBlog
        })
    }
    catch (e) {
        console.log(e.meesage)
        return res.status(500).json({
            success: false,
            message: `error: ${e.message}`
        })
    }
}
