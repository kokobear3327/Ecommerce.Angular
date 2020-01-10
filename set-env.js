require('dotenv').config();
const fs = require('fs');
const colors = require('colors');

// Configure file path 
const targetPath = './src/environments/environment.ts';
const targetProdPath = './src/environments/environment.prod.ts';


// `environment.ts` file structure
const envConfigFile = `export const environment = {
   apiKey: '${process.env.API_KEY}',
   production: false
  };
`;

// `environment.prod.ts` file structure
const envConfigProdFile = `export const environment = {
  apiKey: '${process.env.API_KEY}',
  production: true
  }
`;

console.log(
  colors.magenta(
    'The file `environment.ts` will be written with the following content: \n'
  )
);

console.log(colors.grey(envConfigFile));

fs.writeFile(targetPath, envConfigFile, function(err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(
      colors.magenta(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      )
    );
  }
});

console.log(
  colors.magenta(
    'The file `environment.prod.ts` will be written with the following content: \n'
  )
);

console.log(colors.grey(envConfigProdFile));
fs.writeFile(targetProdPath, envConfigProdFile, function(err) {
  if (err) {
    throw console.error(err);
  } else {
    console.log(
      colors.magenta(
        `Angular environment.prod.ts file generated correctly at ${targetProdPath} \n`
      )
    );
  }
});
