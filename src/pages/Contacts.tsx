import React from 'react';
import { IonContent, IonPage, IonList, IonItem, IonLabel, IonImg, IonItemDivider } from '@ionic/react';

const Contacts: React.FC = (props) => {
  function goForward(){
    (props as any).history.push('/contact')
  }

  return (
    <IonPage>
      <IonContent className="contact-list">
          <div className="contact-list-spacer"></div>
          <IonList>
            <IonItemDivider>
              <IonLabel>
                Information Technology
              </IonLabel>
            </IonItemDivider>
              <IonItem button onClick={() => {goForward()}} class="contact-item">
                <div>
                  <div>
                    <IonImg class="contact-image" src="/assets/imgs/contact-one.jpg" />
                  </div>
                  <div>
                    <IonLabel class="contact-label ion-text-wrap">
                      <h4>George Washington</h4>
                      <p>Information Technology</p>
                      <p>Virginia</p>
                    </IonLabel>
                  </div>
                </div>
              </IonItem>
              <IonItem class="contact-item">
                <div>
                  <div>
                    <IonImg class="contact-image" src="../assets/imgs/contact-two.jpg" />
                  </div>
                  <div>
                    <IonLabel class="contact-label ion-text-wrap">
                      <h4>John Adams</h4>
                      <p>Information Technology</p>
                      <p>Massachusetts</p>
                    </IonLabel>
                  </div>
                </div>
              </IonItem>
              <IonItemDivider>
                <IonLabel>
                  Real Estate
                </IonLabel>
              </IonItemDivider>
              <IonItem button onClick={() => {goForward()}} class="contact-item">
                <div>
                  <div>
                    <IonImg class="contact-image" src="/assets/imgs/contact-one.jpg" />
                  </div>
                  <div>
                    <IonLabel class="contact-label ion-text-wrap">
                      <h4>Thomas Jefferson</h4>
                      <p>Real Estate</p>
                      <p>Virginia</p>
                    </IonLabel>
                  </div>
                </div>
              </IonItem>
          </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Contacts;
