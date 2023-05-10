import mongoose from 'mongoose';


// const mongodbURL = 'mongodb+srv://sujan:sujan@cluster0.wmqskss.mongodb.net/?retryWrites=true&w=majority';
export default function connectMongoDB(mongodbURL) {
  return new Promise(function (resolve, reject) {
    // Set mongoose properties
    mongoose.set('strictQuery', false);
    // Connect
    // eslint-disable-next-line
    mongoose.createConnection(mongodbURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }, function (err) {
      if (err) { reject(err); }
      resolve('Connected to MongoDB');
    });
  });
  
}

// connectMongoDB(mongodbURL).then((message)=>{console.log('server running with localhost:9000');}).catch((error) =>{console.error('Failed to connect to mongoDB',error);});

    


