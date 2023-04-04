import formatContent from "./format-content.js";

const getDemoData = () => {
  return {
    language: "en",
    domainName: "example.com",
    title: "Lorem Ipsum - All the facts - Lipsum generator",
    description:
      "Reference site about Lorem Ipsum, giving information on its origins, as well as a random Lipsum generator.",
    htmlContent: `<h1>Lorem Ipsum</h1>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dolor risus, dictum eu tellus sed, feugiat pretium purus. Praesent aliquet, augue in finibus volutpat, magna turpis ultrices dui, tempor viverra sapien nulla at metus. Aenean non ipsum libero. Cras venenatis diam eget luctus porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Sed id lectus porttitor, tempus risus sed, tempor velit. Nunc efficitur risus eget sollicitudin rutrum. Sed nisi libero, volutpat id nunc eu, malesuada cursus dolor. Vivamus aliquet hendrerit eros ut bibendum. Mauris tincidunt eros id dolor tempor vestibulum.</p>
<p>Fusce vitae tempus purus, sit amet fringilla nisl. Quisque ipsum neque, ultrices sit amet lectus vitae, sodales aliquam massa. Cras libero ipsum, commodo placerat nulla a, viverra posuere libero. Duis quis blandit libero, nec accumsan nisi. Curabitur tempor tincidunt ex sed volutpat. Pellentesque vitae nulla lorem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque convallis elit id dapibus molestie. Suspendisse at faucibus mauris, non tempor dolor.</p>
<p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Mauris lacinia nunc et risus rutrum ultrices. Nulla volutpat, sem a lacinia ultrices, leo purus egestas augue, nec lacinia nibh diam a neque. Phasellus massa nunc, semper vitae volutpat ac, lobortis sit amet lacus. Pellentesque non viverra erat. Nullam non enim tortor. Aliquam elit odio, tempor a orci a, pretium feugiat sem. Pellentesque eu mi sit amet mauris auctor iaculis. Quisque quis faucibus massa. Fusce quis mattis diam, sed egestas sem. Suspendisse diam sem, sollicitudin ut malesuada nec, tristique non metus. Aliquam sodales pellentesque arcu, eu finibus leo sollicitudin a. Etiam sed vestibulum felis. Nam facilisis ac neque sed commodo. Proin vel libero mauris. Phasellus tempor molestie justo sollicitudin vehicula.</p>
<p>Quisque augue lectus, dignissim sit amet mi eget, blandit accumsan diam. Praesent vitae consectetur quam. Vestibulum at lectus tempus, sodales tortor vulputate, consectetur quam. Aenean ut lobortis nibh. Donec orci est, tempor quis congue ut, vulputate id purus. In ut metus non nunc facilisis iaculis. Praesent condimentum sem vel quam sollicitudin viverra.</p>
<p>Maecenas iaculis cursus nulla, eget molestie lorem varius quis. Vivamus ac libero ac arcu luctus rhoncus at in quam. Aenean varius consequat tristique. Donec erat eros, convallis id arcu sed, efficitur scelerisque dui. Praesent ullamcorper quis justo vel congue. Maecenas a tempor odio. Etiam tempus augue at lacus dictum posuere.</p>
<p>In eu dolor in lacus sollicitudin dictum quis vitae ex. Integer bibendum mattis mauris, non fringilla tellus cursus id. Mauris in enim est. Donec gravida nisl purus, vitae posuere eros tincidunt eu. Pellentesque tempus est in mauris efficitur, quis sodales erat iaculis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in dictum libero, eu varius ante. Aliquam lobortis leo eros, nec iaculis odio elementum nec. Duis eget augue placerat, iaculis libero eget, ultricies mi.</p>
<p>Nullam nulla sapien, laoreet ut scelerisque id, vestibulum in massa. Ut convallis posuere leo sit amet aliquam. Maecenas quis aliquet elit, eleifend vestibulum enim. Nunc a sem metus. Cras rhoncus fringilla metus non consequat. Suspendisse quis fringilla augue. Curabitur ornare elit at augue sagittis, vitae dignissim mi ultricies. Nullam hendrerit consequat urna, in molestie ante aliquam quis. Nam eleifend sit amet nisl quis vulputate. Nullam pharetra ut dui sit amet porttitor. Quisque ut rhoncus justo, a placerat ligula.</p>
<p>Nam non semper libero, varius pretium risus. Donec sollicitudin diam in semper malesuada. Nunc nulla purus, accumsan ut dolor non, pharetra aliquet ante. Phasellus tincidunt enim in mauris maximus commodo. Cras in dictum dolor. Sed aliquet elementum leo, sit amet pellentesque eros dignissim eget. Ut iaculis turpis tempus, tristique ex mattis, scelerisque quam. Etiam eu mollis libero. Aenean ac rhoncus est, luctus suscipit turpis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Maecenas a tellus quis orci laoreet hendrerit quis vel diam. Etiam mollis leo eu dui sollicitudin, quis maximus augue gravida. Donec feugiat dignissim condimentum.</p>
<p>Integer bibendum dignissim quam eget porta. Curabitur mollis euismod maximus. Maecenas sit amet orci odio. Vestibulum dapibus non libero vitae congue. Pellentesque mollis varius odio quis finibus. Cras feugiat metus ac metus feugiat vehicula. Aenean non leo sagittis, vestibulum nibh dapibus, laoreet dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed magna justo, aliquet non quam euismod, posuere tempus nulla. Nam vulputate elit et mattis commodo. Integer et quam ac mi pharetra pulvinar ut et nibh. Nunc in quam aliquam, pharetra tortor vel, aliquam orci. Nunc facilisis aliquam nisl, non euismod odio commodo nec.</p>
<p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce a justo lectus. Morbi sodales porttitor maximus. In suscipit malesuada nisl, id varius ligula maximus sed. Vivamus dictum sed nibh in aliquet. Maecenas non sagittis elit, nec gravida lorem. Aliquam vulputate mollis justo ac pulvinar. In id quam pulvinar mi convallis molestie ut at ex. Phasellus lacinia nulla odio, dapibus sagittis justo tincidunt eget. Nunc finibus purus velit, sit amet pretium mi aliquet quis. Ut sit amet ante auctor, pulvinar orci eleifend, tempus erat.</p>
<p>Vestibulum porta nec augue vitae mattis. Maecenas dictum est volutpat purus consectetur pretium. Ut sem sem, condimentum eget elit nec, congue suscipit nisi. In tincidunt quis mi ultrices euismod. Nullam semper commodo felis, a scelerisque massa dictum consequat. Nulla feugiat vehicula lectus nec sodales. Etiam pulvinar neque in eros accumsan, non suscipit arcu venenatis. Ut vitae varius mauris. Cras rhoncus aliquam justo, id fermentum urna aliquam at. In eu metus maximus, egestas erat et, interdum ex. Donec dignissim augue eu ipsum viverra, mollis malesuada nibh semper. Sed quis iaculis felis. Suspendisse potenti. Ut at est diam.</p>
<p>Donec ultricies cursus dapibus. Fusce in est venenatis metus iaculis fermentum. Proin bibendum mi ac malesuada sollicitudin. Maecenas eleifend lectus sed venenatis sodales. Nullam gravida dolor non turpis lacinia, mattis placerat diam rutrum. Donec pretium tincidunt vestibulum. Phasellus mauris justo, eleifend id neque iaculis, vehicula tempus ipsum. Nam in justo arcu. Morbi iaculis sodales libero eget blandit. Praesent molestie vel odio non aliquam. Curabitur suscipit nunc id lectus semper porta. Aenean porta nec nunc id tempus. Nunc vehicula dapibus nulla sed malesuada. Vestibulum tempor orci eu nisi accumsan, in elementum nulla suscipit.</p>
<p>Quisque ut eleifend tellus. Integer finibus risus ipsum, iaculis posuere orci tincidunt bibendum. Nunc gravida porta diam, mollis feugiat enim porta id. Proin auctor vulputate sagittis. In vel vestibulum dolor. Cras in risus a odio dapibus porttitor ac sit amet nibh. Maecenas et magna eget magna ultrices suscipit. Duis sed mi arcu.</p>
<p>Morbi quis diam quis nisi viverra tempor nec sed ipsum. Ut lobortis, nunc sit amet tincidunt venenatis, metus sapien vehicula sem, vitae tincidunt arcu tortor at dolor. Nulla nisl justo, vestibulum non lacus vitae, tempus fermentum augue. Vivamus luctus eros urna, vitae consequat sem viverra in. Praesent suscipit tortor non commodo ornare. Phasellus et nibh in dolor tincidunt hendrerit id ut turpis. Vestibulum sit amet dui cursus, auctor dolor non, dictum ex. Vivamus cursus lectus elit, ac dignissim odio varius a. Vivamus varius lacus sit amet iaculis dapibus.</p>
<p>Nullam tempor placerat dolor sit amet sagittis. Morbi vitae venenatis sem. Phasellus urna nisl, pretium vitae nisl quis, sollicitudin elementum elit. In accumsan ipsum magna, sit amet rhoncus nulla sodales blandit. In ut quam augue. Vestibulum posuere, ligula ac tristique cursus, dui nisl tincidunt leo, in tincidunt risus nisi et metus. Maecenas consequat elementum pellentesque. In posuere lacus purus, ac elementum leo varius ut. Etiam venenatis ac mauris eu convallis. Morbi tincidunt est dui. Cras consectetur feugiat libero non elementum. Donec pulvinar, enim non fringilla porttitor, risus enim maximus dui, quis feugiat erat massa quis lectus. Duis erat nibh, gravida vitae sem nec, facilisis accumsan est. In hac habitasse platea dictumst. Integer et faucibus ligula.</p>`,
  };
};
const getWaterCss = async () => {
  let res = await fetch("/oowg/assets/styles/water.min.css");
  return await res.text();
};

const getCustomStyles = async () => {
  let res = await fetch("/oowg/assets/styles/style.css");
  return await res.text();
};

const generateHtmlTemplate = ({
  language,
  title,
  description,
  domainName,
  htmlContent,
  isDemo,
  contentImages,
}) => {
  return `<!DOCTYPE html>
<html lang="${language}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>${title}</title>
    ${
      description === domainName + " Website Description" || description === ""
        ? ""
        : '<meta name="description" content="' + description + '" />'
    }
    <link rel="canonical" href="https://${domainName}/" />
    <meta name="generator" content="OOWG 0.1"/>
</head>
<body>
<article>
    <!-- content with anchor id headings -->
  
    ${formatContent(htmlContent, isDemo, contentImages)}

    <!-- custom article ul, ol, tables -->
    <!-- custom <b> in sentences with keyword -->
    <!-- pluses and minuses -->

</article>

<footer>

    <small>Онлайн-домен www.gama.casino принадлежит и управляется Traflow Media N.V., зарегистрированной компанией с
        номером 156583, расположенной по адресу Abraham de Veerstraat 9 в Кюрасао. SOLVEXI LIMITED, зарегистрированная
        компания с номером HE 422235, находится по адресу Georgiou Gennadiou 10 в Лимассоле, Кипр 3041, а NETICSS LTD,
        зарегистрированная компания с номером 13237657, находится по адресу Suite 17020, 43 Bedford Street в Лондоне,
        Великобритания WC2E 9HA. Обе эти компании выступают в качестве представителей лицензированной организации в
        Европейском Союзе и Европейской экономической зоне. Traflow Media N.V. владеет лицензией № 365/JAZ Sublicense
        GLH-OCCHKTW0703052021.</small>

    <a href="#">Back to top ⬆</a>
</footer>

${
  isDemo
    ? `<link rel="stylesheet" href="${window.location.origin}/oowg/assets/styles/water.min.css">`
    : `<link rel="stylesheet" href="/assets/styles/water.min.css">`
}

${
  isDemo
    ? `<link rel="stylesheet" href="${window.location.origin}/oowg/assets/styles/style.css">`
    : `<link rel="stylesheet" href="/assets/styles/style.css">`
}
</body>
</html>`;
};

export { generateHtmlTemplate, getWaterCss, getCustomStyles, getDemoData };
