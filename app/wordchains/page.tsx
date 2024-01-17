import { createClient } from '@/utils/supabase/server';
import { PostgrestSingleResponse } from '@supabase/supabase-js';
import { cookies } from 'next/headers';
import { ReactElement } from 'react';

type WordChainObject = {
  text: string;
}

export default async function Notes() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  // const test = await supabase.from("wordchains").select();

  
  let { data: wordchains }: PostgrestSingleResponse<any[]> = await supabase.from('wordchains').select('text')
  wordchains = wordchains ? wordchains.map((item: WordChainObject) => item.text) : []

  return (
    <div>
      {wordchains.length > 0
        // 
        ? <div>
            {wordchains}
          </div>
        : <div>
            No wordchains found {':('}
          </div>
      }
    </div>
  )
}


    // <div className="flex items-center justify-center mt-16">
    //   <div className="text-indigo-600 inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md transition ease-in-out duration-150 cursor-not-allowed">
    //     <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
    //       <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
    //       <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    //     </svg>
    //     Loading...
    //   </div>
    // </div>