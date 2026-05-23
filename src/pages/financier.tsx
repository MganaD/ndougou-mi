import React from 'react';
import { IonIcon } from '@ionic/react';
import { timeOutline, arrowUpOutline, calendarOutline } from 'ionicons/icons';
import './financier.css';

const Financier: React.FC = () => {
  return (
    <div className="financier-tab-container">
      
      {/* 1. BLOC VERT : CHIFFRE D'AFFAIRES */}
      <div className="ca-green-card">
        <span className="ca-header">CHIFFRE D'AFFAIRES — MAI 2026</span>
        <h2>3 100 000 <span className="currency-label">FCFA</span></h2>
        <div className="ca-trend">
          <IonIcon icon={arrowUpOutline} /> +12% vs avril
        </div>
        
        {/* Ligne graphique blanche simplifiée */}
        <div className="ca-mini-chart-line"></div>

        <div className="ca-footer-row">
          <div className="ca-footer-col">
            <span className="col-title">Charges</span>
            <span className="col-val">900 000 FCFA</span>
          </div>
          <div className="ca-footer-col text-right">
            <span className="col-title">Bénéfice net</span>
            <span className="col-val-green">2 200 000 FCFA</span>
          </div>
        </div>
      </div>

      {/* 2. SECTION PAIEMENT URGENT */}
      <div className="fin-section-title">PAIEMENT URGENT</div>
      <div className="urgent-payment-card">
        <div className="urgent-left">
          <div className="urgent-icon-bg">
            <IonIcon icon={timeOutline} />
          </div>
          <div className="urgent-details">
            <h4>Hôtel Terrou-Bi</h4>
            <p>Tomates cerises • Échéance 30 Mai</p>
          </div>
        </div>
        <div className="urgent-right">
          <span className="urgent-amount">480 000</span>
          <span className="urgent-currency">FCFA</span>
        </div>
      </div>

      {/* 3. SECTION CONTRATS ACTIFS */}
      <div className="fin-section-header-row">
        <span className="fin-section-title">CONTRATS ACTIFS</span>
        <span className="fin-see-all">Voir tout &gt;</span>
      </div>

      <div className="contracts-list">
        {/* Grossiste Farafina */}
        <div className="contract-item">
          <div className="contract-left">
            <h4>Grossiste Farafina</h4>
            <p>Oignons • 800 kg</p>
          </div>
          <div className="contract-right text-right">
            <span className="contract-amount">680 000 F</span>
            <span className="contract-status status-paye">Payé</span>
          </div>
        </div>

        {/* Supermarché Auchan */}
        <div className="contract-item">
          <div className="contract-left">
            <h4>Supermarché Auchan</h4>
            <p>Carottes • 350 kg</p>
          </div>
          <div className="contract-right text-right">
            <span className="contract-amount">315 000 F</span>
            <span className="contract-status status-signe">Signé</span>
          </div>
        </div>

        {/* Restaurant Le Lagon */}
        <div className="contract-item">
          <div className="contract-left">
            <h4>Restaurant Le Lagon</h4>
            <p>Légumes variés</p>
          </div>
          <div className="contract-right text-right">
            <span className="contract-amount">220 000 F</span>
            <span className="contract-status status-nego">Négo.</span>
          </div>
        </div>
      </div>

      {/* 4. SECTION CRÉDIT CNCAS */}
      <div className="fin-section-title">CRÉDIT CNCAS</div>
      <div className="cncas-card">
        <div className="cncas-header-row">
          <div className="cncas-title-block">
            <span className="cncas-lbl">Montant total</span>
            <h3>2 500 000 FCFA</h3>
          </div>
          <span className="cncas-badge">70% remboursé</span>
        </div>

        {/* Barre de progression verte */}
        <div className="cncas-progress-container">
          <div className="cncas-progress-fill" style={{ width: '70%' }}></div>
        </div>
        <div className="cncas-progress-labels">
          <span>1 750 000 remboursés</span>
          <span>750 000 restants</span>
        </div>

        {/* Prochaine échéance d'alerte orange */}
        <div className="cncas-alert-row">
          <IonIcon icon={calendarOutline} />
          <span>Prochaine échéance : <strong>15 Juin 2026 • 250 000 FCFA</strong></span>
        </div>
      </div>

      {/* 5. BOUTON ORANGE DU BAS */}
      <button className="publish-harvest-btn">
        + Publier une future récolte
      </button>

    </div>
  );
};

export default Financier;