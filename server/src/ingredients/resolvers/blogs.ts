import { AppDataSource } from '../../parkour';
import { Query, Resolver } from 'type-graphql';
import { ids } from '../data';
import { Blogs } from '../entities/Blogs';
@Resolver()
export class BlogsResolver {
  @Query(() => Blogs)
  async gibBlogs(): Promise<Blogs> {
    const myData = AppDataSource.getRepository(Blogs);
    let new_date = new Date();
    const dateNhp =
      new_date.getDate().toString() +
      new_date.getMonth().toString() +
      new_date.getFullYear().toString();
    const isDateInit = await myData.find({
      where: { date: dateNhp },
    });
    if (isDateInit.length) return isDateInit[0];

    let cur_date = dateNhp;
    let id1 = ids[Math.floor(Math.random() * ids.length)];
    let id2 = ids[Math.floor(Math.random() * ids.length)];
    const newBlogs = myData.create({
      blog1: id1,
      blog2: id2,
      date: cur_date,
    });
    await myData.insert(newBlogs);
    return newBlogs;
  }
}
