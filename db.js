const mongoose=require('mongoose')

main().then(()=>{console.log('DB connected successfully.')})
main().catch(err => console.log(err))

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/test-db')}