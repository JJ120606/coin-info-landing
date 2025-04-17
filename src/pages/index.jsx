import React from "react";
import Head from "next/head";
import "../styles/globals.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>코인 정보 신청</title>
      </Head>
      <div className="min-h-screen bg-black text-white font-sans">
        <header className="text-center py-10 bg-gradient-to-br from-yellow-700 to-black">
          <h1 className="text-4xl font-extrabold text-yellow-400 drop-shadow-md">
            고민만 하세요? 무료로 코인 상담 받으세요
          </h1>
          <p className="text-gray-300 mt-4">AI 기반 전략, 도지코인 감성까지 다 담았습니다</p>
        </header>

        <section className="text-center text-sm text-gray-500 my-4">
          <p>2025년 04월 17일 기준</p>
        </section>

        <section className="bg-gray-900 py-10 px-6 max-w-xl mx-auto rounded-xl border border-yellow-600 shadow-2xl">
          <p className="text-red-400 text-sm font-semibold text-center mb-4">
            ※ 본인 명의 신청만 가능하며, 전문 매니저가 연락드립니다.
          </p>
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="이름 (한글만)" className="p-3 rounded bg-gray-800 text-white" />
            <input type="number" placeholder="나이 (예: 34)" className="p-3 rounded bg-gray-800 text-white" />
            <div className="flex space-x-2">
              <input type="tel" placeholder="010" maxLength={3} className="w-1/3 p-3 rounded bg-gray-800 text-white" />
              <input type="tel" placeholder="0000" maxLength={4} className="w-1/3 p-3 rounded bg-gray-800 text-white" />
              <input type="tel" placeholder="0000" maxLength={4} className="w-1/3 p-3 rounded bg-gray-800 text-white" />
            </div>

            <div className="text-left text-sm text-white">
              <label className="block mb-1">Q. 코인 투자 경험이 있으신가요?</label>
              <div className="flex items-center space-x-4">
                <label><input type="radio" name="experience" className="mr-1" /> 있음</label>
                <label><input type="radio" name="experience" className="mr-1" /> 없음</label>
              </div>
            </div>

            <div className="text-left text-sm text-white">
              <label className="block mb-1 mt-3">Q. 투자금액을 선택해주세요</label>
              <div className="grid grid-cols-2 gap-2">
                <label><input type="radio" name="amount" className="mr-1" /> 1천만원 이하</label>
                <label><input type="radio" name="amount" className="mr-1" /> 3천 이하</label>
                <label><input type="radio" name="amount" className="mr-1" /> 3천~1억</label>
                <label><input type="radio" name="amount" className="mr-1" /> 1억 이상</label>
              </div>
            </div>

            <button type="submit" className="bg-yellow-400 text-black font-bold py-3 rounded hover:bg-yellow-300 mt-4">
              무료 분석 신청하기
            </button>
          </form>
        </section>

        <footer className="text-center text-xs text-gray-500 py-6">
          © 2025 코인인포. 모든 권리 보유.
        </footer>
      </div>
    </>
  );
}
