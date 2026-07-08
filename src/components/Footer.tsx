import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-surface-container-low mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center md:text-left">
        {/* Brand */}
        <div>
          <h3 className="font-headline-md text-headline-md text-primary mb-6">Anabul</h3>
          <p className="text-on-surface-variant font-body-md mb-6 max-w-xs mx-auto md:mx-0">
            Elevating the lives of feline family members through premium curation and conscious care.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">face_nod</span>
            </a>
            <a
              className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">photo_camera</span>
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-8">
          <div>
            <h4 className="text-secondary font-bold mb-4 uppercase text-[12px] tracking-widest">Shop</h4>
            <ul className="space-y-3">
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-md" to="/shop">Nutrition</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-md" to="/shop">Toys</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-md" to="/shop">Grooming</Link></li>
              <li><Link className="text-on-surface-variant hover:text-primary transition-colors text-body-md" to="/shop">New Arrivals</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-secondary font-bold mb-4 uppercase text-[12px] tracking-widest">Support</h4>
            <ul className="space-y-3">
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Customer Service</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Shipping Info</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">Returns</a></li>
              <li><a className="text-on-surface-variant hover:text-primary transition-colors text-body-md" href="#">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-secondary font-bold mb-4 uppercase text-[12px] tracking-widest">The Newsletter</h4>
          <p className="text-on-surface-variant text-body-md mb-6">
            Join our community for exclusive early access and expert cat care tips.
          </p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              className="bg-white border-none rounded-full px-6 py-3 text-body-md focus:ring-2 focus:ring-primary-container outline-none transition-all"
              placeholder="Email Address"
              type="email"
            />
            <button
              type="submit"
              className="bg-primary text-on-primary py-3 rounded-full font-label-md hover:bg-primary-container transition-all active:scale-95"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-20 border-t border-outline/10 pt-8 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-on-surface-variant text-label-md">© 2024 Anabul. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="text-on-surface-variant text-[12px] hover:text-primary" href="#">Privacy Policy</a>
          <a className="text-on-surface-variant text-[12px] hover:text-primary" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
