import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          discover_world: 'Let\'s discover the world!',
          book_now: 'Book now and enjoy 15% off !! before 01/10/2024',
          where: 'Where',
          where_to: 'Where to?',
          check_in: 'Check In',
          check_out: 'Checkout',
          guest: 'Guest',
          '1_guest': '1 guest',
          '2_guests': '2 guests',
          '3_guests': '3 guests',
          '4_guests': '4 guests',
          search: 'Search',
          find_accommodation: 'Find a cost-effective and perfectly suited accommodation for any type of stay on DreamTravel and pay securely.'
        }
      },
      fr: {
        translation: {
          discover_world: 'Découvrons le monde!',
          book_now: 'Réservez maintenant et profitez de 15% de réduction !! avant le 01/10/2024',
          where: 'Où',
          where_to: 'Où aller?',
          check_in: 'Arrivée',
          check_out: 'Départ',
          guest: 'Invité',
          '1_guest': '1 invité',
          '2_guests': '2 invités',
          '3_guests': '3 invités',
          '4_guests': '4 invités',
          search: 'Rechercher',
          find_accommodation: 'Trouvez un logement à moindre coût et parfaitement adapté à tout type de séjour sur DreamTravel et payez en toute sécurité.'
        }
      },
      ar: {
        translation: {
          discover_world: 'لنكتشف العالم!',
          book_now: 'احجز الآن واستمتع بخصم 15% !! قبل 01/10/2024',
          where: 'أين',
          where_to: 'إلى أين؟',
          check_in: 'تسجيل الوصول',
          check_out: 'المغادرة',
          guest: 'ضيف',
          '1_guest': 'ضيف واحد',
          '2_guests': 'ضيفين',
          '3_guests': 'ثلاثة ضيوف',
          '4_guests': 'أربعة ضيوف',
          search: 'بحث',
          find_accommodation: 'ابحث عن سكن اقتصادي ومناسب تمامًا لأي نوع من الإقامة على DreamTravel وادفع بأمان.'
        }
      }
    },
    debug: true,
    lng: 'en', // Langue par défaut
    fallbackLng: 'en', // Langue de secours si la traduction n'est pas disponible
    interpolation: {
      escapeValue: false // React already safes from xss
    }
  });

export default i18n;
