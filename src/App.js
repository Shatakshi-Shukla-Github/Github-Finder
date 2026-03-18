import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./context/github/GithubContext";
 function App() {
  return (
    <GithubProvider>    
      <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar title={"Github Finder"}/>

         <main className="container mx-auto px-3 pb-12">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/notfound" element={<NotFound/>}/>
          <Route path="/*" element={<NotFound/>}/>
        </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
    </GithubProvider>
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