// import React, { useRef, useState } from "react";
// import { useRecoilState } from "recoil";
// import { myAtom } from "../Atom/Atom";

// function LogIn() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   let [isLoged, setIsLoged] = useState("");

//   const Emailreference = useRef(null);
//   const PasswordReference = useRef(null);
//   let [users, setUsers] = useRecoilState(myAtom);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const user = users.find(
//       (u) =>
//         u.email === Emailreference.current.value &&
//         u.password === PasswordReference.current.value
//     );
//     if (user) {
//       setIsLoged(user);
//       console.log("User Find" + user);
//     } else {
//       setIsLoged(null);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email</label>
//           <input
//             ref={Emailreference}
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <label>Password</label>
//           <input
//             ref={PasswordReference}
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <button type="submit">LogIn</button>
//         </div>
//       </form>
//       {isLoged && (
//   <div>
//     <h2>Welcome, {isLoged.name}</h2>
//     <p>Email: {isLoged.email}</p>
//     <p>Phone: {isLoged.phone}</p>
//     {/* Render other user details here */}
//   </div>
// )}

//     </div>
//   );
// }

// export default LogIn;



























import React, { useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { myAtom } from "../Atom/Atom";

function LogIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoged, setIsLoged] = useState([]);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [users, setUsers] = useRecoilState(myAtom);

  const handleSubmit = (e) => {
    e.preventDefault();

    const filteredUsers = users.filter(
      (user) =>
        user.email === emailRef.current.value &&
        user.password === passwordRef.current.value
    );

    if (filteredUsers.length > 0) {
      setIsLoged(filteredUsers);
      console.log("User found: ", filteredUsers);
    } else {
      setIsLoged([]);
      console.log("User not found");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email</label>
          <input
            ref={emailRef}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            ref={passwordRef}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log In</button>
        </div>
      </form>
      {isLoged.length > 0 && (
        <div>
          <h2>Welcome, {isLoged[0].name}!</h2>
          <p>Email: {isLoged[0].email}</p>
          {/* Display other user details here */}
        </div>
      )}
      {isLoged.length === 0 && <p>User not found</p>}
    </div>
  );
}

export default LogIn;
