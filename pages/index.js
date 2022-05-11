import Layout from "../components/layout";

export default function Home() {
  return (
    <section className="flex items-end justify-between pb-32">
      <div className="w-1/2 ml-20 mt-24 p-8">
        <div className="w-[450px] h-[382]">
          <h5 className="text-h5 font-barlow text-p-blue tracking-h5">
            SO, YOU WANT TO TRAVEL TO
          </h5>
          <h1 className="text-h1 font-bellefair text-p-white">SPACE</h1>
          <p className="font-barlow text-body text-p-blue">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience! Explore
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-1/2">
        <button className="text-h4 text-p-black w-landing-button h-landing-button bg-white rounded-full font-bellefair ">
          EXPLORE
        </button>
      </div>
    </section>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout bg={"bg-home-desktop"}>{page}</Layout>;
};
