import Head from "next/head";
import { useEffect, useState } from "react";
import useSWR from "swr";
import dwv from "dwv";

dwv.gui.getElement = dwv.gui.base.getElement;
const app = new dwv.App();
app.init({
  containerDivId: "dwv",
  tools: {
    Scroll: {},
  },
});

app.addEventListener("load", () => {
  app.canScroll();
  app.setTool("Scroll");
});

export default function Home() {
  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data } = useSWR("/api/files", fetcher);
  const [mount, setMount] = useState(false);

  useEffect(() => setMount(true), []);

  useEffect(() => {
    // load dicom data
    // app.setTool("Scroll");
    console.log({ data });
    if (!!data) {
      // app.loadURLs(["dwv_1/EE01762D", "dwv_1/EE0182B5", "dwv_1/EE01A075"]);
      app.loadURLs(data.slice(0, 60));
    }
  }, [data]);

  return (
    <div className="flex flex-col bg-black  items-center justify-center min-h-screen py-2">
      <Head>
        <title>dwv viewer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <div id="dwv" className="h-full">
          <div className="layerContainer"></div>
        </div>
      </main>

      <a className="text-gray-500 pb-12 font-bold" href="https://kndwin.dev">
        kndwin
      </a>
    </div>
  );
}
