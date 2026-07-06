const Blog = require("../../models/blog.js");

module.exports = async (req, res) => {
  try {
    //fetch data from req.body
    const {
      title,
      description,
      shortDescription,
      slug,
      trending,
      category,
      keywords,
    } = req.body;

    //validate the data from request
    if (
      !title ||
      !description ||
      !shortDescription ||
      !slug ||
      !trending ||
      !category ||
      !keywords
    ) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    //check blog with given slug already exists or not
    const response = await Blog.findOne({ slug });
    if (response) {
      return res.status(400).json({
        success: false,
        message: "Slug already exists",
      });
    }

    //create blogs in db
    const blog = await Blog.create({
      title,
      slug,
      shortDescription,
      description,
      category,
      keywords,
      trending,
    });

    //return response
    return res.status(201).json({
      success: true,
      message: "Blog created successfully",
      data: blog,
    });
  } 
  catch (e) {
    console.log(encodeURI.message);
    return res.status(500).json({
      success: false,
      message: `error: ${e.message}`,
    });
  }
}
