import express from 'express';
import {router} from './src/router/router'
import fileUpload from 'express-fileupload';
const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.use(express.static('public'))
app.use(express.json());
app.use(fileUpload({
    createParentPath: true
}))
app.use('',router);


app.listen(8080, () => {
    console.log('server is running on port 8080')
})