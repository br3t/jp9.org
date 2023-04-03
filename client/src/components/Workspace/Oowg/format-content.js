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
  document.getElementsByTagName("h1")[0].after(banner);

  // add button
  document.getElementsByTagName("p")[0].after(button);
  document.getElementsByTagName("p")[1].after(tableOfContents);

  // console.log(document.body.innerHTML);
  // return htmlContent
  return document.body.innerHTML;
};

export default formatContent;
