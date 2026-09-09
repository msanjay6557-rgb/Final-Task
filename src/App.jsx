// import Selfintroduction from "./selfintroduction";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <Selfintroduction />
//     </div>
//   );
// }

// export default App;
// import UserCard from "./UserCard";
// import "./App.css";

// function App() {
//   const users = [
//     {
//       name: "Sanjay M",
//       age: 21,
//       city: "Kallakurichi",
//       mobile: "6384686072",
//       email: "sanjay@gmail.com",
//       occupation: "Frontend Developer",
//       address: "south street, Kallakurichi",
//     },
//     {
//       name: "Rahul",
//       age: 24,
//       city: "Chennai",
//       mobile: "9876501234",
//       email: "rahul@gmail.com",
//       occupation: "Software Developer",
//       address: "Anna Nagar, Chennai",
//     },
//     {
//       name: "Mithra",
//       age: 23,
//       city: "bangalore",
//       mobile: "9876512345",
//       email: "mithra@gmail.com",
//       occupation: "UI/UX Designer",
//       address: "Mahadevpura, Bangalore",
//     },
//     {
//       name: "Arun Kumar",
//       age: 25,
//       city: "Chennai",
//       mobile: "9876523456",
//       email: "arun@gmail.com",
//       occupation: "Backend Developer",
//       address: "Tambaram, Chennai",
//     },
//     {
//       name: "Sneha",
//       age: 21,
//       city: "coimbatore",
//       mobile: "9876534567",
//       email: "sneha@gmail.com",
//       occupation: "Web Designer",
//       address: "R.S Puram, Coimbatore",
//     },
//   ];

//   return (
//     <div className="app">
//       <header className="page-header">
//         <h1>User Information</h1>
//       </header>

//       <div className="user-container">
//         {users.map((user, index) => (
//           <UserCard key={index} user={user} />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;

// import "./App.css";

// function App() {

//   // Array of objects
//   const employees = [
//     {
//       id: 1,
//       name: "Sanjay M",
//       role: "Frontend Developer",
//       company: "Stackly",
//       experience: "1 Year",
//       branch: "Kallakurichi"
//     },
//     {
//       id: 2,
//       name: "Habi",
//       role: "Web Developer",
//       company: "HCL",
//       experience: "2 Years",
//       branch: "Chennai"
//     },
//     {
//       id: 3,
//       name: "Shalini",
//       role: "UI Designer",
//       company: "Infosis",
//       experience: "3 Years",
//       branch: "Bangalore"
//     },
//     {
//       id: 4,
//       name: "Mahi",
//       role: "Software Developer",
//       company: "Wipro",
//       experience: "2 Years",
//       branch: "Coimbatore"
//     },
//     {
//       id: 5,
//       name: "Santhosh",
//       role: "Backend Developer",
//       company: "Accenture",
//       experience: "3 Years",
//       branch: "Chennai"
//     }
//   ];

//   return (
//     <div className="page">

//       {/* Heading */}
//       <div className="heading">
//         <h1>Our Team</h1>
//         <p>Employee Information</p>
//       </div>

//       {/* Employee Cards */}
//       <div className="card-container">

//         {employees.map((employee) => (

//           <div className="employee-card" key={employee.id}>

//             {/* Green Header */}
//             <div className="card-header">

//               <div className="initial">
//                 {employee.name.charAt(0)}
//               </div>

//               <h2>{employee.name}</h2>

//               <p>{employee.role}</p>

//             </div>

//             {/* Card Body */}
//             <div className="card-body">

//               <div className="detail">
//                 <span>Company</span>
//                 <strong>{employee.company}</strong>
//               </div>

//               <div className="detail">
//                 <span>Experience</span>
//                 <strong>{employee.experience}</strong>
//               </div>

//               <div className="detail">
//                 <span>Branch</span>
//                 <strong>{employee.branch}</strong>
//               </div>

//             </div>

//           </div>

//         ))}

//       </div>

//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   // Counter state
//   const [count, setCount] = useState(0);

//   // Theme state
//   const [darkMode, setDarkMode] = useState(false);

//   // Sign in state
//   const [isSignedIn, setIsSignedIn] = useState(false);

//   // Counter functions
//   const increment = () => {
//     setCount(count + 1);
//   };

//   const decrement = () => {
//     setCount(count - 1);
//   };

//   const reset = () => {
//     setCount(0);
//   };

//   // Theme function
//   const toggleTheme = () => {
//     setDarkMode(!darkMode);
//   };

//   // Sign in function
//   const signIn = () => {
//     setIsSignedIn(true);
//   };

//   // Sign out function
//   const signOut = () => {
//     setIsSignedIn(false);
//   };

//   return (
//     <div className={darkMode ? "app dark" : "app"}>

//       {/* Header */}
//       <header className="header">
//         <h1>React useState Demo</h1>

//         <button className="theme-btn" onClick={toggleTheme}>
//           {darkMode ? "☀️ Light Theme" : "🌙 Dark Theme"}
//         </button>
//       </header>

//       {/* Main Content */}
//       <main className="container">

//         {/* Counter Card */}
//         <section className="card">
//           <h2>🔢 Counter</h2>

//           <div className="count">
//             {count}
//           </div>

//           <div className="button-group">
//             <button onClick={increment} className="increment">
//               + Increment
//             </button>

//             <button onClick={decrement} className="decrement">
//               - Decrement
//             </button>

//             <button onClick={reset} className="reset">
//               Reset
//             </button>
//           </div>
//         </section>

//         {/* Theme Card */}
//         <section className="card">
//           <h2>🎨 Theme Toggle</h2>

//           <p>
//             Current Theme:
//             <strong> {darkMode ? " Dark Mode" : " Light Mode"}</strong>
//           </p>

//           <button onClick={toggleTheme} className="theme-card-btn">
//             {darkMode ? "☀️ Switch to Light" : "🌙 Switch to Dark"}
//           </button>
//         </section>

//         {/* Sign In / Sign Out Card */}
//         <section className="card auth-card">

//           {isSignedIn ? (
//             // Home page after sign in
//             <div>
//               <div className="success-icon">👋</div>

//               <h2>Welcome Home!</h2>

//               <p>You are successfully signed in.</p>

//               <button onClick={signOut} className="signout-btn">
//                 Sign Out
//               </button>
//             </div>
//           ) : (
//             // Sign in page
//             <div>
//               <div className="login-icon">🔐</div>

//               <h2>Sign In</h2>

//               <p>Please sign in to continue.</p>

//               <button onClick={signIn} className="signin-btn">
//                 Sign In
//               </button>
//             </div>
//           )}

//         </section>

//       </main>

//       {/* Footer */}
//       <footer>
//         <p>React useState Hook Assignment</p>
//       </footer>

//     </div>
//   );
// }

// export default App;

// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     dob: "",
//     gender: "",
//     password: "",
//     confirmPassword: "",
//     address: "",
//     city: "",
//     pincode: "",
//   });

//   const [errors, setErrors] = useState({});
//   const [success, setSuccess] = useState(false);

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;

//     setFormData({
//       ...formData,
//       [name]: value,
//     });

//     setErrors({
//       ...errors,
//       [name]: "",
//     });

//     setSuccess(false);
//   };

//   // Validation
//   const validateForm = () => {
//     let newErrors = {};

//     // First Name
//     if (formData.firstName.trim() === "") {
//       newErrors.firstName = "First name is required";
//     } else if (formData.firstName.length < 3) {
//       newErrors.firstName = "Minimum 3 characters required";
//     }

//     // Last Name
//     if (formData.lastName.trim() === "") {
//       newErrors.lastName = "Last name is required";
//     }

//     // Email
//     if (formData.email.trim() === "") {
//       newErrors.email = "Email is required";
//     } else if (
//       !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
//         formData.email
//       )
//     ) {
//       newErrors.email = "Enter a valid email";
//     }

//     // Mobile
//     if (formData.mobile.trim() === "") {
//       newErrors.mobile = "Mobile number is required";
//     } else if (!/^[0-9]{10}$/.test(formData.mobile)) {
//       newErrors.mobile = "Enter exactly 10 digits";
//     }

//     // Date of Birth
//     if (formData.dob === "") {
//       newErrors.dob = "Date of birth is required";
//     } else {
//       const birthDate = new Date(formData.dob);
//       const today = new Date();

//       let age = today.getFullYear() - birthDate.getFullYear();

//       const month = today.getMonth() - birthDate.getMonth();

//       if (
//         month < 0 ||
//         (month === 0 &&
//           today.getDate() < birthDate.getDate())
//       ) {
//         age--;
//       }

//       if (age < 18) {
//         newErrors.dob = "You must be at least 18 years old";
//       }
//     }

//     // Gender
//     if (formData.gender === "") {
//       newErrors.gender = "Please select gender";
//     }

//     // Password
//     if (formData.password === "") {
//       newErrors.password = "Password is required";
//     } else if (formData.password.length < 8) {
//       newErrors.password =
//         "Password must contain at least 8 characters";
//     } else if (!/[A-Z]/.test(formData.password)) {
//       newErrors.password =
//         "Password must contain one uppercase letter";
//     } else if (!/[0-9]/.test(formData.password)) {
//       newErrors.password =
//         "Password must contain one number";
//     }

//     // Confirm Password
//     if (formData.confirmPassword === "") {
//       newErrors.confirmPassword =
//         "Confirm password is required";
//     } else if (
//       formData.password !== formData.confirmPassword
//     ) {
//       newErrors.confirmPassword =
//         "Passwords do not match";
//     }

//     // Address
//     if (formData.address.trim() === "") {
//       newErrors.address = "Address is required";
//     } else if (formData.address.length < 5) {
//       newErrors.address =
//         "Address must contain at least 5 characters";
//     }

//     // City
//     if (formData.city.trim() === "") {
//       newErrors.city = "City is required";
//     }

//     // Pincode
//     if (formData.pincode.trim() === "") {
//       newErrors.pincode = "Pincode is required";
//     } else if (!/^[0-9]{6}$/.test(formData.pincode)) {
//       newErrors.pincode =
//         "Pincode must contain exactly 6 digits";
//     }

//     setErrors(newErrors);

//     return Object.keys(newErrors).length === 0;
//   };

//   // Submit
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       setSuccess(true);
//     } else {
//       setSuccess(false);
//     }
//   };

//   // Reset
//   const handleReset = () => {
//     setFormData({
//       firstName: "",
//       lastName: "",
//       email: "",
//       mobile: "",
//       dob: "",
//       gender: "",
//       password: "",
//       confirmPassword: "",
//       address: "",
//       city: "",
//       pincode: "",
//     });

//     setErrors({});
//     setSuccess(false);
//   };

//   return (
//     <div className="page">

//       {/* Success Notification */}

//       {success && (
//         <div className="success-message">

//           <div className="success-icon">
//             ✓
//           </div>

//           <div className="success-text">
//             <strong>Registration Successful!</strong>
//             <span>
//               Your details have been submitted successfully.
//             </span>
//           </div>

//           <button
//             className="close-btn"
//             onClick={() => setSuccess(false)}
//           >
//             ×
//           </button>

//         </div>
//       )}

//       <div className="form-card">

//         {/* Top Icon */}

//         <div className="top-icon">
//           ✦
//         </div>

//         {/* Header */}

//         <div className="header">

//           <h1>Create Your Account</h1>

//           <p>
//             Complete the form below to create your account
//           </p>

//         </div>

//         <form onSubmit={handleSubmit}>

//           {/* ================= PERSONAL PROFILE ================= */}

//           <div className="section">

//             <div className="section-heading">

//               <div className="number">
//                 01
//               </div>

//               <div>
//                 <h2>Personal Profile</h2>

//                 <p>
//                   Tell us a little about yourself
//                 </p>
//               </div>

//             </div>

//             <div className="line"></div>

//             <div className="grid">

//               {/* First Name */}

//               <div className="input-group">

//                 <label>First Name</label>

//                 <input
//                   type="text"
//                   name="firstName"
//                   placeholder="Enter first name"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                 />

//                 {errors.firstName && (
//                   <small>
//                     {errors.firstName}
//                   </small>
//                 )}

//               </div>

//               {/* Last Name */}

//               <div className="input-group">

//                 <label>Last Name</label>

//                 <input
//                   type="text"
//                   name="lastName"
//                   placeholder="Enter last name"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                 />

//                 {errors.lastName && (
//                   <small>
//                     {errors.lastName}
//                   </small>
//                 )}

//               </div>

//               {/* Email */}

//               <div className="input-group">

//                 <label>Email Address</label>

//                 <input
//                   type="text"
//                   name="email"
//                   placeholder="example@gmail.com"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />

//                 {errors.email && (
//                   <small>
//                     {errors.email}
//                   </small>
//                 )}

//               </div>

//               {/* Mobile */}

//               <div className="input-group">

//                 <label>Mobile Number</label>

//                 <input
//                   type="text"
//                   name="mobile"
//                   placeholder="Enter mobile number"
//                   maxLength="10"
//                   value={formData.mobile}
//                   onChange={handleChange}
//                 />

//                 {errors.mobile && (
//                   <small>
//                     {errors.mobile}
//                   </small>
//                 )}

//               </div>

//               {/* Date */}

//               <div className="input-group">

//                 <label>Date of Birth</label>

//                 <input
//                   type="date"
//                   name="dob"
//                   value={formData.dob}
//                   onChange={handleChange}
//                 />

//                 {errors.dob && (
//                   <small>
//                     {errors.dob}
//                   </small>
//                 )}

//               </div>

//               {/* Gender */}

//               <div className="input-group">

//                 <label>Gender</label>

//                 <select
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                 >

//                   <option value="">
//                     Select Gender
//                   </option>

//                   <option value="Male">
//                     Male
//                   </option>

//                   <option value="Female">
//                     Female
//                   </option>

//                   <option value="Other">
//                     Other
//                   </option>

//                 </select>

//                 {errors.gender && (
//                   <small>
//                     {errors.gender}
//                   </small>
//                 )}

//               </div>

//             </div>

//           </div>

//           {/* ================= ACCOUNT SECURITY ================= */}

//           <div className="section">

//             <div className="section-heading">

//               <div className="number">
//                 02
//               </div>

//               <div>
//                 <h2>Account Security</h2>

//                 <p>
//                   Set up a secure password for your account
//                 </p>
//               </div>

//             </div>

//             <div className="line"></div>

//             <div className="grid">

//               {/* Password */}

//               <div className="input-group">

//                 <label>Password</label>

//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="Enter password"
//                   value={formData.password}
//                   onChange={handleChange}
//                 />

//                 {errors.password && (
//                   <small>
//                     {errors.password}
//                   </small>
//                 )}

//               </div>

//               {/* Confirm Password */}

//               <div className="input-group">

//                 <label>Confirm Password</label>

//                 <input
//                   type="password"
//                   name="confirmPassword"
//                   placeholder="Confirm password"
//                   value={formData.confirmPassword}
//                   onChange={handleChange}
//                 />

//                 {errors.confirmPassword && (
//                   <small>
//                     {errors.confirmPassword}
//                   </small>
//                 )}

//               </div>

//             </div>

//           </div>

//           {/* ================= CONTACT INFORMATION ================= */}

//           <div className="section">

//             <div className="section-heading">

//               <div className="number">
//                 03
//               </div>

//               <div>
//                 <h2>Contact Information</h2>

//                 <p>
//                   Provide your current residential details
//                 </p>
//               </div>

//             </div>

//             <div className="line"></div>

//             {/* Address */}

//             <div className="input-group full">

//               <label>Address</label>

//               <textarea
//                 name="address"
//                 placeholder="Enter your complete address"
//                 value={formData.address}
//                 onChange={handleChange}
//               ></textarea>

//               {errors.address && (
//                 <small>
//                   {errors.address}
//                 </small>
//               )}

//             </div>

//             <div className="grid contact-grid">

//               {/* City */}

//               <div className="input-group">

//                 <label>City</label>

//                 <input
//                   type="text"
//                   name="city"
//                   placeholder="Enter city"
//                   value={formData.city}
//                   onChange={handleChange}
//                 />

//                 {errors.city && (
//                   <small>
//                     {errors.city}
//                   </small>
//                 )}

//               </div>

//               {/* Pincode */}

//               <div className="input-group">

//                 <label>Pincode</label>

//                 <input
//                   type="text"
//                   name="pincode"
//                   placeholder="Enter pincode"
//                   maxLength="6"
//                   value={formData.pincode}
//                   onChange={handleChange}
//                 />

//                 {errors.pincode && (
//                   <small>
//                     {errors.pincode}
//                   </small>
//                 )}

//               </div>

//             </div>

//           </div>

//           {/* ================= BUTTONS ================= */}

//           <div className="bottom">

//             <button
//               type="button"
//               className="reset"
//               onClick={handleReset}
//             >
//               Reset
//             </button>

//             <button
//               type="submit"
//               className="submit"
//             >
//               Submit Registration
//               <span>→</span>
//             </button>

//           </div>

//         </form>

//       </div>

//     </div>
//   );
// }

// export default App;


// import { useEffect, useState } from "react";
// import "./App.css";

// function App() {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [search, setSearch] = useState("");

//   // Fetch API Data
//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Failed to fetch users");
//         }

//         return response.json();
//       })
//       .then((data) => {
//         setUsers(data);
//         setLoading(false);
//       })
//       .catch((error) => {
//         setError(error.message);
//         setLoading(false);
//       });
//   }, []);

//   // Search Filter
//   const filteredUsers = users.filter((user) =>
//     user.name.toLowerCase().includes(search.toLowerCase()) ||
//     user.username.toLowerCase().includes(search.toLowerCase()) ||
//     user.email.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="page">

//       {/* TOP HEADER */}
//       <header className="top-header">
//         <div className="brand">
//           <div className="logo">P</div>

//           <div>
//             <h2>PEOPLE</h2>
//             <p>DATA CENTER</p>
//           </div>
//         </div>

//         <div className="api-status">
//           <span></span>
//           API CONNECTED
//         </div>
//       </header>

//       {/* HERO SECTION */}
//       <section className="hero">

//         <div className="hero-content">
//           <p className="small-title">DIGITAL PEOPLE DIRECTORY</p>

//           <h1>
//             Meet the <span>People.</span>
//           </h1>

//           <p className="hero-text">
//             A simple and intelligent view of user information
//             fetched directly from a public API.
//           </p>
//         </div>

//         <div className="users-count">
//           <p>USERS FOUND</p>
//           <h2>{users.length}</h2>
//         </div>

//       </section>

//       {/* INFORMATION CARDS */}
//       <section className="info-section">

//         <div className="info-card">
//           <div className="number purple">01</div>
//           <div>
//             <p>DATABASE</p>
//             <h3>USERS</h3>
//           </div>
//         </div>

//         <div className="info-card">
//           <div className="number yellow">02</div>
//           <div>
//             <p>REQUEST</p>
//             <h3>GET</h3>
//           </div>
//         </div>

//         <div className="info-card">
//           <div className="number blue">03</div>
//           <div>
//             <p>RECORDS</p>
//             <h3>{users.length} PEOPLE</h3>
//           </div>
//         </div>

//         <div className="info-card">
//           <div className="number green">04</div>
//           <div>
//             <p>STATUS</p>

//             {loading ? (
//               <h3 className="loading-text">LOADING</h3>
//             ) : error ? (
//               <h3 className="error-text">ERROR</h3>
//             ) : (
//               <h3 className="online">ONLINE</h3>
//             )}
//           </div>
//         </div>

//       </section>

//       {/* MAIN TABLE CARD */}
//       <main className="main-card">

//         <div className="directory-header">

//           <div>
//             <p className="directory-title">USER DIRECTORY</p>
//             <h2>People Overview</h2>
//           </div>

//           <p className="record-count">
//             {users.length} records
//           </p>

//         </div>

//         {/* SEARCH */}
//         <div className="search-row">

//           <div className="search-box">
//             <span>⌕</span>

//             <input
//               type="text"
//               placeholder="Search name, username or email..."
//               value={search}
//               onChange={(e) => setSearch(e.target.value)}
//             />
//           </div>

//           <div className="json-status">
//             <span></span>
//             JSON API
//           </div>

//         </div>

//         {/* LOADING */}
//         {loading && (
//           <div className="message loading-message">
//             Loading...
//           </div>
//         )}

//         {/* ERROR */}
//         {error && (
//           <div className="message error-message">
//             Error: {error}
//           </div>
//         )}

//         {/* TABLE */}
//         {!loading && !error && (
//           <div className="table-wrapper">

//             <table>

//               <thead>
//                 <tr>
//                   <th>NO.</th>
//                   <th>PERSON</th>
//                   <th>USERNAME</th>
//                   <th>EMAIL</th>
//                   <th>PHONE</th>
//                   <th>WEBSITE</th>
//                   <th>STATUS</th>
//                 </tr>
//               </thead>

//               <tbody>

//                 {filteredUsers.map((user, index) => (

//                   <tr key={user.id}>

//                     {/* NUMBER */}
//                     <td>
//                       <span className="row-number">
//                         {String(index + 1).padStart(2, "0")}
//                       </span>
//                     </td>

//                     {/* PERSON */}
//                     <td>
//                       <div className="person">

//                         <div className="avatar">
//                           {user.name.charAt(0)}
//                         </div>

//                         <div>
//                           <strong>{user.name}</strong>

//                           <small>
//                             {user.company.name}
//                           </small>
//                         </div>

//                       </div>
//                     </td>

//                     {/* USERNAME */}
//                     <td>
//                       <span className="username">
//                         @{user.username}
//                       </span>
//                     </td>

//                     {/* EMAIL */}
//                     <td>
//                       {user.email}
//                     </td>

//                     {/* PHONE */}
//                     <td>
//                       {user.phone}
//                     </td>

//                     {/* WEBSITE */}
//                     <td>
//                       <span className="website">
//                         {user.website}
//                       </span>
//                     </td>

//                     {/* STATUS */}
//                     <td>
//                       <span className="active">
//                         <span></span>
//                         Active
//                       </span>
//                     </td>

//                   </tr>

//                 ))}

//               </tbody>

//             </table>

//           </div>
//         )}

//         {/* FOOTER */}
//         {!loading && !error && (
//           <div className="table-footer">

//             <p>
//               Showing <strong>{filteredUsers.length}</strong> of{" "}
//               <strong>{users.length}</strong> users
//             </p>

//             <div className="response">
//               <span>API RESPONSE</span>
//               <strong>200 OK</strong>
//             </div>

//           </div>
//         )}

//       </main>

//       {/* PAGE FOOTER */}
//       <footer>
//         People Data Center • React API Dashboard
//       </footer>

//     </div>
//   );
// }

// export default App;

// import React, { useRef, useState } from "react";
// import "./App.css";

// function App() {

//   const fileInputRef = useRef(null);

//   const [profileImage, setProfileImage] = useState(
//     "https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
//   );

//   const [likeCount, setLikeCount] = useState(0);

//   // Open file input using useRef
//   const handleUploadClick = () => {
//     fileInputRef.current.click();
//   };

//   // Display selected image
//   const handleImageChange = (event) => {
//     const file = event.target.files[0];

//     if (file) {
//       const imageUrl = URL.createObjectURL(file);
//       setProfileImage(imageUrl);
//     }
//   };

//   // Increase like count
//   const handleLike = () => {
//     setLikeCount(likeCount + 1);
//   };

//   return (
//     <div className="container">

//       <div className="profile-card">

//         <h1>My Profile</h1>

//         <div className="profile-image">
//           <img src={profileImage} alt="Profile" />
//         </div>

//         {/* Hidden File Input */}
//         <input
//           type="file"
//           ref={fileInputRef}
//           onChange={handleImageChange}
//           accept="image/*"
//           style={{ display: "none" }}
//         />

//         {/* Upload Button */}
//         <button
//           className="upload-btn"
//           onClick={handleUploadClick}
//         >
//           Upload Image
//         </button>

//         {/* Like Section */}
//         <div className="like-section">

//           <button
//             className="like-btn"
//             onClick={handleLike}
//           >
//             ❤️ Like
//           </button>

//           <p>Likes: {likeCount}</p>

//         </div>

//       </div>

//     </div>
//   );
// }

// export default App;

// import React from "react";
// import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Services from "./pages/Services";
// import WebDevelopment from "./pages/WebDevelopment";
// import AppDevelopment from "./pages/AppDevelopment";
// import UIUXDesign from "./pages/UIUXDesign";
// import Products from "./pages/Products";
// import Contact from "./pages/Contact";

// function App() {
//   return (
//     <>
//       <Navbar />

//       <Routes>
//         <Route path="/" element={<Home />} />

//         <Route path="/about" element={<About />} />

//         {/* Nested Routes */}
//         <Route path="/services" element={<Services />}>
//           <Route
//             path="web-development"
//             element={<WebDevelopment />}
//           />

//           <Route
//             path="app-development"
//             element={<AppDevelopment />}
//           />

//           <Route
//             path="ui-ux-design"
//             element={<UIUXDesign />}
//           />
//         </Route>

//         <Route path="/products" element={<Products />} />

//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </>
//   );
// }

// export default App;

import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Profile from './pages/Profile.jsx'
import NotFound from './pages/NotFound.jsx'
import CarsLayout from './pages/cars/CarsLayout.jsx'
import CarsList from './pages/cars/CarsList.jsx'
import CarDetail from './pages/cars/CarDetail.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />

          {/* Nested routing: /cars is the parent, with three child routes */}
          <Route path="/cars" element={<CarsLayout />}>
            <Route index element={<CarsList />} />
            <Route path="category/:categoryName" element={<CarsList />} />
            <Route path=":id" element={<CarDetail />} />
          </Route>

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}