import React from 'react';
import { IonContent, IonToolbar, IonHeader, IonPage, IonButton, IonButtons, IonBackButton, IonImg, IonIcon } from '@ionic/react';
import { navigate, time, share } from 'ionicons/icons';
import MapContainer from '../components/MapContainer'

const SingleEvent: React.FC = () => {
  function goBack(){

  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
            <IonButtons slot="start">
                <IonButton onClick={() => goBack()}>
                    <IonBackButton text="Events" mode="ios"></IonBackButton>
                </IonButton>
            </IonButtons>
            <IonButtons slot="end">
                <IonButton className="share-event-button" color="primary" onClick={() => goBack()}>
                    <IonIcon icon={share}></IonIcon>
                </IonButton>
            </IonButtons>
          </IonToolbar>
      </IonHeader>
      <IonContent class="single-event-details">
        <IonImg class="event-image" src="/assets/imgs/event-image.png" />
        <div className="event-detail">
            <div>
                <IonIcon icon={navigate} />
            </div>
            <div>
                <p>5100 Poplar Ave</p>
                <p> 27th Floor</p>
                <p> Memphis, TN 28197</p>
            </div>
        </div>
        <div className="event-detail">
            <div>
                <IonIcon icon={time} />
            </div>
            <div>
                <p>Mon, Jul 27 2020</p>
                <p>14:00 - 22:00</p>
            </div>
        </div>
        <MapContainer />
        <IonButton color="success" expand="full">RSVP Event</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SingleEvent;
