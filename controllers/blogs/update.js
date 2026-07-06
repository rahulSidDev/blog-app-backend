const Blog = require("../../models/blog.js");

module.exports = async (req, res) => {
    try {
        const {id} = req.params

        if (!id) {
            return res.status(400).json({
                success: false,
                message: 'all fields are required.'
            })
        }

        const existingBlog = await Blog.findById({_id: id})

        if (!existingBlog) {
            return res.status(404).json({
                success: false,
                message: 'blog could not found.'
            })
        }

        // update each field of the existing blog with new information
        existingBlog.title = req.body.title || existingBlog.title;
        existingBlog.description = req.body.description || existingBlog.description;
        existingBlog.shortDescription = req.body.shortDescription || existingBlog.shortDescription;
        existingBlog.slug = req.body.slug || existingBlog.slug;
        existingBlog.category = req.body.category || existingBlog.category;
        existingBlog.keywords = req.body.keywords || existingBlog.keywords;
        existingBlog.trending = req.body.trending || existingBlog.trending;
        
        await existingBlog.save();

        res.status(201).json({
            success: true,
            message: "Blog updated successfully",
            data: existingBlog,
        });
    }
    catch (e) {
        return res.status(500).json({
            message: `error: ${e.message}`,
            success: false
        })
    }
}
