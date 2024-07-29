import Footer from '@/components/Footer';
import GoogleMap from '@/components/GoogleMap';
import Navbar from '@/components/Navbar';
import Contact from './page';

const layout = () => {
  return (
    <div>
      <Navbar />
      <Contact />
      <GoogleMap />
      <Footer />
    </div>
  );
};

export default layout;
