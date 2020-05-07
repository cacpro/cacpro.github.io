import React, {useState } from 'react';
import { IonContent, IonPage, IonButton, IonInput, IonToast } from '@ionic/react';

const Login: React.FC = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleNewAccount(){
        (props as any).history.push('/create-account')
    }

    function handleForgotPassword(){
        (props as any).history.push('/forgot-password')
    }

  return (
    <IonPage>
      <IonContent >
        <div slot="fixed" className="login-content">
            <div className="login-form">
                <div>
                    <IonInput value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                    <IonInput value={password} placeholder="Password" type="password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                    <IonButton className="login" fill="clear" expand="full">
                        Login
                    </IonButton>
                    <IonButton onClick={() => handleForgotPassword()} fill="clear" expand="full">
                        Forgot Password
                    </IonButton>
                </div>
            </div>
            <div className="bottom-button">
                <IonButton onClick={() => handleNewAccount()} fill="clear">
                    Don't have an account? Sign Up
                </IonButton>
            </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
