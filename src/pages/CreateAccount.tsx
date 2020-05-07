import React, {useState } from 'react';
import { IonContent, IonPage, IonButton, IonInput, IonToast, IonLoading } from '@ionic/react';

import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

const CreateAccount: React.FC = (props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');

    const [showToastMessage, setShowToast] = useState(false);
    const [showLoading, setShowLoading] = useState(false);
    const [toastMessage, setToastMessage] = useState('');

    function returnToLogin(){
      (props as any).history.push('/login')
    }

    async function handleCreateAccount(){
      let url = 'api/v1/register';
      let credentials = {
        name: name,
        email: email,
        password: password,
        password_confirmation: passwordConfirm
      }

      setShowLoading(true);

      let response = await fetch(
        url,{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(credentials)
      }
      );
      
      let data = await response.json();
      
      setShowLoading(false);
        if(data.errors) {
          let errorData = '';

          Object.keys(data.errors).forEach(key => {
            errorData += data.errors[key] + '<br/>';
          })

          setToastMessage(errorData);
          setShowToast(true);
        } else {
          await Storage.set({
            key: 'user',
            value: JSON.stringify({
              id: data.user.id,
              name: data.user.name,
              email: data.user.email,
              card: data.user.card,
              cover: data.user.cover,
              avatar: data.user.avatar
            })
          });

          await Storage.set({
            key: 'token',
            value: data.token
          });

          setName('');
          setEmail('');
          setPassword('');
          setPasswordConfirm('');

          (props as any).history.push('/events');
        }
  }

  return (
    <IonPage>
      <IonContent >
        <div slot="fixed" className="login-content">
            <div className="login-form">
              <div>
                  <IonInput value={name} placeholder="Name" onIonChange={e => setName(e.detail.value!)}></IonInput>
                  <IonInput value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                  <IonInput value={password} placeholder="Password" type="password" onIonChange={e => setPassword(e.detail.value!)}></IonInput>
                  <IonInput value={passwordConfirm} placeholder="Confirm Password" type="password" onIonChange={e => setPasswordConfirm(e.detail.value!)}></IonInput>
                  <IonButton className="register" onClick={() => handleCreateAccount()} fill="clear" expand="full">
                      Register
                  </IonButton>
                </div>
            </div>
            <div className="bottom-button">
                <IonButton onClick={() => returnToLogin()} fill="clear">
                    Return to Login
                </IonButton>
            </div>
        </div>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Please wait...'}
          duration={5000}
        />
        <IonToast
          isOpen={showToastMessage}
          onDidDismiss={() => setShowToast(false)}
          message= {toastMessage}
          duration={5000}
        />
      </IonContent>
    </IonPage>
  );
};

export default CreateAccount;
