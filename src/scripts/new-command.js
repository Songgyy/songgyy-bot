const fs = require('fs')


function main() {
  const name = process.argv.slice(2)[0];

  const template_path = `${__dirname}/../commands/example/ping.js`;
  const dest_path = `${__dirname}/../commands/${name}.js`

  if (!name) {
    console.log("Must provide a name.");
    return;
  }

  if (!fs.existsSync(template_path)) {
    console.log(`Template file does not exists, ${template_path}`);
    return;
  }

  if (fs.existsSync(dest_path)) {
    console.log(`Destination file exists, ${dest_path}`);
    return;
  }

  fs.readFile(template_path, 'utf8', (err,data) => {
    if (err) return console.log(err);
    let result = data.replace(/\$name/g, name);

    fs.writeFile(dest_path,
                  result, 'utf8', (err) => {
       if (err) return console.log(err);
    });

    console.log(`Created base command file in commands/${name}.js`);
  });

}


main()
