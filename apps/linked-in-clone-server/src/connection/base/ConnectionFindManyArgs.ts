/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConnectionWhereInput } from "./ConnectionWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ConnectionOrderByInput } from "./ConnectionOrderByInput";

@ArgsType()
class ConnectionFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ConnectionWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ConnectionWhereInput, { nullable: true })
  @Type(() => ConnectionWhereInput)
  where?: ConnectionWhereInput;

  @ApiProperty({
    required: false,
    type: [ConnectionOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ConnectionOrderByInput], { nullable: true })
  @Type(() => ConnectionOrderByInput)
  orderBy?: Array<ConnectionOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ConnectionFindManyArgs as ConnectionFindManyArgs };
