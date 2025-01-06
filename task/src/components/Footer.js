import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Twitter, Facebook, Linkedin, Youtube } from 'lucide-react';

function Footer() {
  const socialIcons = [
    { component: Twitter, label: 'Twitter', colorClass: 'text-blue-500' },
    { component: Facebook, label: 'Facebook', colorClass: 'text-blue-700' },
    { component: Linkedin, label: 'Linkedin', colorClass: 'text-blue-600' },
    { component: Youtube, label: 'Youtube', colorClass: 'text-red-600' }
  ];

  return (
    <footer className="bg-[#001a14] text-white py-16 px-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[1, 2, 3, 4].map((section) => (
            <div key={section}>
              <h3 className="text-[#98ff82] font-medium mb-4">Menu title</h3>
              <ul className="space-y-2">
                {[1, 2].map((item) => (
                  <li key={item}>
                    <Link href="#" className="text-gray-300 hover:text-white transition-colors">
                      Link
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          {/* Language Selector */}
          <div className="mb-4 md:mb-0">
            <button className="flex items-center space-x-2 bg-transparent border border-[#98ff82] rounded px-3 py-1.5 text-sm">
              <span>English</span>
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Copyright and Links */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 text-sm text-gray-400">
            <span>© 2022 MealAround, inc.</span>
            <div className="flex items-center space-x-4">
              <Link href="#" className="hover:text-white transition-colors">
                Privacy
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-white transition-colors">
                Terms
              </Link>
              <span>•</span>
              <Link href="#" className="hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-4  md:mt-0">
            {socialIcons.map(({ component: Icon, label, colorClass }) => (
              <Link
                key={label}
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={`Visit our ${label} page`}
              >
                <Icon className={`w-5 h-5 ${colorClass}`} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
