import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();

    const toggleLanguage = () => {
        const newLang = i18n.language === 'es' ? 'en' : 'es';
        i18n.changeLanguage(newLang);
    };

    return (
        <button
            onClick={toggleLanguage}
            className="language-switcher"
            aria-label="Switch Language"
        >
            <Globe size={20} />
            <span>{i18n.language === 'es' ? 'EN' : 'ES'}</span>

            <style jsx>{`
                .language-switcher {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: transparent;
                    border: 1px solid var(--color-text);
                    padding: 0.4rem 0.8rem;
                    border-radius: 2rem;
                    cursor: pointer;
                    font-weight: 500;
                    color: var(--color-text);
                    transition: all 0.3s ease;
                }

                .language-switcher:hover {
                    background: var(--color-primary);
                    border-color: var(--color-primary);
                    color: white;
                }
            `}</style>
        </button>
    );
};

export default LanguageSwitcher;
