import { Field, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryColumn } from 'typeorm';
@ObjectType()
@Entity()
export class Blogs {
  @Field()
  @Column()
  blog1: string;
  @Field()
  @Column()
  blog2: string;
  @PrimaryColumn()
  date?: string;
}
