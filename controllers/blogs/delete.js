const Blog = require('../../models/blog')

module.exports = async (req, res) => {
    try {
        const {id} = req.params
        const deletedBlog = await Blog.findByIdAndDelete({_id: id})

        if (!deletedBlog) {
            return res.status(404).json({
                message: 'blog not found',
                success: false
            })
        }

        res.status(200).json({
            success: true,
            message: 'blog deleted successfully.'
        })
    }
    catch (e) {
        return res.status(500).json({
            message: `error: ${e.message}`,
            success: false
        })
    }
}
