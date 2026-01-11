import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="contact" className="footer">
      <div className="container footer-container">
        <div className="footer-brand">
          <img src={`${import.meta.env.BASE_URL}assets/logo.svg`} alt="CECIMIB" className="footer-logo" />
          <p>{t('footer.brand_text')}</p>
        </div>

        <div className="footer-links">
          <h4>{t('footer.links')}</h4>
          <ul>
            <li><a href="#services">{t('navbar.services')}</a></li>
            <li><a href="#about">{t('navbar.about')}</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>{t('footer.contact')}</h4>
          <p>{t('footer.contact_text')}</p>
          <a href="mailto:info@cecimib.com" className="contact-link">info@cecimib.com</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} CECIMIB SAS. {t('footer.rights')}</p>
        </div>
      </div>

      <style>{`
        .footer {
          background-color: #111827;
          color: white;
          padding: 4rem 0 0 0;
        }

        .footer-container {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 4rem;
          padding-bottom: 4rem;
        }

        .footer-brand p {
          color: #9ca3af;
          margin-top: 1rem;
          max-width: 300px;
        }
        
        .footer-logo {
          height: 40px;
          filter: brightness(0) invert(1); /* Make logo white */
        }

        .footer h4 {
          font-size: 1.25rem;
          margin-bottom: 1.5rem;
          color: white;
        }

        .footer ul {
          list-style: none;
        }

        .footer ul li {
          margin-bottom: 0.75rem;
        }

        .footer ul li a {
          color: #9ca3af;
        }

        .footer ul li a:hover {
          color: white;
        }

        .footer-contact p {
          color: #9ca3af;
          margin-bottom: 1rem;
        }

        .contact-link {
          color: var(--color-primary-light);
          font-weight: 500;
        }

        .footer-bottom {
          background-color: #0f172a;
          padding: 1.5rem 0;
          text-align: center;
          color: #6b7280;
          font-size: 0.875rem;
        }

        @media (max-width: 768px) {
          .footer-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
