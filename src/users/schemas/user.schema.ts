import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

import { Role } from 'src/types/role.enum';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true })
  name: string;

  @Prop()
  password: string;

  @Prop({ default: Role.User })
  role: Role;
}

export const UserSchema = SchemaFactory.createForClass(User);
