import React from 'react';
import { IonIcon, IonBadge } from '@ionic/react';
import { 
  flaskOutline, 
  waterOutline, 
  peopleOutline,
  alertCircleOutline,
  cartOutline
} from 'ionicons/icons';
import './intrants.css';

const Intrants: React.FC = () => {
  return (
    <div className="intrants-tab-container">
      
      {/* 1. COMPTEURS RAPIDES */}
      <div className="intrants-stats-grid">
        <div className="intrant-stat-card status-critical">
          <IonIcon icon={alertCircleOutline} />
          <div className="stat-info">
            <span className="stat-num">2</span>
            <span className="stat-text">Alerte stocks</span>
          </div>
        </div>
        <div className="intrant-stat-card status-normal">
          <IonIcon icon={peopleOutline} />
          <div className="stat-info">
            <span className="stat-num">14</span>
            <span className="stat-text">Journaliers</span>
          </div>
        </div>
      </div>

      {/* 2. SECTION STOCKS CRITIQUES */}
      <div className="intrants-section-header-row">
        <span className="intrants-section-header">ÉTAT DES STOCKS INTRANTS</span>
        <span className="intrants-see-all">Inventaire &gt;</span>
      </div>

      <div className="intrants-list">
        {/* Engrais NPK */}
        <div className="intrant-item-card">
          <div className="intrant-item-left">
            <div className="intrant-icon-bg color-orange">📦</div>
            <div className="intrant-details">
              <h4>Engrais NPK 15-15-15</h4>
              <p>Seuil critique : 500 kg</p>
            </div>
          </div>
          <div className="intrant-item-right text-right">
            <span className="intrant-qty danger-text">350 kg</span>
            <span className="intrant-status-label danger-bg">Stock critique</span>
          </div>
        </div>

        {/* Fongicide Mancozèbe */}
        <div className="intrant-item-card">
          <div className="intrant-item-left">
            <div className="intrant-icon-bg color-red">🧪</div>
            <div className="intrant-details">
              <h4>Fongicide Mancozèbe</h4>
              <p>Seuil critique : 10 kg</p>
            </div>
          </div>
          <div className="intrant-item-right text-right">
            <span className="intrant-qty danger-text">8 kg</span>
            <span className="intrant-status-label danger-bg">Stock critique</span>
          </div>
        </div>

        {/* Urée */}
        <div className="intrant-item-card">
          <div className="intrant-item-left">
            <div className="intrant-icon-bg color-green">📦</div>
            <div className="intrant-details">
              <h4>Urée 46%</h4>
              <p>Seuil critique : 200 kg</p>
            </div>
          </div>
          <div className="intrant-item-right text-right">
            <span className="intrant-qty success-text">1 200 kg</span>
            <span className="intrant-status-label success-bg">Correct</span>
          </div>
        </div>
      </div>

      {/* 3. RESSOURCES & FLUIDES */}
      <div className="intrants-section-header">RESSOURCES ET ÉNERGIE</div>
      
      <div className="fluids-grid">
        {/* Eau / Cuve */}
<div className="fluid-card">
  <div className="fluid-header">
    <IonIcon icon={waterOutline} className="icon-blue" />
    <span>Réserve d'eau</span>
  </div>
  <div className="fluid-body">
    <h3>45 m<sup>3</sup></h3>
    <p>Capacité max : 60 m<sup>3</sup></p>
    <div className="fluid-progress-bar">
      <div className="fluid-progress-fill fill-blue" style={{ width: '75%' }}></div>
    </div>
  </div>
</div>
        {/* Gasoil */}
        <div className="fluid-card">
          <div className="fluid-header">
            <span className="icon-emoji">⛽</span>
            <span>Gasoil (Générateur)</span>
          </div>
          <div className="fluid-body">
            <h3>120 L</h3>
            <p>Autonomie ~ 5 jours</p>
            <div className="fluid-progress-bar">
              <div className="fluid-progress-fill fill-yellow" style={{ width: '40%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. MAIN D'ŒUVRE */}
      <div className="intrants-section-header">MAIN D'ŒUVRE DU JOUR</div>
      <div className="labor-card">
        <div className="labor-row">
          <span className="labor-role">👷 Équipe Désherbage :</span>
          <span className="labor-count">8 journaliers</span>
        </div>
        <div className="labor-row">
          <span className="labor-role">🔌 Équipe Maintenance / Irrigation :</span>
          <span className="labor-count">4 journaliers</span>
        </div>
        <div className="labor-row">
          <span className="labor-role">📦 Équipe Conditionnement :</span>
          <span className="labor-count">2 journaliers</span>
        </div>
      </div>

      {/* 5. BOUTON PASSER COMMANDE */}
      <button className="intrants-main-btn">
        <IonIcon icon={cartOutline} /> Passer une commande d'intrants
      </button>

    </div>
  );
};

export default Intrants;