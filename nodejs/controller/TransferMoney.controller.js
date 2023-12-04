import Transfer from "../model/TransferMoney.model.js";

export const TransferMoney = async (req, res) => {
  try {
    const create = await Transfer.create(req.body);
    return res.send({status: true,  message: "money transfer  successfull",  data: create, });
  } catch (error) {
    console.error("Error creating a ne:", error);
    return res.status(500).json({
      status: false, message: "Something went wrong",  data: error });
  }
};

export const transferdataget = async (req, res) => {
    try {
      const get = await Transfer.findAll();
  
      if (!get || get.length === 0) {
        throw new Error("data not found");
      }
  
      return res.status(200).json({ msg: 'money transfer get successfully', data: get });
    } catch (err) {
      console.error('Error in Fetching :', err.message);
      return res.status(400).json({ msg: 'Error in Fetching ', err: err.message });
    }
  };


