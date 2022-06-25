const mongoose=require('mongoose')

const fastAccountabilitySchema=mongoose.Schema({

    username:{
        type:String,
        required:true,
    },
    hasFast:{
        default:false,
        type:Boolean,
        required:true,
    }

},{timestamps: true })
 
module.exports=mongoose.model('FastAccountability', fastAccountabilitySchema)