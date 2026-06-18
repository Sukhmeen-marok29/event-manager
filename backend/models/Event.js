const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Event title is required'],
        trim: true,
        maxlength: [100, 'Title cannot exceed 100 characters']
    },
    description: {
        type: String,
        required: [true, 'Event description is required'],
        trim: true
    },
    date: {
        type: Date,
        required: [true, 'Event date is required']
    },
    location: {
        type: String,
        required: [true, 'Event location is required'],
        trim: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Event', EventSchema);