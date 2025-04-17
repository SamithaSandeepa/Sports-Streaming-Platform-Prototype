import Link from "next/link";
import { FaFacebook, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-gray-800 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex space-x-4">
              <Link
                href="https://facebook.com"
                className="text-gray-400 hover:text-primary"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="https://twitter.com"
                className="text-gray-400 hover:text-primary"
              >
                <FaTwitter size={20} />
              </Link>
              <Link
                href="mailto:info@sports-stream.com"
                className="text-gray-400 hover:text-primary"
              >
                <FaEnvelope size={20} />
              </Link>
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
            <Link href="/contact" className="text-gray-400 hover:text-white">
              CONTACT INFO
            </Link>
            <Link href="/privacy" className="text-gray-400 hover:text-white">
              PRIVACY POLICY
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
