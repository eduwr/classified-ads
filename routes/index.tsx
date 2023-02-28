import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import {
  createAdvertising,
  getAdvertisings,
} from "../features/advertising/advertising.service.ts";
import { Advertising } from "../features/advertising/advertising.types.ts";
import AdvertisingCard from "../islands/Advertising.tsx";

interface Data {
  advertisingList: Advertising[];
  input: Partial<Advertising>;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const ads = getAdvertisings();
    return ctx.render({ advertisingList: ads, input: {} });
  },
  async POST(req, ctx) {
    const formData = await req.formData();

    const category = formData.get("category") || "";
    const description = formData.get("description") || "";
    const tags = formData.get("tags") || "";
    const title = formData.get("title") || "";

    createAdvertising({
      category: category.toString(),
      description: description.toString(),
      tags: tags.toString().split(", "),
      title: title.toString(),
    });

    const allAds = getAdvertisings();

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
          <button type="sumbit">Create Ads</button>
        </form>
        <ul>
          {advertisingList.map((ad) => (
            <AdvertisingCard key={ad.advertisingId} advertising={ad} />
          ))}
        </ul>
      </div>
    </>
  );
}
