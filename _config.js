var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://rbomett:aDm1n$TR8r@cluster0.hdazh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    development: 'mongodb+srv://rbomett>:aDm1n$TR8r@cluster0.hdazh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
    test: 'mongodb+srv://rbomett:aDm1n$TR8r@cluster0.hdazh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
}
module.exports = config;
//mongodb+srv://<USERNAME>:<PASSWORD>@gallery.wc344.mongodb.net/darkroom-dev?retryWrites=true&w=majority
// mongodb+srv://rbomett:<password>@cluster0.hdazh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
