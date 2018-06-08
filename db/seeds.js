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

    // create new test survivor data
    const survivor1 = new Survivor({
        firstName: "Zili",
        lastName: "Zala",
        description: "found after turning over a rock near the river",
        dateOfBirth:"03/25/2015",
        location:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d37776.054673827144!2d-84.4382320747451!3d33.747881068390456!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1528386163863",
        photo:"https://fingercomber.com/wp-content/uploads/2017/09/kko2-LS-300x300.jpg",
        diagnosis: "Diabetic",
        sex: "Male",
        ssn:1011,
        medicals: [ medical1 ],
        equipments: [equipment2]
    })

    const survivor2 = new Survivor({
        firstName: "Zili",
        lastName: "Zala",
        description: "found after turning over a rock near the river",
        dateOfBirth: "03/25/2015",
      location:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d37776.054673827144!2d-84.4382320747451!3d33.747881068390456!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1528386163863",
      photo:"https://24smi.org/public/media/celebrity/2018/01/30/okiomgmp9btl-vladimir-putin.jpg",
      diagnosis: "Diabetic",
      sex: "Male",
      ssn:7899,
      medicals: [ medical2 ],
      equipments: [equipment2]
    })
    const survivor3 = new Survivor({
        firstName: "xavier",
        lastName: "Johnson",
        description: "found in an abandoned building",
        dateOfBirth: "03/25/2015",
        location:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d37776.054673827144!2d-84.4382320747451!3d33.747881068390456!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1528386163863",
        photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Mugshot_of_Abu_Bakr_al-Baghdadi%2C_2004.jpg/220px-Mugshot_of_Abu_Bakr_al-Baghdadi%2C_2004.jpg",
        diagnosis: "High blood pressure",
        sex: "female",
        ssn:2009,
        medicals: [ medical1 ],
        equipments: [equipment1]
    })
    const survivor4 = new Survivor({
        firstName: "Smikun",
        lastName: "Shikimita",
        description: "found in the forest lying face down",
        dateOfBirth: "03/25/2015",
        location:"https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d37776.054673827144!2d-84.4382320747451!3d33.747881068390456!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1528386163863",
        photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kim_Jong-Un_Photorealistic-Sketch.jpg/220px-Kim_Jong-Un_Photorealistic-Sketch.jpg",
        diagnosis: "broken leg",
        sex: "Male",
        ssn:1765,
        medicals: [ medical2 ],
        equipments: [equipment2]
    })

    const survivors = [ survivor1, survivor2, survivor3, survivor4 ]

    // save test data
    return Survivor.insertMany(survivors)
  })
  .then(() => {

    // close the database
    mongoose.connection.close()
  })