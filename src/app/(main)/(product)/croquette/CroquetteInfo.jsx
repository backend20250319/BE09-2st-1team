"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductCard from "../product/ProductCard";
import products from "../product/product";

export default function CroquetteInfo() {
  const pathname = usePathname();

  useEffect(() => {
    // AOS 초기화
    AOS.init({
      duration: 800,
      once: false,
    });
    AOS.refresh();
  }, [pathname]);

  const croquetteItems = products.slice(4, 8);

  return (
    <>
      <div className="relative w-full h-[45vw] pt-[4%] pb-[5%]">
        <img src="/images/products/product_main.jpg" alt="통옥수수빵" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex items-center justify-center" data-aos="fade-up">
          <span className="text-6xl font-bold text-white">오븐에 구운 고로케</span>
        </div>
      </div>
      <div className="relative w-full h-[430px] mt-23">
        <img src="/images/croquette/croquette-bg.png" alt="고로케 소개 배경" className="object-cover w-full h-full" />
        <div className="absolute inset-0 flex flex-col items-left pt-[7%]">
          <span className="ml-8 text-6xl font-bold mt-25 text-amber-300" data-aos="fade-up">
            오븐에 구운 고로케
          </span>
          <span className="mt-5 ml-8 text-xl text-white" data-aos="fade-up" data-aos-delay="100">
            삼송빵집의 두번째 베스트 메뉴!! <br />
            신선한 야채를 가득 넣은 고로케
          </span>
        </div>
      </div>
      <div className="relative w-full h-auto mb-24">
        {/* 이미지 영역 (absolute) */}
        <div className="absolute top-[-15%] left-0 w-[50%] px-4">
          <img src="/images/croquette/croquette-img.png" alt="고로케 상세 소개" className="object-cover w-full" />
        </div>

        {/* 텍스트 영역 (오른쪽으로 밀어냄) */}
        <article className="ml-auto w-full lg:w-[55%] px-6 pt-[180px] pl-[100px]">
          {[1, 2, 3].map((num, idx) => {
            const title = [
              "건강에서 시작한 오븐에 구운 고로케",
              "황해도 만두에서 시작된 고로케",
              "다양한 맛을 제공하는 고로케",
            ][idx];

            const desc = [
              <>
                2000년 초 튀긴 고로케는 이미 시장에 많이 나와 있었지만
                <br />
                업장에서 깨끗한 기름을 유지하는 것은 어려운 점이 많았습니다.
                <br />
                당시 유행하던 ‘웰빙’ 컨셉에 맞춰 오븐에 구운 고로케를 개발하게 되었습니다.
              </>,
              <>
                만두로 유명한 황해도 출신인 선대의 경험을 바탕으로 박성욱대표가
                <br /> 개발했기 때문에 삼송빵집의 고로케는 얇은 빵 두께와 푸짐한 속재료로
                <br /> 채우는 형태로 만들어지게 되었습니다.
              </>,
              <>
                10년 전 통옥수수빵과 현재의 통옥수수빵은 다릅니다. 다른 빵에 비해 속재료 사용이 자유롭기 때문에 <br />
                현재 판매되고 있는 4종의 제품 외에도 닭갈비, 커리, 짜장 등
                <br />
                다양한 제품들을 시도 하고 있습니다.
              </>,
            ][idx];

            return (
              <div
                key={num}
                className="flex items-start mb-12"
                data-aos="fade-left"
                data-aos-delay={`${200 + idx * 100}`}
              >
                <span className="pr-[20px] text-[80px] font-thin font-['Cafe24Decobox'] text-[#f5b335] leading-none select-none mr-6 lg:mr-8">
                  {`0${num}`}
                </span>
                <div>
                  <h2 className="mb-4 text-2xl font-bold text-black md:text-3xl lg:text-4xl">{title}</h2>
                  <p className="text-base leading-relaxed text-gray-500 md:text-lg">{desc}</p>
                </div>
              </div>
            );
          })}
        </article>
      </div>

      {/* 제품 카드 영역 */}
      <div className="flex flex-col items-center justify-center ml-5">
        <h2 className="text-center text-[#212121] text-[40px] font-bold leading-[48px] pt-[80px] ">제품소개</h2>
        <div className="pt-[2%] ">
          <ProductCard items={croquetteItems} />
        </div>
      </div>
    </>
  );
}
