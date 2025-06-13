import { createBrowserRouter } from "react-router";
import App from "../pages/App.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { AboutPage } from "../pages/AboutPage.jsx";
import { ServicesPage } from "../pages/ServicesPage.jsx";
import { ProjectPage } from "../pages/ProjectPage.jsx";
import { ContactUsPage } from "../pages/ContactUsPage.jsx";
import { BlogsPage } from "../pages/BlogsPage.jsx";
import { BlogsDetailsPage } from "../pages/BlogDetailsPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      { index: true, Component: App },
      { path: "about", Component: AboutPage },
      { path: "services", Component: ServicesPage },
      { path: "projects", Component: ProjectPage },
      { path: "contact", Component: ContactUsPage },
      { path: "blogs", Component: BlogsPage },
      { path: 'blogdetails', Component: BlogsDetailsPage},
      
    ]
  }
]);

export default router;
