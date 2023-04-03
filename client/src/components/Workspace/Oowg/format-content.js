//// banner
// <img src="/assets/images/banner.jpg" style="border-radius: 10px" alt="/assets/images/banner.jpg"/>
const banner = document.createElement("img");
banner.setAttribute("src", "/assets/images/banner.jpg");
banner.setAttribute("alt", "/assets/images/banner.jpg");
banner.setAttribute(
  "style",
  'border-radius: 10px" alt="/assets/images/banner.jpg'
);

//// button
// <button type="button" id="copy-button" class="blob">🔥🔥 Play 🔥🔥</button>
const button = document.createElement("button");
button.setAttribute("type", "button");
button.setAttribute("id", "copy-button");
button.setAttribute("class", "blob");
button.innerHTML = "🔥🔥 Play 🔥🔥";

//// table of contents
// <ol>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#bons-casino">💯 一般情報</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#login">🌐 ログイン</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#registration">🔥 登録</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#freespins">🎲 フリースピン</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#promocode">⚽ ボーナス</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#software">🏆 ソフトウェア</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#live">🎰 ライブ</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#products">💲 ブランド</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#mobile">💻 モバイル版</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#signup">📱 サインアップ</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#vip">💳 VIP</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#service">💬 サポート</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#tournament">💼 トーナメント</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#reviews">🔰 レビュー</a></li>
//   <li><a href="https://xn--lck0ae6f0c4g.xn--tckwe/#faq">❓ よくある質問</a></li>
// </ol>
const tableOfContents = document.createElement("ol");

//// table
// <table class="c-table">
//   <tbody>
//   <tr>
//     <td class="c-table__name">
//       <p>🔥 ウェブサイト</p>
//     </td>
//     <td>
//       <p><a href="https://xn--lck0ae6f0c4g.xn--tckwe/">ボンズカジノ.コム</a></p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>🎰 設立年</p>
//     </td>
//     <td>
//       <p>2020年</p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>📄 ライセンス</p>
//     </td>
//     <td>
//       <p>により提供され、ゲームライセンスにおいてAntillephone N.V.と合意しているキュラソーの法律に準じて運営されています。ゲーミングライセンス番号は8048/JAZ
//         2019-055です。</p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>🙌 会社のオーナー</p>
//     </td>
//     <td>
//       <p>NestlingCorn Limited</p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>🎲 ゲーム数</p>
//     </td>
//     <td>
//       <p>3000+</p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>🗺️ インターフェース言語</p>
//     </td>
//     <td>
//       <p>
//         ロシア語、ウクライナ語、英語、ドイツ語、スペイン語、イタリア語、アラビア語、ルーマニア語、ポルトガル語、スウェーデン語、ポーランド語、ノルウェー語、フィンランド語、ブルガリア語、日本語、中国語、トルコ語、アゼリ語、フランス語、リトアニア語、チェコ語、ギリシャ語、クロアチア語、セルビア語、ベトナム語、ウズベク語、グルジア語、タイ語、韓国語、ラトビア語、カザフ語、インドネシア語、スロベニア語、ペルシャ語、ヘブライ語、ヒンディー語、マレー語、アルバニア語、ベラルーシ語、アルメニア語、デンマーク語</p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>💵 口座通貨</p>
//     </td>
//     <td>
//       <p>USD, EUR, RUB, UAH, CAD, AUD, JPY, KZT, MDL, BYN, BTC, AED, ALL, AMD, AOA, AZN, BAM, BDT, BGN, BHD,
//         BIF, BOB, BRL, BWP, CDF, CHF, CLP, GHS, GMD, GNF, HKD, HRK, HTG, JOD, KES, KGS, KRW, KWD, MGA, MKD,
//         MMK, NAD, NGN, NOK, NPR, NZD, RON, RSD, RWF, SAR, SCR, SDG, SOS, SZL, THB, TJS, TMT, TND, TRY,
//         TWD</p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>🧑&zwj;💻 ソフトウェアプロバイダー</p>
//     </td>
//     <td>
//       <p>Microgaming, Quickspin, Evolution Gaming, ELK Studios, Playson, Red Tiger, Push Gaming, iSoftBet,
//         Pragmatic Play, Habanero, Genesis Gaming, 1x2 Gaming, Kalamba Games, Rabcat, Foxium, Big Time
//         Gaming, Booming Games, Thunderkick, EGT, Amatic, Betsoft, Endorphina, GameArt, PariPlay, Bgaming,
//         Igrosoft, Rival, Red Rake, Ezugi, Booongo, Genii, Iron Dog Studio, Tom Horn Gaming, Authentic
//         Gaming, Spinomenal, Blueprint Gaming, Realistic Games, Wazdan, Belatra, Evoplay, Platipus, Vivo
//         Gaming, Lucky Streak, Felix Gaming, Swintt, Oryx, August, Leap Gaming, Fantasma Games, Gamefish
//         Global, JFTW, Apollo Games, Mr.Slotty, BF Games, Gamomat, Pg Soft, Fugaso, Multislot, Spigo,
//         Worldmatch, Netgame, Ruby Play, Sa Gaming, Reelnrg, Bbin, Betixon, Evolution Slots, Espresso Games,
//         N2-Live, Noble, Portomaso Gaming, Radi8, VRCasino, Gamzix, Live Solutions, Up Games</p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>💳 入力方法</p>
//     </td>
//     <td>
//       <p>VISA, MasterCard, WebMoney, UzPay, PayTM Wallet, UPI, AirTM, HOTVouchers, GrataPay Vouchers, PayGiga,
//         Paytrust88, Hizli, Santander, Multibanco, Caixa, Bradesco, Banco de Brazil, Itau, Pay4Fun, Papara,
//         FastPay, Vcreditos, Flexepin, Trues USD, Nemo, Amigo, B-pay, BitShares, Ethereum Classic, Basic
//         Attention Token, OmiseGO, Chainlink, Paxos Standard Token, USD Coin, Tron, Stratis, QTUM, Verge,
//         Bitcoin Gold, DigiByte, Monero, Sticpay, Epay, TelePay, Zcash, Jeton Wallet, Piastrix, Dash, Tether,
//         Dogecoin, Boleto Bancario, Bitcoin Cash, MuchBetter, Litecoin, Ripple, Ethereum, ecoPayz, МИР,
//         Astropay</p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>💳 引き出し方法</p>
//     </td>
//     <td>
//       <p>Astropay, VISA, MasterCard, МИР, ecoPayz, Bitcoin, Ethereum, Ripple, Litecoin, Maestro, Bitcoin Cash,
//         Payeer, Dogecoin, Tether, Dash, NEM, Piastrix, Jeton Wallet, Zcash, Sticpay, Monero, DigiByte,
//         Bitcoin Gold, Verge, QTUM, Stratis, Tron, USD Coin, Paxos Standard Token, Chainlink, OmiseGO, Basic
//         Attention Token, Ethereum Classic, BitShares, B-pay, Trues USD, Sepa</p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>🎁 ボーナス</p>
//     </td>
//     <td>
//       <p>最初のデポジットで100％、100％リロード+ Wheel of Fortuneの5スピン、5％キャッシュバック</p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>💰 最低入金額</p>
//     </td>
//     <td>
//       <p>50 YEN</p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>💸 最小限の引き出し</p>
//     </td>
//     <td>
//       <p>100 YEN</p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>📱 モバイル版</p>
//     </td>
//     <td>
//       <p>Android, iOS, Windows</p>
//     </td>
//   </tr>
//   <tr>
//     <td class="c-table__name">
//       <p>💬 技術サポート</p>
//     </td>
//     <td>
//       <p>E-mail:&nbsp;support@bons.com</p>
//       <p>電話: ない</p>
//       <p>オンラインチャット</p>
//     </td>
//   </tr>
//   </tbody>
// </table>

//// FAQ
// <h2>FAQ</h2>
// <details>
//   <summary>Some summary/details can't hurt!</summary>
//   <p>Lorem ipsum dolor sit blah blah.</p>
// </details>
// <details>
//   <summary>Some summary/details can't hurt!</summary>
//   <p>Lorem ipsum dolor sit blah blah.</p>
// </details>
// <details>
//   <summary>Some summary/details can't hurt!</summary>
//   <p>Lorem ipsum dolor sit blah blah.</p>
// </details>
// <details>
//   <summary>Some summary/details can't hurt!</summary>
//   <p>Lorem ipsum dolor sit blah blah.</p>
// </details>

const faq = document.createElement("h2");
faq.innerHTML = "FAQ";

const addQA = () => {
  const details = document.createElement("details");
  const question = document.createElement("summary");
  const answer = document.createElement("p");
  question.innerHTML = "Some summary/details can't hurt!";
  answer.innerHTML = "Lorem ipsum dolor sit blah blah.";

  details.appendChild(question);
  details.appendChild(answer);
  faq.after(details);
};

//// updated
// <p><strong>最終更新日</strong>：<span style="text-decoration: underline;">2022-12-09</span></p>

const updated = document.createElement("p");
const updatedWord = document.createElement("strong");
updatedWord.innerHTML = "最終更新日";
const updatedDate = document.createElement("span");
updatedDate.setAttribute("style", "text-decoration: underline;");
updatedDate.innerHTML = "2022-12-09";
updated.appendChild(updatedWord);
updated.append(": ");
updated.appendChild(updatedDate);

const formatContent = (htmlContent) => {
  const parser = new DOMParser();
  const document = parser.parseFromString(htmlContent, "text/html");

  // create custom id's on headings

  [...document.getElementsByTagName("h1")].map((el, index) => {
    const heading = document.getElementsByTagName(el.tagName)[index];
    const myHeading = document.createElement(el.tagName);
    myHeading.setAttribute("id", "h1_" + (index + 1));
    myHeading.innerHTML = heading.innerText;
    heading.parentNode.replaceChild(myHeading, heading);
  });

  [...document.getElementsByTagName("h2")].map((el, index) => {
    const heading = document.getElementsByTagName(el.tagName)[index];
    const myHeading = document.createElement(el.tagName);
    myHeading.setAttribute("id", "h2_" + (index + 1));
    myHeading.innerHTML = heading.innerText;
    heading.parentNode.replaceChild(myHeading, heading);
    // push to table on contents
    // tableOfContentsData.push([heading.innerText, "h2_" + (index + 1)]);
    (() => {
      const tocItem = document.createElement("li");
      const a = document.createElement("a");
      a.innerHTML = "❓ " + heading.innerText;
      a.setAttribute("href", "#h2_" + (index + 1));
      tocItem.appendChild(a);
      tableOfContents.appendChild(tocItem);
    })();
  });

  const documentLength = document.getElementsByTagName("p").length;

  // add banner
  if (document.getElementsByTagName("h1")[0]) {
    document.getElementsByTagName("h1")[0].after(banner);
  }

  // add button
  if (document.getElementsByTagName("p")[0]) {
    document.getElementsByTagName("p")[0].after(button);
    document.getElementsByTagName("p")[1].after(tableOfContents);
  }

  // add updated
  document.getElementsByTagName("p")[documentLength - 1].after(updated);

  // add faq
  if (document.getElementsByTagName("p")[documentLength - 1]) {
    document.getElementsByTagName("p")[documentLength - 1].after(faq);
  }

  addQA();
  addQA();
  addQA();
  addQA();

  // console.log(document.body.innerHTML);
  // return htmlContent
  return document.body.innerHTML;
};

export default formatContent;
