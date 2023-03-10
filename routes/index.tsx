import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Advertising } from "../features/advertising/advertising.types.ts";
import AdvertisingCard from "../islands/AdvertisingCard.tsx";
import { advertisingModule } from "../features/advertising/advertising.module.ts";

interface Data {
  advertisingList: Advertising[];
  input: Partial<Advertising>;
}

export const handler: Handlers<Data> = {
  async GET(req, ctx) {
    const ads = await advertisingModule.index();
    return ctx.render({ advertisingList: ads, input: {} });
  },
  async POST(req, ctx) {
    const formData = await req.formData();

    const category = formData.get("category") || "";
    const description = formData.get("description") || "";
    const tags = formData.get("tags") || "";
    const title = formData.get("title") || "";

    advertisingModule.create({
      category: category.toString(),
      description: description.toString(),
      tags: tags.toString().split(", "),
      title: title.toString(),
    });

    const allAds = await advertisingModule.index();

    return ctx.render({ advertisingList: allAds, input: {} });
  },
};

export default function Home({ data }: PageProps<Data>) {
  const { advertisingList, input } = data;

  return (
    <>
      <Head>
        <title>Classified Ads</title>
      </Head>
      <div>
        <form method="post">
          <label name="title">title:</label>
          <input type="text" name="title" value={input.title} />
          <label name="description">description:</label>
          <input type="text" name="description" value={input.description} />
          <label name="tags">tags:</label>
          <input type="text" name="tags" value={input.description} />
          <label name="category">category:</label>
          <input type="text" name="category" value={input.description} />
          <button type="submit">Create Ads</button>
        </form>
        <ul>
          {advertisingList.map((ad) => (
            <AdvertisingCard key={ad._id?.toString()} advertising={ad} />
          ))}
        </ul>
      </div>
    </>
  );
}
