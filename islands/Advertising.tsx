import { useState } from "preact/hooks";
import { Advertising } from "../features/advertising/advertising.types.ts";
import { IS_BROWSER } from "$fresh/runtime.ts";

type AdvertisingCardProps = {
  advertising: Advertising;
};

export default function AdvertisingCard({ advertising }: AdvertisingCardProps) {
 
  const handleDelete = async () => {
    await fetch("/api/advertising/" + advertising.advertisingId, {
      method: "DELETE",
    });
  };
  return (
    <li>
      <h3>{advertising.title}</h3>
      <p>{advertising.description}</p>
      <p>{advertising.tags.join(", ")}</p>
      <p>{advertising.category}</p>

      <button disabled={!IS_BROWSER} onClick={handleDelete}>Delete</button>
    </li>
  );
}
