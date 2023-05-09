/* eslint-disable prettier/prettier */
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'


@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly usersService: UsersService,
  ) {}
  async validateUser(email:string,passw:string):Promise<any>{
    const user=await this.usersService.getUser(email);
    console.log(user)
    if (!user){
        throw new UnauthorizedException('User not found(email)')}
    if ( !bcrypt.compareSync( passw, user.password)){
        throw new UnauthorizedException('Wrong password')
    } else{
        const{password, ...result}=user;
        return result
    }}

  async login(user: any) {
    console.log(user);

    const payload = { username: user.username, email: user.email };
    console.log(payload);

    const token = this.jwtService.sign(payload);

    return {
      access_token: token,
      user: user.username,
      email: user.email
    };
  }
}
