const { get } = require("./src/routes/karma_meter");

const swaggerDocs = {
    openapi: "3.0.0",
    info: {
        title: "Karma API",
        version: "0.1.0",
        description: "This is the Karma API used to retrieve karma data of the user.",
        contact: {
            email: "mageshkannan022005@gmail.com"
        }
    },
    servers: [
        {
            url: "http://localhost:8081/", 
            description: "Base URL"
        }
    ],
    paths: {
        "/api/v1/getdata/vehicaltype": {
            get: {
                tags: ["Vehicle Types"],
                summary: "Retrieve vehicle catagory",
                description: "Retrieve vehicle types",
                responses: {
                    200: {
                        description: "OK",
                        content: {
                            "application/json": {
                                schema: {
                                     $ref: "#/components/schemas/vehicleData"
                                }
                            }
                        }
                    },
                    400: {
                        description: "Invalid request"
                    }
                },
                 
            }
        },
        "/api/v1/getdata/fueltype": {
            get: {
                tags: ["Fuel Types"],  
                summary: "Retrieve all fuel types",
                description: "Get a list of all fuel categories.",
                responses: {
                    200: {
                        description: "A list of fuel types",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/FuelType"  
                                    }
                                }
                            }
                        }
                    },
                    400: {
                        description: "Invalid request"
                    }
                }
            }
        },
        "/api/v1/getdata/foodtype": {
            get: {
                tags: ["Food Types"],  
                summary: "Retrieve all food types",
                description: "Get a list of all food categories ",
                responses: {
                    200: {
                        description: "A list of food types",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "array",
                                    items: {
                                        $ref: "#/components/schemas/FoodType" 
                                    }
                                }
                            }
                        }
                    },
                    400: {
                        description: "Invalid request"
                    }
                }
            }
        },
        
        "/api/v1/karma_meter/calculate": {
    post: {
        tags: ["Karma Data"],
        summary: "Post Users Karma Details",
        description: "Posting the users' karma data according to their daily usage of vehicles, food, appliances, and electricity.",
        requestBody: {
            
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/Transaction"  
                    }
                }
            }
        },
        responses: {
            200: {
                description: "Successful operation",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/Transaction"  
                        }
                    }
                }
            },
            400: {
                description: "An Error Occurred"
            }
        }
    }
},

       "/api/v1/surveyData/survey": {
    post: {
        tags: ["Survey Data"], 
        summary: "Create a new survey entry",
        description: "Submit a new survey entry with user data.",
        requestBody: {
            
            content: {
                "application/json": {
                    schema: {
                        $ref: "#/components/schemas/SurveyData"  
                    }
                }
            }
        },
        responses: {
            201: {
                description: "Survey data created successfully",
                content: {
                    "application/json": {
                        schema: {
                            $ref: "#/components/schemas/SurveyData" 
                        }
                    }
                }
            },
            400: {
                description: "Invalid input data"
            }
        }
    }
}


    },
    components: {
        schemas: {
            Transaction: {
                type: "object",
                properties: {
                    userID: {
                        type: "integer",
                        example: 1
                    },
                    foodID: {
                        type: "integer",
                        example: 2
                    },
                    fuelID: {
                        type: "integer",
                        example: 3
                    },
                    vehicalID: {
                        type: "integer",
                        example: 4
                    },
                    karmaScore: {
                        type: "integer",
                        example: 100
                    },
                    vehicalCount: {
                        type: "integer",
                        example: 1
                    },
                    electricityUnit: {
                        type: "integer",
                        example: 200
                    },
                    AvgKilometers: {
                        type: "integer",
                        example: 50
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                        example: "2023-01-01T00:00:00Z"
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time",
                        example: "2023-01-01T00:00:00Z"
                    }
                },
                
            },
            vehicleType:{
                type: "array",
            items: {
                type: "object",
                properties: {
                    id:  {
                        type:"interger",
                        example:12
                    },
                    vehicalCategory:{
                        type:"interger",
                        example:1
                    },
                    carbonFootprint:  {
                        type:"interger",
                        example:200
                    }
                }
            }
            },
            FuelType: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        example: 1
                    },
                    fuelcategory: {
                        type: "string",
                        example: "Petrol"
                    },
                    carbonFootprint: {
                        type: "integer",
                        example: 20
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                        example: "2023-01-01T00:00:00Z"
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time",
                        example: "2023-01-01T00:00:00Z"
                    }
                }
            },
            FoodType: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        example: 1
                    },
                    foodcategory: {
                        type: "string",
                        example: "Vegetarian"
                    },
                    carbonFootprint: {
                        type: "integer",
                        example: 10
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                        example: "2023-01-01T00:00:00Z"
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time",
                        example: "2023-01-01T00:00:00Z"
                    }
                }
            },
            SurveyData: {
                type: "object",
                properties: {
                    id: {
                        type: "integer",
                        example: 1
                    },
                    userID: {
                        type: "integer",
                        example: 1
                    },
                    email: {
                        type: "string",
                        example: "user@example.com"
                    },
                    location: {
                        type: "string",
                        example: "New York"
                    },
                    phonenumber: {
                        type: "string",
                        example: "123-456-7890"
                    },
                    countOfPlants: {
                        type: "integer",
                        example: 5
                    },
                    beHalfOfName: {
                        type: "string",
                        example: "John Doe"
                    },
                    createdAt: {
                        type: "string",
                        format: "date-time",
                        example: "2023-01-01T00:00:00Z"
                    },
                    updatedAt: {
                        type: "string",
                        format: "date-time",
                        example: "2023-01-01T00:00:00Z"
                    }
                }
            }
        }
    }
    
     
};

module.exports = swaggerDocs;
