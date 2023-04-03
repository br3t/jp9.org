import { useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import HTMLString from "react-html-string";
import {
  generateHtmlTemplate,
  getWaterCss,
  getCustomStyles,
  getDemoData,
} from "../../../../public/oowg/functions.js";

export default function React() {
  const [language, setLanguage] = useState(getDemoData().language);
  const [domainName, setDomainName] = useState(getDemoData().domainName);
  const [title, setTitle] = useState(getDemoData().title);
  const [description, setDescription] = useState(getDemoData().description);
  const [htmlContent, setHtmlContent] = useState(getDemoData().htmlContent);

  const createWebsiteArchive = async () => {
    const zip = new JSZip();

    zip.file(
      "index.html",
      generateHtmlTemplate({
        language,
        domainName,
        title,
        description,
        htmlContent,
      })
    );
    zip.file("assets/styles/water.min.css", getWaterCss());
    zip.file("assets/styles/style.css", getCustomStyles());
    const img = zip.folder("assets/images");
    // img.file("image.jpg", imgData, { base64: true });

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
  const blobContent = new Blob(
    [
      generateHtmlTemplate({
        language,
        domainName,
        title,
        description,
        htmlContent,
      }),
    ],
    { type: "text/html" }
  );
  const iFrameSrc = URL.createObjectURL(blobContent);
  return (
    <>
      {/* Page Container */}
      <div
        id="page-container"
        className="flex flex-col mx-auto w-full min-h-screen bg-gray-100"
      >
        {/* Page Content */}
        <main id="page-content" className="flex flex-auto flex-col max-w-full">
          {/* Page Section */}
          <div className="container xl:max-w-7xl mx-auto p-4 lg:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
              {/* Main Content */}
              <div className="order-last lg:order-first lg:col-span-8 p-5 lg:p-6 bg-white shadow-sm rounded-lg dark:bg-gray-900">
                {/*

                ADD YOUR MAIN CONTENT BELOW

                */}

                {/* Placeholder */}

                {/*flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64 dark:bg-gray-800 dark:border-gray-700*/}
                <div className="">
                  <iframe
                    src={iFrameSrc}
                    frameBorder="0"
                    width={"100%"}
                    height={"1000"}
                  ></iframe>
                  {/*<HTMLString*/}
                  {/*  html={generateHtmlTemplate({*/}
                  {/*    language,*/}
                  {/*    domainName,*/}
                  {/*    title,*/}
                  {/*    description,*/}
                  {/*    htmlContent,*/}
                  {/*  })}*/}
                  {/*/>*/}
                </div>
                {/*

                ADD YOUR MAIN CONTENT ABOVE

                */}
              </div>
              {/* END Main Content */}

              {/* Side content */}
              <div
                className={`lg:block order-first lg:order-last lg:col-span-4 p-5 lg:p-6 bg-white shadow-sm rounded-lg dark:bg-gray-900`}
              >
                {/*

                ADD YOUR SIDE CONTENT BELOW

                */}

                {/* Placeholder */}

                {/*flex items-center justify-center rounded-xl bg-gray-50 border-2 border-dashed border-gray-200 text-gray-400 py-64 dark:bg-gray-800 dark:border-gray-700*/}
                <div className="">
                  {/*min-h-screen flex items-center justify-center overflow-hidden max-w-10xl mx-auto p-4 lg:p-8 w-full*/}
                  <div className="">
                    {/* Installation Section */}
                    {/*py-6 lg:py-0 w-full md:w-8/12 lg:w-6/12 xl:w-4/12*/}
                    <div className="">
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
                        <p className="text-gray-500">
                          One offer website generator
                        </p>
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
                              <strong>Configuration:</strong> Website
                              information
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
                                    onChange={(e) =>
                                      setDomainName(e.target.value)
                                    }
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
                                    onChange={(e) =>
                                      setDescription(e.target.value)
                                    }
                                  />
                                </div>
                                <div className="space-y-1">
                                  <label
                                    htmlFor="table_prefix"
                                    className="font-medium"
                                  >
                                    HTML content
                                  </label>
                                  <input
                                    className="block border border-gray-200 rounded px-5 py-3 leading-6 w-full focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                                    type="text"
                                    id="html_content"
                                    name="html_content"
                                    placeholder="HTML content (seo text)"
                                    onChange={(e) =>
                                      setHtmlContent(e.target.value)
                                    }
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
                </div>

                {/*

                ADD YOUR SIDE CONTENT ABOVE

                */}
              </div>
              {/* END Side content */}
            </div>
          </div>
          {/* END Page Section */}
        </main>
      </div>
    </>
  );
}
