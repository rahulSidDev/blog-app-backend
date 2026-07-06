const express = require('express')
const router = express.Router()

const create = require('../controllers/blogs/create')
const remove = require('../controllers/blogs/delete')
const update = require('../controllers/blogs/update')
const get = require('../controllers/blogs/get')
const getOne = require('../controllers/blogs/getOne')
const getByCategory = require('../controllers/blogs/getByCategory')
const getTrending = require('../controllers/blogs/getTrending')
const getBySearch = require('../controllers/blogs/getBySearch')
const getAllCategories = require('../controllers/blogs/getAllCategories')

router.post("/", create)
router.put("/:id", update)
router.delete("/:id", remove)

router.get("/", get)
router.get("/all-categories", getAllCategories)
router.get("/trending", getTrending)
router.get("/search", getBySearch)
router.get("/:slug", getOne)
router.get("/category/:category", getByCategory)

module.exports = router