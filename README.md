# Employment Management System

### Prodigy Tech Internship Task 2

This project is a **full-stack Employment Management System**, designed as part of the Prodigy Tech Internship Task 2. It includes user authentication, employee management (CRUD operations), and various interactive features for managing employee records, such as editing, deleting, and adding new employees. The application is built with **Next.js (App Router)**, **NextAuth for authentication**, **MongoDB** for data storage, and styled with **Tailwind CSS** for a responsive user interface.

---

## Features

- **Authentication**: Sign in and sign up functionality using **NextAuth**.
- **Employee Management**:
  - Add new employees.
  - Edit existing employee details.
  - Delete employee records with confirmation.
  - View a list of all employees.
- **Modular Components**: Reusable components for adding, editing, and deleting employees.
- **Loading Indicators**: Circular loading spinners for UX feedback during form submissions and data fetching.
- **Responsive Design**: Built with Tailwind CSS for a responsive user experience across devices.

---

## Tech Stack

- **Frontend**: Next.js 13+ (App Router)
- **Authentication**: NextAuth.js
- **Backend**: Node.js, API routes using Next.js App Router
- **Database**: MongoDB (Mongoose)
- **Styling**: Tailwind CSS
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Other**: Loading states and spinner for user feedback

---

## Prerequisites

Before running the project, ensure you have the following installed:

- Node.js (v14+)
- MongoDB
- Git

---

## Getting Started

To get a local copy of the project up and running, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Macmilan24/PRODIGY_FS_02.git
cd PRODIGY_FS_02
```

### 2. Install Dependencies

Install all the required dependencies using `npm` or `yarn`:

```bash
npm install
# or
yarn install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root of your project and configure the following environment variables:

```bash
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
```

Make sure to replace `your_mongodb_connection_string` with your MongoDB connection string, and `your_nextauth_secret` with a secure string for NextAuth.

### 4. Run MongoDB

Ensure MongoDB is running on your machine or use MongoDB Atlas for a cloud-hosted database.

### 5. Start the Development Server

```bash
npm run dev
# or
yarn dev
```

The app should now be running on `http://localhost:3000`.

---

---

## API Endpoints

- **GET /api/employees**: Fetch all employees.
- **POST /api/employees**: Add a new employee.
- **PUT /api/employees/[id]**: Update an employee's details.
- **DELETE /api/employees/[id]**: Delete an employee.

---

## Usage

### Employee Management

1. **Sign Up**: Register for an account via the Sign-Up page.
2. **Sign In**: Log in with your credentials via the Sign-In page.
3. **Dashboard**: Once signed in, you’ll be taken to the dashboard where you can:
   - View a list of employees.
   - Add new employees.
   - Edit or delete existing employees.

### CRUD Operations

- **Add a new employee**: Use the "Add Employee" form to enter the details of a new employee.
- **Edit an employee**: Click on the "Edit" button next to an employee, and modify the details in the modal form.
- **Delete an employee**: Click on the "Delete" button, and confirm the deletion in the confirmation modal.

---

## Known Issues

- **Slow Data Fetching**: Initial data fetch might take time depending on the MongoDB connection speed.
- **Error Handling**: Ensure proper error handling for API responses in a production environment.

---

## Future Improvements

- **Role-based Access Control**: Limit certain actions (like deleting employees) to specific user roles (admin vs. regular users).
- **Search and Filter**: Add functionality to search employees by name or filter them by department.
- **Employee Details Page**: Implement individual employee pages with more detailed information.

---

## Contributors

- **Samuel Dagne** - [GitHub Profile](https://github.com/Macmilan24)
