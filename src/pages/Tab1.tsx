import { 
  IonContent, 
  IonPage, 
  IonInput, 
  IonButton, 
  IonGrid, 
  IonRow, 
  IonCol 
} from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Tab1.css';

const Tab1: React.FC = () => {
  const [profileType, setProfileType] = useState<'producteur' | 'acheteur'>('producteur');
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const history = useHistory();

  const gererSoumission = () => {
    history.push({
      pathname: '/tab2',
      state: { profil: profileType }
    });
  };

  return (
    <IonPage>
      <IonContent className="login-background">
        <div className="login-container">
          
          <div className="login-header">
            <h1>Ndougou Mi</h1>
            <p>Plateforme AgriTech du Sénégal</p>
          </div>

          <div className="login-card">
            <h2>{isRegister ? "Créer un compte" : "Se connecter"}</h2>

            <label className="input-label">Type de profil</label>
            <IonGrid className="ion-no-padding profile-selector">
              <IonRow>
                <IonCol size="6">
                  <div 
                    className={`profile-box producteur-box ${profileType === 'producteur' ? 'active' : ''}`}
                    onClick={() => setProfileType('producteur')}
                  >
                    <span className="profile-emoji">🌾</span>
                    <span className="profile-text">Producteur</span>
                  </div>
                </IonCol>
                <IonCol size="6">
                  <div 
                    className={`profile-box acheteur-box ${profileType === 'acheteur' ? 'active' : ''}`}
                    onClick={() => setProfileType('acheteur')}
                  >
                    <span className="profile-emoji">🏪</span>
                    <span className="profile-text">Acheteur</span>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>

            {isRegister && (
              <div>
                <label className="input-label">Nom</label>
                <IonInput type="text" placeholder="GANA" className="custom-input" />

                <label className="input-label">Prénom</label>
                <IonInput type="text" placeholder="Maty" className="custom-input" />

                <label className="input-label">Téléphone</label>
                <IonInput type="tel" placeholder="+221 77..." className="custom-input" />

                {profileType === 'producteur' && (
                  <div>
                    <label className="input-label">Nom de la boutique / GIE</label>
                    <IonInput type="text" placeholder="GIE Kaolack" className="custom-input" />

                    <label className="input-label">Shop URL</label>
                    <IonInput type="text" placeholder="gie-kaolack" className="custom-input" />
                  </div>
                )}
              </div>
            )}

            <label className="input-label">Email</label>
            <IonInput type="email" placeholder="exemple@email.com" className="custom-input" />

            <label className="input-label">Mot de passe</label>
            <IonInput type="password" placeholder="........" className="custom-input" />

            <IonButton 
              expand="block" 
              className={profileType === 'producteur' ? 'login-btn-green' : 'login-btn-orange'}
              onClick={gererSoumission}
            >
              {isRegister ? "S'inscrire" : "Se connecter"}
            </IonButton>

            <p className="signup-link" onClick={() => setIsRegister(!isRegister)} style={{ cursor: 'pointer', textAlign: 'center', marginTop: '15px' }}>
              {isRegister ? "Déjà un compte ? " : "Pas de compte ? "}
              <span style={{ color: profileType === 'producteur' ? '#2e7d32' : '#ef6c00', fontWeight: 'bold' }}>
                {isRegister ? "Se connecter" : "S'inscrire"}
              </span>
            </p>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;