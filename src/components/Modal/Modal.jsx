import { useDispatch } from 'react-redux';
import { CloseBtn, Content,Backdrop } from './Modal.styled';
import { createPortal } from 'react-dom';
import { closeModal } from 'redux/contacts/modal-slice';
import { RxCross2 } from 'react-icons/rx';
import ContactUpdate from 'components/ContactUpdate/ContactUpdate';


const modalRoot = document.querySelector('#modal-root');
const Modal = () => {
  const dispatch = useDispatch();

  const hendleCloseModal = e => {
    if (e.target === e.currentTarget) {
      dispatch(closeModal());
    }
  };

  return createPortal(
    <Backdrop onClick={hendleCloseModal}>
      <Content>
          <CloseBtn
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            <RxCross2 />
          </CloseBtn>
        <ContactUpdate />
      </Content>
    </Backdrop>,
    modalRoot
  );
};

export default Modal;