import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { add, close, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { removeCustomer, saveCustomer, searchCustomers } from './CustomerApi';


const CustomerList: React.FC = () => {
  const { name } = useParams<{ name: string; }>();
  const [clientes, setClientes] = useState<any>([]);
  const history = useHistory(); //Falta

    useEffect(()=>{
        search();
    },[]); 

    const search = () =>{
        let result = searchCustomers();
        setClientes(result);
    }

    const remove = (id: string) => {
        removeCustomer(id);
        search();    
    }  

    const pruebaLocalStorage = () => {
        const ejemplo = {
            id: '1',
            firstname: 'Oduad',
            lastname: 'Aragón',
            email: 'aragon_1123@hotmail.com',
            phone: '9513626076',
            address: 'Riva Palacio' 
        }
        saveCustomer(ejemplo);
    }

    const addCustomer = () =>{
        history.push('/page/customer/new');
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
            <IonTitle>Gestión de clientes</IonTitle>

    <IonItem>
        <IonButton onClick  ={addCustomer} color="primary" fill="solid" slot= "end" size = "default">
            <IonIcon icon ={add}/>
            Agregar cliente
        </IonButton>
    </IonItem>

    <IonGrid className='table'>
      <IonRow>
        <IonCol>Nombre</IonCol>
        <IonCol>E-mail</IonCol>
        <IonCol>Telefono</IonCol>
        <IonCol>Dirección</IonCol>
        <IonCol>Acciones</IonCol>
      </IonRow>

    {clientes.map((cliente:any) =>
    <IonRow>
      <IonCol>{cliente.firstName} </IonCol>
      <IonCol>{cliente.lastName}</IonCol>
      <IonCol>{cliente.email}</IonCol>
      <IonCol>{cliente.phone}</IonCol>
      <IonCol>{cliente.addres}</IonCol>
      <IonCol>
          <IonButton color='primary' fill='clear'>
              <IonIcon icon={pencil} slot="icon-only"/>
          </IonButton>
          <IonButton color="danger" fill='clear' onClick ={()=> remove(cliente.id)}>
                
              <IonIcon icon={close} slot="icon-only"/>
          </IonButton>
      </IonCol>
    </IonRow>
    )}

    </IonGrid>
    </IonCard>




    <IonButton onClick = {pruebaLocalStorage} color="danger" fill='clear'>
              Prueba local storage 
          </IonButton>

  </IonContent>






      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
