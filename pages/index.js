import Head from "next/head";
import { useEffect, useState } from "react";
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
  const [data, setData] = useState([
    "dwv_1/EE01A075",
    "dwv_1/EE02E8BD",
    "dwv_1/EE03C1A5",
    "dwv_1/EE0A0513",
    "dwv_1/EE0A2452",
    "dwv_1/EE0A5210",
    "dwv_1/EE0A778D",
    "dwv_1/EE0B14A9",
    "dwv_1/EE0B5196",
    "dwv_1/EE0B730A",
    "dwv_1/EE0B78F4",
    "dwv_1/EE0BEDB7",
    "dwv_1/EE0BF30E",
    "dwv_1/EE0C5373",
    "dwv_1/EE0CA143",
    "dwv_1/EE0D10E6",
    "dwv_1/EE0D8DE8",
    "dwv_1/EE0E5BAD",
    "dwv_1/EE0F0609",
    "dwv_1/EE0F8E35",
    "dwv_1/EE0F9374",
    "dwv_1/EE0F9D48",
    "dwv_1/EE1AABDB",
    "dwv_1/EE1B4701",
    "dwv_1/EE1B8C04",
    "dwv_1/EE1C9CBB",
    "dwv_1/EE1D1E83",
    "dwv_1/EE1D3F40",
    "dwv_1/EE1E6476",
    "dwv_1/EE1E81F1",
    "dwv_1/EE1F00E2",
    "dwv_1/EE2AA1DE",
    "dwv_1/EE2C44AD",
    "dwv_1/EE2CA82B",
    "dwv_1/EE2DD690",
    "dwv_1/EE2DE481",
    "dwv_1/EE2E9279",
    "dwv_1/EE2EBCED",
    "dwv_1/EE2F88BD",
    "dwv_1/EE2FA65D",
    "dwv_1/EE2FB1B2",
    "dwv_1/EE2FFF0F",
    "dwv_1/EE3A6B6E",
    "dwv_1/EE3ACB6F",
    "dwv_1/EE3C0ECC",
    "dwv_1/EE3D2BC1",
    "dwv_1/EE3D2CFB",
    "dwv_1/EE3EF939",
    "dwv_1/EE3F8347",
    "dwv_1/EE3FCBFB",
    "dwv_1/EE4AE8C3",
    "dwv_1/EE4BA693",
    "dwv_1/EE4C4AD2",
    "dwv_1/EE4C8D02",
    "dwv_1/EE4C9D6C",
    "dwv_1/EE4CED1D",
    "dwv_1/EE4D1BDE",
    "dwv_1/EE4EAEAD",
    "dwv_1/EE4EC24C",
    "dwv_1/EE4F5888",
  ]);

  useEffect(() => app.loadURLs(data), []);

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
