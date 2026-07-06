const Blog = require("../../models/blog.js");

module.exports = async (req, res) => {
    try {
        const { search = "" } = req.query
        const query = {}

        if (search) {
            query.$or = [
                {
                    title: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    description: {
                        $regex: search,
                        $options: "i",
                    },
                },
                {
                    keywords: {
                        $regex: search,
                        $options: "i"
                    }
                }
            ];
        }
        else {
            return res.status(400).json({
                success: false,
                message: 'search query is required.'
            })
        }

        const fetchedBlogs = await Blog.find(query).sort({ createdAt: -1 })

        return res.status(200).json({
            success: true,
            message: 'blogs fetched successfully.',
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
