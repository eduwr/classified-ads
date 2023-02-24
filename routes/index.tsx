import { Head } from "$fresh/runtime.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import {
  createAdvertising,
  getAdvertisings,
} from "../features/advertising/advertising.service.ts";
import { Advertising } from "../features/advertising/advertising.types.ts";

const NAMES = ["Alice", "Bob", "Charlie", "Dave", "Eve", "Frank"];

interface Data {
  advertisingList: Advertising[];
  input: Partial<Advertising>;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const category = url.searchParams.get("category") || "";
    const description = url.searchParams.get("description") || "";
    const tags = url.searchParams.get("tags") || "";
    const title = url.searchParams.get("title") || "";

    const allAds = getAdvertisings();

    const newAds = createAdvertising({
      category,
      description,
      tags: tags.split(","),
      title,
    });

    return ctx.render({ advertisingList: [...allAds, newAds], input: newAds });
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
        <form>
          <label name="title">title:</label>
          <input type="text" name="title" value={input.title} />
          <label name="description">description:</label>
          <input type="text" name="description" value={input.description} />
          <label name="tags">tags:</label>
          <input type="text" name="tags" value={input.tags} />
          <label name="category">Category:</label>
          <input type="text" name="category" value={input.category} />
          <button type="sumbit">Create Ads</button>
        </form>
        <ul>
          {advertisingList.map((ad) => (
            <li>
              <h3>{ad.title}</h3>
              <p>{ad.description}</p>
              <p>{ad.tags.join(", ")}</p>
              <p>{ad.category}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
