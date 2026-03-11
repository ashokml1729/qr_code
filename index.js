import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
.prompt([
    {
        message: "Enter your url.",
        name: "url",
    },
])
.then((answers) => {
    const urlName = answers.url;
    var qrCode = qr.image(urlName);
    qrCode.pipe(fs.createWriteStream("qrCode.png"));

    fs.writeFile("url.txt", urlName, (err) => {
        if (err) throw err;
        console.log("File has been saved!");
    });
})
.catch((err) => {
    if (err.isTtyError) {
        console.log("Prompt couldn't rendered in the current environment.");
    } else {
        console.log("Somenthing else went wrong.");
    }
});