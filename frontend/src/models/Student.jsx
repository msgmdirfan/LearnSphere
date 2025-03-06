const mongoose = require('mongoose')

const EmployeeSchema = new mongoose.schema({

    name:string,
    emal:string,
    password:string
})

const EmployeeModel = mongoose.model("emplyees",EmployeeSchema )
module.exports = EmployeeModel