import Resizer from 'react-image-file-resizer';

export const getFileResizer = (file, width, height) =>
  new Promise(resolve => {
    Resizer.imageFileResizer(
      file,
      width,
      height,
      'JPEG',
      100,
      0,
      uri => {
        resolve(uri);
      },
      'file'
    );
  });
