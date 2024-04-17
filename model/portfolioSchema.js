const mongoose = require('mongoose');
const bdPhoneRegex = /^(?:\+?88)?01[3-9]\d{8}$/;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


const portfolioSchema = new mongoose.Schema({
  profile: {
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      match: [emailRegex, 'Invalid email address'] 
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      match: [bdPhoneRegex, 'Invalid phone number for Bangladesh']
    },
    socialMedia: {
      type: Map,
      of: String
    },
    resume: {
      type: String,
      trim: true
    }
  },
  skills: [{
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    }
  }],
  projects: [{
    live_url: {
      type: String,
      trim: true
    },
    github_url: {
      type: String,
      trim: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    overview: {
      type: String,
      trim: true
    },
    feature: {
      type: String,
      trim: true
    },
    frontEnd: {
      type: String,
      trim: true
    },
    backend: {
      type: String,
      trim: true
    }
  }]
}, { timestamps: true });

const Portfolio = mongoose.model('Portfolio', portfolioSchema);

module.exports = Portfolio;
