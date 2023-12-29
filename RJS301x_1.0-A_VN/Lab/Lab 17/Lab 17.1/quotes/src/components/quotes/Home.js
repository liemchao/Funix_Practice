import { useEffect } from "react";
import { useNavigate } from "react-router-dom/dist";

function Home() {
    const navigate = useNavigate();
    useEffect(() => {
        navigate('/quotes')
    }, [navigate]);
    return (
        <h1>Home</h1>
    );
}

export default Home;