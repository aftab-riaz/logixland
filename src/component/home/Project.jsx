import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";



export default function Projects() {
    return (
        <div>
            <div className="container projects">
                <div className="row align-items-center">
                    <div className="align-items-center justify-content-center">
                         <p className="align-items-center justify-content-center Recent-projects-heading">Latest Works</p>
                    <h1 className="Recent-projects-content">Explore Our Recent <span style={{ color: ' #c9f31d' }}>Projects</span> </h1>
                    </div>
                     <div className="col-md-6">
                        <img
                            src="/src/assets/projects.webp"
                            alt="Placeholder Image"
                            className="img-fluid projects-img pt-5"
                        />
                    </div>
                    <div className="col-md-6">
                        <h6 style={{
                            color: '#c9f31d',
                            
                            
                        }}>Web Development</h6>
                        <h2 className="projects-heading pt-2">The Commercial <br/> COOP</h2>
                        <p className="projects-content">Commercial Co-op is an on-demand app to streamline the daily life of a Commercial Broker and connects the community in which Brokers grow. It has been launched in Denver, where brokers can communicate</p>

                    </div>
                   
                </div>
            </div>
             <div className="container projects">
                <div className="row align-items-center">
                   
                    
                    <div className="col-md-6">
                        <h6 style={{
                            color: '#c9f31d',
                            
                            
                        }}>E-commerce</h6>
                        <h2 className="projects-heading pt-2">iShopEco UI UX <br/> Design & Web<br/> Development</h2>
                        <p className="projects-content">iShopEco (Sustainable Living for Everyone) is a <br/> search and review platform of vetted businesses <br/> with products and services in over 300 categories <br/> that meet published environmental sustainability <br/> crite</p>
                        
                    </div>
                     <div className="col-md-6">
                        <img
                            src="/src/assets/i-shop.webp"
                            alt="Placeholder Image"
                            className="img-fluid projects-img pt-5"
                        />
                    </div>
                   
                </div>

            </div>
            <div className="text-center mb-5">
        <button className="services-button"><Link className="services-button text-decoration-none" to="/projects">View More Projects</Link> <MdOutlineKeyboardArrowRight  size={20}/></button>
    </div>

        </div>
    )
}