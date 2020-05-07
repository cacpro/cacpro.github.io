import React from 'react';
import { IonContent, IonToolbar, IonHeader, IonPage, IonButton, IonButtons, IonBackButton } from '@ionic/react';
import BusinessCard from '../components/BusinessCard';

const SingleContact: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="single-contact-header">
        <IonToolbar>
            <IonButtons slot="start">
                <IonButton>
                    <IonBackButton text="Back" mode="ios"></IonBackButton>
                </IonButton>
            </IonButtons>
          </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container single-contact-container">
            <BusinessCard />
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SingleContact;
