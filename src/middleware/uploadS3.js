import aws from 'aws-sdk';
import multerS3 from 'multer-s3';
import multer from 'multer';

import {AWS_KEY, AWS_SECRET_KEY} from '../config/index';

const s3 = new aws.S3({
  accessKeyId: AWS_KEY,
  secretAccessKey: AWS_SECRET_KEY,
  Bucket: 'sjcmusic'
});

export const multerMusic = multer({
  storage: multerS3({
    s3,
    acl: "public-read",
    bucket: "sjcmusic/music",
    metadata: (req, file, cb) => {
      cb(null, { fieldName: file.mimetype });
  }
  })
})
