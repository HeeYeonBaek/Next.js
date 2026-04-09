// async function getCachedTime() {
//   return new Date().getFullYear()
// }


import { Suspense } from "react";
import { Copyright } from "@/app/copyright/cached-component";

export default function Footer(){
  return( 
  <footer lang="en" className="border-t border-slate-100 py-8 text-center text-xs text-slate-400">
      <Suspense>
        <Copyright />
      </Suspense>
  </footer>
)
}