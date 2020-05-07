import React from 'react';
import { IonContent, IonPage } from '@ionic/react';
import ProfileForm from '../components/ProfileForm';

const EditProfile: React.FC = (props) => {
    function handleUpdateProfile() {
        (props as any).history.go(-1);
    }

    return (
        <IonPage>
        <IonContent>
            <ProfileForm handleClose={handleUpdateProfile} />
        </IonContent>
        </IonPage>
    );
};

export default EditProfile;
