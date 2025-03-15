
import { IUser } from "../interfaces";
import { UserRepository } from "../repository/user.repository";

export class UserService {
  private userRepository: UserRepository;

  constructor(){
    this.userRepository = new UserRepository();
  }

  getUsers = async():Promise<IUser[]> => {
    try {
      const users = await this.userRepository.getUsers();
      return users;
    } catch (error) {
      console.error(error);
      throw new Error(`Error while fetching users: ${error}`); 
    }
  }
}