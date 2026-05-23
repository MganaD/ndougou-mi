import { 
  IonContent, 
  IonPage, 
  IonCard, 
  IonCardContent, 
  IonGrid, 
  IonRow, 
  IonCol, 
  IonButton, 
  IonIcon,
  IonFooter,
  IonTabBar,
  IonTabButton,
  IonLabel
} from '@ionic/react';
import { useState } from 'react';
import Technique from './technique';
import Intrants from './intrants';
import Financier from './financier';
import Stocks from './stocks';
import { 
  trendingUpOutline, 
  leafOutline, 
  documentTextOutline, 
  flaskOutline, 
  cubeOutline,
  addOutline,
  homeOutline,
  personOutline
} from 'ionicons/icons';
import './Tab2.css';

type OngletType = 'technique' | 'intrants' | 'financier' | 'stocks';

const Tab2: React.FC = () => {
  // État pour savoir quel onglet est actif (Technique par défaut comme sur tes photos)
  const [ongletActif, setOngletActif] = useState<OngletType>('technique');

  // Fonction pour afficher le contenu selon l'onglet cliqué
  const renduContenuOnglet = () => {
    switch (ongletActif) {
      case 'technique':
        return <Technique />;
      case 'intrants':
        return <Intrants />;
      case 'financier':
        return <Financier />;
      case 'stocks':
        return <Stocks />;
      default:
        return null;
    }
  };

  return (
    <IonPage>
      <IonContent className="bg-light-gray" fullscreen>
        
        {/* BANDEAU EN-TÊTE VERT FIXE */}
        <div className="gie-header-container">
          <div className="gie-header-top">
            <div className="gie-title-block">
              <span className="gie-subtitle">TABLEAU DE BORD</span>
              <h2>GIE Kaolack Légumes</h2>
              <span className="gie-location">📍 Kaolack • Saison pluies 2026</span>
            </div>
            {/* Bouton d'action flottant orange */}
            <button className="gie-fab-add">
              <IonIcon icon={addOutline} />
            </button>
          </div>

          {/* LES 3 CARTES D'INDICATEURS GLOBAUX */}
          <div className="gie-indicators-scroll">
            <div className="gie-indicator-card">
              <div className="gie-card-icon-row">
                <IonIcon icon={trendingUpOutline} />
              </div>
              <h3>3,1 M <span className="unit">FCFA</span></h3>
              <p>CA mensuel</p>
            </div>

            <div className="gie-indicator-card">
              <div className="gie-card-icon-row">
                <IonIcon icon={leafOutline} />
              </div>
              <h3>6,4 <span className="unit">ha</span></h3>
              <p>Parcelles</p>
            </div>

            <div className="gie-indicator-card">
              <div className="gie-card-icon-row">
                <IonIcon icon={documentTextOutline} />
              </div>
              <h3>5 <span className="unit">actifs</span></h3>
              <p>Contrats</p>
            </div>
          </div>
        </div>

        {/* BARRE DE SÉLECTION DES ONGLETS HORIZONTAUX */}
        <div className="gie-subtabs-bar">
          <button 
            className={`gie-subtab-btn ${ongletActif === 'technique' ? 'active' : ''}`}
            onClick={() => setOngletActif('technique')}
          >
            <IonIcon icon={leafOutline} />
            <span>Technique</span>
          </button>
          
          <button 
            className={`gie-subtab-btn ${ongletActif === 'intrants' ? 'active' : ''}`}
            onClick={() => setOngletActif('intrants')}
          >
            <IonIcon icon={flaskOutline} />
            <span>Intrants</span>
          </button>

          <button 
            className={`gie-subtab-btn ${ongletActif === 'financier' ? 'active' : ''}`}
            onClick={() => setOngletActif('financier')}
          >
            <IonIcon icon={trendingUpOutline} />
            <span>Financier</span>
          </button>

          <button 
            className={`gie-subtab-btn ${ongletActif === 'stocks' ? 'active' : ''}`}
            onClick={() => setOngletActif('stocks')}
          >
            <IonIcon icon={cubeOutline} />
            <span>Stocks</span>
          </button>
        </div>

        {/* ZONE DE CONTENU DYNAMIQUE */}
        <div className="gie-tab-content-area">
          {renduContenuOnglet()}
        </div>

      </IonContent>

      {/* BARRE DE NAVIGATION PRINCIPALE (BAS DE L'ÉCRAN) */}
      <IonFooter id="custom-footer-tabs">
        <IonTabBar slot="bottom" className="custom-tab-bar">
          <IonTabButton tab="accueil" selected className="custom-tab-btn">
            <IonIcon icon={homeOutline} />
            <IonLabel>Accueil</IonLabel>
          </IonTabButton>
          <IonTabButton tab="contrats" className="custom-tab-btn">
            <IonIcon icon={documentTextOutline} />
            <IonLabel>Contrats</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profil" className="custom-tab-btn">
            <IonIcon icon={personOutline} />
            <IonLabel>Profil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonFooter>
    </IonPage>
  );
};
export default Tab2;