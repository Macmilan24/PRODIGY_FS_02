import mongoose from "mongoose";

const EmployeeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  position: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  dateofJoinig: {
    type: Date,
    required: true,
  },
});

export default mongoose.models.Employee ||
  mongoose.model("Employee", EmployeeSchema);
