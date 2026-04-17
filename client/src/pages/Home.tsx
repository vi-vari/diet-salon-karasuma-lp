/**
 * 美VARI Beauty Salon 四条烏丸整体院 LP
 * Design: Figma 1920w light
 * Colors: #f39f88 (accent/heading), #4b4f58 (subheading), #736357 (body), #3a3a3a (dark text)
 * CTA: LINE #4dce6e, HOT PEPPER #bf1391
 * Font: Inter, Noto Sans JP
 */

import { useRef } from "react";
import { MapView } from "@/components/Map";

const CDN = "https://d2xsxph8kpxj0f.cloudfront.net/310519663410806327/NFRy6cqKwQ2eYnH7FeCjbV";

const assets: Record<string, string> = {
  // FV
  "142-4":   `${CDN}/142-4_df677336.webp`,
  // B/A実績
  "142-19":  `${CDN}/142-19_d2aed65d.webp`,
  "142-21":  `${CDN}/142-21_69c3d77d.webp`,
  "142-23":  `${CDN}/142-23_f354476e.webp`,
  "142-25":  `${CDN}/142-25_09472292.webp`,
  "142-27":  `${CDN}/142-27_ab132d1c.webp`,
  "142-29":  `${CDN}/142-29_b921fcee.webp`,
  "142-31":  `${CDN}/142-31_5727c1d9.webp`,
  // 口コミグリッド画像（正確なFigma順序）
  // Row1: left=0, left=167.5, left=340, left=512.5 (top=0)
  "142-65":  `${CDN}/142-65_21a1a82d.webp`,   // col1 row1
  "142-67":  `${CDN}/142-67_982e0cf3.webp`,   // col2 row1
  "142-69":  `${CDN}/142-69_c2821db7.webp`,   // col3 row1
  "142-72":  `${CDN}/142-72_d0b87962.webp`,   // col4 row1
  // Row2: top=169-172
  "142-74":  `${CDN}/142-74_1bca7c55.webp`,   // col1 row2
  "148-292": `${CDN}/148-292_d9fc94b9.webp`,  // col2 row2
  "142-80":  `${CDN}/142-80_010a752a.webp`,   // col3 row2
  "148-291": `${CDN}/148-291_93b38a0f.webp`,  // col4 row2
  // Row3: top=341-345
  "142-57":  `https://d2xsxph8kpxj0f.cloudfront.net/310519663410806327/NFRy6cqKwQ2eYnH7FeCjbV/Link_30daf964.png`,   // col1 row3 (差し替え済み)
  "152-298": `${CDN}/152-298_f301a8b4.webp`,  // col2 row3
  "142-86":  `${CDN}/142-86_2d544839.webp`,   // col3 row3
  "148-293": `${CDN}/148-293_b8121bfa.webp`,  // col4 row3
  // こだわりセクション
  "142-105": `${CDN}/142-105_60ae51a5.webp`,
  "156-303": `${CDN}/156-303_afb943bb.webp`,
  "142-109": `${CDN}/142-109_cc52b634.webp`,
  "142-113": `${CDN}/142-113_131357dc.webp`,
  // スタッフ
  "142-125": `${CDN}/142-125_be3391fe.webp`,
  "142-177": `${CDN}/142-177_9b1e2880.webp`,
  // 店舗情報
  "142-181": `${CDN}/142-181_5b59a469.webp`,
  // BOOK特典
  "142-235": `${CDN}/142-235_ee01c237.webp`,
  "142-267": `${CDN}/142-267_e6939135.webp`,
  // 成功する理由
  "142-251": `${CDN}/142-251_9054752c.webp`,
  "142-256": `${CDN}/142-256_6e8c840a.webp`,
  "142-261": `${CDN}/142-261_05e7eac8.webp`,
  // 免許
  "142-280": `${CDN}/142-280_74b8451a.webp`,
  "142-281": `${CDN}/142-281_626b87aa.webp`,
  "142-282": `${CDN}/142-282_ce245d62.webp`,
};

function a(id: string) {
  return assets[id] || "";
}

// CTAボタンコンポーネント（同一タブで遷移）
function CTASection() {
  return (
    <div className="w-full bg-white py-8 px-5">
      <div className="max-w-[700px] mx-auto flex flex-col items-center gap-3">
        {/* LINEボタン */}
        <a
          href="https://lin.ee/wl9Qftk"
          className="flex items-center justify-center gap-3 w-[321px] h-[49px] bg-[#4dce6e] rounded-[3px] hover:opacity-90 transition-opacity"
          style={{ textDecoration: "none" }}
        >
          <i className="fab fa-line text-white text-2xl leading-none"></i>
          <span className="text-white text-[22px] font-semibold leading-none" style={{ fontFamily: "Inter, sans-serif" }}>LINE講座をスタート</span>
        </a>
        <p className="text-center text-[#3a3a3a] text-[15px] font-normal">1週間で痩せ体質を作る無料講座をプレゼント中🎁</p>
        {/* HOT PEPPERボタン */}
        <a
          href="https://beauty.hotpepper.jp/kr/slnH000752318/"
          className="flex items-center justify-center gap-3 w-[392px] h-[49px] bg-[#bf1391] rounded-[3px] hover:opacity-90 transition-opacity"
          style={{ textDecoration: "none" }}
        >
          <i className="fas fa-calendar-alt text-white text-2xl leading-none"></i>
          <span className="text-white text-[22px] font-semibold leading-none" style={{ fontFamily: "Inter, sans-serif" }}>ホットペッパーで予約する</span>
        </a>
        <p className="text-center text-[#3a3a3a] text-sm font-normal">今すぐ予約したい方はこちらからどうぞ</p>
        <p className="text-center text-[#3a3a3a] text-sm font-normal">ダイエットカウンセリングが初回限定500円🎉</p>
      </div>
    </div>
  );
}

// リストアイテム（Font Awesomeチェックアイコン）
function ListItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2 mb-2">
      <i className="fas fa-check-circle text-[#f39f88] text-xl mt-0.5 flex-shrink-0"></i>
      <span className="text-[#736357] text-base font-normal" style={{ fontFamily: "Inter, 'Noto Sans JP', sans-serif" }}>{text}</span>
    </div>
  );
}

export default function Home() {
  const mapRef = useRef<google.maps.Map | null>(null);

  // 口コミ画像グリッド（Figmaの正確な順序）
  // Row1: 142-65, 142-67, 142-69, 142-72
  // Row2: 142-74, 148-292, 142-80, 148-291
  // Row3: 142-57, 152-298, 142-86, 148-293
  const reviewImages = [
    { id: "142-65", alt: "お客様の声1" },
    { id: "142-67", alt: "お客様の声2" },
    { id: "142-69", alt: "お客様の声3" },
    { id: "142-72", alt: "お客様の声4" },
    { id: "142-74", alt: "お客様の声5" },
    { id: "148-292", alt: "お客様の声6" },
    { id: "142-80", alt: "お客様の声7" },
    { id: "148-291", alt: "お客様の声8" },
    { id: "142-57", alt: "お客様の声9" },
    { id: "152-298", alt: "お客様の声10" },
    { id: "142-86", alt: "お客様の声11" },
    { id: "148-293", alt: "お客様の声12" },
  ];

  return (
    <div className="min-h-screen bg-white" style={{ fontFamily: "Inter, 'Noto Sans JP', sans-serif" }}>

      {/* ===== FV（ファーストビュー） ===== */}
      <div className="w-full flex justify-center bg-white">
        <div className="w-full max-w-[700px]">
          <img
            src={a("142-4")}
            alt="美VARI Beauty Salon 四条烏丸整体院"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* ===== CTA #1 ===== */}
      <CTASection />

      {/* ===== B/A実績セクション ===== */}
      <div className="w-full bg-white py-4">
        <div className="max-w-[700px] mx-auto px-4 flex flex-col gap-10">
          {(["142-19", "142-21", "142-23", "142-25", "142-27", "142-29", "142-31"] as const).map((id, i) => (
            <div key={i} className="w-full overflow-hidden">
              <img
                src={a(id)}
                alt={`ビフォーアフター実績 ${i + 1}`}
                className="w-full h-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* ===== CONCEPT セクション ===== */}
      <div className="w-full bg-white py-8 px-5">
        <div className="max-w-[700px] mx-auto">
          <div className="border-t border-neutral-200 mb-6" />
          <h2 className="text-[#f39f88] text-[28px] font-bold leading-snug mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
            CONCEPT<br />我慢しない、無理しないで自分らしく痩せる
          </h2>
          <p className="text-[#3a3a3a] text-base font-normal mb-4 leading-relaxed">
            本当はもう少しカラダを引き締めたい。理想のボディラインがある。でも…「筋トレはきついし、甘いものも食べたいし…」という女性の方へ。
          </p>
          <p className="text-[#3a3a3a] text-base font-normal mb-4 leading-relaxed">
            当店の我慢しないダイエットはいかがですか？「筋トレなし、無理な食事制限なし」なのにストレスなく痩せていく。その後もリバウンドしにくいカラダをずーっとキープしていく。
          </p>
          <p className="text-[#3a3a3a] text-base font-normal leading-relaxed">
            国家資格である柔道整復師。プロの資格を所有しているので、我慢しないダイエットが実現可能です。
          </p>
        </div>
      </div>

      {/* ===== 口コミ画像グリッド（Voice_S） ===== */}
      <div className="w-full bg-white py-4 px-5">
        <div className="max-w-[700px] mx-auto">
          <div className="grid grid-cols-4 gap-0.5">
            {reviewImages.map((img, i) => (
              <div key={i} className="overflow-hidden aspect-square">
                <img
                  src={a(img.id)}
                  alt={img.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center gap-2">
            <i className="fas fa-check-circle text-[#f39f88] text-xl flex-shrink-0"></i>
            <span className="text-[#736357] text-base font-normal">30代〜60代まで多くの女性がご利用しています</span>
          </div>
        </div>
      </div>

      {/* ===== 口コミセクション ===== */}
      <div className="w-full bg-white py-8 px-5">
        <div className="max-w-[700px] mx-auto">
          <div className="border-t border-neutral-200 mb-4" />
          <h2 className="text-[#f39f88] text-[28px] font-semibold mb-3" style={{ fontFamily: "Inter, sans-serif" }}>口コミ</h2>
          <h3 className="text-[#4b4f58] text-lg font-semibold mb-2" style={{ fontFamily: "Inter, sans-serif" }}>ホットペッパーの口コミをご覧ください</h3>
          <p className="text-[#736357] text-base font-normal mb-5 leading-relaxed">
            当店は整体サロンです。ホットペッパーで沢山の口コミを頂いていますのでご確認ください。
          </p>
          <div className="flex justify-center">
            <a
              href="https://beauty.hotpepper.jp/kr/slnH000752318/review/"
              className="inline-flex items-center justify-center w-[250px] h-10 bg-white rounded-lg border border-[#acacac] hover:bg-gray-50 transition-colors"
              style={{ textDecoration: "none" }}
            >
              <span className="text-[#898989] text-[17px] font-bold" style={{ fontFamily: "Inter, sans-serif" }}>口コミを見る ▼</span>
            </a>
          </div>
        </div>
      </div>

      {/* ===== ３つのこだわりセクション ===== */}
      <div className="w-full bg-white py-8 px-5">
        <div className="max-w-[700px] mx-auto">
          <div className="border-t border-neutral-200 mb-4" />
          <h2 className="text-[#f39f88] text-[28px] font-semibold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>３つのこだわり</h2>

          {/* こだわり01 */}
          <h3 className="text-[#4b4f58] text-lg font-semibold mb-3" style={{ fontFamily: "Inter, sans-serif" }}>01：個室のプライベート空間</h3>
          <div className="mb-4 overflow-hidden">
            <img src={a("142-105")} alt="個室のプライベート空間" className="w-full h-auto object-cover" />
          </div>
          <div className="mb-4 overflow-hidden">
            <img src={a("156-303")} alt="こだわりセクション" className="w-full h-auto object-cover" />
          </div>
          <p className="text-[#736357] text-base font-normal mb-8 leading-relaxed">
            プライベート空間になっております。多くの場合、お客様ひとりずつでの接遇です。<br />
            周りを気にせずに、なんでもご相談ください。
          </p>

          {/* こだわり02 */}
          <h3 className="text-[#4b4f58] text-lg font-semibold mb-3" style={{ fontFamily: "Inter, sans-serif" }}>02：おひとりおひとりに合わせた無理のないプランをご提案します</h3>
          <div className="mb-4 overflow-hidden">
            <img src={a("142-109")} alt="個別プラン提案" className="w-full h-auto object-cover" />
          </div>
          <p className="text-[#736357] text-base font-normal mb-8 leading-relaxed">
            カウンセリングではお身体の状態を聞かせて頂き、お悩みに沿って無理なく痩せるプランをご提案できます。
          </p>

          {/* こだわり03 */}
          <h3 className="text-[#4b4f58] text-lg font-semibold mb-3" style={{ fontFamily: "Inter, sans-serif" }}>03：ダイエットだけじゃない！全身美容整体も施します</h3>
          <div className="mb-4 overflow-hidden">
            <img src={a("142-113")} alt="全身美容整体" className="w-full h-auto object-cover" />
          </div>
          <p className="text-[#736357] text-base font-normal leading-relaxed">
            ダイエットはもちろんのこと、ストレートネック、反り腰、猫背、産後の骨盤矯正、小顔調整など、美しい姿勢改善もまるごと全部ご提供しています。痛みや疲れが取れて、痩せて見た目が良くなるって良いとは思いませんか？
          </p>
        </div>
      </div>

      {/* ===== スタッフ紹介セクション ===== */}
      <div className="w-full bg-white py-8 px-5">
        <div className="max-w-[700px] mx-auto">
          <div className="border-t border-neutral-200 mb-4" />
          <h2 className="text-[#f39f88] text-[28px] font-semibold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>スタッフ紹介</h2>

          {/* エステティシャン */}
          <h3 className="text-[#4b4f58] text-lg font-semibold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>エステティシャン：小川　葵</h3>
          <div className="flex justify-center mb-4">
            <div className="w-[177px] h-[236px] overflow-hidden">
              <img
                src={a("142-125")}
                alt="エステティシャン 小川葵"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="mb-4">
            <ListItem text="22歳" />
            <ListItem text="キャリア2年" />
            <ListItem text="エステティシャン" />
          </div>
          <p className="text-[#736357] text-base font-normal mb-8 leading-relaxed">
            「女性がキレイで自分らしくなれる美容整体」をご提供します。<br />
            女性特有のお悩みをお気軽にご相談ください。あなたのお悩みに寄り添います。<br />
            優しい施術とカウンセリングが、お客様から喜ばれております。
          </p>

          {/* 代表 */}
          <div className="border-t border-neutral-200 pt-6">
            <h3 className="text-[#4b4f58] text-lg font-semibold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>代表：阪東　繁樹</h3>
            <div className="flex justify-center mb-4">
              <div className="relative w-[185px] h-[185px] rounded-full overflow-hidden bg-[#d9d9d9]">
                <img
                  src={a("142-177")}
                  alt="代表 阪東繁樹"
                  className="absolute object-cover"
                  style={{ width: "213px", height: "284px", top: "-12px", left: "-14px" }}
                />
              </div>
            </div>
            <div className="mb-4">
              <ListItem text="41歳" />
              <ListItem text="キャリア20年" />
              <ListItem text="国家資格：柔道整復師・はり師・きゅう師所有" />
              <ListItem text="ダイエットエキスパート" />
            </div>
            <p className="text-[#736357] text-base font-normal leading-relaxed">
              整体サロンを運営していくなかで、女性の「痩せたい！でも無理したくない！」というリクエストにお答えしてきました。きっとあなたの願望も実現できると思います。ぜひ一度、「初回体験セッション」で当店の我慢しないダイエットコースがどのようなものか？を体験してください。
            </p>
          </div>
        </div>
      </div>

      {/* ===== 店舗情報セクション ===== */}
      <div className="w-full bg-white py-8 px-5">
        <div className="max-w-[700px] mx-auto">
          <div className="border-t border-neutral-200 mb-4" />
          <h2 className="text-[#f39f88] text-[32px] font-semibold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>店舗情報</h2>
          <div className="mb-5 overflow-hidden">
            <img src={a("142-181")} alt="店舗外観" className="w-full h-auto object-cover" />
          </div>
          <div className="mb-6">
            <ListItem text="営業時間：10時〜20時 (最終受付19時)" />
            <ListItem text="定休日：不定休" />
            <ListItem text="住所：京都府京都市中京区蛸薬師通烏丸西入橋弁慶町234 Mjp烏丸ビル3F 南東側" />
            <ListItem text="カードOK / 交通系IC / PayPay" />
          </div>
          {/* Googleマップ埋め込み */}
          <div className="w-full overflow-hidden rounded">
            <MapView
              className="w-full h-[400px]"
              initialCenter={{ lat: 35.0035, lng: 135.7587 }}
              initialZoom={16}
              onMapReady={(map) => {
                mapRef.current = map;
                const geocoder = new window.google.maps.Geocoder();
                geocoder.geocode(
                  { address: "京都府京都市中京区蛸薬師通烏丸西入橋弁慶町234 Mjp烏丸ビル 美VARI Beauty Salon" },
                  (results, status) => {
                    if (status === "OK" && results && results[0]) {
                      const location = results[0].geometry.location;
                      map.setCenter(location);
                      new window.google.maps.marker.AdvancedMarkerElement({
                        map,
                        position: location,
                        title: "美VARI Beauty Salon 四条烏丸整体院",
                      });
                    }
                  }
                );
              }}
            />
          </div>
        </div>
      </div>

      {/* ===== BOOK特典 ===== */}
      <div className="w-full bg-white py-8 px-5">
        <div className="max-w-[700px] mx-auto flex justify-center">
          <img
            src={a("142-235")}
            alt="BOOK特典"
            className="w-[301px] h-auto object-contain"
            style={{ transform: "rotate(3deg)" }}
          />
        </div>
      </div>

      {/* ===== CTA #2 ===== */}
      <CTASection />

      {/* ===== 当店のダイエットが成功する理由セクション ===== */}
      <div className="w-full bg-white py-8 px-5">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-[#f39f88] text-[32px] font-semibold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>当店のダイエットが成功する理由</h2>

          {/* 全体ボックス（outline） */}
          <div className="border-2 border-neutral-200 rounded p-5">
            {/* 理由1 */}
            <h3 className="text-[#f39f88] text-[26px] font-semibold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>理由１：太った理由を徹底分析</h3>
            <div className="flex justify-center mb-4">
              <img src={a("142-251")} alt="太った理由を徹底分析" className="w-[400px] max-w-full h-auto object-cover" />
            </div>
            <p className="text-[#736357] text-base font-normal mb-8 leading-relaxed">
              肥満DNA検査による自分のスーパーフード知ることができ、分子栄養学を用いて体質を考慮した効率的なダイエットメニューを作成します。
            </p>

            {/* 理由2 */}
            <h3 className="text-[#f39f88] text-[26px] font-semibold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>理由２：痩身整体で生涯太りにくい体質作り</h3>
            <div className="flex justify-center mb-4">
              <img src={a("142-256")} alt="痩身整体" className="w-[400px] max-w-full h-auto object-cover" />
            </div>
            <p className="text-[#736357] text-base font-normal mb-8 leading-relaxed">
              主に姿勢矯正と骨盤矯正を行なって、痩せやすい体づくりをしていきます。
            </p>

            {/* 理由3 */}
            <h3 className="text-[#f39f88] text-[26px] font-semibold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>理由３：マンツーマン食事サポート</h3>
            <div className="flex justify-center mb-4">
              <img src={a("142-261")} alt="マンツーマン食事サポート" className="w-[400px] max-w-full h-auto object-cover" />
            </div>
            <p className="text-[#736357] text-base font-normal mb-8 leading-relaxed">
              LINEでサポート！楽しく続く食習慣を形成していきます。
            </p>

            {/* 理由4 */}
            <h3 className="text-[#f39f88] text-[26px] font-semibold mb-4" style={{ fontFamily: "Inter, sans-serif" }}>理由4：国家資格の柔道整復師を所有。だから安心！</h3>
            <p className="text-[#736357] text-base font-normal mb-6 leading-relaxed">
              体の構造を知り尽くした、プロの整体師の証である「国家資格：柔道整復師」。<br />
              安心してダイエットを任せることができます。
            </p>

            {/* 免許画像 */}
            <div className="flex gap-1">
              <img src={a("142-280")} alt="柔道整復師免許" className="w-1/3 h-auto object-cover" />
              <img src={a("142-281")} alt="はり師免許" className="w-1/3 h-auto object-cover" />
              <img src={a("142-282")} alt="きゅう師免許" className="w-1/3 h-auto object-cover" />
            </div>
          </div>
        </div>
      </div>

      {/* ===== BOOK特典2（最下部） ===== */}
      <div className="w-full bg-white py-8 px-5">
        <div className="max-w-[700px] mx-auto flex justify-center">
          <img
            src={a("142-267")}
            alt="BOOK特典２"
            className="w-[301px] h-auto object-contain"
            style={{ transform: "rotate(3deg)" }}
          />
        </div>
      </div>

      {/* ===== CTA #3（最終） ===== */}
      <CTASection />

    </div>
  );
}
