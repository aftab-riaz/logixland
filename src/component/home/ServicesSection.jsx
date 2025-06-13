import React, { useEffect, useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import useApiRequest from "../../hooks/useApiRequest";


const SkeletonCard = () => {
    return (
        <div className="col-lg-6 d-flex">
            <div className="service-card w-100">
                <div style={{ display: "flex", alignItems: "start", gap: "1rem" }}>
                    <span className="service-number placeholder-glow">
                        <span className="placeholder col-3" style={{ height: "20px", display: "block" }}></span>
                    </span>
                    <div className="placeholder-glow w-100">
                        <div className="placeholder col-8 mb-2" style={{ height: "20px" }}></div>
                        <div className="placeholder col-10 mb-2" style={{ height: "16px" }}></div>
                        <div className="placeholder col-6" style={{ height: "16px" }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function ServicesSection() {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchServices = async () => {
        setLoading(true);
        try {
            const res = await useApiRequest({
                url: 'services',
                method: 'get',
                data: { limit: 4 }
            });
            setServices(res.data);
        } catch (error) {
            console.log('Error', error?.data?.message);
            setError(error?.data?.message || 'Something went wrong.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, []);

    return (
        <section className="services-section">
            <div className="text-center mb-16">
                <p className="subtitle">Services</p>
                <h2>
                    Our <span className="highlight">Special Services</span> For your <br />
                    Business Development
                </h2>
            </div>

            <div className="container">
                {error ? (
                    <p className="text-red-500">{error}</p>
                ) : (
                    <div className="row gx-5 gy-4">
                        {loading
                            ? Array.from({ length: 4 }).map((_, index) => (
                                <SkeletonCard key={index} />
                              ))
                            : services.map((service, index) => (
                                <div key={index} className="col-lg-6 d-flex">
                                    <div className="service-card w-100">
                                        <div style={{ display: "flex", alignItems: "start", gap: "1rem" }}>
                                            <span className="service-number">{`0${index + 1}.`}</span>
                                            <div>
                                                <h3 className="service-name">{service.name}</h3>
                                                <p className="service-description">{service.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                              ))}
                    </div>
                )}
            </div>

            <div className="text-center mt-10">
                <button className="services-button">
                    <Link className="services-button text-decoration-none" to="/services">
                        Get More Services <MdOutlineKeyboardArrowRight size={20} />
                    </Link>
                </button>
            </div>
        </section>
    );
}
