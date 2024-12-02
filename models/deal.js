import mongoose from "mongoose";

const dealSchema = mongoose.Schema ({
    name: { 
        type: String,
        required: true,
    },
    address: { 
        type: String,
        required: true,
    },
    assetType: {
        type: String,
        required: true,
    },
    loanAmount: { 
        type: String,
        required: true,
    },
    stories: { 
        type: Number,
        required: true,
    },
    squareFeet: { 
        type: String,
        required: true,
    },
    rateType: {
        type: String,
        enum: [
            'Fixed',
            'Floating Rate (SOFR)',
            'Floating Rate (LIBOR)',
            'Floating Rate (1-YR Treasury)',
            'Floating Rate (5-YR Treasury)',
            'Floating Rate (10-YR Treasury)',
            'Unknown',
        ],
    },
    minRate: { 
        type: Number,
        required: true,
    },
    maxRate: { 
        type: Number,
        required: true,
    },
    dealType: { 
        type: String,
        enum: [
            'Acquisition',
            'Condo Inventory',
            'Construction',
            'Covered-Land',
            'Office-to-Condo Conversion',
            'Office-to-Multifamily Conversion',
            'Refinance',
            'TCO'
          ],
        required: true,
    },
    recourse: { 
        type: String,
        enum: ['Non-Recourse', 'Full-Recourse'],
        required: true,
    },
    developer: { 
        type: String,
        required: true,
    },
    brokerCompany:  {
        type: String,
        required: true,
    },
    image: {
        type: String
    },
    owner: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: "User" ,
        required: true,
    },
  
})

const Deal = mongoose.model('Deal', dealSchema);

export default Deal