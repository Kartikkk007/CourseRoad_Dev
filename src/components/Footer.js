import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      {/* Container */}
      <div className="container mx-auto px-4">
        {/* Social Media Links */}
        <div className="flex justify-center mb-4">
          <a
            className="mx-3 text-white hover:text-blue-600 transition-colors duration-300"
            href="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Facebook2_colored_svg-1024.png"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f text-xl"></i>
          </a>
          <a
            className="mx-3 text-white hover:text-blue-400 transition-colors duration-300"
            href="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Twitter_colored_svg-1024.png"
            aria-label="twitter"
          >
            <i className="fab fa-twitter text-xl"></i>
          </a>
          <a
            className="mx-3 text-white hover:text-red-500 transition-colors duration-300"
            href="https://cdn3.iconfinder.com/data/icons/logos-brands-3/24/logo_brand_brands_logos_google-128.png"
            aria-label="Google"
          >
            <i className="fab fa-google text-xl"></i>
          </a>
          <a
            className="mx-3 text-white hover:text-pink-600 transition-colors duration-300"
            href="https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-1024.png"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
          <a
            className="mx-3 text-white hover:text-blue-700 transition-colors duration-300"
            href="https://www.iconfinder.com/icons/5296501/linkedin_network_linkedin_logo_icon"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-xl"></i>
          </a>
          <a
            className="mx-3 text-white hover:text-gray-500 transition-colors duration-300"
            href="#!"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
        </div>

        {/* Footer Links */}
        <div className="text-center">
          <p className="text-gray-300">
            Explore more of my projects on{' '}
            <a
              href="https://github.com/your-github"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-6 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
