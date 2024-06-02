const mongoose = require('mongoose')

const courseSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, "Please enter a course name"]
        },
        description: {
            type: String,
            required: false
        },
        status: {
            type: String,
            enum: ["Published", "Pending"],
            required: true,
            default: "Pending"
        },
        is_premium: {
            type: Boolean,
            required: false,
        }
    },
    {
        timestamps: true
    }
)


const Course = mongoose.model('Course', courseSchema);

module.exports = Course;