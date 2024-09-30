
const db = require("../../models/index");


form = async (req, res) => {

    const {userID, name, email, phonenumber,location,countOfPlants,beHalfOfName} = req.body;

    const user = await db.users.findOne({
        where: { id: userID },
        attributes: ["id", "email"],
      });

      if(!user) {
        return res.status(400).send({
          message: "User not found",
        });
      }
      

    if (!name || !email || !phonenumber || !location || !countOfPlants || !beHalfOfName) {
        return res.status(400).send({
          message: "Please fill all fields",
        });
    }


    const existingData = await db.surveyData.findOne({
        where: { userID: userID },
    });

    if (existingData) {
        return res.status(400).send({
            message: "Data already submitted",
        });
    }

    try {
        db.surveyData.create({
            userID: userID,
            name: name,
            email: email,
            phonenumber: phonenumber,
            location: location,
            countOfPlants: countOfPlants,
            beHalfOfName: beHalfOfName
        })

        res.status(200).send({
            message: "Data submitted successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(400).send({
            message: "Something went wrong",
        });
    }

}


module.exports = {
    form
}


// url = http://localhost:8081/api/v1/surveyData

// Example request body:

// {
//     "userID":1,
//         "name":"girish", 
//         "email": "girishgaikwad@2055.com",
//         "phonenumber":9842158991,
//         "location": "dindigul",
//         "countOfPlants":10,
//         "beHalfOfName":"omkar"
  
//   }