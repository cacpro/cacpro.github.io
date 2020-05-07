import React from 'react';
import { IonContent, IonHeader, IonPage, IonToolbar, IonToggle } from '@ionic/react';

const Near: React.FC = (props) => {


  return (
    <IonPage>
       <IonHeader className="near-header" mode="ios">
         <IonToolbar>
             Find Contacts
         </IonToolbar>
      </IonHeader>
      <IonContent className="near-content">
        <div className="near-content">
          <div className="near-toggle-container">
            <IonToggle mode="ios" color="success"></IonToggle>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Near;
