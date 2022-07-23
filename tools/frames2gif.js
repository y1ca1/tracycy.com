// import fs from 'fs';
import * as fs from 'fs/promises';
import path from 'path';
// eslint-disable-next-line import/no-extraneous-dependencies
import Bannerbear from 'bannerbear';

// const bb = new Bannerbear('bb_pr_59039e8116c745c7cac35e19272e78');
const directory = '/Users/yicai/Personal/tracycy.com/src/tools';

const loopFiles = async (dir = directory) => {
  try {
    const files = await fs.readdir(dir);

    for (const file of files) {
      const p = path.join(directory, file);
      const stat = await fs.stat(p);

      if (stat.isFile()) {
        console.log(`${p}  file.`);
      } else if (stat.isDirectory()) {
        console.log(`${p}  directory.`);
      }
    }
  } catch (e) {
    console.error(e);
  }
};

loopFiles();

// bb.create_animated_gif('template uid', {
//   frames: [
//     [
//       // frame 1 starts here
//       {
//         name: 'layer1',
//         text: 'This is my text',
//       },
//       {
//         name: 'photo',
//         image_url: 'https//www.pathtomyphoto.com/1.jpg',
//       },
//     ],
//     [
//       // frame 2 starts here
//       {
//         name: 'layer1',
//         text: 'This is my follow up text',
//       },
//       {
//         name: 'photo',
//         image_url: 'https://www.pathtomyphoto.com/2.jpg',
//       },
//     ],
//   ],
// })
//   .then(() => {
//     console.log('done');
//   })
//   .catch(err => {
//     console.log(err);
//   });
