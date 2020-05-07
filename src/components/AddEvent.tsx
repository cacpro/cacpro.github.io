import React, {useState}  from 'react';
import { IonImg, IonInput, IonDatetime, IonButton } from '@ionic/react';

interface ContainerProps {
    handleClose: Function;
}

const AddEvent: React.FC<ContainerProps> = ({handleClose}) => {
    const [eventTitle, setEventTitle] = useState('');
    const [eventAddress, setEventAddress] = useState('');
    const [eventCity, setEventCity] = useState('');
    const [eventState, setEventState] = useState('');
    const [eventZip, setEventZip] = useState('');
    const [eventStartDate, setEventStartDate] = useState('');
    const [eventEndDate, setEventEndDate] = useState('');
    
    return (
        <div>
            <IonImg src="/assets/imgs/event-image.png" />
            <IonInput value={eventTitle} placeholder="Title" onIonChange={e => setEventTitle(e.detail.value!)}></IonInput>
            <IonInput value={eventAddress} placeholder="Address" onIonChange={e => setEventAddress(e.detail.value!)}></IonInput>
            <IonInput value={eventCity} placeholder="City" onIonChange={e => setEventCity(e.detail.value!)}></IonInput>
            <IonInput value={eventState} placeholder="State" onIonChange={e => setEventState(e.detail.value!)}></IonInput>
            <IonInput value={eventZip} placeholder="Zip Code" onIonChange={e => setEventZip(e.detail.value!)}></IonInput>
            <IonDatetime displayFormat="MM/DD/YY HH:MM" placeholder="Start Date" value={eventStartDate} onIonChange={e => setEventStartDate(e.detail.value!)}></IonDatetime>
            <IonDatetime pickerFormat="MMM/D HH:MM" displayFormat="MM/DD/YY HH:MM" placeholder="End Date" value={eventEndDate} onIonChange={e => setEventEndDate(e.detail.value!)}></IonDatetime>
            <IonButton onClick={() => handleClose()} expand="full">Add Event</IonButton>
        </div>
    );
};

export default AddEvent;