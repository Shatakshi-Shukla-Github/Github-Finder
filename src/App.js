import { BrowserRouter as Router,Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
 function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title={"Github Finder"}/>

         <main className="container mx-auto px-3 pb-12">Component</main>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;


// import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/layout/Navbar";

// function App() {
//   return (
//    <h1 className="text-red-500 text-5xl">TAILWIND TEST</h1>
//   );
// }

// export default App;



// <Router>
//       <div className="flex flex-col justify-between h-screen">
//         <Navbar />

//         <main className="container mx-auto px-3 pb-12 flex-grow">
//           Component
//         </main>
//       </div>
//     </Router>