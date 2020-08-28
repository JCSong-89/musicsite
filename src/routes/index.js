import login from './account/login';
import register from './account/register';
import profile from './account/updateProfile'
import music from './music/music';
import uploading from './music/uploadMusic';
import searchMusic from './music/searchMusic';

export default (App) => {
  const router = App;

  router.use('/login', login);
  router.use('/register', register);
  router.use('/profile', profile);
  router.use('/music', music);
  router.use('/uploading', uploading);
  router.use('/search', searchMusic);
};