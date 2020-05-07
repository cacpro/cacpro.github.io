import React, {useState } from 'react';
import { IonImg, IonButton, IonLabel, IonInput, IonSelect, IonSelectOption, IonIcon } from '@ionic/react';
import { close } from 'ionicons/icons';

interface ContainerProps {
    handleClose: Function;
}

const ProfileForm: React.FC<ContainerProps> = ({handleClose}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [company, setCompany] = useState('');
    const [industry, setIndustry] = useState('');
    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');
    const [website, setWebsite] = useState('');
    const [linkedin, setLinkedin] = useState('');
    const [preferred, setPreferred] = useState('');

    return (
        <div>
            <div className="profile-header">
                <IonButton className="profile-edit" color="light" fill="clear">Edit</IonButton>
                <IonButton className="modal-close" color="light" fill="clear" onClick={() => handleClose()}>
                    <IonIcon icon={close}></IonIcon>
                </IonButton>
                <IonImg class="profile-large-image" src="/assets/imgs/contact-one.jpg" />
                <IonImg class="profile-small-image" src="/assets/imgs/contact-one.jpg" />
            </div>
            <div className="profile-content">
                <IonLabel>Name</IonLabel>
                <IonInput value={name} placeholder="Name" onIonChange={e => setName(e.detail.value!)}></IonInput>
                <IonLabel>Email</IonLabel>
                <IonInput value={email} placeholder="Email Address" onIonChange={e => setEmail(e.detail.value!)}></IonInput>
                <IonLabel>Company</IonLabel>
                <IonInput value={company} placeholder="Company Name" onIonChange={e => setCompany(e.detail.value!)}></IonInput>
                <IonLabel>Industry</IonLabel>
                <IonSelect value={industry} placeholder="Select Industry" onIonChange={e => setIndustry(e.detail.value)}>
                    <IonSelectOption value="information-technology">
                        Information Technology
                    </IonSelectOption>
                    <IonSelectOption value="real-estate">
                        Real Estate
                    </IonSelectOption>
                </IonSelect>
                <IonLabel>Employment Title</IonLabel>
                <IonInput value={title} placeholder="Title" onIonChange={e => setTitle(e.detail.value!)}></IonInput>
                <IonLabel>Address</IonLabel>
                <IonInput value={address} placeholder="Address" onIonChange={e => setAddress(e.detail.value!)}></IonInput>
                <IonLabel>City</IonLabel>
                <IonInput value={city} placeholder="City" onIonChange={e => setCity(e.detail.value!)}></IonInput>
                <IonLabel>State</IonLabel>
                <IonInput value={state} placeholder="State" onIonChange={e => setState(e.detail.value!)}></IonInput>
                <IonLabel>Zip Code</IonLabel>
                <IonInput value={zip} placeholder="Zip Code" onIonChange={e => setZip(e.detail.value!)}></IonInput>
                <IonLabel>Phone</IonLabel>
                <IonInput value={phone} placeholder="Phone Number" onIonChange={e => setPhone(e.detail.value!)}></IonInput>
                <IonLabel>Website</IonLabel>
                <IonInput value={website} placeholder="Website" onIonChange={e => setWebsite(e.detail.value!)}></IonInput>
                <IonLabel>LinkedIn Username</IonLabel>
                <IonInput value={linkedin} placeholder="Linkedin Username" onIonChange={e => setLinkedin(e.detail.value!)}></IonInput>
                <IonLabel>Preferred Method</IonLabel>
                <IonSelect value={preferred} placeholder="Select Contact Method" onIonChange={e => setPreferred(e.detail.value)}>
                    <IonSelectOption value="none">
                        None
                    </IonSelectOption>
                    <IonSelectOption value="email">
                        Email
                    </IonSelectOption>
                    <IonSelectOption value="phone">
                        Phone
                    </IonSelectOption>
                    <IonSelectOption value="mail">
                        Mail
                    </IonSelectOption>
                </IonSelect>
                <IonButton onClick={() => handleClose()} expand="full">Update</IonButton>
            </div>
        </div>
    );
};

export default ProfileForm;
