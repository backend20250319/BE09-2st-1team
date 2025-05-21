"use client";
import Image from "next/image";
import React from "react";

export default function Section02() {
  return (
    <section className="pt-[5%] pb-[4%]">
      <div className="w-[96%] mx-auto">
        <div className="mb-[50px]">
          <dl className="flex py-[70px]">
            <dt className="p-[30px] w-[450px] text-[45px] text-[#512d1e] font-semibold flex flex-col gap-1">
              <span>B.I</span>
              <br />
              <span className="text-[#f5b335] text-[38px]">Brand Identity</span>
            </dt>
            <dd>
              <Image src={"/images/identi/brand-Brand-Identity.png"} width={800} height={0} alt="brand2-sig-kr" />
              <Image src={"/images/identi/brand2-sig-en.png"} width={800} height={0} alt="brand2-sig-en" />
            </dd>
          </dl>
          <dl className="border-t-2 border-[#512d1e]"></dl>
          <dl className="flex py-[70px] before:absolute before:top-0 before:right-0">
            <dt className="p-[30px] w-[450px] text-[45px] text-[#512d1e] font-semibold flex flex-col gap-1">
              <span>심볼</span>
              <br />
              <span className="text-[#f5b335] text-[38px]">Symbol</span>
            </dt>
            <dd>
              <Image src={"/images/identi/brand2-symbol.png"} width={184} height={0} alt="brand2-symbol" />
            </dd>
          </dl>
        </div>
      </div>
    </section>
  );
}
