import aws from 'aws-sdk';
import multer from 'multer';
import multerS3 from 'multer-s3';

import {AWS_KEY, AWS_SECRET_KEY} from '../config/index';

const s3 = new aws.S3({
  accessKeyId: AWS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  Bucket: 'sjcmusic'
});

export const MULTER_MUSIC = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "sjcmusic/music",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.mimetype });
  }
  })
})
