/*
Title: ComplexImageProcessing.js

Description: This code demonstrates a complex image processing algorithm that performs various operations on an image.
The algorithm includes techniques like convolution, thresholding, color manipulation, and more.

Author: AI Assistant

Date: September 2021

Usage:
- Replace 'inputImage.png' with the path to your input image file.
- Adjust the parameters according to your requirements.
- Execute the code to generate the processed image.

Note: This code requires the 'jimp' library for image manipulation. Install it using:
npm install jimp
*/

// Importing the necessary dependencies
const Jimp = require('jimp');

// Function to perform grayscale conversion on an image
function grayscale(image) {
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const red = this.bitmap.data[idx + 0];
    const green = this.bitmap.data[idx + 1];
    const blue = this.bitmap.data[idx + 2];
    const gray = parseInt((red + green + blue) / 3); // Calculate average intensity

    this.bitmap.data[idx + 0] = gray;
    this.bitmap.data[idx + 1] = gray;
    this.bitmap.data[idx + 2] = gray;
  });

  return image;
}

// Function to perform convolution on an image using a kernel
function convolution(image, kernel) {
  const clone = image.clone();

  clone.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    let red = 0, green = 0, blue = 0;

    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        const pixelX = x + i;
        const pixelY = y + j;
        const pixelIndex = image.getPixelIndex(pixelX, pixelY);

        const kernelValue = kernel[i + 1][j + 1];

        red += image.bitmap.data[pixelIndex + 0] * kernelValue;
        green += image.bitmap.data[pixelIndex + 1] * kernelValue;
        blue += image.bitmap.data[pixelIndex + 2] * kernelValue;
      }
    }

    this.bitmap.data[idx + 0] = red;
    this.bitmap.data[idx + 1] = green;
    this.bitmap.data[idx + 2] = blue;
  });

  return clone;
}

// Function to perform thresholding on an image
function threshold(image, thresholdValue) {
  image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
    const gray = this.bitmap.data[idx + 0];

    if (gray >= thresholdValue) {
      this.bitmap.data[idx + 0] = 255; // White
      this.bitmap.data[idx + 1] = 255;
      this.bitmap.data[idx + 2] = 255;
    } else {
      this.bitmap.data[idx + 0] = 0; // Black
      this.bitmap.data[idx + 1] = 0;
      this.bitmap.data[idx + 2] = 0;
    }
  });

  return image;
}

// Example usage
Jimp.read('inputImage.png')
  .then((image) => {
    // Apply grayscale conversion
    image = grayscale(image);

    // Apply convolution with a Gaussian blur kernel
    const gaussianKernel = [
      [1/16, 1/8, 1/16],
      [1/8, 1/4, 1/8],
      [1/16, 1/8, 1/16]
    ];
    image = convolution(image, gaussianKernel);

    // Threshold the image
    const thresholdValue = 128;
    image = threshold(image, thresholdValue);

    // Save the processed image
    image.write('outputImage.png', () => console.log('Image processing complete!'));
  })
  .catch((err) => {
    console.error('Error:', err);
  });