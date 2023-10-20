// file login finished
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function login(navigateTo) {
  // ----- contenedor principal ----
  const principalContainer = document.createElement('section');
  principalContainer.setAttribute('class', 'principal-container');
  const buttonReturn = document.createElement('button');
  buttonReturn.setAttribute('class', 'return');
  // ----- contenedor nombre red social ----
  const containerName = document.createElement('section');
  containerName.setAttribute('class', 'containerName');
  const img = document.createElement('img');
  img.setAttribute('class', 'logo');
  const nameSocial = document.createElement('h1');
  nameSocial.setAttribute('class', 'nameSocial');
  // ----- contenedor login -----
  const containerSingIn = document.createElement('section');
  containerSingIn.setAttribute('class', 'containerInfo');
  const form = document.createElement('form');
  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('class', 'inputInfo');
  const inputPass = document.createElement('input');
  inputPass.setAttribute('class', 'inputInfo');
  const buttonSignIn = document.createElement('button');
  buttonSignIn.setAttribute('class', 'signIn');
  // const forgetPassword = document.createElement('input');
  const connectWith = document.createElement('h4');
  connectWith.setAttribute('class', 'connect-with');
  const openGoogle = document.createElement('button');
  openGoogle.setAttribute('class', 'openGoogle');

  img.src = 'imagen/LogoEnRutados.png';
  nameSocial.textContent = ' EnRutados';
  inputEmail.placeholder = 'Correo electrónico';
  inputPass.placeholder = 'Contraseña';
  buttonSignIn.textContent = 'Iniciar sesión';
  connectWith.textContent = 'O conéctate con';
  
  buttonReturn.textContent = 'Return';
  buttonReturn.addEventListener('click', () => {
    navigateTo('/');
  });

  // Agrega un evento de click para el botón de inicio de sesión con Google
  openGoogle.addEventListener('click', async () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    try {
      await signInWithPopup(auth, provider);
      // Inicio de sesión con Google exitoso
      // Puedes agregar una redirección o lógica adicional aquí
    } catch (error) {
      console.error('Google login error', error);
      // Maneja los errores de inicio de sesión con Google
    }
  });

  form.append(inputEmail, inputPass);
  containerName.append(img, nameSocial);
  containerSingIn.append(form, buttonSignIn, connectWith, openGoogle);
  principalContainer.append(buttonReturn, containerName, containerSingIn);

  return principalContainer;
}

export default login;
