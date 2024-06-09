import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { GiPalmTree } from 'react-icons/gi';
import { BiHappy } from 'react-icons/bi';
import { FaUmbrellaBeach } from 'react-icons/fa';
import "../styles/Slide.scss"
import Weather from '../components/weather';

const Slide = () => {
  const { t } = useTranslation();

  // State pour gérer les valeurs du formulaire
  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [search, setSearch] = useState("");

  // Fonction de gestion de la soumission du formulaire
  const handleSearch = () => {
    // Effectuez vos actions de recherche ici
    console.log("Location:", location);
    console.log("Start Date:", startDate);
    console.log("End Date:", endDate);
  };

  return (
    <div className="slide">
      <h1>{t('discover_world')}</h1>
      <h2>{t('book_now')}</h2>
      {/* Formulaire */}
      <div className='form'>
        {/* <h1>{t('book_accommodations')}</h1> */}
        <p>{t('find_accommodation')}</p>
        <div className="inputContainer">
          <span>{t('where')}</span>
          <input type="text" placeholder={t('where_to')} onChange={(e) => setLocation(e.target.value)} />
        </div>
        <div className="inputContainer">
          <div>
            <span>{t('check_in')}</span>
            <input type="date" onChange={(e) => setStartDate(e.target.value)} />
            <span>{t('check_out')}</span>
            <input type="date" onChange={(e) => setEndDate(e.target.value)} />
          </div>
        </div>
        <div className="inputContainer">
          <span>{t('guest')}</span>
          <select>
            <option>{t('1_guest')}</option>
            <option>{t('2_guests')}</option>
            <option>{t('3_guests')}</option>
            <option>{t('4_guests')}</option>
            {/* Ajoutez autant d'options que nécessaire */}
          </select>
        </div>
        <button onClick={handleSearch} value={search}>{t('search')}</button>
      </div>
    </div>
  );
};

export default Slide;
