const express = require('express')
const fs = require('fs');

const match_file_pattern = new RegExp('^.*\.(jpg|JPG|jpeg|JPEG|gif|GIF|png|PNG)$');

const router = express.Router()

router.get('/', (request, response) => {
    let imageUrls = getFiles('uploads');
    response.json(imageUrls);
})

function getFiles(dir, files_) {
    files_ = files_ || [];
    let files = fs.readdirSync(dir);
    for (let i in files) {
        let file_name = files[i];
        let relative_file_name = dir + '/' + file_name;
        if (fs.statSync(relative_file_name).isDirectory()) {
            getFiles(relative_file_name, files_);
        } else if (match_file_pattern.test(file_name)) {
            files_.push('/images/' + file_name);
        }
    }
    return files_;
}

module.exports = router