import React, {useState } from 'react';
import { IonContent, IonPage, IonButton, IonInput } from '@ionic/react';

const ForgotPassword: React.FC = (props) => {
    const [email, setEmail] = useState('');

    function returnToLogin(){
        (props as any).history.push('/login')
    }

    function handleResetPassword(){
        (props as any).history.push('/forgot-password')
    }

  return (
    <IonPage>
      <IonContent >
        <div slot="fixed" className="login-content">
            <div className="login-form">
                <div>
                    <IonInput value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                    <IonButton className="reset-password" onClick={() => handleResetPassword()} fill="clear" expand="full">
                        Reset Password
                    </IonButton>
                </div>
            </div>
            <div className="bottom-button">
                <IonButton onClick={() => returnToLogin()} fill="clear">
                    Return to Login
                </IonButton>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
