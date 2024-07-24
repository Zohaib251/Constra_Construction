import "./App.css";

import HomeOne from "./component/pages/homeOne/HomeOne.jsx";
import HomeTwo from "./component/pages/homeTwo/HomeTwo.jsx";
import About from "./component/pages/company/about/about.jsx";
import OurTeam from "./component/pages/company/ourTeam/ourTeam.jsx";
import Testimonials from "./component/pages/company/testimonials/testimonials.jsx";
import FAQ from "./component/pages/company/faq/faq.jsx";
import Pricing from "./component/pages/company/pricing/pricing.jsx";
import ProjectAll from "./component/pages/project/projectAll.jsx";
import ProjectSingle from "./component/pages/project/projectSingle.jsx";
import ServiceALL from "./component/pages/service/serviceAll.jsx";
import ServiceSingle from "./component/pages/service/serviceSingle.jsx";
import Typography from "./component/pages/features/typography.jsx";
import Error from "./component/pages/features/error.jsx";
import NewsLeftSidebar from "./component/pages/news/newsLeftSidebar.jsx";
import NewsRightSidebar from "./component/pages/news/newsRightSidebar.jsx";
import NewsSingle from "./component/pages/news/newsSingle.jsx";
import Contact from "./component/pages/contact/contact.jsx";
import "./images/icomoon/style.css";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeOne />,
    },
    {
      path:"/homeTwo",
      element: <HomeTwo />,
    },
    {
      path:"/about",
      element: <About />,
    },
    {
      path:"/ourTeam",
      element: <OurTeam />,
    },
    {
      path:"/testimonials",
      element: <Testimonials />,
    },
    {
      path:"/faq",
      element: <FAQ />,
    },
    {
      path:"/pricing",
      element: <Pricing />,
    },
    {
      path:"/projectAll",
      element: <ProjectAll />,
    },
    {
      path:"/projectSingle",
      element: <ProjectSingle />,
    },
    {
      path:"/serviceALL",
      element: <ServiceALL />,
    },
    {
      path:"/serviceSingle",
      element: <ServiceSingle />,
    },
    {
      path:"/typography",
      element: <Typography/>,
    },
    {
      path:"/404",
      element: <Error />,
    },
    {
      path:"/newsLeftSidebar",
      element: <NewsLeftSidebar />,
    },
    {
      path:"/newsRightSidebar",
      element: <NewsRightSidebar />,
    },
    {
      path:"/newsSingle",
      element: <NewsSingle />,
    },
    {
      path:"/contact",
      element: <Contact />,
    },
  ]);

  return (
    <div className="App ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
