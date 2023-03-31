import { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

export default function React() {
  const [language, setLanguage] = useState("en");
  const [domainName, setDomainName] = useState("example.com");
  const [title, setTitle] = useState(domainName + " Website");
  const [description, setDescription] = useState(
    domainName + " Website Description"
  );
  const [htmlContent, setHtmlContent] = useState(`<h1>This is a Heading</h1>
<p>This is a paragraph.</p>`);

  const htmlTemplate = `<!DOCTYPE html>
<html lang="${language}">
<head>
<title>${title}</title>
${
  description === domainName + " Website Description" || description === ""
    ? ""
    : '<meta name="description" content="' + description + '" />'
}
<link rel="canonical" href="https://${domainName}/" />
</head>
<body>
${htmlContent}
</body>
</html>`;

  const createHtmlPage = (html) => {
    // // const fileData = JSON.stringify(html);
    // const blob = new Blob([html], { type: "text/plain" });
    // const url = URL.createObjectURL(blob);
    // const link = document.createElement("a");
    // // link.download = "index.html";
    //
    // link.href = url;
    // link.target = "_blank";
    // link.click();
  };

  const imgData =
    "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";

  const createWebsiteArchive = () => {
    const zip = new JSZip();

    zip.file("index.html", htmlTemplate);

    const img = zip.folder("images");
    img.file("image.jpg", imgData, { base64: true });

    const configFile = {
      language,
      domainName,
      title,
      description,
      htmlContent,
    };

    zip.file("config.json", JSON.stringify(configFile));

    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      saveAs(content, domainName + ".zip");
    });
  };

  return (
    <>
      {/* Page Container */}
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen bg-gray-100"
      >
        {/* Page Content */}
        <main id="page-content" className="flex flex-auto flex-col max-w-full">
          <div className="min-h-screen flex items-center justify-center overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full">
            {/* Installation Section */}
            <div className="py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12">
              {/* Logo */}
              <div className="mb-8 text-center">
                <h1 className="text-4xl font-bold inline-flex items-center mb-1 space-x-3">
                  <svg
                    className="hi-solid hi-cube-transparent inline-block w-8 h-8 text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M9.504 1.132a1 1 0 01.992 0l1.75 1a1 1 0 11-.992 1.736L10 3.152l-1.254.716a1 1 0 11-.992-1.736l1.75-1zM5.618 4.504a1 1 0 01-.372 1.364L5.016 6l.23.132a1 1 0 11-.992 1.736L4 7.723V8a1 1 0 01-2 0V6a.996.996 0 01.52-.878l1.734-.99a1 1 0 011.364.372zm8.764 0a1 1 0 011.364-.372l1.733.99A1.002 1.002 0 0118 6v2a1 1 0 11-2 0v-.277l-.254.145a1 1 0 11-.992-1.736l.23-.132-.23-.132a1 1 0 01-.372-1.364zm-7 4a1 1 0 011.364-.372L10 8.848l1.254-.716a1 1 0 11.992 1.736L11 10.58V12a1 1 0 11-2 0v-1.42l-1.246-.712a1 1 0 01-.372-1.364zM3 11a1 1 0 011 1v1.42l1.246.712a1 1 0 11-.992 1.736l-1.75-1A1 1 0 012 14v-2a1 1 0 011-1zm14 0a1 1 0 011 1v2a1 1 0 01-.504.868l-1.75 1a1 1 0 11-.992-1.736L16 13.42V12a1 1 0 011-1zm-9.618 5.504a1 1 0 011.364-.372l.254.145V16a1 1 0 112 0v.277l.254-.145a1 1 0 11.992 1.736l-1.735.992a.995.995 0 01-1.022 0l-1.735-.992a1 1 0 01-.372-1.364z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>OOWG</span>
                </h1>
                <p className="text-gray-500">One offer website generator</p>
              </div>
              {/* END Logo */}

              {/* Installation Form */}
              <div className="relative">
                <div className="pattern-dots-md text-gray-300 absolute top-0 right-0 left-0 h-64 transform translate-x-16 translate-y-32" />
                <div className="pattern-dots-md text-gray-300 absolute bottom-0 right-0 left-0 h-64 transform -translate-x-16 -translate-y-32" />
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    createWebsiteArchive();
                  }}
                >
                  <div className="flex flex-col rounded shadow-sm bg-white overflow-hidden relative">
                    <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                      <strong>Configuration:</strong> Website information
                    </div>
                    <div className="p-5 lg:p-6 grow w-full">
                      <div className="sm:p-5 lg:px-10 lg:py-9 space-y-6">
                        <div className="space-y-1">
                          <label htmlFor="name" className="font-medium">
                            Website Language
                          </label>
                          <input
                            className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            type="text"
                            id="website_language"
                            name="website_language"
                            placeholder="en"
                            onChange={(e) => {
                              setLanguage(e.target.value);
                            }}
                          />
                          <p className="text-sm text-gray-500 underline underline-offset-1">
                            <a href="https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes">
                              ISO 3166-1 alpha-2
                            </a>
                          </p>
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="host" className="font-medium">
                            Domain Name
                          </label>
                          <input
                            className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            type="text"
                            id="domain_name"
                            name="domain_name"
                            onChange={(e) => setDomainName(e.target.value)}
                            placeholder="example.com"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                      <strong>SEO params:</strong> Meta
                    </div>
                    <div className="p-5 lg:p-6 grow w-full">
                      <div className="sm:p-5 lg:px-10 lg:py-9 space-y-6">
                        <div className="space-y-1">
                          <label htmlFor="name" className="font-medium">
                            Title
                          </label>
                          <input
                            className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            type="text"
                            id="seo_title"
                            name="seo_title"
                            placeholder="SEO title"
                            onChange={(e) => setTitle(e.target.value)}
                          />
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="host" className="font-medium">
                            Description
                          </label>
                          <input
                            className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            type="text"
                            id="seo_description"
                            name="seo_description"
                            placeholder="SEO description"
                            onChange={(e) => setDescription(e.target.value)}
                          />
                        </div>
                        <div className="space-y-1">
                          <label htmlFor="table_prefix" className="font-medium">
                            HTML content
                          </label>
                          <input
                            className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                            type="text"
                            id="html_content"
                            name="html_content"
                            placeholder="HTML content (seo text)"
                            onChange={(e) => setHtmlContent(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                      <strong>Options:</strong> AMP, Images
                    </div>
                    <div className="p-5 lg:p-6 grow w-full">
                      <div className="sm:p-5 lg:px-10 lg:py-9 space-y-6">
                        {/* Form Switches: With Labels and Description */}
                        <div className="space-y-6">
                          <div className="space-x-2">
                            <div className="flex justify-between items-center space-x-3">
                              <label
                                htmlFor="switch1"
                                className="font-medium leading-relaxed"
                              >
                                AMP
                                <span className="block text-sm text-gray-500">
                                  Android Mobile Pages for Google
                                </span>
                              </label>
                              <input
                                type="checkbox"
                                id="switch1"
                                name="switch1"
                                className="form-switch transition-all duration-150 ease-out rounded-full h-7 w-12 text-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                              />
                            </div>
                          </div>
                        </div>
                        {/* END Form Switches: With Labels and Description */}
                      </div>
                    </div>
                    <div className="py-4 px-5 lg:px-6 w-full text-center bg-gray-50">
                      <button
                        type="submit"
                        className="inline-flex justify-center items-center space-x-2 rounded border font-semibold focus:outline-none w-full px-4 py-3 leading-6 border-blue-700 bg-blue-700 text-white hover:text-white hover:bg-blue-800 hover:border-blue-800 focus:ring focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-700 active:border-blue-700"
                      >
                        Generate & Download
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* END Installation Form */}
            </div>
            {/* END Installation Section */}
          </div>
        </main>
      </div>
    </>
  );
}
