import "./App.css";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Context from "./components/Context";
import Content from "./components/contentRouter/Content";
import ContentItem from "./components/contentRouter/ContentItem";
import ContentProduct from "./components/contentRouter/ContentProduct";
import ContentIndex from "./components/contentRouter/ContentIndex";
import NotFound from "./components/NotFound";
import Product from "./components/Product";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import CoursePage from "./components/Course/CoursePage";
import CourseDetail from "./components/Course/CourseDetail";
import CourseDetailByIdType from "./components/Course/CourseDetailByIdType";

function App() {
  const activeStyleMenu = ({ isActive }) => ({
    color: isActive ? "#ebc9c9" : "#994545",
    backgroundColor: isActive ? "#994545" : "#ebc9c9",
  });
  return (
    <>
      {/* Dùng Link */}
      {/* <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/context'>Context</Link>
          </li>
          <li>
            <Link to='/content'>Content</Link>
            <ul>
              <li>
                <Link to='/content/content-item'>Content Items</Link>
              </li>
              <li>
                <Link to='/content/content-product'>Content Product</Link>
              </li>
            </ul>
          </li>
        </ul>
      </div> */}

      {/* Dùng navlink */}
      {/* Link và navlink tương tự nhau. Navlink giúp tạo hiệu ứng cho thẻ */}
      <div>
        <ul>
          <li>
            <NavLink to='/' style={activeStyleMenu}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to='/about' style={activeStyleMenu}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to='/context' style={activeStyleMenu}>
              Context
            </NavLink>
          </li>
          <li>
            <NavLink to='/content' style={activeStyleMenu}>
              Content
            </NavLink>
            <ul>
              <li>
                <NavLink to='/content/content-item' style={activeStyleMenu}>
                  Content Items
                </NavLink>
              </li>
              <li>
                <NavLink to='/content/content-product' style={activeStyleMenu}>
                  Content Product
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
        {/* <Product /> */}
      </div>

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/context' element={<Context />}></Route>
        <Route path='/content' element={<Content />}>
          {/* Index Router */}
          <Route index element={<ContentIndex />}></Route>
          {/* Nested Router */}
          <Route path='content-item' element={<ContentItem />}></Route>
          <Route path='content-product' element={<ContentProduct />}></Route>
        </Route>

        {/* Navigate */}
        <Route path='/product' element={<Product />}></Route>
        <Route path='/checkout' element={<Checkout />}></Route>
        <Route path='/login' element={<Login />}></Route>

        {/* Dymanic Router */}
        <Route path='/course' element={<CoursePage />}></Route>
        <Route path='/course/:id' element={<CourseDetail />}></Route>
        <Route
          path='/course/:type/:id'
          element={<CourseDetailByIdType />}
        ></Route>

        {/* Component not found */}
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
