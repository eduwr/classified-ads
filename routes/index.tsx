import { Head } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import AdsList from "../islands/AdsList.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Classified Ads</title>
      </Head>
      <div>
        <p>

        </p>
        <Counter start={0} />
          <AdsList />
      </div>
    </>
  );
}
