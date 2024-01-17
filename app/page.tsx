import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Link from "next/link";

export default async function Index() {
  const cookieStore = cookies();

  const canInitSupabaseClient = () => {
    // This function is just for the interactive tutorial.
    // Feel free to remove it once you have Supabase connected.
    try {
      createClient(cookieStore);
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();

  return (
    <div className=" text-primary">
      <main className="mt-12 flex flex-col items-center max-w-xl">
        {/* Hero */}
        <div className="flex-1 flex flex-col gap-2 items-center">
          <h2 className="text-4xl text-center">Queer Wordchains</h2>
          <h4>{'<3'}</h4>
        </div>

        <hr className="my-4 w-full border-[#0000001a] border-solid"/>

        {/* Page Select */}
        <div className="w-full mb-4">
          <div className="flex justify-center flex-wrap text-[1.25rem] leading-8 items-center gap-8">
            <Link href={""} className="border-xs border-primary px-4 py-2 rounded-[0.3rem]">Read Chains</Link>
            <Link href={""} className="border-xs border-primary px-4 py-2 rounded-[0.3rem]">Send Chains</Link>
          </div>
        </div>

        {/* Text */}
        {/* Add decoration so they know Sleyca and Super Supportive are clickable */}
        <div className="">
          <h4 className="">
            "...they work based on a simple concept—equal exchange. I give you my sense of balance for three hours. You give me yours for three hours. I take your strength today. You take mine tomorrow.”
            <br />- <Link href={'https://www.royalroad.com/fiction/63759/super-supportive/chapter/1473290/one-hundred-seven-opposite-stone'} className="text-link italic underline">Super Supportive</Link>, ch. 107

            <br /><br />

            {/* Needs another kind of barrier. how? Different color? */}

            Created by author{' '}
            <Link href={'https://www.patreon.com/Sleyca'} className="text-link italic underline">Sleyca</Link> for their web serial{' '}
            <Link href={'https://www.royalroad.com/fiction/63759/super-supportive'} className="text-link italic underline">Super Supportive</Link>,
            wordchains are a form of magic that enable users to give and take by saying a magic phrase. It works through a basic concept: equal exchange.
            <br /><br />
            Born from that idea, this website was created. If you're having a particularly rough day and need some words of encouragement, please feel free to read a chain someone else left behind!
            And then one day, when you find yourself feeling good or have some nugget of wisdom to share, please come back and pass it on! You never know the impact a few kind words might have.
            <br /><br />
            Anyhow, that's all there is to it! Thanks for visiting! Remember, you're never alone, and the future is always bright.
            <br /><br />
            - Justin {'<3'}
            <br /><br />
            PS. If it's your cup of tea (or even if it's not!), consider giving <Link href={'https://www.royalroad.com/fiction/63759/super-supportive'} className="text-link italic underline">Super Supportive</Link> a try! It's a fun story, and Sleyca is an amazing writer.
          </h4>
        </div>

        {/* Info */}
        {/* <div className="w-full">
          <div className="flex flex-col text-base items-center gap-2">
            <Link href={"/wordchains"} className="border-xs border-primary px-4 py-2 rounded-[0.3rem]">What are Wordchains?</Link>
            <Link href={"/wordchains"} className="border-xs border-primary px-4 py-2 rounded-[0.3rem]"></Link>
          </div>
        </div> */}
      </main>
    </div>
  );
}
