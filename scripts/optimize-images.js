import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Create optimized versions of mockup images for the website
async function optimizeImages() {
  const mockupsDir = '/home/ubuntu/mockups';
  const outputDir = '/home/ubuntu/portfolio-website/public/images';
  
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  
  // Get all PNG files from mockups directory
  const files = fs.readdirSync(mockupsDir).filter(file => file.endsWith('.png'));
  
  console.log(`Found ${files.length} images to optimize`);
  
  for (const file of files) {
    const inputPath = path.join(mockupsDir, file);
    const fileName = path.basename(file, '.png');
    
    // Create WebP version (better compression, modern browsers)
    const webpOutputPath = path.join(outputDir, `${fileName}.webp`);
    await sharp(inputPath)
      .resize(1200) // Resize to reasonable max width
      .webp({ quality: 80 })
      .toFile(webpOutputPath);
    
    // Create optimized PNG version (for fallback)
    const pngOutputPath = path.join(outputDir, `${fileName}.png`);
    await sharp(inputPath)
      .resize(1200)
      .png({ quality: 80, compressionLevel: 9 })
      .toFile(pngOutputPath);
    
    // Create thumbnail version for lazy loading
    const thumbOutputPath = path.join(outputDir, `${fileName}-thumb.webp`);
    await sharp(inputPath)
      .resize(20) // Very small for blur-up technique
      .webp({ quality: 20 })
      .toFile(thumbOutputPath);
    
    console.log(`Optimized: ${file}`);
  }
  
  console.log('Image optimization complete!');
}

// Create placeholder images for the portfolio
async function createPlaceholderImages() {
  const outputDir = '/home/ubuntu/portfolio-website/public/images';
  
  // Create project placeholder images
  const colors = ['#0088FF', '#C41E3A', '#A7E8BD', '#4A5568'];
  const sizes = [600, 400];
  
  for (let i = 0; i < 4; i++) {
    const color = colors[i];
    const outputPath = path.join(outputDir, `project-${i+1}.webp`);
    
    await sharp({
      create: {
        width: sizes[0],
        height: sizes[1],
        channels: 4,
        background: color
      }
    })
    .webp()
    .toFile(outputPath);
    
    console.log(`Created placeholder: project-${i+1}.webp`);
  }
  
  // Create profile image placeholder
  await sharp({
    create: {
      width: 400,
      height: 400,
      channels: 4,
      background: '#1A2A3A'
    }
  })
  .webp()
  .toFile(path.join(outputDir, 'profile.webp'));
  
  console.log('Placeholder images created!');
}

// Run both functions
async function main() {
  try {
    // First install sharp if not already installed
    if (!fs.existsSync('/home/ubuntu/portfolio-website/node_modules/sharp')) {
      console.log('Installing sharp package...');
      // This would normally be done with a package manager, but for this script we'll assume it's available
    }
    
    await optimizeImages();
    await createPlaceholderImages();
    console.log('All image processing complete!');
  } catch (error) {
    console.error('Error processing images:', error);
  }
}

main();
