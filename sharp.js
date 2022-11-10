const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = path.resolve(__dirname, 'src/public/images');
const heros = path.resolve(__dirname, 'src/public/images/heros');
const destination = path.resolve(__dirname, 'dist/');
const target = [];

const addToTarget = (...directories) => {
  directories.forEach((directory) => {
    target.push(directory);
  });
};

const createDestinationDirectory = (targetDirectory) => `${destination}/${targetDirectory.split('src/public/').slice(-1).toString()}`;

const getExtension = (file) => {
  try {
    return file.split('.')[1].toLowerCase();
  } catch (error) {
    return;
  }
};

const isImage = (image) => {
  const extension = getExtension(image);
  const imageExtensions = ['jpg', 'jpeg', 'jfif', 'pjpeg', 'pjp', 'png', 'gif', 'svg', 'webp', 'avif', 'ico'];
  if (imageExtensions.includes(extension)) {
    return true;
  }
  return false;
};

addToTarget(images, heros);

target.forEach((targetDirectory) => {
  const destinationDirectory = createDestinationDirectory(targetDirectory);
  if (!fs.existsSync(destinationDirectory)) {
    fs.mkdirSync(destinationDirectory);
  }
  fs.readdirSync(targetDirectory)
    .forEach((image) => {
      // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
      if (isImage(image)) {
        sharp(`${targetDirectory}/${image}`)
          .resize(800)
          .toFile(path.resolve(
            __dirname,
            `${destinationDirectory}/${image.split('.').slice(0, -1).join('.')}-large.jpg`,
          ));

        sharp(`${targetDirectory}/${image}`)
          .webp()
          .resize(800)
          .toFile(path.resolve(
            __dirname,
            `${destinationDirectory}/${image.split('.').slice(0, -1).join('.')}-large.webp`,
          ));

        // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
        sharp(`${targetDirectory}/${image}`)
          .resize(480)
          .toFile(path.resolve(
            __dirname,
            `${destinationDirectory}/${image.split('.').slice(0, -1).join('.')}-small.jpg`,
          ));

        sharp(`${targetDirectory}/${image}`)
          .webp()
          .resize(480)
          .toFile(path.resolve(
            __dirname,
            `${destinationDirectory}/${image.split('.').slice(0, -1).join('.')}-small.webp`,
          ));
      }
    });
});
