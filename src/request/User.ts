import Http from "@/request/Http";

class User extends Http {
  public prefix:string = 'api/users';

  public async join (data: any) {
    try {
      return await this.post('', data)
    } catch (e) {
      return e
    }
  }
}

export default new User()