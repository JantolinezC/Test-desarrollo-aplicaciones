const UserController = require("./user-controller");
const User = require("./user");

const userController = new UserController();

test('add user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    expect(userController.getUsers()).toContain(user);
  });

test('remove user to userController', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    expect(userController.getUsers()).not.toContain(user);
  });

test('find by email', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);  
    userController.remove(user);  
    let foundUser = userController.findByEmail("santiago@generation.org");
    expect(userController.getUsers()).not.toContain(user);
  });

  test('find by Id', () => {    
    let user = new User(1234,"Santiago", "santiago@generation.org");
    userController.add(user);    
    userController.remove(user);
    let foundUser = userController.findByEmail(1234);
    expect(userController.getUsers()).not.toContain(user);
  });

