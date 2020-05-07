import React, { useState } from 'react';
import { IonContent, IonPage, IonList, IonItemDivider, IonItem, IonToggle, IonLabel, IonModal, IonVirtualScroll } from '@ionic/react';
import ProfileForm from '../components/ProfileForm';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

const Settings: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    const [user, setUser] = useState({id: '', name: '', email: ''});

    async function loadData() {
        const { value } = await Storage.get({ key: 'user' });
        let data: any;

        if(value){
            data = JSON.parse(value);
            setUser(data);
        }
    }

    if(!user.name){
        loadData();
    }

    function logout(){
        alert('logout');
    }

    function handleUpdateProfile() {
        setShowModal(false);
    }

  return (
    <IonPage>
      <IonContent>
        <IonModal isOpen={showModal}>
            <IonContent>
                <ProfileForm handleClose={handleUpdateProfile}></ProfileForm>
            </IonContent>
        </IonModal>
        <div className="settings-header">
            <h1>Settings</h1>
        </div>
        <div className="settings-name">
            <div>
                <img alt="John Starr" src="/assets/imgs/contact-one.jpg" />
            </div>
            <div>
                 <p className="name">{user.name}</p>
                <p>{user.email}</p>
            </div>
        </div>
        <IonList className="settings-list">
            <IonItemDivider>
                Social
            </IonItemDivider>
            <IonItem button onClick={() => setShowModal(true)} >
                Edit Profile
            </IonItem>
            <IonItem button onClick={() => {logout()}} >
                Log Out
            </IonItem>
            <IonItemDivider>
                Communications
            </IonItemDivider>
            <IonItem>
                <IonToggle mode="ios" color="success" checked slot="end"></IonToggle>
                <IonLabel>Notifications</IonLabel>
            </IonItem>
            <IonItem>
                <IonToggle mode="ios" color="success" checked slot="end"></IonToggle>
                <IonLabel>Email</IonLabel>
            </IonItem>
            <IonItem>
                <IonToggle mode="ios" color="success" checked slot="end"></IonToggle>
                <IonLabel>Report Crashes</IonLabel>
            </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Settings;
