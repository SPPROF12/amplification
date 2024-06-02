/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { EnumConnectionStatus } from "./EnumConnectionStatus";
import { User } from "../../user/base/User";

@ObjectType()
class Connection {
  @ApiProperty({
    required: false,
    type: () => Connection,
  })
  @ValidateNested()
  @Type(() => Connection)
  @IsOptional()
  connection?: Connection | null;

  @ApiProperty({
    required: false,
    type: () => [Connection],
  })
  @ValidateNested()
  @Type(() => Connection)
  @IsOptional()
  connections?: Array<Connection>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    enum: EnumConnectionStatus,
  })
  @IsEnum(EnumConnectionStatus)
  @IsOptional()
  @Field(() => EnumConnectionStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;

  @ApiProperty({
    required: false,
    type: () => User,
  })
  @ValidateNested()
  @Type(() => User)
  @IsOptional()
  user?: User | null;
}

export { Connection as Connection };
