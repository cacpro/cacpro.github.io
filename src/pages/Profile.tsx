import React from 'react';
import { IonContent, IonPage, IonImg, IonButton } from '@ionic/react';
import BusinessCard from '../components/BusinessCard';

const Profile: React.FC = (props) => {
  function goForward(){
    (props as any).history.push('/edit-profile')
  }

  return (
    <IonPage>
      <IonContent>
        <div>
            <div className="profile-header">
              <IonButton className="profile-edit" fill="clear" onClick={() => goForward()}>Edit</IonButton>
              <IonImg class="profile-large-image" src="/assets/imgs/contact-one.jpg" />
              <IonImg class="profile-small-image" src="/assets/imgs/contact-one.jpg" />
            </div>
            <div className="profile-content">
              <BusinessCard />
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
