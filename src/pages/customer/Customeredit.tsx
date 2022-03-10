import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, checkmark, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { removeCustomer, saveCustomer, searchCustomers } from './CustomerApi';


const CustomerEdit: React.FC = () => {
  const { name, id } = useParams<{ name: string; id: string }>();
  const [customer, setCustomer] = useState<any>({});
  const history = useHistory();


    useEffect(()=>{
        search();
    },[])

    const search = () =>{
        //let result = searchCustomers();
        //setClientes(result);
    }

    const save = () =>{
        customer.id = Math.round(Math.random()*100);
        saveCustomer(customer);
        history.push('/page/customers');
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        



    <IonContent>
        <IonCard>
            <IonTitle>{id ==='new' ? 'Agregar cliente' : 'Editar cliente'}</IonTitle>

        <IonRow>
            <IonCol>
                <IonItem>
                 <IonLabel position="stacked">Nombre</IonLabel>
                 <IonInput onIonChange={e => customer.firstName = e.detail.value} value={customer.firstName}></IonInput>
                </IonItem>
            </IonCol>

            <IonCol>
                <IonItem>
                 <IonLabel position="stacked">Apellidos</IonLabel>
                 <IonInput onIonChange={e => customer.lastName = e.detail.value} value={customer.lastName}></IonInput>
                </IonItem>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>
                <IonItem>
                 <IonLabel position="stacked">Email</IonLabel>
                 <IonInput onIonChange={e => customer.email = e.detail.value} value={customer.email}></IonInput>
                </IonItem>
            </IonCol>
 
            <IonCol>
                <IonItem>
                 <IonLabel position="stacked">Dirección</IonLabel>
                 <IonInput onIonChange={e => customer.address = e.detail.value} value={customer.address}></IonInput>
                </IonItem>
            </IonCol>
        </IonRow>

        <IonRow>
            <IonCol>
                <IonItem>
                 <IonLabel position="stacked">Telephone</IonLabel>
                 <IonInput onIonChange={e => customer.telephone = e.detail.value} value={customer.telephone}></IonInput>
                </IonItem>
            </IonCol>
 
            <IonCol>
            </IonCol>
        </IonRow>


    <IonItem>
        <IonButton onClick={save} color="success" fill="solid" slot= "end" size = "default">
            <IonIcon icon ={checkmark}/>
            Guardar
        </IonButton>
    </IonItem>

    </IonCard>

  </IonContent>



 
      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;
