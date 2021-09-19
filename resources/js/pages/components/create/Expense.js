import React, {useState} from 'react';
import Modal from 'react-modal';
import './Expense.css'
import 'font-awesome/css/font-awesome.min.css';
import AddItem from './Add';
import EditItem from '../EditItem';
function Initial (){

    const [modalIsOpen,setModalIsOpen] = useState(false);

    const setModalIsOpenToTrue =()=>{
        setModalIsOpen(true)
    }

    const setModalIsOpenToFalse =()=>{
        setModalIsOpen(false)
    }
    return(
        <>

       
   //);
//

//function Initial() {
  // return(
    <div className="wrapper">
      
      <fieldset>
      <form>
         <label className="label1">
           <p>Title</p>
           <input className="input1" name="text" placeholder="Enter info here"/>
         </label>
         <label className="label2">
           <p>Description</p>
           <input className="input2" name="text" placeholder="Enter info here" />
         </label>

       </form>
       <h3>Items</h3>
       <table id="expensesList">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Coffee</td>
                    <td>NGN600</td>
                    <td>4Cups</td>
                </tr>
            </tbody>
        </table>
        <h2 className="font1" onClick={setModalIsOpenToTrue}><i className="fa fa-edit"></i></h2>
        <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
        <h2 className="font1" onClick={setModalIsOpenToFalse}>x</h2>
        <EditItem />
        </Modal>
        
        <h2 className="font3" onClick={setModalIsOpenToTrue}><i className="fa fa-plus-circle"></i></h2>
        <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
        <h2 className="font3" onClick={setModalIsOpenToFalse}>x</h2>
        <AddItem />
        </Modal>

        <h2 className="info" onClick={setModalIsOpenToTrue}>Add item</h2>
        <Modal isOpen={modalIsOpen} onRequestClose={()=> setModalIsOpen(false)}>
        <h2 className="font3" onClick={setModalIsOpenToFalse}>x</h2>
        <AddItem />
        </Modal>

        <h2 className="font2"><i className="fa fa-trash"></i></h2>
        <button type="submit">Submit Request</button>
       </fieldset>
       
    </div>
}
   </> 
    
    );
}

export default Initial
//export default ModalInFunctionalComponent;
