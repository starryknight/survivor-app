const mongoose = require('mongoose')
const Survivor = require('../models/Survivor')
const Medical = require('../models/Medical')
const Equipment = require('../models/Equipment')

// Connect to Database
mongoose.connect('mongodb://localhost/survivor-app')
  .then(() => {
    console.log('connected to mongoDB')
  })
  .catch((err) => {
    console.log('ERROR', err)
  })

// Remove old Survivor Data
Survivor.remove()
  .then(() => {

      // Medical data
    const medical1 = new Medical({
        type: "vicodin 325mg",
        quantity: 2,
        frequency: "once daily"
    })

    const medical2 = new Medical({
        type: "celexa 20mg",
        quantity: 30,
        frequency: "twice daily"
    })

    // Equipment data
    const equipment1 = new Equipment({
        type: "cast",
        size: 5,
        quantity: 1,
        picture:"https://www.istockphoto.com/photo/broken-leg-in-cast-with-drawing-path-gm514882663-48394838"
    })
    const equipment2 = new Equipment({
        type: "blackboard",
        size: 3,
        quantity: 1,
        picture:"https://www.istockphoto.com/photo/dog-with-a-broken-leg-gm477712115-36077032"
    })

    // create new test Homework data
    const homework1 = new Homework({
        firstName: "Zili",
        lastName: "Zala",
        description: "found after turning over a rock near the river",
        dateOfBirth: {
        type: Date,
        default: new Date()
        },
        location:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d37776.054673827144!2d-84.4382320747451!3d33.747881068390456!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1528386163863",
        photo:"https://www.shutterstock.com/image-illustration/zombie-loonies-3d-illustration-705408514",
        diagnosis: "Diabetic",
        sex: Male,
        ssn:1011,
        medicals: [ medical1 ],
        equipments: [equipment2]
    })
    const homework2 = new Homework({
        firstName: "Zili",
        lastName: "Zala",
        description: "found after turning over a rock near the river",
        dateOfBirth: {
        type: Date,
        default: new Date()
      },
      location:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d37776.054673827144!2d-84.4382320747451!3d33.747881068390456!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1528386163863",
      photo:"https://www.shutterstock.com/image-illustration/zombie-loonies-3d-illustration-705408514",
      diagnosis: "Diabetic",
      sex: "Male",
      ssn:7899,
      medicals: [ medical2 ],
      equipments: [equipment2]
    })
    const homework3 = new Homework({
        firstName: "xavier",
        lastName: "Johnson",
        description: "found in an abandoned building",
        dateOfBirth: {
          type: Date,
          default: new Date()
        },
        location:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d37776.054673827144!2d-84.4382320747451!3d33.747881068390456!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1528386163863",
        photo:"https://www.shutterstock.com/image-illustration/zombie-loonies-3d-illustration-705408514",
        diagnosis: "High blood pressure",
        sex: Male,
        ssn:2009,
        medicals: [ medical1 ],
        equipments: [equipment1]
    })
    const homework4 = new Homework({
        firstName: "Smikun",
        lastName: "Shikimita",
        description: "found in the forest lying face down",
        dateOfBirth: {
          type: Date,
          default: new Date()
        },
        location:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d37776.054673827144!2d-84.4382320747451!3d33.747881068390456!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1528386163863",
        photo:"https://www.shutterstock.com/image-illustration/zombie-loonies-3d-illustration-705408514",
        diagnosis: "broken leg",
        sex: Male,
        ssn:1765,
        medicals: [ medical2 ],
        equipments: [equipmentSchema]
    })

    const survivors = [ survivor1, survivor2, survivor3, survivor4 ]

    // save test data
    return Survivor.insertMany(survivors)
  })
  .then(() => {

    // close the database
    mongoose.connection.close()
  })