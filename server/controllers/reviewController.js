const {Service}=require("../models/serviceSchema")

async function addReview(req,res) {
    console.log(req.body);
    let email=req.body.email;
    let reviewData=req.body.data;
    try {
      const service = await Service.findOne({ email });
      if (!service) {
        console.error('Service not found');
        return res.status(404).json({ error: 'Service not found' });
      }
      if (!Array.isArray(service.reviews)) {
        service.reviews = [];
      }
      service.reviews.push(reviewData);
      await service.save();
    } catch (error) {
      console.error('Error updating document:', error);
    }
  }


  const reviewController = async (req, res) => {
    try {
      await addReview(req,res);
      res.json({ success: "dekh lo review add ho gya" });
    } catch (error) {
      console.error("Error in reviewController:", error);
      res.status(500).json({ error: "Internal server error" });
    }
  };

module.exports=reviewController;