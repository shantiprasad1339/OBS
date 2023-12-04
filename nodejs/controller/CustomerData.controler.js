import customer from "../model/CustomerData.model.js";

export const customerAdd = async (req, res) => {
  try {
    const add = await customer.create(req.body);
    return res.send({status: true,  message: "customer add successfull",  data: add, });
  } catch (error) {
    console.error("Error creating a new booking:", error);
    return res.status(500).json({
      status: false, message: "Something went wrong",  data: error });
  }
};

export const getcustomer = async (req, res) => {
    try {
      const get = await customer.findAll();
  
      if (!get || get.length === 0) {
        throw new Error("No Buses found");
      }
  
      return res.status(200).json({ msg: 'customer get successfully', data: get });
    } catch (err) {
      console.error('Error in Fetching customer:', err.message);
      return res.status(400).json({ msg: 'Error in Fetching customer', err: err.message });
    }
  };

  export const customerupdate = async (req, res) => {
    
      try {
        const customerId = req.body.id; 
          const existingcustomer = await customer.findByPk(customerId);
    
          if (existingcustomer) {
            const updated = await existingcustomer.update(req.body);
    
            return res.json({
              status: true,
              message: "customer updated successfully",
              data: updated,
            });
          } else {
            return res.status(404).json({
              status: false,
              message: "customer not found",
              data: null,
            });
          }
         
      } catch (error) {
        console.error("Error transferring money:", error);
        return res.status(500).json({
          status: false,
          message: "Something went wrong",
          data: error,
        });
      }
    };
    