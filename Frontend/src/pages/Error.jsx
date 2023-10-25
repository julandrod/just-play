import notFound from "../assets/error-404.jpg";
import { Hero } from "../components";

const Error = () => {
  return (
    <div>
      <Hero
        title="Oops! Page Not Found"
        description="Sorry, the page you're looking for seems to have vanished into the digital ether. Please check the URL or navigate back to our homepage. If you need assistance, feel free to contact our support team. We're here to help you find your way."
      />
      <div className="flex items-center justify-center">
        <img src={notFound} alt="" />
      </div>
    </div>
  );
};

export default Error;
