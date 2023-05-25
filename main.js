// Create IPFS instance
import * as IPFS from 'ipfs-core';
// import { create } from 'ipfs-client'
// import * as IPFS2 from 'ipfs-http-client';
import fs from 'fs';

// const ipfs = IPFS2.create();

// const fs = 'C:/Users/Admin/Documents/art/ipfs/mtn.PNG';
// const img = 'https://www.lotech.co.nz/wp-content/uploads/2016/12/model-hyperdeck-studio-pro_2x-550x200.jpg';

// const addImageToIPFS = async () => {
//   try {
//     // const fileContent = fs.readFileSync(filePath);
//     const result = await ipfs.add(img);
//     console.log('Image added to IPFS:', result.cid.toString());
//   } catch (error) {
//     console.error('Error adding file to IPFS:', error);
//   }
// };

// addImageToIPFS();

// const client = create({
//   grpc: '/ip4/127.0.0.1/tcp/5003/ws',
//   http: '/ip4/127.0.0.1/tcp/5002/http'
// })

// const id = await client.id()

// async function main() {
// const node = await IPFS.create();


// const fileAdded = await node.add({
//   path: "test.txt",
//   content: "Hello IPFS!",
// });

// console.log("Added file:", fileAdded.path, fileAdded.cid);
// }

// main();

// Function to handle image upload
async function uploadImages() {
  const ipfs = await IPFS.create();
  console.log('working...')
  // const fileInput = 'hiiiii';
  // const files = fileInput.files;

  // if (files.length === 0) {
  //   alert('Please select at least one image file.');
  //   return;
  // }

  // for (let i = 0; i < files.length; i++) {
  //   const file = files[i];

    try {
      const file = 'C:/Users/Admin/Documents/art/ipfs/mtn.PNG';
      const content = fs.readFileSync(file)
      const added = await ipfs.add(content, {encoding: 'base64'});
      // const imageUrl = `https://ipfs.io/ipfs/${added.cid}`;
      const imageUrl = added.cid

      // const imageMetadata = {
      //   name: files.name,
      //   size: files.size,
      //   type: files.type,
      //   addedOn: new Date().toLocaleString(),
      // };

      // displayImage(imageUrl, imageMetadata);
      console.log(imageUrl)
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  
}
uploadImages()

// Function to display the uploaded image
function displayImage(imageUrl, metadata) {
  const gallery = document.getElementById('gallery');
  const imageContainer = document.createElement('div');
  imageContainer.className = 'image-container';

  const imgElement = document.createElement('img');
  imgElement.src = imageUrl;

  const metadataElement = document.createElement('p');
  metadataElement.textContent = `Name: ${metadata.name}\nSize: ${metadata.size} bytes\nType: ${metadata.type}\nAdded On: ${metadata.addedOn}`;

  imageContainer.appendChild(imgElement);
  imageContainer.appendChild(metadataElement);
  gallery.appendChild(imageContainer);
}
