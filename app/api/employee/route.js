import connectMongo from "../../../lib/mongodb";
import Employees from "@/lib/models/Employees";

export async function GET(req) {
  try {
    await connectMongo();
    const employees = await Employees.find();
    return new Response(JSON.stringify(employees), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

    console.log(employees);
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch employees" }),
      {
        status: 500,
      }
    );
  }
}

export async function POST(req, res) {
  try {
    const { name, email, position, department, dateofJoinig } =
      await req.json();

    await connectMongo();
    const newEmployee = await Employees.create({
      name,
      email,
      position,
      department,
      dateofJoinig,
    });

    await newEmployee.save();

    return new Response(JSON.stringify(newEmployee), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to create employee" }),
      {
        status: 500,
      }
    );
  }
}
