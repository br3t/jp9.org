import formatContent from "./format-content.js";

const getAmp = (
  language,
  domainName,
  title,
  description,
  htmlContent,
  buttonLink,
  buttonText,
  faq
) => {
  const template = `<!doctype html>
<html ⚡ lang="${language}">
<head>
    <meta charset="utf-8">
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    <script async custom-element="amp-live-list" src="https://cdn.ampproject.org/v0/amp-live-list-0.1.js"></script>
    <link href='https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,400italic|Roboto+Mono:400,500|Montserrat:400,600,800;subset=cyrillic-ext' rel='stylesheet'/>
    <title>${title}</title>
    <meta name="description" content="${description}">
    <link rel="canonical" href="https://${domainName}/">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <style amp-boilerplate>body{-webkit-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-moz-animation:-amp-start 8s steps(1,end) 0s 1 normal both;-ms-animation:-amp-start 8s steps(1,end) 0s 1 normal both;animation:-amp-start 8s steps(1,end) 0s 1 normal both}@-webkit-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-moz-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-ms-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@-o-keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}@keyframes -amp-start{from{visibility:hidden}to{visibility:visible}}</style><noscript><style amp-boilerplate>body{-webkit-animation:none;-moz-animation:none;-ms-animation:none;animation:none}</style></noscript>
    <style amp-custom>
        body {
            font-family: 'Roboto', sans-serif;
        }
        header {
            padding: 1% 2% 2%;
            box-shadow: 0 0 3px 2px #ddd;
            margin-bottom: 10vh;
        }
        h1 {
            margin: .55em 0px 0px;
            font-size: 3rem;
        }
        h2 {
            color: #707070;
            font-size: 100%;
            margin: .45em 0px 0px;
        }
        amp-live-list {
            margin: 3em auto 4em;
            max-width: 800px;
            min-width: 260px;
        }
        amp-live-list h3 {
            font-size: 2.5rem;
            margin: 1em 15px .5em;
        }
        amp-live-list p {
            margin: 1em 15px 1em;
            font-size: 22px;
            color: #252525;
            line-height: 160%;
        }
        section p {
            font-weight: bold;
        }
        section {
            margin-bottom: 2em;
        }
        amp-social-share {
            margin-bottom: 1em;
            pointer-events: none
        }
        amp-social-share.rounded {
            border-radius: 50%;
            background-size: 60%;
            opacity: .9;
            margin: 0px 0px 1em 15px;
            transition: .25s
        }
        amp-social-share.rounded:hover {
            opacity: 1
        }
        footer {
            text-align: center;
            padding: 3.5% 2% 4.5%;
            background-color: #eee;
            color: #707070;
        }
        @media screen and (max-width: 680px) {
            header {
                box-shadow: none;
                padding: 1em 15px;
            }
            h1 {
                font-size: 2.5rem;
            }
            h2 {
                display: none;
            }
            amp-live-list h3 {
                font-size: 2rem;
            }
            amp-live-list p {
                font-size: 16px;
            }
            amp-social-share.rounded {
                margin-right: 0px;
            }
            amp-carousel {
                height: 200px
            }
            amp-carousel amp-img {
                width: 300px;
                height: 200px
            }
        }
    </style>
</head>
<body>
<!--<header>-->
<!--    <span>Гама казино - Официальный сайт</span>-->
<!--</header>-->
<amp-live-list
        layout="container"
        data-poll-interval="15000"
        data-max-items-per-page="5"
        id="amp-live-list-insert-blog">
    <button update on="tap:amp-live-list-insert-blog.update" class="ampstart-btn ml1 caps">You have updates</button>
    <div items>

        <div id="article2" data-sort-time="20181217115126">
            <div class="card blog">

<a href="${buttonLink}">
                <amp-img src="/assets/images/content/banner.jpg"
                         layout="responsive" width="600" height="80">
                </amp-img>
                </a>
${htmlContent}
</amp-live-list>
<footer>
\t© 2023 ${domainName} | All Rights Reserved.
</footer>
</body>
</html>`;
  // console.log(htmlContent.htmlContent);
  return template;
};

export default getAmp;
