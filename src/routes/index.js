import readMusic from '../routes/music/readMusic'
import register from './account/register';
import login from './account/login';
import profile from './account/updateProfile'
import searchMusic from './music/searchMusic';
import updateMusic from './music/updateMusic';
import uploading from './music/uploadMusic';

export default (App) => {
  const router = App;

  router.use('/login', login);
  router.use('/register', register);
  router.use('/profile', profile);
  router.use('/music', readMusic);
  router.use('/uploading', uploading);
  router.use('/renewal', updateMusic);
  router.use('/search', searchMusic);
};