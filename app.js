const Express = require('express')
const cors = require('cors')
const sequelize = require('./util/database');
const bodyParser = require('body-parser');
const user = require('./controller/usercontroller')

const app = Express();
app.use(bodyParser.json())
app.use(cors({
    origin:'*'
}))
app.post('/post' , user.postData) ;
app.get('/get' , user.getData) ;
app.delete('/del/:id' ,user.deleteData)
sequelize.sync()
.then(result=>{
    app.listen(3600)
    console.log('port runnig')
  //  console.log(result);
})