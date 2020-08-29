import login from './account/login';
import register from './account/register';
import profile from './account/updateProfile'
import updateMusic from './music/updateMusic';
import readMusic from '../routes/music/readMusic'
import uploading from './music/uploadMusic';
import searchMusic from './music/searchMusic';

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