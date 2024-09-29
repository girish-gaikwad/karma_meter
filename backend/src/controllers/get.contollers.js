const db = require("../../models/index");


const getvehical = async (req, res) => {
    try {
        const vehical = await db.vehicalMaster.findAll();
        res.status(200).json(vehical)
         
        
    } catch (error) {
        res.status(500).json({ message: error.message,success:false });
    }
}

const getfueltype = async (req, res) => {
    try {
        const fueltype = await db.fueltypeMaster.findAll();
        res.status(200).json(fueltype)
    } catch (error) {
        res.status(500).json({ message: error.message ,success:false });
    }
}

const getfoodtype = async (req, res) => {
    try {
        const foodtype = await db.foodtypeMaster.findAll();
        res.status(200).json(foodtype)
    } catch (error) {
        res.status(500).json({ message: error.message,success:false  });
    }
}

const getappliances = async (req, res) => {
    try {
        const appliances = await db.appliancesMaster.findAll();
        res.status(200).json(appliances)
    } catch (error) {
        res.status(500).json({ message: error.message ,success:false });
    }
}

module.exports = { getvehical,getfueltype,getfoodtype,getappliances }

