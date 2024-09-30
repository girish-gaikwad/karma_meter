const express = require('express')
const app = express()
 const dotenv = require('dotenv')
const { sequelize } = require('./src/config/db')
const db = require('./models/index')
const karma = require('./src/routes/karma_meter')
const getdata = require('./src/routes/getdata')
const surveydata = require('./src/routes/surveydata')
const cors = require('cors')
app.use(cors())
dotenv.config()

app.use(express.json())



app.use("/api/v1/karma_meter",karma)

app.use("/api/v1/getdata", getdata)

app.use("/api/v1/surveyData", surveydata)



app.get('/', (req, res) => {
    res.send('Hello World!')
})
const SwaggerUi=require('swagger-ui-express')
const SwaggerDocs=require('./swagger')

app.use('/api-docs',SwaggerUi.serve,SwaggerUi.setup(SwaggerDocs))

app.listen(process.env.PORT,()=>{
    try {
        sequelize.authenticate();
        
        // db.appliancesOwned.create({
        //     userID: 1,
        //     applianceID: 1
        // })

        // db.fueltypeMaster.sync({force:true});
        // db.fueltypeMaster.create({
        //     fuelcategory:'petrol',
        //     carbonFootprint: 10
        // })

// db.foodtypeMaster.create({
//     foodcategory:'veg',
//     carbonFootprint: 10
// })

        // db.appliancesMaster.create({
        //     name:'kettle',
        //     carbonFootprint: 10
        // })

    //    db.vehicalMaster.create({
    //        vehicalCategory:'car',
    //        carbonFootprint: 10
    //    })
    //    db.users.create({
    //        username: 'admin',
    //        email: 'admin',
    //        password: 'admin'
    //    })
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);        
    }
    console.log(`Server is running on port ${process.env.PORT}`)
})