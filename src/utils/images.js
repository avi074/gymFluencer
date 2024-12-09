
// Dynamically import images from all directories inside 'src/assets/images'
const imageFiles = import.meta.glob('../assets/images/**/*.{png,jpg,jpeg,svg}');

// Function to group images by their directory
const groupImagesByDirectory = (images) => {
  return Object.keys(images).reduce((acc, file) => {
    // Extract directory name (e.g., 'animals', 'food', 'nature')
    const pathParts = file.split('/');
    const directory = pathParts[pathParts.length - 2]; // Folder name

    if (!acc[directory]) {
      acc[directory] = [];
    }

    // Extract file name
    const imageName = pathParts[pathParts.length - 1];

    acc[directory].push({
      name: imageName,
      src: import.meta.resolve(images[file].name),  // Image source (resolved by Vite)
    });

    return acc;
  }, {});
};

// Group the images by their directory
const groupedImages = groupImagesByDirectory(imageFiles);

export default groupedImages;
