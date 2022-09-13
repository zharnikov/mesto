let popup = document.querySelector('.popup');
let formElement = document.querySelector('.popup');
let popupInputName = formElement.querySelector('.popup__input-name');
let popupInputCaption = formElement.querySelector('.popup__input-caption');
let popupButtonClose = document.querySelector('.popup__button-close');

let profileName = document.querySelector('.profile__name');
let profileCaption = document.querySelector('.profile__caption');
let profileButtonEdit = document.querySelector('.profile__button-edit');

function openPopup() {

    popupInputName.value = profileName.textContent;
    popupInputCaption.value = profileCaption.textContent;
    popup.classList.add('popup__open');

  }
  
function closePopup() {

    popup.classList.remove('popup__open');

  }

function formSubmitHandler (evt) {

  evt.preventDefault();

  popupInputName.value;
  popupInputCaption.value;

  profileName.textContent = popupInputName.value;
  profileCaption.textContent = popupInputCaption.value;

  closePopup()

};

profileButtonEdit.addEventListener('click', openPopup);
popupButtonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', formSubmitHandler);
