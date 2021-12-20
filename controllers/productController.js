const productService = require('../services/productService')

const getCategory = async(req,res) => {
	try {

    const read = await productService.getCategory()
    return res.status(201).json(read)
			}
		catch (err) { // 2
      console.log(err)
      return res.status(500).json({ message: err.message }) // 6
    }
  }

  const getCoffeeList = async(req,res) => {
    try {
  
      const read = await productService.getCoffeeList()
      return res.status(201).json(read)
        }
      catch (err) { // 2
        console.log(err)
        return res.status(500).json({ message: err.message }) // 6
      }
    }
  

    const getCoffeeDetail = async(req,res) => {
      try {
    
        const read = await productService.getCoffeeDetail()
        return res.status(201).json(read)
          }
        catch (err) { // 2
          console.log(err)
          return res.status(500).json({ message: err.message }) // 6
        }
      }
    

module.exports = {getCategory, getCoffeeList, getCoffeeDetail}