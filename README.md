# 🛠️ Plans Management Application

This is a web-based application built with **React.js**, **Redux Toolkit**, and **Tailwind CSS** for managing subscription plans. It allows you to:

✅ View all available plans  
✅ Update existing plans via a dialog interface  
✅ Delete plans with a confirmation prompt  

---

## 🚀 Tech Stack
- **Frontend:** React.js, Redux Toolkit  
- **Styling:** Tailwind CSS  
- **API Calls:** Axios  
- **State Management:** Redux Toolkit with `createSlice` and `createAsyncThunk`  
- **Backend:** JSON server or custom API for CRUD operations  

---

## ⚙️ Installation and Setup

### Clone the repository:
```bash
git clone <repository-url>
cd plans-management
Install dependencies:
bash
Copy
Edit
npm install
Start the server:
If using a JSON server, start it separately:

bash
Copy
Edit
json-server --watch db.json --port 5000
Otherwise, ensure your backend API is running.

Start the React app:
bash
Copy
Edit
npm start
🔥 Features
✅ Display all plans in responsive cards with hover effects
✅ Update plans through a dialog with pre-filled details
✅ Delete plans with a confirmation prompt
✅ Tailwind CSS for modern styling
✅ Redux Toolkit for efficient state management
✅ Responsive design for different screen sizes
✅ Error handling for failed API requests

🛠️ Usage
🔎 Viewing Plans
The app displays all plans in a grid layout.
Each plan is shown in a responsive card with a hover effect.
The card displays the plan name and price.
✏️ Updating Plans
Click the Update button on a plan card.
Edit the name and price in the dialog box.
Click Update to save the changes.
The UI updates instantly with the new plan details.
🗑️ Deleting Plans
Click the Delete button on a plan card.
A confirmation prompt appears.
Confirm the deletion.
The plan is removed from the list.
📦 Dependencies
react: ^18.2.0
redux: ^5.0.0
@reduxjs/toolkit: ^1.9.0
axios: ^1.3.0
tailwindcss: ^3.2.0
json-server: ^0.17.0 (for mock backend)
📄 API Endpoints
Ensure your backend provides the following endpoints:

GET /api/plans → Fetch all plans
POST /api/plans → Add a new plan
PUT /api/plans/:id → Update a plan by ID
DELETE /api/plans/:id → Delete a plan by ID
