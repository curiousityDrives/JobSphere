const mongoose = require('mongoose');

// Define the User schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true, match: [/.+\@.+\..+/, 'Please enter a valid email address'] },
    secondaryEmail: {type: String},
    phoneNumber: {type: String},
    password: { type: String, required: true },
    resume: { 
        name: String,
        address: String,
        email: String,
        skills: [String],
        education: [
            {
                name: String,
                dates: [String]
            }
        ],
        experience: [
            {
                title: String,
                dates: [String],
                date_start: String,
                date_end: String,
                location: String,
                organization: String
            }
        ]
    },
    phoneVerified: { type: Boolean, default: false },
    emailVerified: { type: Boolean, default: false },
    secondaryEmailVerified: { type: Boolean, default: false },
});

// Create the User model based on the schema
module.exports = mongoose.model('User', userSchema);
