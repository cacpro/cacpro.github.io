import React, {useState} from 'react';
import {IonContent, IonHeader, IonPage, IonButton, IonModal, IonSegment, IonIcon, IonButtons, IonSegmentButton, IonToolbar, IonList, IonImg, IonLabel, IonItem, IonRefresher, IonRefresherContent, IonSearchbar } from '@ionic/react';
import { add } from 'ionicons/icons';
import { RefresherEventDetail } from '@ionic/core';
import AddEvent from '../components/AddEvent';

function doRefresh(event: CustomEvent<RefresherEventDetail>) {
  console.log('Begin async operation');

  setTimeout(() => {
    console.log('Async operation has ended');
    event.detail.complete();
  }, 2000);
}

const Events: React.FC = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [myEvents, setMyEvents] = useState('all');
  /*const [events, setEvents] = useState({})*/
  const [searchText, setSearchText] = useState('');

  /*async function loadData() {
    const { value } = await Storage.get({ key: 'user' });
    let data: any;

    if(value){
        data = JSON.parse(value);
        setUser(data);
    }
  }

  if(!user.name){
    loadData();
  }*/

  function goForward(){
    (props as any).history.push('/event')
  }

  function toggleSegment(value: string | undefined){
    if(value === 'all'){
      setMyEvents('all');
      handleSearch('');
      setSearchText('');
    } else {
      setMyEvents('my');
      handleSearch('');
      setSearchText('');
    }
  }

  function handleAddEvent() {
    setShowModal(false);
  }

  function handleSearch(searchValue: string | undefined){
    let search: string = '';

    if(searchValue && document) {
      search = searchValue.toLowerCase();
    }

    let list: HTMLElement | null = document.querySelector('ion-list');
    
    if(list){
      let items: HTMLElement[] = [];

      Array.prototype.map.call(list.children, item => {
        items.push(item);
      });

      requestAnimationFrame(() => {
        if(items) {
          items.forEach((item: HTMLElement | null) => {
            if(item?.textContent) {
              let shouldShow = true;

              if(search){
                shouldShow = item.textContent.toLowerCase().indexOf(search) > -1;
              }

              item.style.display = shouldShow ? 'block' : 'none';
            }
          });
        }
      });
    }
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonSegment value={myEvents}>
            <IonSegmentButton onClick={(e) => {toggleSegment('all')}} value="all">
              <IonLabel>All Events</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton onClick={(e) => {toggleSegment('my')}} value="my">
              <IonLabel>My Events</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          <IonButtons slot="end">
            <IonButton onClick={() => setShowModal(true)}>
              <IonIcon icon={add} />
            </IonButton>
          </IonButtons>
          <IonSearchbar value={searchText} onIonChange={e => {setSearchText(e.detail.value!); handleSearch(e.detail.value) }}></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonModal isOpen={showModal}>
          <AddEvent handleClose={handleAddEvent}></AddEvent>
        </IonModal>
        <article style={{ display: myEvents === 'all' ? 'block' : 'none' }}>
          <IonRefresher slot="fixed" onIonRefresh={doRefresh}>
            <IonRefresherContent></IonRefresherContent>
          </IonRefresher>
          <IonList>
              <IonItem button onClick={() => {goForward()}} class="event-item">
                <div>
                  <div>
                    <IonImg class="event-image" src="/assets/imgs/event-image.png" />
                  </div>
                  <div>
                    <IonLabel class="event-label">
                      <h4>Test Event One</h4>
                      <p>May 12 2020</p>
                      <p>7:00PM</p>
                    </IonLabel>
                  </div>
                </div>
              </IonItem>
              <IonItem class="event-item">
                <div>
                  <div>
                    <IonImg class="event-image" src="../assets/imgs/event-image.png" />
                  </div>
                  <div>
                    <IonLabel class="event-label">
                      <h4>Test Event Two</h4>
                      <p>May 19 2020</p>
                      <p>6:30PM</p>
                    </IonLabel>
                  </div>
                </div>
              </IonItem>
          </IonList>
        </article>
        <article style={{ display: myEvents === 'my' ? 'block' : 'none' }}>
          <p>My events</p>
        </article>
      </IonContent>
    </IonPage>
  );
};

export default Events;
