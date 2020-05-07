import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Events from './Events';
import SingleEvent from './SingleEvent';
import Contacts from './Contacts';
import SingleContact from './SingleContact';
import Profile from './Profile';
import EditProfile from './EditProfile';
import Near from './Near';
import Settings from './Settings';

const TabRoot: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/events" component={Events} exact={true} />
          <Route path="/contacts" component={Contacts} exact={true} />
          <Route path="/profile" component={Profile} exact={true}/>
          <Route path="/" render={() => <Redirect to="/events" />} exact={true} />
          <Route path="/event" component={SingleEvent} exact={true} />
          <Route path="/contact" component={SingleContact} exact={true} />
          <Route path="/edit-profile" component={EditProfile} exact={true} />
          <Route path="/near" component={Near} exact={true} />
          <Route path="/settings" component={Settings} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="events" href="/events">
            <IonLabel>Events</IonLabel>
          </IonTabButton>
          <IonTabButton tab="contacts" href="/contacts">
            <IonLabel>Contacts</IonLabel>
          </IonTabButton>
          <IonTabButton tab="profile" href="/profile">
            <IonLabel>Profile</IonLabel>
          </IonTabButton><IonTabButton tab="near" href="/near">
            <IonLabel>Near</IonLabel>
          </IonTabButton><IonTabButton tab="settings" href="/settings">
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default TabRoot;
