import login from './account/login';
import register from './account/register';
import profile from './account/updateProfile'
import music from './music/searchMusic';
import uploading from './music/updateMusic';
import updateMusic from './music/updateMusic';

export default (App) => {
  const router = App;

  router.use('/login', login);
  router.use('/register', register);
  router.use('/profile', profile);
  router.use('/music', music);
  router.use('/uploading', uploading);
  router.use('/music-info', updateMusic);
};