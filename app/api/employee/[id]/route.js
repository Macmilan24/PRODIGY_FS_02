import connectMongo from "@/lib/mongodb";
import Employees from "@/lib/models/Employees";

export async function PUT(req, { params }) {
  const { id } = params;

  try {
    const { name, email, position, department, dateofJoining } =
      await req.json();

    await connectMongo();

    const updatedEmployee = await Employees.findByIdAndUpdate(
      id,
      {
        name,
        email,
        position,
        department,
        dateofJoining,
      },
      { new: true }
    );

    if (!updatedEmployee) {
      return new Response(JSON.stringify({ error: "Employee not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify(updatedEmployee), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to update employee" }),
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    await connectMongo();

    const deletedEmployee = await Employee.findByIdAndDelete(id);

    if (!deletedEmployee) {
      return new Response(JSON.stringify({ error: "Employee not found" }), {
        status: 404,
      });
    }

    return new Response(JSON.stringify({ message: "Employee deleted" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to delete employee" }),
      {
        status: 500,
      }
    );
  }
}
