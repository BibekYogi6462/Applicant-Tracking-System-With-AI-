// import {Link} from "react-router";
// const navbar = () => {
//   return (
//     <nav className="navbar">
//         <Link to="/">
//         <p className="text-2xl font-bold text-gradient">योग्यता </p>
//         </Link>
//         <Link to="/upload" className="primary-bottom w-fit">
//         Upload Resume
//         </Link>

//     </nav>
//   )
// }

// export default navbar


import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-[#363955dc] rounded-full py-4 px-8 w-full max-w-6xl mx-auto shadow-lg mt-4">
      <Link to="/">
        <p className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 via-pink-500 to-indigo-400 py-2">
          योग्यता
        </p>
      </Link> 

      <Link
        to="/upload"
        className="bg-gradient-to-r from-sky-500 to-indigo-500 hover:from-sky-600 hover:to-indigo-600 text-white font-medium px-6 py-2 rounded-full transition duration-300"
      >
        Upload 
      </Link>
    </nav>
  );
};

export default Navbar;
