let user, host, database, password;

if (process.env.MODE === 'production') {

  user = 'dbwbapms...tw';
 
  host = 'ec2-23-xx-xxx-222.compute-1.amazonaws.com';
 
  database = 'd6k1oq...248qd';
 
  password = '9ee8f......e4691e9159d447132ca02';
 
 } else {
 
  user = 'node_user';
 
  host = 'localhost';
 
  database = 'usersdb';
 
  password = 'node_password';
 
 };
 
 
 module.exports = { user, host, database, password, port: 5432 };


