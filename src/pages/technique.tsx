import React from 'react';
import { IonIcon, IonBadge } from '@ionic/react';
import './technique.css';
import { 
  waterOutline, 
  cloudOutline, 
  alertCircleOutline,
  addOutline
} from 'ionicons/icons';

const Technique: React.FC = () => {
  return (
    <div className="tech-tab-container">
      
      {/* 1. BLOC MÉTÉO AUJOURD'HUI */}
      <div className="tech-section-header">MÉTÉO AUJOURD'HUI — NIAYES</div>
      <div className="weather-card-blue">
        <div className="weather-main-info">
          <span className="weather-temp">28°C</span>
          <span className="weather-desc">🌤️ Partiellement nuageux</span>
        </div>
        <div className="weather-stats-row">
          <div className="weather-stat-item">
            <IonIcon icon={waterOutline} />
            <span className="stat-val">72%</span>
            <span className="stat-lbl">Humidité</span>
          </div>
          <div className="weather-stat-item">
            <IonIcon icon={cloudOutline} />
            <span className="stat-val">14 km/h</span>
            <span className="stat-lbl">Vent</span>
          </div>
          <div className="weather-stat-item">
            <span className="stat-icon-text">🌧️</span>
            <span className="stat-val">J+2</span>
            <span className="stat-lbl">Pluie</span>
          </div>
        </div>
      </div>

      {/* 2. ALERTE AGRONOMIQUE SABLE */}
      <div className="agri-alert-box">
        <IonIcon icon={alertCircleOutline} className="alert-box-icon" />
        <p>
          Risque de mildiou élevé (humidité &gt; 70%). Traitement fongicide recommandé sur tomates d'ici 48h.
        </p>
      </div>

      {/* 3. PARCELLES — ALERTES ACTIVES */}
      <div className="tech-section-header-row">
        <span className="tech-section-header">PARCELLES — ALERTES ACTIVES</span>
        <span className="tech-see-all">Voir tout &gt;</span>
      </div>

      <div className="parcelles-list">
        {/* Tomates cerises */}
        <div className="parcelle-card">
          <div className="parcelle-left">
            <div className="parcelle-icon-bg">🌱</div>
            <div className="parcelle-info">
              <h4>Tomates cerises</h4>
              <p>📍 Niayes Nord • 2,5 ha • Fructification</p>
            </div>
          </div>
          <div className="parcelle-right">
            <span className="parcelle-percent alert-text">72%</span>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar fill-orange" style={{ width: '72%' }}></div>
          </div>
        </div>

        {/* Oignons rouges */}
        <div className="parcelle-card">
          <div className="parcelle-left">
            <div className="parcelle-icon-bg">🌱</div>
            <div className="parcelle-info">
              <h4>Oignons rouges</h4>
              <p>📍 Niayes Centre • 1,8 ha • Bulbaison</p>
            </div>
          </div>
          <div className="parcelle-right">
            <span className="parcelle-percent green-text">88%</span>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar fill-green" style={{ width: '88%' }}></div>
          </div>
        </div>

        {/* Carottes Nantaise */}
        <div className="parcelle-card">
          <div className="parcelle-left">
            <div className="parcelle-icon-bg">🌱</div>
            <div className="parcelle-info">
              <h4>Carottes Nantaise</h4>
              <p>📍 Vallée du fleuve • 1,2 ha • Levée</p>
            </div>
          </div>
          <div className="parcelle-right">
            <span className="parcelle-percent green-text">95%</span>
          </div>
          <div className="progress-bar-container">
            <div className="progress-bar fill-green" style={{ width: '95%' }}></div>
          </div>
        </div>
      </div>

      {/* 4. CETTE SEMAINE (AGENDA) */}
      <div className="tech-section-header-row">
        <span className="tech-section-header">CETTE SEMAINE</span>
        <span className="tech-see-all">Voir tout &gt;</span>
      </div>

      <div className="agenda-list">
        <div className="agenda-item">
          <div className="agenda-date">
            <span className="agenda-month">Mai</span>
            <span className="agenda-day">23</span>
          </div>
          <div className="agenda-info">
            <h4>Traitement fongicide tomates</h4>
          </div>
          <IonBadge className="tech-badge urgent">Urgent</IonBadge>
        </div>

        <div className="agenda-item">
          <div className="agenda-date">
            <span className="agenda-month">Mai</span>
            <span className="agenda-day">25</span>
          </div>
          <div className="agenda-info">
            <h4>Irrigation bloc B — oignons</h4>
          </div>
          <IonBadge className="tech-badge planifie">Planifié</IonBadge>
        </div>

        <div className="agenda-item">
          <div className="agenda-date">
            <span className="agenda-month">Mai</span>
            <span className="agenda-day">28</span>
          </div>
          <div className="agenda-info">
            <h4>Récolte carottes — parcelle 3</h4>
          </div>
          <IonBadge className="tech-badge recolte">Récolte</IonBadge>
        </div>
      </div>

      {/* 5. BOUTON ORANGE D'ACTION */}
      <button className="tech-main-orange-btn">
        <IonIcon icon={addOutline} /> Publier une future récolte
      </button>

    </div>
  );
};

export default Technique;