import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import './stocks.css';

const NouvelleRecolte: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCulture, setSelectedCulture] = useState('Tomates cerises');
  const [selectedUnit, setSelectedUnit] = useState('t');
  const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <>
      {/* BOUTON ORANGE FLOTTANT */}
      <button className="orange-submit-btn" onClick={() => setIsModalOpen(true)}>
        + Publier une future récolte
      </button>

      {/* FORMULAIRE MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            
            <div className="modal-header">
              <div>
                <h3>Nouvelle récolte</h3>
                <p>Publiez votre offre pour les acheteurs</p>
              </div>
              <button type="button" className="close-modal-btn" onClick={() => setIsModalOpen(false)}>
                <IonIcon icon={closeOutline} />
              </button>
            </div>

            <div className="modal-body">
              <label className="form-label">CULTURE *</label>
              <div className="chips-grid">
                {['Tomates cerises', 'Oignons rouges', 'Carottes Nantaise', 'Choux pommé', 'Poivrons'].map((item) => (
                  <button 
                    key={item} 
                    type="button"
                    className={`chip-btn ${selectedCulture === item ? 'active' : ''}`}
                    onClick={() => setSelectedCulture(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <label className="form-label">QUANTITÉ *</label>
              <div className="input-group-unit">
                <input type="text" placeholder="ex. 500" className="form-input" />
                <div className="unit-selector">
                  <button type="button" className={selectedUnit === 'kg' ? 'active-unit' : ''} onClick={() => setSelectedUnit('kg')}>kg</button>
                  <button type="button" className={selectedUnit === 't' ? 'active-unit' : ''} onClick={() => setSelectedUnit('t')}>t</button>
                  <button type="button" className={selectedUnit === 'cartons' ? 'active-unit' : ''} onClick={() => setSelectedUnit('cartons')}>cartons</button>
                </div>
              </div>

              <label className="form-label">PRIX INDICATIF (FCFA/KG) *</label>
              <div className="input-relative">
                <input type="text" placeholder="ex. 1500" className="form-input" />
                <span className="input-right-label">FCFA/kg</span>
              </div>

              <label className="form-label">DATE DE DISPONIBILITÉ *</label>
              <input type="text" defaultValue="21/05/2026" className="form-input" />

              <label className="form-label">RÉGION DE PRODUCTION *</label>
              <div className="chips-grid">
                {['Niayes Nord', 'Niayes Centre', 'Niayes Sud', 'Vallée du fleuve'].map((region) => (
                  <button 
                    key={region} 
                    type="button"
                    className={`chip-btn ${selectedRegion === region ? 'active' : ''}`}
                    onClick={() => setSelectedRegion(region)}
                  >
                    {region}
                  </button>
                ))}
              </div>

              <label className="form-label">NOTES COMPLÉMENTAIRES</label>
              <textarea placeholder="Calibre, certification..." className="form-textarea" rows={3} />
            </div>

            {/* PIED DE PAGE FIXE : Le bouton gris de ta photo */}
            <div className="modal-footer">
              <button type="button" className="form-submit-disabled-btn" disabled>
                Remplissez les champs requis
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default NouvelleRecolte;