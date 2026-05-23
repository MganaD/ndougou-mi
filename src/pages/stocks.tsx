import React, { useState } from 'react';
import { IonIcon } from '@ionic/react';
import { carOutline, checkmarkCircleOutline, calendarOutline, timeOutline, closeOutline } from 'ionicons/icons';
import './stocks.css';

const Stocks: React.FC = () => {
  // État pour ouvrir/fermer le modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // États pour les sélections du formulaire
  const [selectedCulture, setSelectedCulture] = useState('Tomates cerises');
  const [selectedUnit, setSelectedUnit] = useState('kg');
  const [selectedRegion, setSelectedRegion] = useState('');

  return (
    <div className="stocks-clean-container">
      
      {/* SECTION 1 : CAPACITÉ ENTREPÔTS */}
      <div className="stocks-main-title">CAPACITÉ ENTREPÔTS</div>
      <div className="warehouse-list-row">
        <div className="warehouse-item">
          <div className="wh-text-line">
            <h4>Entrepôt Kayar <span className="wh-desc">Hangar ventilé</span></h4>
            <span className="wh-percent-val orange-text">67%</span>
          </div>
          <div className="wh-bar-bg"><div className="wh-bar-fill fill-orange" style={{ width: '67%' }}></div></div>
        </div>
        <div className="warehouse-item">
          <div className="wh-text-line">
            <h4>Chambre froide Thiès <span className="wh-desc">+4°C réfrigéré</span></h4>
            <span className="wh-percent-val green-text">64%</span>
          </div>
          <div className="wh-bar-bg"><div className="wh-bar-fill fill-green" style={{ width: '64%' }}></div></div>
        </div>
        <div className="warehouse-item">
          <div className="wh-text-line">
            <h4>Stockage local GIE <span className="wh-desc">Ambiante</span></h4>
            <span className="wh-percent-val red-text">95%</span>
          </div>
          <div className="wh-bar-bg"><div className="wh-bar-fill fill-red" style={{ width: '95%' }}></div></div>
        </div>
      </div>

      {/* SECTION 2 : STOCKS DISPONIBLES */}
      <div className="stocks-header-with-action">
        <span className="stocks-main-title">STOCKS DISPONIBLES</span>
        <span className="stocks-action-link">Voir tout &gt;</span>
      </div>
      <div className="products-stock-list">
        <div className="product-stock-item">
          <div className="prod-info"><h4>Tomates cerises</h4><p className="p-available">Disponible +500 kg/sem.</p></div>
          <div className="prod-qty"><span className="qty-bold">3200</span> <span className="qty-lbl">kg</span></div>
        </div>
        <div className="product-stock-item">
          <div className="prod-info"><h4>Oignons rouges secs</h4><p className="p-available">Disponible +1 200 kg/sem.</p></div>
          <div className="prod-qty"><span className="qty-bold">8400</span> <span className="qty-lbl">kg</span></div>
        </div>
        <div className="product-stock-item">
          <div className="prod-info"><h4>Carottes lavées</h4><p className="p-low">Stock bas -350 kg/sem.</p></div>
          <div className="prod-qty"><span className="qty-bold">950</span> <span className="qty-lbl">kg</span></div>
        </div>
      </div>

      {/* SECTION 3 : LIVRAISON IMMINENTE */}
      <div className="stocks-header-with-action">
        <span className="stocks-main-title">LIVRAISON IMMINENTE</span>
        <span className="stocks-action-link">Voir tout &gt;</span>
      </div>
      <div className="delivery-simple-block">
        <div className="delivery-row-top">
          <div className="delivery-identity">
            <div className="delivery-icon-wrapper"><IonIcon icon={carOutline} /></div>
            <div className="delivery-text-block">
              <h4>Hôtel Terrou-Bi · Dakar</h4>
              <p>Tomates cerises · 200 kg · Camion réfrigéré</p>
            </div>
          </div>
          <span className="delivery-status-tag">Confirmé</span>
        </div>
        <div className="delivery-row-bottom">
          <div className="meta-info"><IonIcon icon={calendarOutline} /> <span>24 Mai 2026</span></div>
          <div className="meta-info"><IonIcon icon={timeOutline} /> <span>Départ 06h30</span></div>
        </div>
      </div>

      <button className="dashed-plan-btn">+ Planifier une livraison</button>

      {/* SECTION 4 : LOTS CERTIFIÉS */}
      <div className="stocks-main-title">LOTS CERTIFIÉS</div>
      <div className="lots-simple-list">
        <div className="lot-simple-item">
          <IonIcon icon={checkmarkCircleOutline} className="lot-check-icon" />
          <div className="lot-txt"><h4>Tomates F1 · Bloc A</h4><p>LOT-2026-0142 · GlobalG.A.P</p></div>
          <span className="lot-next-arrow">&gt;</span>
        </div>
      </div>

      {/* LE BOUTON ORANGE QUI OUVRE LE FORMULAIRE */}
      <button className="orange-submit-btn" onClick={() => setIsModalOpen(true)}>
        + Publier une future récolte
      </button>

      {/* ================= MODAL LE FORMULAIRE DE TA PHOTO ================= */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            
            {/* Header */}
            <div className="modal-header">
              <div>
                <h3>Nouvelle récolte</h3>
                <p>Publiez votre offre pour les acheteurs</p>
              </div>
              <button className="close-modal-btn" onClick={() => setIsModalOpen(false)}>
                <IonIcon icon={closeOutline} />
              </button>
            </div>

            {/* Formulaire défilant */}
            <div className="modal-body">
              
              {/* CULTURE */}
              <label className="form-label">CULTURE *</label>
              <div className="chips-grid">
                {['Tomates cerises', 'Oignons rouges', 'Carottes Nantaise', 'Choux pommé', 'Poivrons', 'Aubergines', 'Gombo'].map((item) => (
                  <button 
                    key={item} 
                    className={`chip-btn ${selectedCulture === item ? 'active' : ''}`}
                    onClick={() => setSelectedCulture(item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {/* QUANTITÉ */}
              <label className="form-label">QUANTITÉ *</label>
              <div className="input-group-unit">
                <input type="text" placeholder="ex. 500" className="form-input" />
                <div className="unit-selector">
                  <button className={selectedUnit === 'kg' ? 'active-unit' : ''} onClick={() => setSelectedUnit('kg')}>kg</button>
                  <button className={selectedUnit === 't' ? 'active-unit' : ''} onClick={() => setSelectedUnit('t')}>t</button>
                  <button className={selectedUnit === 'cartons' ? 'active-unit' : ''} onClick={() => setSelectedUnit('cartons')}>cartons</button>
                </div>
              </div>

              {/* PRIX INDICATIF */}
              <label className="form-label">PRIX INDICATIF (FCFA/KG) *</label>
              <div className="input-relative">
                <input type="text" placeholder="ex. 1500" className="form-input" />
                <span className="input-right-label">FCFA/kg</span>
              </div>

              {/* DATE DE DISPONIBILITÉ */}
              <label className="form-label">DATE DE DISPONIBILITÉ *</label>
              <input type="text" defaultValue="21/05/2026" className="form-input" />

              {/* RÉGION DE PRODUCTION */}
              <label className="form-label">RÉGION DE PRODUCTION *</label>
              <div className="chips-grid">
                {['Niayes Nord', 'Niayes Centre', 'Niayes Sud', 'Vallée du fleuve', 'Casamance', 'Sine-Saloum'].map((region) => (
                  <button 
                    key={region} 
                    className={`chip-btn ${selectedRegion === region ? 'active' : ''}`}
                    onClick={() => setSelectedRegion(region)}
                  >
                    {region}
                  </button>
                ))}
              </div>

              {/* NOTES COMPLÉMENTAIRES */}
              <label className="form-label">NOTES COMPLÉMENTAIRES</label>
              <textarea placeholder="Calibre, certification, conditions de livraison..." className="form-textarea" rows={3} />

            </div>

            {/* Footer fixe avec bouton de validation gris */}
            <div className="modal-footer">
              <button className="form-submit-disabled-btn" disabled>
                Remplissez les champs requis
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default Stocks;